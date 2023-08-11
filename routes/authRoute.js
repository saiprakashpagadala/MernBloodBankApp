// imports
import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routes

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// CURRENT USER || GET
router.get("/current-user", authMiddleware , currentUserController)

//exports
export default router;
