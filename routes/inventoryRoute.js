import express from 'express'
import {
  createInventoryController,
  getInventoryController,
} from "../controllers/inventoryController.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router()

// routes
// ADD INVENTORY RECORD || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET INVENTORY RECORDS || GET
router.get("/get-inventory", authMiddleware, getInventoryController);

export default router;