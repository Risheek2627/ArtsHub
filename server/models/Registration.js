// models/Registration.js
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
});

export default mongoose.model("Registration", registrationSchema);
