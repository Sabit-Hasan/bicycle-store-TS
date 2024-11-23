import { TBicycle } from "./bicycle.interface";
import Bicycle from "./bicycle.model"


// create bicycle
const createBicycleService = async (bicycleInfo: TBicycle) => {
    try {
        const bicycleData = await Bicycle.create(bicycleInfo);
        return bicycleData;
    } catch (error) {
        throw new Error(`Error creating bicycle: ${error}`);
    }
}

// get bicycle
const getBicycleService = async (searchTerm: string) => {

    try {
        // search filter using or operator
        const filter: Record<string, unknown> = {};

        if (searchTerm) {
            const searchRegex = new RegExp(searchTerm, "i");
            filter.$or = [
                { name: searchRegex },
                { brand: searchRegex },
                { type: searchRegex },
            ];
        }

        const bicycles = await Bicycle.find(filter);
        return bicycles;
    } catch (error) {
        console.log(`Error getting bicycles: ${error}`);
    }
};

// get bicycle by id
const getBicycleByIdService = async (productId: string) => {
    try {
        const bicycle = await Bicycle.findById(productId);
        return bicycle;
    } catch (error) {
        console.log(`Error getting bicycle by ID: ${error}`);
    }
};

// update bicycle data
const updateBicycleService = async (productId: string, bicycleInfo: TBicycle) => {
    try {
        const updatedBicycle = await Bicycle.findByIdAndUpdate(productId, { ...bicycleInfo }, { new: true });
        return updatedBicycle;
    } catch (error) {
        console.error("Error updating bicycle:", error);
    }
}

// delete bicycle
const deleteBicycleService = async (productId: string) => {
    try {
        const deletedBicycle = await Bicycle.findByIdAndDelete(productId);
        return deletedBicycle;
    } catch (error) {
        console.error("Error deleting bicycle:", error);
    }
}


export const bicycleService = {
    createBicycleService,
    getBicycleService,
    getBicycleByIdService,
    updateBicycleService,
    deleteBicycleService
}