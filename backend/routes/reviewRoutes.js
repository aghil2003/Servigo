import express from "express";
const RoutesReview=express.Router();
import {addReview,getReview} from "../controllers/reviewController.js"

RoutesReview.post("/review",addReview);
RoutesReview.get("/review",getReview);

export default RoutesReview;