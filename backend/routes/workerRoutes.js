// import express from "express";
// import Worker from "../model/Worker";
// const RoutesWorker= express.Router();

// RoutesWorker.post("/worker",async(req ,res)=>{
//     try {
//         const{username,email,password,photo ,WorkeField,location}=req.body;
//          const worker = new Worker({ username,email,password,photo ,WorkeField,location });
//                         await worker.save();
//                         res.status(201).json({ message: 'worker added', worker});
//                         console.log("data saved")

//     } catch (error) {
//         console.log(error)
//     }
// });



// export default RoutesWorker;

import express from "express";
import Worker from "../model/Worker.js";

const RoutesWorker = express.Router();

RoutesWorker.post("/worker", async (req, res) => {
  try {
    console.log(req.body,"body")
    const { username, email, password, photo, WorkeField, location } = req.body;

    if (!username || !email || !password || !WorkeField || !location) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const worker =  Worker({ username, email, password, photo, WorkeField, location });
    await worker.save();

    res.status(201).json({ message: "Worker added", worker });
    console.log("Worker data saved");
  } catch (error) {
    console.error("Error saving worker:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
});

RoutesWorker.get("/worker/:service", async (req, res) => {
  try {
    const { service } = req.params; 

    if (!service) {
      return res.status(400).json({ message: "Please provide the service." });
    }

    const workers = await Worker.find({ WorkeField: service }); 

    res.status(200).json({ workers });
    console.log(workers);
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
});


export default RoutesWorker;
