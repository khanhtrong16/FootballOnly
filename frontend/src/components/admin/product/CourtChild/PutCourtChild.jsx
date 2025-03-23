import React, { useEffect } from "react";
import useList from "../../../../hook/useList";
import { useForm } from "react-hook-form";
import useUpdate from "../../../../hook/useUpdate";
import useOne from "../../../../hook/useOne";
import useDelete from "../../../../hook/useDelete";

const PutCourtChild = ({ setShowFormUpdate, courtChildId }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { data: shift, isLoading } = useList("shift");
    const { data: courtChild } = useOne("courtChild", courtChildId);
    const { mutate, isPending, isSuccess } = useUpdate("courtChild", courtChildId);

    const formData = shift?.shifts;
    const courtChildOne = courtChild?.courtChild;
    const { mutate: deleteCourtChild } = useDelete("courtChild");
    useEffect(() => {
        if (isSuccess) {
            console.log("Thêm thành công!");
            setShowFormUpdate(false);
        }
    }, [isSuccess]);
    useEffect(() => {
        if (courtChildOne) {
            reset({
                name: courtChildOne.name,
                shiftPrices: courtChildOne.shiftPrices.map((sp) => ({
                    shiftId: sp.shiftId,
                    price: sp.price,
                    status: sp.status.toString(),
                })),
            });
        }
    }, [courtChildOne, reset]);
    const removeData = (id) => {
        const confirm = window.confirm("Nếu bạn xóa sẽ mất hết dữ liệu liên kết đến các sân?");
        if (!confirm) {
            return;
        }
        deleteCourtChild(id);
        setShowFormUpdate(false);
    };
    const onSubmit = (formData) => {
        mutate({ courtId: courtChildOne.courtId, ...formData });
    };

    if (isLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );

    return (
        <div className="add-subfield-form mt-4">
            <h5 className="mb-3">Cập nhật sân con</h5>
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
                                    <label className="mb-1">Giá</label>
                                    <input
                                        type="number"
                                        {...register(`shiftPrices[${index}].price`, { required: "Giá không được bỏ trống", valueAsNumber: true })}
                                        className="form-control custom-input"
                                    />
                                    {errors.shiftPrices?.[index]?.price && <p className="text-danger">{errors.shiftPrices[index].price.message}</p>}
                                </div>
                                {/* Trạng thái */}
                                <div className="col-md-3">
                                    <label className="mb-1">Trạng thái</label>
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
                <div className="form-group d-flex justify-content-between gap-2">
                    <button type="button" className="tf-button style-3 btn-sm" onClick={() => removeData(courtChildId)}>
                        Xóa Sân
                    </button>
                    <div className=" d-flex gap-2">
                        <button type="submit" className="tf-button style-3 btn-sm">
                            {isPending ? "Lưu..." : "Lưu"}
                        </button>
                        <button type="button" className="tf-button style-3 btn-sm" onClick={() => setShowFormUpdate(false)}>
                            Hủy
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PutCourtChild;
