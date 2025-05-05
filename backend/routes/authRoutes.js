// import express from "express";
// const authRoute=express.Router();
// import User from "../models/user"


// authRoute.post("/user",async(req,res)=>{
//     try {
//         const {username,email}=req.body;
//         const newUser = new User({ username, email });
//         await newUser.save();
//         res.status(201).json({ message: 'User created', user: newUser });
//         console.log("data saved")
        
//     } catch (error) {
//         res.status(500).json({ error: err.message });
//     }
   
// })

// export default authRoute;