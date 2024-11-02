import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const registerOrganizer = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log("Registration attempt for email:", email);

  try {
    const existingUser = await User.findOne({ email, role: "organizer" });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return res.status(400).json({ message: "Organizer already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      password,
      role: "organizer",
    });

    console.log("Attempting to save new user...");
    await newUser.save();
    console.log("User saved successfully");

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token,
      organizer: { id: newUser._id, fullName: newUser.fullName },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const loginOrganizer = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt for email:", email);

  try {
    const user = await User.findOne({ email, role: "organizer" });
    if (!user) {
      console.log("No user found with email:", email);
      return res.status(404).json({ message: "Organizer not found" });
    }
    console.log("User found:", user._id);

    // Add debugging for password comparison
    console.log("Attempting password comparison...");
    const isMatch = await user.comparePassword(password);
    console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      console.log("Password match failed");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login successful for user:", user._id);
    res.status(200).json({
      token,
      organizer: { id: user._id, fullName: user.fullName },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
