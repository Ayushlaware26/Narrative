import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    //title, description, status, created by ref user, assigned to , priority,deadline, helpfulnotes,relatedskills,created at
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["To Do", "In Progress", "Done"],
        default: "To Do",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedTo: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],    
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    helpfulNotes: {
        type: String,
        default: "",
    },
    relatedSkills: {
        type: [String],
        default: [],
    },          
})

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;