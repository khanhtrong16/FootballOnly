import Joi from "joi";
import { errorFn } from "../other/Error";
import Shift from "../models/shift";
import CourtChild from "../models/CourtChild";

const shiftSchema = Joi.object({
    shift_name: Joi.string().required(),
    shift_time: Joi.string().required(),
});
export const getAllShifts = async (req, res) => {
    try {
        const { limit, page } = req.query;
        let query = Shift.find();
        if (limit && page) {
            query = query.limit(parseInt(limit)).skip(parseInt(limit) * (parseInt(page) - 1));
        } else {
            query = query;
        }
        const shifts = await query.exec();
        const totalShift = await Shift.find();
        return res.status(200).json({
            message: "Success!",
            shifts,
            totalShift,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const createShift = async (req, res) => {
    try {
        const { error, value } = shiftSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);
        const shift = await Shift.create(value);
        return res.status(200).json({
            message: "success!",
            shift,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getOneShift = async (req, res) => {
    try {
        const { id } = req.params;
        const shift = await Shift.findById(id);
        if (!shift) {
            return res.status(404).json({ message: "Shift not found!" });
        }
        return res.status(200).json({
            message: "Success!",
            shift,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const updateShift = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = shiftSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);

        const updatedShift = await Shift.findByIdAndUpdate(id, value, { new: true });
        if (!updatedShift) {
            return res.status(404).json({ message: "Shift not found!" });
        }
        return res.status(200).json({
            message: "Update successful!",
            updatedShift,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const deleteShift = async (req, res) => {
    try {
        const { id } = req.params;
        await CourtChild.updateMany({ "shiftPrices.shiftId": id }, { $pull: { shiftPrices: { shiftId: id } } });
        const deletedShift = await Shift.findByIdAndDelete(id);
        if (!deletedShift) {
            return res.status(404).json({ message: "Shift not found!" });
        }
        return res.status(200).json({
            message: "Delete successful!",
            deletedShift,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
