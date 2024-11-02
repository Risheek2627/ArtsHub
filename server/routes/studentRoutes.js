// routes/studentRoutes.js
import express from "express";
import {
  getStudentProfile,
  registerStudent,
} from "../controller/studentController.js";

const router = express.Router();

router.get("/:studentId", getStudentProfile);
router.post("/register", registerStudent);

export default router;
