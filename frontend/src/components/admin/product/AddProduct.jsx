import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useOne from "../../../hook/useOne";
import useCreate from "../../../hook/useCreate";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const { id } = jwtDecode(token);
    const { data, isLoading } = useOne("user", id);

    const { mutate } = useCreate("court");

    const onSubmit = (variables) => {
        mutate(
            { ...variables, owner: id },
            {
                onSuccess: () => {
                    toast.success("Sản phẩm đã được thêm thành công!");
                    setTimeout(() => navigate("/admin/listProduct"), 3000);
                },
                onError: (error) => toast.error(`Thêm sản phẩm thất bại: ${error.message}`),
            }
        );
    };

    if (isLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );

    return (
        <div>
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="main-content-wrap">
                        <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                            <h3>Add Product</h3>
                        </div>
                        <form className="form-add-product" onSubmit={handleSubmit(onSubmit)}>
                            <div className="wg-box mb-30">
                                {/* Name */}
                                <fieldset className="name">
                                    <div className="body-title mb-10">
                                        Tên sân bóng <span className="tf-color-1">*</span>
                                    </div>
                                    <input
                                        className="mb-10"
                                        type="text"
                                        placeholder="Enter name"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                </fieldset>
                                {/* Location */}
                                <fieldset className="category">
                                    <div className="body-title mb-10">
                                        Địa chỉ <span className="tf-color-1">*</span>
                                    </div>
                                    <input type="text" placeholder="Enter location" {...register("location", { required: "Location is required" })} />
                                    {errors.location && <p className="text-danger">{errors.location.message}</p>}
                                </fieldset>
                                {/* Image URL */}
                                <fieldset className="category">
                                    <div className="body-title mb-10">
                                        Đường dẫn ảnh <span className="tf-color-1">*</span>
                                    </div>
                                    <input type="text" placeholder="Enter image URL" {...register("image", { required: "Image URL is required" })} />
                                    {errors.image && <p className="text-danger">{errors.image.message}</p>}
                                </fieldset>
                                {/* Price Per Hour */}
                                <fieldset className="category">
                                    <div className="body-title mb-10">
                                        Giá mỗi giờ <span className="tf-color-1">*</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter price per hour"
                                        {...register("pricePerHour", {
                                            required: "Price per hour is required",
                                        })}
                                    />
                                    {errors.pricePerHour && <p className="text-danger">{errors.pricePerHour.message}</p>}
                                </fieldset>
                                {/* Owner */}
                                <fieldset className="category">
                                    <div className="body-title mb-10">
                                        Chủ sân <span className="tf-color-1">*</span>
                                    </div>
                                    <input type="text" placeholder={data?.user?.username} name="owner" disabled {...register("owner")} />
                                </fieldset>
                                {/* Description */}
                                <fieldset className="description">
                                    <div className="body-title mb-10">
                                        Description <span className="tf-color-1">*</span>
                                    </div>
                                    <textarea
                                        className="mb-10"
                                        placeholder="Short description about product"
                                        {...register("description", {
                                            required: "Description is required",
                                        })}
                                    />
                                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                                    <div className="text-tiny">Do not exceed 100 characters when entering the product description.</div>
                                </fieldset>
                            </div>
                            <div className="cols gap10">
                                <button className="tf-button w380" type="submit">
                                    Add product
                                </button>
                                <Link className="tf-button style-3 w380" to={"/admin/listProduct"}>
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bottom-page">
                    <div className="body-text">
                        Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Thêm ToastContainer để hiển thị thông báo */}
        </div>
    );
};

export default AddProduct;
