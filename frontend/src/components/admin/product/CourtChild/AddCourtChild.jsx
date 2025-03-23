import React, { useEffect } from "react";
import useList from "../../../../hook/useList";
import { useForm } from "react-hook-form";
import useCreate from "../../../../hook/useCreate";

const AddCourtChild = ({ setShowForm, courtId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { data, isLoading } = useList("shift");
    const formData = data?.shifts;
    const { mutate, isSuccess } = useCreate("courtChild");
    const onSubmit = (formData) => {
        mutate({ courtId, ...formData });
    };
    useEffect(() => {
        if (isSuccess) {
            console.log("Thêm thành công!");
            setShowForm(false);
        }
    }, [isSuccess]);
    if (isLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );

    return (
        <div className="add-subfield-form mt-4">
            <h5 className="mb-3">Thêm sân con mới</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Tên sân con */}
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-1">
                        <strong>Tên sân con</strong>
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Tên sân con không được bỏ trống" })}
                        className="form-control custom-input"
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>

                {/* Shift Prices */}
                <div className="form-group mb-3">
                    <label className="mb-1">
                        <strong>Shift Prices</strong>
                    </label>
                    {formData.map((shift, index) => (
                        <div key={index} className="shift-price-group mb-2 mt-2">
                            <div className="row g-3 d-flex gap-2">
                                {/* Tên ca */}
                                <div className="col-md-4">
                                    <label className="mb-1">Tên ca</label>
                                    <input type="text" value={shift.shift_name} className="form-control custom-input" disabled />
                                    <input type="hidden" {...register(`shiftPrices[${index}].shiftId`)} value={shift._id} />
                                </div>
                                {/* Giá */}
                                <div className="col-md-4">
                                    <label className="mb-1">Price</label>
                                    <input
                                        type="number"
                                        {...register(`shiftPrices[${index}].price`, { required: "Giá không được bỏ trống" })}
                                        className="form-control custom-input"
                                    />
                                    {errors.shiftPrices?.[index]?.price && <p className="text-danger">{errors.shiftPrices[index].price.message}</p>}
                                </div>
                                {/* Trạng thái */}
                                <div className="col-md-3">
                                    <label className="mb-1">Status</label>
                                    <select {...register(`shiftPrices[${index}].status`)} className="form-control custom-input">
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                {/* Nút hành động */}
                <div className="form-group d-flex justify-content-end gap-2 ">
                    <button type="submit" className="tf-button style-3 btn-sm">
                        Lưu
                    </button>
                    <button type="button" className="tf-button style-3 btn-sm" onClick={() => setShowForm(false)}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCourtChild;
