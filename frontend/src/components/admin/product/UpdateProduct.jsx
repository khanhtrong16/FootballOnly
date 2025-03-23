import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useOne from "../../../hook/useOne";
import useUpdate from "../../../hook/useUpdate";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const { id: userId } = jwtDecode(token);
    const { id: courtId } = useParams();
    const { data: userData, isLoading: isUserLoading } = useOne("user", userId);
    const { data: courtData, isLoading: isCourtLoading } = useOne("court", courtId);
    useEffect(() => {
        if (courtData && courtData.court) {
            const { createdAt, _id, __v, ...court } = courtData.court;
            reset(court);
        }
    }, [courtData, reset]);
    const { mutate } = useUpdate("court", courtId);
    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const CustomToast = ({ message }) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div> </div>
            <span>{message}</span>
        </div>
    );
    const onSubmit = (variables) => {
        mutate(
            { ...variables, owner: userId },
            {
                onSuccess: () => {
                    toast.success(<CustomToast message="Sản phẩm đã được cập nhật thành công!" />, toastOptions);
                    setTimeout(() => navigate("/admin/listProduct"), 3000);
                },
                onError: (error) => toast.error(<CustomToast message={`Cập nhật sản phẩm thất bại: ${error.message}`} />, toastOptions),
            }
        );
    };
    if (isUserLoading || isCourtLoading) return <div>Loading...</div>;

    return (
        <div>
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="main-content-wrap">
                        <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                            <h3>Update Product</h3>
                        </div>
                        <form className="form-update-product" onSubmit={handleSubmit(onSubmit)}>
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
                                    <input type="text" placeholder={userData?.user?.username} name="owner" disabled {...register("owner")} />
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
                                    Update product
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
            <ToastContainer />
        </div>
    );
};

export default UpdateProduct;
