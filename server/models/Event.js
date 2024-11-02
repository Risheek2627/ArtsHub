import mongoose from "mongoose";

// Registration Schema to store student registrations for events
const RegistrationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  eventId: {
    // Add eventId here
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

// Main Event Schema
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  registrations: [RegistrationSchema], // Store registered students here
});

// Export the Event model
const Event = mongoose.model("Event", EventSchema);
export default Event;
