import express from "express";
const RoutesData= express.Router();
// import weeklyData from "../models/weeklyData.js";
// import MonthlyData from "../models/MonthlyData.js";
// import yearlyData from "../models/yearlyData.js";
import {weeklyDataForGraph,monthDataForGraph,yearDataForGraph} from "../controllers/adminController.js"


RoutesData.get("/week",weeklyDataForGraph)
RoutesData.get("/month",monthDataForGraph)
RoutesData.get("/year",yearDataForGraph)

// RoutesData.post("/weekly",async(req,res)=>{
//     try {
//         const{day,income,jobs,coustomres}=req.body;
//          const weeklydata = new weeklyData({ day,income,jobs,coustomres });
//                 await weeklydata.save();
//                 res.status(201).json({ message: 'weeklyData created', weeklydata: weeklyData });
//                 console.log("data saved")
//     } catch (error) {
//         console.log(error)
//     }
// })

// RoutesData.post("/monthly",async(req,res)=>{
//     try {
//         const{month,income,jobs,coustomres}=req.body;
//          const monthlydata = new  MonthlyData({ day,income,jobs,coustomres });
//                 await monthlydata.save();
//                 res.status(201).json({ message: 'monthlydata created', monthlydata:  MonthlyData });
//                 console.log("data saved")
//     } catch (error) {
        
//     }
// })


// RoutesData.post("/yearly",async(req,res)=>{
//     try {
//         const{year,income,jobs,coustomres}=req.body;
//          const yearlydata = new yearlyData({ year,income,jobs,coustomres });
//                 await yearlydata.save();
//                 res.status(201).json({ message: 'yearlyData created', yearlydata: yearlyData });
//                 console.log("data saved")
//     } catch (error) {
        
//     }
// })


export default RoutesData;