// controllers/authController.js
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
const registerStudent = async (req, res) => {
  const { fullName, email, password, institution, interests } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
      fullName,
      email,
      password: hashedPassword,
      institution,
      interests,
    });

    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering student", error });
  }
};

// Login
const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ message: "Student not found" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, student, data: "Login successfull" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

export { registerStudent, loginStudent };
