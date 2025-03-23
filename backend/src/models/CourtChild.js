import mongoose from "mongoose";
const courtChildSchema = new mongoose.Schema({
    courtId: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
    name: { type: String, required: true, unique: true },
    shiftPrices: [
        {
            shiftId: { type: mongoose.Schema.Types.ObjectId, ref: "Shift", required: true },
            price: { type: Number, required: true },
            status: { type: Boolean, default: true },
        },
    ],
});
export default mongoose.model("CourtChid", courtChildSchema);
