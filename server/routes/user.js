import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

export const router = express.Router();

// login

router.post("/login", loginUser => {

})

// signup

router.post("/signup", signupUser => {

})