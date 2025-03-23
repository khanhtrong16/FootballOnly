import Joi from "joi";
import { errorFn } from "../other/Error";
import User from "../models/User";
const userSchema = Joi.object({
    username: Joi.string().required().min(6),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().required().min(6),
    role: Joi.string().required(),
});

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json({
            message: "success!",
            user,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "Success!",
            users,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const createUser = async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);

        const user = await User.create(value);
        return res.status(200).json({
            message: "User created successfully!",
            user,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = userSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);

        const updatedUser = await User.findByIdAndUpdate(id, value, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found!" });
        }
        return res.status(200).json({
            message: "Update successful!",
            updatedUser,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }
        return res.status(200).json({
            message: "Delete successful!",
            deletedUser,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
// export const updateUser
