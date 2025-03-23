import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm({ handleClose }) {
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (datas) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/api/signin`, datas);
            const role = data.userIsExist.role;
            localStorage.setItem("token", data.token);
            window.location.reload();
        } catch (error) {
            if (error.status == 400) {
                setError("Tài khoản hoặc mật khẩu không chính xác!");
            }
        }
    };
    return (
        <div className="form-container">
            <h2 className="text-center  mb-3">Đăng Nhập</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {error && <span className="text-danger">{error}</span>}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Đăng Nhập
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Đóng
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
