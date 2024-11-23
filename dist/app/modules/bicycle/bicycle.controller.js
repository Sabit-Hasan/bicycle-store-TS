"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleController = void 0;
const bicycle_service_1 = require("./bicycle.service");
const bicycle_zodValidation_1 = __importDefault(require("./bicycle.zodValidation"));
// create bicycle
const createBicycleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycleInfo = req.body;
        const validatedData = yield bicycle_zodValidation_1.default.parseAsync(bicycleInfo);
        const bicycleData = yield bicycle_service_1.bicycleService.createBicycleService(validatedData);
        res.status(201).json({
            message: "Bicycle created successfully",
            success: true,
            error: false,
            data: bicycleData
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Bicycle creation failed",
            success: false,
            error: true,
            data: null,
            stack: error.stack
        });
    }
});
// get all bicycle
const getAllBicyclesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const search = typeof searchTerm === "string" ? searchTerm : "";
        const bicycles = yield bicycle_service_1.bicycleService.getBicycleService(search);
        res.status(200).json({
            message: "Bicycles retrieved successfully",
            status: true,
            error: false,
            data: bicycles,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to retrieve bicycles",
            status: false,
            error: true,
            stack: error.stack
        });
    }
});
// get bicycle by id
const getBicycleByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const bicycle = yield bicycle_service_1.bicycleService.getBicycleByIdService(productId);
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to retrieve bicycles",
            status: false,
            error: true,
            stack: error.stack
        });
    }
});
// update bicycle
const updateBicycleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const bicycleInfo = req.body;
        const bicycle = yield bicycle_service_1.bicycleService.getBicycleByIdService(productId);
        if (!bicycle) {
            res.status(404).json({
                message: "Bicycle not found",
                status: false,
                error: true,
                data: null,
            });
        }
        const updatedBicycle = yield bicycle_service_1.bicycleService.updateBicycleService(productId, bicycleInfo);
        res.status(200).json({
            message: "Bicycle updated successfully",
            status: true,
            error: false,
            data: updatedBicycle
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update bicycle",
            status: false,
            error: true,
            stack: error.stack
        });
    }
});
// delete bicycle
const deleteBicycleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedBicycle = yield bicycle_service_1.bicycleService.deleteBicycleService(productId);
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete bicycle",
            status: false,
            error: true,
            stack: error.stack
        });
    }
});
exports.bicycleController = {
    createBicycleController,
    getAllBicyclesController,
    getBicycleByIdController,
    updateBicycleController,
    deleteBicycleController
};
