import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.error("Mongodb falied to connect", error.message);
    process.exit(1);
  }
};

export default connectDB;
