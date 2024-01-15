import express from "express";
import {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

//create new User
router.post("/", verifyUser, createUser);
//update  User
router.put("/:id", verifyUser, updateUser);
//delete User
router.delete("/:id", deleteUser);
//get single User
router.get("/:id", verifyUser, getSingleUser);
//get all User
router.get("/", verifyAdmin, getAllUser);

export default router;
