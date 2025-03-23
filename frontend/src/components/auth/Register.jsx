import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
function RegisterForm({ handleClose }) {
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            await axios.post(`http://localhost:3000/api/register`, data);
            alert("Đăng ký thành công vui long xac minh email truoc khi dang nhap!");
        } catch (error) {
            if (error.status == 400) {
                setError("Email đã tồn tại!");
            }
        }
    };
    return (
        <div className="form-container">
            <h2 className="text-center  mb-3">Đăng Ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Họ và Tên:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập họ và tên"
                        {...register("username", { required: "Vui lòng nhập họ tên" })}
                    />
                    {errors?.username && <span className="text-danger">{errors?.username?.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Nhập email"
                        {...register("email", {
                            required: "Vui lòng nhập email",
                            pattern: {
                                value: /.+\@.+\..+/,
                                message: "Email phải đúng định dạng",
                            },
                        })}
                    />
                    {errors?.email && <span className="text-danger">{errors?.email?.message}</span>}
                    {error && <span className="text-danger">{error}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Số Điện Thoại:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập số điện thoại"
                        {...register("phone", {
                            required: "Vui lòng nhập số điện thoại",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Số điện thoại phải đúng định dạng (0...)",
                            },
                        })}
                    />
                    {errors?.phone && <span className="text-danger">{errors?.phone?.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Mật Khẩu:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Nhập mật khẩu"
                        {...register("password", {
                            required: "Vui lòng nhập số điện thoại",
                            minLength: "Mật khẩu tối thiểu phải có 6 ký tự ",
                        })}
                    />
                    {errors?.password && <span className="text-danger">{errors?.password?.message}</span>}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Đăng Ký
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Đóng
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
