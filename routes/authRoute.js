// imports
import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

// routes

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//exports
export default router;
