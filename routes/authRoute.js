// imports
import express from "express";
import { registerController } from "../controllers/authController.js";

// router object
const router = express.Router();

// routes

// REISTER || POST
router.post("/register", registerController);

//exports
export default router;
