// routes/auth.js
import express from "express";
import {
  registerOrganizer,
  loginOrganizer,
} from "../controller/UserController.js";

const router = express.Router();

router.post("/login", loginOrganizer);
router.post("/register", registerOrganizer);

export default router;
