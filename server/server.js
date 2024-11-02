// server.js
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import organizerRoutes from "./routes/UserRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// auth routes
app.use("/api/auth", authRoutes);

// student routes
app.use("/api/students", studentRoutes);

//event routes
app.use("/api/events", eventRoutes);

//Organizer routes
app.use("/api/organizer", organizerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
