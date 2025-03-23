import mongoose from "mongoose";

const { Schema } = mongoose;
const shiftSchema = new Schema({
    shift_name: { type: String, required: true },
    shift_time: { type: String, required: true },
});

export default mongoose.model("Shift", shiftSchema);
