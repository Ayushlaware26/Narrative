import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["USER", "ADMIN", "MANAGER"],
    default: "USER" 
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String,
    location: String,
    timezone: String,
    preferredLanguage: { type: String, default: "en" }
  },
  skills: [{
    name: String,
    level: { type: String, enum: ["BEGINNER", "INTERMEDIATE", "EXPERT"] },
    verified: { type: Boolean, default: false }
  }],
  activity: {
    lastLogin: Date,
    loginCount: { type: Number, default: 0 },
    ticketsCreated: { type: Number, default: 0 },
    ticketsAssigned: { type: Number, default: 0 },
    ticketsCompleted: { type: Number, default: 0 }
  },
  preferences: {
    emailNotifications: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: true },
    theme: { type: String, default: "light" }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
userSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model("User", userSchema);