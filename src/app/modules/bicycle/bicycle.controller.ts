import { Request, Response } from "express";
import { bicycleService } from "./bicycle.service";
import bicycleValidationSchema from "./bicycle.zodValidation";

// create bicycle
const createBicycleController = async (req: Request, res: Response) => {
    try {
        const bicycleInfo = req.body;

        const validatedData = await bicycleValidationSchema.parseAsync(bicycleInfo);
        const bicycleData = await bicycleService.createBicycleService(validatedData);

        res.status(201).json({
            message: "Bicycle created successfully",
            success: true,
            error: false,
            data: bicycleData
        });
    } catch (error) {
        res.status(400).json({
            message: "Bicycle creation failed",
            success: false,
            error: true,
            data: null,
            stack: (error as { stack: string }).stack
        });
    }
};

// get all bicycle
const getAllBicyclesController = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;

        const search = typeof searchTerm === "string" ? searchTerm : "";

        const bicycles = await bicycleService.getBicycleService(search);

        res.status(200).json({
            message: "Bicycles retrieved successfully",
            status: true,
            error: false,
            data: bicycles,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve bicycles",
            status: false,
            error: true,
            stack: (error as { stack: string }).stack
        });
    }
};

// get bicycle by id
const getBicycleByIdController = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const bicycle = await bicycleService.getBicycleByIdService(productId);

        if (!bicycle) {
            res.status(404).json({
                message: "Bicycle not found",
                status: false,
                error: true,
                data: null,
            });
        }

        res.status(200).json({
            message: "Bicycle retrieved successfully",
            status: true,
            error: false,
            data: bicycle
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve bicycles",
            status: false,
            error: true,
            stack: (error as { stack: string }).stack
        });
    }
};

// update bicycle
const updateBicycleController = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const bicycleInfo = req.body;

        const bicycle = await bicycleService.getBicycleByIdService(productId);

        if (!bicycle) {
            res.status(404).json({
                message: "Bicycle not found",
                status: false,
                error: true,
                data: null,
            });
        }

        const updatedBicycle = await bicycleService.updateBicycleService(productId, bicycleInfo);

        res.status(200).json({
            message: "Bicycle updated successfully",
            status: true,
            error: false,
            data: updatedBicycle
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update bicycle",
            status: false,
            error: true,
            stack: (error as { stack: string }).stack
        })
    }
}

// delete bicycle
const deleteBicycleController = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const deletedBicycle = await bicycleService.deleteBicycleService(productId);

        if (!deletedBicycle) {
            res.status(404).json({
                message: "Bicycle not found",
                status: false,
                error: true,
                data: null,
            });
        }

        res.status(200).json({
            message: "Bicycle deleted successfully",
            status: true,
            error: false,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete bicycle",
            status: false,
            error: true,
            stack: (error as { stack: string }).stack
        })
    }
}

export const bicycleController = {
    createBicycleController,
    getAllBicyclesController,
    getBicycleByIdController,
    updateBicycleController,
    deleteBicycleController
}