// routes/eventRoutes.js
import express from "express";
import {
  postEvent,
  getEvents,
  registerForEvent,
} from "../controller/EventController.js";

const router = express.Router();

router.post("/post", postEvent);
router.get("/", getEvents);
router.post("/:eventId/register", registerForEvent);

export default router;
