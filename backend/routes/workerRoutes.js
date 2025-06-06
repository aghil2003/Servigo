
import express from "express";
const RoutesWorker = express.Router();
import {addWorker,serviceWorker} from "../controllers/workerController.js"

RoutesWorker.post("/worker",addWorker );

RoutesWorker.get("/worker/:service",serviceWorker );


export default RoutesWorker;
