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
exports.bicycleService = void 0;
const bicycle_model_1 = __importDefault(require("./bicycle.model"));
// create bicycle
const createBicycleService = (bicycleInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycleData = yield bicycle_model_1.default.create(bicycleInfo);
        return bicycleData;
    }
    catch (error) {
        throw new Error(`Error creating bicycle: ${error}`);
    }
});
// get bicycle
const getBicycleService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // search filter using or operator
        const filter = {};
        if (searchTerm) {
            const searchRegex = new RegExp(searchTerm, "i");
            filter.$or = [
                { name: searchRegex },
                { brand: searchRegex },
                { type: searchRegex },
            ];
        }
        const bicycles = yield bicycle_model_1.default.find(filter);
        return bicycles;
    }
    catch (error) {
        console.log(`Error getting bicycles: ${error}`);
    }
});
// get bicycle by id
const getBicycleByIdService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycle = yield bicycle_model_1.default.findById(productId);
        return bicycle;
    }
    catch (error) {
        console.log(`Error getting bicycle by ID: ${error}`);
    }
});
// update bicycle data
const updateBicycleService = (productId, bicycleInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBicycle = yield bicycle_model_1.default.findByIdAndUpdate(productId, Object.assign({}, bicycleInfo), { new: true });
        return updatedBicycle;
    }
    catch (error) {
        console.error("Error updating bicycle:", error);
    }
});
// delete bicycle
const deleteBicycleService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBicycle = yield bicycle_model_1.default.findByIdAndDelete(productId);
        return deletedBicycle;
    }
    catch (error) {
        console.error("Error deleting bicycle:", error);
    }
});
exports.bicycleService = {
    createBicycleService,
    getBicycleService,
    getBicycleByIdService,
    updateBicycleService,
    deleteBicycleService
};
