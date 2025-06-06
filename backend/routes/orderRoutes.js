import express from "express";
const RoutesOrder= express.Router();
import {orderadd,orderget} from "../controllers/orderController.js"

RoutesOrder.post("/order",orderadd);

RoutesOrder.get("/order",orderget);

export default RoutesOrder;