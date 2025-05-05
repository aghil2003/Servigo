import express from "express";
import Order from "../model/order.js";
const RoutesOrder= express.Router();

RoutesOrder.post("/order",async(req ,res)=>{
    try {
        const{state,amount,customer,date,services}=req.body;
         const order = new Order({ state,amount,customer,date,services });
                        await order.save();
                        res.status(201).json({ message: 'order created', order});
                        console.log("data saved")

    } catch (error) {
        console.log(error)
    }
});

RoutesOrder.get("/order",async(req ,res)=>{
    try {
         const order =  await Order.find();
         res.status(201).json({ message: 'order created', order});
         console.log("data saved")
    } catch (error) {
        console.log(error)
    }
});

export default RoutesOrder;