
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    startTime: { type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ }, // Định dạng HH:MM
    endTime: { type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    CourtID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Court",
        required: true,
    },
});

export default mongoose.model("Booking", bookingSchema);
