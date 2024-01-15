import express from "express";
import {
  createTour,
  getAllTour,
  deleteTour,
  getSingleTour,
  updateTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.js";

import { verifyAdmin } from "../utils/VerifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);
//update  tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin, deleteTour);
//get single tour
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
//get featured Tours
router.get("/search/getFeaturedTours", getFeaturedTour);
//get Tour Count
router.get("/search/getTourCount", getTourCount);

export default router;
