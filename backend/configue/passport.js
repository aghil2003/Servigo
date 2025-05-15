// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/User");
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import googleUser from "../model/user.js"; // Add `.js` for ESM compatibility
import dotenv from 'dotenv';
dotenv.config(); 

export default function configurePassport (passport){
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
,
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await googleUser.findOne({ googleId: profile.id });
        if (existingUser) return done(null, existingUser);

        const newUser = await googleUser.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
        });
        return done(null, newUser);
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
