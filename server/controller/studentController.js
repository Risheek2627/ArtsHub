// controllers/studentController.js
import Student from "../models/Student.js";

export const getStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate(
      "registeredEvents"
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student profile", error });
  }
};

export const registerStudent = async (req, res) => {
  try {
    const { fullName, password, institution, email, interests } = req.body;
    const newStudent = new Student({
      fullName,
      password,
      institution,
      email,
      interests,
    });
    await newStudent.save();
    res.status(201).json({
      message: "Student registered successfully",
      student: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering student", error });
  }
};
