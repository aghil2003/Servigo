
import express from "express";
const RoutesWorker = express.Router();
import {addWorker,serviceWorker,searchWorker} from "../controllers/workerController.js"

RoutesWorker.post("/worker",addWorker );

RoutesWorker.get("/worker/:service",serviceWorker );

RoutesWorker.get("/worker/:service/:search",searchWorker );


export default RoutesWorker;
