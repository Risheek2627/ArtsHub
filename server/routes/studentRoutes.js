// routes/studentRoutes.js
import express from "express";
import {
  getStudentProfile,
  registerStudent,
  getRegisteredEvents,
} from "../controller/studentController.js";

const router = express.Router();

router.get("/:studentId", getStudentProfile);
router.post("/register", registerStudent);
router.get("/:studentId/registeredEvents", getRegisteredEvents); // New endpoint

export default router;
