import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["student", "organizer"] },
});

userSchema.pre("save", async function (next) {
  console.log("Pre-save hook triggered");
  if (!this.isModified("password")) {
    console.log("Password not modified, skipping hash");
    return next();
  }

  try {
    console.log("Hashing password...");
    const salt = await bcryptjs.genSalt(12);
    this.password = await bcryptjs.hash(this.password, salt);
    console.log("Password hashed successfully");
    next();
  } catch (error) {
    console.error("Error in pre-save hook:", error);
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    console.log("Comparing passwords...");
    console.log("Stored hashed password:", this.password);
    console.log("Candidate password length:", candidatePassword.length);
    const isMatch = await bcryptjs.compare(candidatePassword, this.password);
    console.log("Password match result:", isMatch);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
};

const User = mongoose.model("User", userSchema);
export default User;
