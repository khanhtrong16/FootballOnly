import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    pricePerHour: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Court", courtSchema);
