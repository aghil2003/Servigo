import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import RoutesAdmin from "./routes/adminRoutes.js"
import RoutesAuth from "./routes/authRoutes.js"
import RoutesData from "./routes/dataRoutes.js"
import RoutesOrder from "./routes/orderRoutes.js";
import RoutesReview from "./routes/reviewRoutes.js";
import RoutesWorker from "./routes/workerRoutes.js";
import RoutesAddress from "./routes/addressRoutes.js";
import RoutesBooking from "./routes/booking.js";
import connectToDatabas from "./configue/db.js";
import passport from 'passport';
import connectToPassport from "./configue/passport.js";
import session from "express-session";

const app=express();
dotenv.config ()
const port=process.env.PORT;
connectToDatabas();
connectToPassport(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));

// app.use("/",RoutesAdmin)
app.use("/",RoutesAuth)
app.use("/",RoutesData)
app.use("/",RoutesOrder)
app.use("/",RoutesReview)
app.use("/",RoutesWorker)
app.use("/",RoutesAddress)
app.use("/",RoutesBooking)




app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})




