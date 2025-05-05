import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import RoutesAdmin from "./routes/adminRoutes.js"
// import RoutesAuth from "./routes/authRoutes.js"
import RoutesData from "./routes/dataRoutes.js"
import RoutesOrder from "./routes/orderRoutes.js";
import RoutesReview from "./routes/reviewRoutes.js";
import connectToDatabas from "./configue/db.js"

const app=express();
dotenv.config ()
const port=process.env.PORT;
connectToDatabas();

// app.use(cors({
//     origin: "http://localhost:3000/", 
//     methods: "GET,POST,PUT,DELETE", 
//     credentials: true
//   }));
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));

// app.use("/",RoutesAdmin)
// app.use("/",RoutesAuth)
app.use("/",RoutesData)
app.use("/",RoutesOrder)
app.use("/",RoutesReview)



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})




