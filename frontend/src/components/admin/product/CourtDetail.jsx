// CourtDetail.jsx
import React, { use, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../assets/css/FieldDetail.css";
import useOne from "../../../hook/useOne";
import useGetById from "../../../hook/useGetById";
import AddCourtChild from "./CourtChild/AddCourtChild";
import PutCourtChild from "./CourtChild/PutCourtChild";

const CourtDetail = () => {
    const { id } = useParams();
    const { data: court, isLoading: loadingCourt } = useOne("court", id);
    const { data: courtChild, isLoading: loadingChild } = useGetById("courtChild", "court", id);
    const defaultField = court?.court;
    const subFields = courtChild?.courtChild;
    const [showForm, setShowForm] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [courtChildId, setCourtChildId] = useState("");
    const handleCourtChild = (id) => {
        setShowFormUpdate(!showFormUpdate), setCourtChildId(id);
    };
    if (loadingCourt || loadingChild)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );

    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    {/* Tiêu đề */}
                    <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                        <h3>{defaultField.name}</h3>
                        <Link to="/admin/listProduct" className="tf-button style-3">
                            Quay lại
                        </Link>
                    </div>

                    {/* Nội dung chính (Sân chính) */}
                    <div className="wg-box mb-30">
                        <div className="row court-row">
                            {/* Ảnh */}
                            <div className="col-md-6 court-image-col">
                                <img src={defaultField.image} alt={defaultField.name} className="field-image" />
                            </div>
                            {/* Thông tin */}
                            <div className="col-md-6 court-info-col">
                                <div className="field-info">
                                    <div className="info-item mb-20">
                                        <div className="body-title">Địa chỉ</div>
                                        <div className="body-text">{defaultField.location}</div>
                                    </div>

                                    <div className="info-item mb-20">
                                        <div className="body-title">Mô tả</div>
                                        <div className="body-text text-muted">{defaultField.description}</div>
                                    </div>

                                    <div className="info-item mb-20">
                                        <div className="body-title">Giá mỗi giờ</div>
                                        <div className="body-text tf-color-1">{defaultField.pricePerHour}</div>
                                    </div>

                                    {/* <div className="info-item mb-20">
                                        <div className="body-title">Chủ sân</div>
                                        <div className="body-text">{defaultField.owner}</div>
                                    </div> */}

                                    <div className="info-item mb-20">
                                        <div className="body-title">Ngày tạo</div>
                                        <div className="body-text">{new Date(defaultField.createdAt).toLocaleDateString("vi-VN")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phần sân con */}
                    <div className="wg-box mb-30">
                        <h4 className="subfield-title mb-20">Sân con</h4>
                        <div className="subfield-list">
                            {subFields.map((subField) => (
                                <div key={subField._id} className="subfield-item" onClick={() => handleCourtChild(subField._id)}>
                                    <img
                                        width={200}
                                        src="https://png.pngtree.com/thumb_back/fw800/background/20220620/pngtree-soccer-field-or-football-field-3d-area-shade-lawn-photo-image_24882718.jpg"
                                        alt={subField.name}
                                        className="subfield-image"
                                    />
                                    <div className="subfield-name">{subField.name}</div>
                                </div>
                            ))}

                            <div className="subfield-item add-subfield border border-danger-subtle" onClick={() => setShowForm(!showForm)}>
                                <div className="add-icon">+</div>
                                <div className="subfield-name">Thêm sân con</div>
                            </div>
                        </div>

                        {showForm && <AddCourtChild setShowForm={() => setShowForm(false)} courtId={id} />}
                        {showFormUpdate && <PutCourtChild setShowFormUpdate={() => setShowFormUpdate(false)} courtChildId={courtChildId} />}
                    </div>

                    {/* Footer */}
                    <div className="bottom-page">
                        <div className="body-text">
                            Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights
                            reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourtDetail;
