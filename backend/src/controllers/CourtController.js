import Joi from "joi";
import Court from "../models/Court";
import { errorFn } from "../other/Error";
const courtSchema = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().required(),
    pricePerHour: Joi.string().required(),
    description: Joi.string().required(),
    owner: Joi.string().required(),
});
export const getCourt = async (req, res) => {
    try {
        const { limit, page } = req.query;
        let query = Court.find();
        if (limit && page) {
            query = query.limit(parseInt(limit)).skip(parseInt(limit) * (parseInt(page) - 1));
        } else {
            query = query;
        }
        const court = await query.exec();
        const totalCourt = await Court.find();
        return res.status(200).json({
            message: "success!",
            court,
            totalCourt,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const getCourtById = async (req, res) => {
    try {
        const { id } = req.params;
        const court = await Court.findById(id);
        return res.status(200).json({
            message: "success!",
            court,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const createCourt = async (req, res) => {
    try {
        const { error, value } = courtSchema.validate(req.body, { abortEarly: false, convert: false });
        if (error) return errorFn(res, error);
        const court = await Court.create(value);
        return res.status(200).json({
            message: "Success!",
            court,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const updateCourt = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = courtSchema.validate(req.body, { abortEarly: false, convert: false });
        if (error) return errorFn(res, error);
        console.log(value);
        const court = await Court.findByIdAndUpdate(id, value, { new: true });
        return res.status(200).json({
            message: "Success!",
            court,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const deleteCourt = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourt = await Court.findByIdAndDelete(id);
        if (!deletedCourt) {
            return res.status(404).json({ message: "Court not found!" });
        }
        return res.status(200).json({
            message: "Delete successful!",
            deletedCourt,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
