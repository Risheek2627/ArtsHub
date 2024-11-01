// models/Student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    institution: { type: String },
    interests: [String],
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
