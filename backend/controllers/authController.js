import User from "../model/user.js";
import Otp from "../model/otp.js"
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const transporter =nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS 
        }
    }
)

const sendOtp = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `Servigo <${process.env.EMAIL}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP Code is: ${otp}`,
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP. Try again.");
  }
};

export const register=async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Request body:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    let existingUser= await User.findOne ({email});
     if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }
    
   const hashedPassword = await bcrypt.hash(password, 10);
   const newUser = new User ({ username:name , email, password:hashedPassword });
    await newUser.save();

    const otp = crypto.randomInt(100000, 999999).toString();
    console.log("Generated OTP:", otp);

    await Otp.deleteOne({ userId: newUser._id });

    const userotp=new Otp({
      userId: newUser._id,
      email:newUser.email,
      otp,
      expiresAt: Date.now() + 60 * 1000, 
    });
    
    await userotp.save();

    const token = jwt.sign(
      { id: newUser._id, name: newUser.username, email: newUser.email, role:newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    await sendOtp(email, userotp.otp);

    return res.status(201).json({ message: "OTP sent to email. Verify to continue.", token });
  } catch (error) {
    console.error("Signup error:", error); 
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
}


export const verify = async (req, res) => {
  try {
    const { otp,email } = req.body;
    console.log(req.body)
   
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Log input
    console.log("Received:", { email, otp });

    // Find OTP by email
    const record = await Otp.findOne({ email });

    if (!record) {
      console.log("No OTP record found");
      return res.status(404).json({ message: "No OTP found for this email" });
    }

    console.log("DB OTP record:", record);

    // Check OTP match
    if (record.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Optionally: delete OTP after successful verification
    await Otp.deleteOne({ email });

    // Respond with success
    return res.status(200).json({ message: "OTP verified successfully" });

  } catch (error) {
    console.error("OTP Verification Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const Login=async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Request body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    let existingUser= await User.findOne ({email});
     if (!existingUser) {
      return res.status(400).json({ message: "User not exists. Please sign in." });
    }

    const token = jwt.sign(
      { id: existingUser._id, name: existingUser.username, email: existingUser.email, role:existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    return res.status(201).json({ message: "OTP sent to email. Verify to continue.", token });
  } catch (error) {
    console.error("Signup error:", error); 
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
}



