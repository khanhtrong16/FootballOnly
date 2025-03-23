import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/,
        },
        phone: {
            type: String,
            required: true,
            match: /^[0-9]{10}$/,
        },
        password: {
            type: String,
            min: 6,
            required: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ["owner", "customer"],
            default: "customer",
            // required: true,
        },
    },
    { versionKey: false, timestamps: true }
);
export default mongoose.model("User", userSchema);
