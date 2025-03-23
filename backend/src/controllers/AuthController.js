import Joi from "joi";
import { errorFn } from "../other/Error";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";
const registerSchema = Joi.object({
    username: Joi.string().required().min(6),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().required().min(6),
    // role: Joi.string().required(),
});
const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
});

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Thử dùng 587 thay vì 465
    secure: false, // Chỉ đặt true nếu dùng 465
    auth: {
        user: "khanhden005@gmail.com",
        pass: "oxwdtgofxvrodkcw",
    },
    tls: {
        rejectUnauthorized: false, // Bỏ qua lỗi chứng chỉ
    },
});

const sendVerificationEmail = async (email) => {
    try {
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "10m" });
        const encodedToken = encodeURIComponent(token);
        const formMail = {
            from: process.env.EMAIL_ADMIN,
            to: email,
            subject: "Xác minh email",
            html: `<p>Nhấn vào liên kết dưới đây để xác minh email:</p>
             <a href="http://localhost:3000/api/verify-email?token=${encodedToken}">Xác minh email</a>`,
        };

        await transport.sendMail(formMail);
    } catch (error) {
        console.log(error.message);
    }
};
export const checkVerified = async (req, res) => {
    try {
        let token = req.query.token;
        //Trường hợp bị Google đổi URL (có "q=")
        if (!token) {
            const googleUrl = req.originalUrl.split("?q=")[1];
            if (googleUrl) {
                const decodedUrl = decodeURIComponent(googleUrl); // Giải mã URL
                token = new URL(decodedUrl).searchParams.get("token"); // Lấy token từ URL thật
            }
        }
        if (!token) return res.status(400).json({ message: "Token không hợp lệ!" });
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded);

        const user = await User.findOne({ email: decoded.email });
        console.log(user);
        if (user) {
            await User.findOneAndUpdate({ email: decoded.email }, { isVerified: true }, { new: true });
        }
        return res.status(200).json({
            message: " xm success!",
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const register = async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) return errorFn(res, error);
        const existingUser = await User.findOne({ email: value.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedPass = await bcrypt.hash(value.password, 8);
        const user = await User.create({ ...value, password: hashedPass });
        console.log(user);

        if (user) {
            await sendVerificationEmail(value.email);
        }
        return res.status(200).json({
            message: "success",
            user,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
export const signin = async (req, res) => {
    try {
        const { error, value } = signinSchema.validate(req.body);
        if (error) return errorFn(res, error);
        const userIsExist = await User.findOne({ email: value.email });
        if (!userIsExist) {
            return res.status(400).json({
                message: "User does not exist",
            });
        }
        const checkPass = await bcrypt.compare(value.password, userIsExist.password);
        if (!checkPass) {
            return res.status(400).json({
                message: "incorrect password",
            });
        }
        if (userIsExist.isVerified == false) {
            return res.status(400).json({
                message: "email is not verified",
            });
        }
        const token = jwt.sign({ id: userIsExist.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({
            message: "Signin success!",
            userIsExist,
            token,
        });
    } catch (error) {
        errorFn(res, error);
    }
};
