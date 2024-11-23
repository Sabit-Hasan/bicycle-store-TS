import express from "express";
import { bicycleController } from "./bicycle.controller";


const route = express.Router();

route.post("/create-bicycle", bicycleController.createBicycleController); // create bicycle
route.get("/", bicycleController.getAllBicyclesController); // get all bicycles
route.get("/:productId", bicycleController.getBicycleByIdController); // get bicycle by id
route.put("/:productId", bicycleController.updateBicycleController); // update bicycle
route.delete("/:productId", bicycleController.deleteBicycleController); // delete bicycle

const bicycleRoute = route;

export default bicycleRoute;