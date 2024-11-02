// controllers/eventController.js
import Event from "../models/Event.js";

export const postEvent = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, dateTime, location, organizerId } = req.body;

    const newEvent = new Event({
      title,
      description,
      dateTime,
      location,
      organizerId,
    });
    await newEvent.save();
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

export const registerForEvent = async (req, res) => {
  try {
    const { studentId, name, email } = req.body;
    const eventId = req.params.eventId; // Get eventId from request parameters

    if (!eventId || !studentId) {
      return res.status(400).json({ error: "EventID or StudentID is missing" });
    }

    const studentObjectId = mongoose.Types.ObjectId(studentId);

    console.log("EventID", eventId);
    console.log("Student ID", studentId);

    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the student is already registered
    const alreadyRegistered = event.registrations.some(
      (reg) => reg.studentId.toString() === studentId
    );
    if (alreadyRegistered) {
      return res
        .status(400)
        .json({ message: "Student already registered for this event" });
    }

    // Add the registration to the event
    event.registrations.push({ studentId, name, email, eventId });
    await event.save();

    res.status(201).json({ message: "Successfully registered for the event" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering for event", error });
  }
};
