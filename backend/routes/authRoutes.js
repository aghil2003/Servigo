import express from "express";
const authRoute=express.Router();
import {register} from "../controllers/authController.js"
import { verify } from "../controllers/authController.js";
import { Login } from "../controllers/authController.js";
import passport from "passport";

authRoute.post("/user",register );
authRoute.post("/verify-otp",verify)
authRoute.post("/login",Login );

authRoute.get("/auth/google", passport.authenticate("google", { scope: ["profile","name", "email"] }));

// @route GET /auth/google/callback
authRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Redirect to frontend or dashboard after successful login
    res.redirect("http://localhost:3000/userdashboard");
  }
);

// @route GET /auth/logout
authRoute.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});


export default authRoute;