import express from "express";
const RoutesReview=express.Router();
import Review from "../model/review.js";

RoutesReview.post("/review",async(req ,res)=>{
    try {
        const {customer,avatar,rating,date}=req.body;
        const review = new Review({ customer,avatar,rating,date });
                            await order.save();
                            res.status(201).json({ message: 'review created', review: Review });
                            console.log("data saved")
    
        } catch (error) {
            console.log(error)
        }
});


RoutesReview.get("/review",async(req ,res)=>{
    try {
        const review = await Review.find();
        console.log(review )
        res.status(201).json({ message: 'review created', review});
        
    
        } catch (error) {
            console.log(error)
        }
});

export default RoutesReview;