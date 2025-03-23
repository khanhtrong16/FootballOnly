import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOne from "../../hook/useOne";
import useList from "../../hook/useList";

const StadiumDetail = () => {
    const { id } = useParams();
    const [selectedCourtChild, setSelectedCourtChild] = useState(null);
    const [selectedShift, setSelectedShift] = useState(null);
    const { data: courtData, isLoading: CourtLoading } = useOne("court", id);
    const { data: courtChilds, isLoading: CourtChidLoading } = useList("courtchild");
    const { data: shift, isLoading: shiftLoading } = useList("shift");

    if (CourtChidLoading || CourtLoading || shiftLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );

    const { court } = courtData;
    const { data } = courtChilds;
    const { shifts } = shift;
    const checkId = (id) => {
        console.log(id);
        const shift = shifts.find((item) => item._id === id);
        return shift ? shift.shift_name : "Không xác định";
    };
    const handleSelectCourtChild = (courtChild) => {
        if (selectedCourtChild?._id === courtChild._id) {
            setSelectedCourtChild(null);
        } else {
            setSelectedCourtChild(courtChild);
        }
    };
    const handleSelectShift = (shift) => {
        if (selectedShift?._id === shift._id) {
            setSelectedShift(null);
        } else {
            setSelectedShift(shift);
        }
    };

    return (
        <main className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={court.image} className="img-fluid rounded" alt="Sân bóng ABC" />
                </div>

                <div className="col-md-6">
                    <h1 className="text-uppercase fw-bold">{court.name}</h1>
                    <p className="text-muted">
                        <strong>Địa Chỉ:</strong> {court.location}
                    </p>
                    <p>Mô tả: Sân bóng đạt tiêu chuẩn, mặt cỏ nhân tạo chất lượng cao, có hệ thống đèn chiếu sáng.</p>
                    <p>
                        <strong>Giá thuê:</strong> {court.pricePerHour} VND / Sân
                    </p>
                    <p>
                        <strong>Thời gian hoạt động:</strong> 8:00 - 22:00
                    </p>
                    <div className="mb-3">
                        <strong>Chọn sân:</strong>
                        <div className="row row-cols-2 row-cols-md-4 g-2 mt-1 gap-1">
                            {data.map((item) => (
                                <div
                                    key={item._id}
                                    className={`btn w-1 ${selectedCourtChild?._id === item._id ? "btn-dark" : "btn-outline-dark"} m-1 `}
                                    onClick={() => handleSelectCourtChild(item)} // Lưu thông tin sân con được chọn
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    {selectedCourtChild && (
                        <div className="mt-4">
                            <h3>Chi tiết sân: {selectedCourtChild.name}</h3>
                            <div className="d-flex gap-3 mt-2">
                                {selectedCourtChild?.shiftPrices.map((arrayShift) => (
                                    <button
                                        className={`btn ${selectedShift?._id == arrayShift?._id ? "btn-dark" : "btn-outline-dark"}`}
                                        key={arrayShift._id}
                                        onClick={() => handleSelectShift(arrayShift)}
                                    >
                                        {console.log(arrayShift)}
                                        {checkId(arrayShift.shiftId)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedShift && (
                        <div className="mt-1">
                            <p>
                                <strong>Giá thuê:</strong> {selectedShift.price} VND
                            </p>
                            <p>
                                <strong>Trạng thái:</strong>
                                {selectedShift.status ? " Còn sân" : " Hết sân"}
                            </p>
                        </div>
                    )}
                    <br />
                    <button className="btn btn-primary">Đặt sân ngay</button>
                </div>
            </div>
        </main>
    );
};

export default StadiumDetail;
