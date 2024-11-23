"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const route = express_1.default.Router();
route.post("/create-bicycle", bicycle_controller_1.bicycleController.createBicycleController); // create bicycle
route.get("/", bicycle_controller_1.bicycleController.getAllBicyclesController); // get all bicycles
route.get("/:productId", bicycle_controller_1.bicycleController.getBicycleByIdController); // get bicycle by id
route.put("/:productId", bicycle_controller_1.bicycleController.updateBicycleController); // update bicycle
route.delete("/:productId", bicycle_controller_1.bicycleController.deleteBicycleController); // delete bicycle
const bicycleRoute = route;
exports.default = bicycleRoute;
