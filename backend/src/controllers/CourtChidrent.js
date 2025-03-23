import Joi from "joi";
import { errorFn } from "../other/Error";
import CourtChild from "../models/CourtChild";

const shiftPriceSchema = Joi.object({
    shiftId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    status: Joi.boolean().default(true),
});

const courtChildSchema = Joi.object({
    courtId: Joi.string().required(),
    name: Joi.string().required(),
    shiftPrices: Joi.array().items(shiftPriceSchema).min(1).required(),
});

export const createCourtChild = async (req, res) => {
    try {
        const { error, value } = courtChildSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);
        console.log(value);
        const courtChild = await CourtChild.create(value);
        return res.status(200).json({
            message: "Success!",
            courtChild,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getCourtChild = async (req, res) => {
    try {
        const data = await CourtChild.find();
        return res.status(200).json({
            message: "Success!",
            data,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getOneCourtChild = async (req, res) => {
    try {
        const { id } = req.params;
        const courtChild = await CourtChild.findById(id);
        if (!courtChild) {
            return res.status(404).json({ message: "CourtChild not found!" });
        }
        return res.status(200).json({
            message: "Success!",
            courtChild,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const updateCourtChild = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = courtChildSchema.validate(req.body, { abortEarly: false });
        if (error) return errorFn(res, error);

        const updatedCourtChild = await CourtChild.findByIdAndUpdate(id, value, { new: true });
        if (!updatedCourtChild) {
            return res.status(404).json({ message: "CourtChild not found!" });
        }
        return res.status(200).json({
            message: "Update successful!",
            updatedCourtChild,
        });
    } catch (error) {
        errorFn(res, error);
    }
};

export const deleteCourtChild = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourtChild = await CourtChild.findByIdAndDelete(id);
        if (!deletedCourtChild) {
            return res.status(404).json({ message: "CourtChild not found!" });
        }
        return res.status(200).json({
            message: "Delete successful!",
            deletedCourtChild,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getCourtChildByCourtId = async (req, res) => {
    try {
        const { courtId } = req.params;
        const courtChild = await CourtChild.find({ courtId });
        if (!courtChild) {
            return res.status(404).json({ message: "CourtChild not found!" });
        }
        return res.status(200).json({
            message: "Success!",
            courtChild,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
