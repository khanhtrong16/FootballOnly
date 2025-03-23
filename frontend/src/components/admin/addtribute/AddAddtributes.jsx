import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useCreate from "../../../hook/useCreate";
import { toast, ToastContainer } from "react-toastify";
const AddAddtributes = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { mutate, isPending } = useCreate("shift");
    const onSubmit = (formData) => {
        mutate(formData, {
            onSuccess: () => {
                toast.success("Thành công!");
                setTimeout(() => navigate("/admin/listAddtribute"), 3000);
            },
            onError: (error) => toast.error(`Thêm shift thất bại: ${error.message}`, { position: "top-right", autoClose: 3000 }),
        });
    };

    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                        <h3>Add Attribute</h3>

                        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                            <li>
                                <a href="index.html">
                                    <div className="text-tiny">Dashboard</div>
                                </a>
                            </li>
                            <li>
                                <i className="icon-chevron-right" />
                            </li>
                            <li>
                                <a href="#">
                                    <div className="text-tiny">Attributes</div>
                                </a>
                            </li>
                            <li>
                                <i className="icon-chevron-right" />
                            </li>
                            <li>
                                <div className="text-tiny">Add Attribute</div>
                            </li>
                        </ul>
                    </div>
                    {/* new-attribute */}
                    <div className="wg-box">
                        <form className="form-new-product d-flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex justify-content-end">
                                <div />
                                <Link to="/admin/listAddtribute" className="tf-button style-3">
                                    Quay lại
                                </Link>
                            </div>
                            <fieldset className="name">
                                <div className="body-title">Shift name</div>
                                <input
                                    className="flex-grow"
                                    type="text"
                                    placeholder="Shift name"
                                    {...register("shift_name", { required: "Shift name is required" })}
                                    tabIndex={0}
                                />
                                {errors.shift_name && <div className="text-danger">{errors.shift_name.message}</div>}
                            </fieldset>
                            <fieldset className="name">
                                <div className="body-title">Shift time</div>
                                <input
                                    className="flex-grow"
                                    type="text"
                                    placeholder="Shift time"
                                    {...register("shift_time", { required: "Shift time is required" })}
                                    tabIndex={0}
                                />
                                {errors.shift_time && <div className="text-danger">{errors.shift_time.message}</div>}
                            </fieldset>
                            <div className="bot ">
                                <div />
                                <button className="tf-button w208" type="submit">
                                    {isPending ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom-page">
                <div className="body-text">
                    Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved
                </div>
            </div>
            {/* /bottom-page */}
            <ToastContainer />
        </div>
    );
};

export default AddAddtributes;
