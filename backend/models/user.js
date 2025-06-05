import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String, // corrected from "typeString" to "type: String"
      enum: ["admin", "user", "moderator"],
      default: "user",
    },
    skills: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds updatedAt and createdAt automatically
  }
);

const User = mongoose.model("User", userSchema);

export default User;
