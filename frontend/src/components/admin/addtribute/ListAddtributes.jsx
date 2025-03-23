import React, { useState } from "react";
import useList from "../../../hook/useList";
import { Link } from "react-router-dom";
import useDelete from "../../../hook/useDelete";

const ListAddtributes = () => {
    const limit = 5;
    const [page, setPage] = useState(1);
    const { data, isLoading } = useList("shift", limit, page);
    const shifts = data?.shifts;
    const { mutate } = useDelete("shift");
    const removeData = (id) => {
        const confirm = window.confirm("Nếu bạn xóa sẽ mất hết dữ liệu liên kết đến các sân?");
        if (!confirm) {
            return;
        }
        mutate(id);
    };
    if (isLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    const totalShift = data?.totalShift;
    const totalPages = Math.ceil(parseInt(totalShift.length) / limit);
    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                        <h3>All Attributes</h3>
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
                                <div className="text-tiny">All Attributes</div>
                            </li>
                        </ul>
                    </div>
                    <div className="wg-box">
                        <div className="flex items-center justify-between gap10 flex-wrap">
                            <div className="wg-filter flex-grow">
                                <form className="form-search">
                                    <fieldset className="name">
                                        <input
                                            type="text"
                                            placeholder="Search here..."
                                            className
                                            name="name"
                                            tabIndex={2}
                                            defaultValue
                                            aria-required="true"
                                            required
                                        />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className type="submit">
                                            <i className="icon-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <Link to={"/admin/addAddtribute"} className="tf-button style-1 w208">
                                <i className="icon-plus" />
                                Add new
                            </Link>
                        </div>
                        <div className="wg-table table-all-attribute">
                            <ul className="table-title flex gap20 mb-14">
                                <li>
                                    <div className="body-title">Shift Name</div>
                                </li>
                                <li>
                                    <div className="body-title">Shift time</div>
                                </li>
                                <li>
                                    <div className="body-title">Action</div>
                                </li>
                            </ul>
                            <ul className="flex flex-column">
                                {shifts.map((item) => (
                                    <li key={item._id} className="attribute-item item-row flex items-center justify-between gap20">
                                        <div className="name">
                                            <a href="add-attributes.html" className="body-title-2">
                                                {item.shift_name}
                                            </a>
                                        </div>
                                        <div className="body-text">{item.shift_time}</div>
                                        <div className="list-icon-function">
                                            {/* <div className="item eye">
                                                <i className="icon-eye" />
                                            </div> */}
                                            <div className="item edit">
                                                <Link to={`/admin/putAddtributes/${item._id}`}>
                                                    <i className="icon-edit-3" />
                                                </Link>
                                            </div>
                                            <div className="item trash">
                                                <i className="icon-trash-2" onClick={() => removeData(item._id)} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="divider" />
                        <div className="flex items-center justify-between flex-wrap gap10">
                            <ul className="wg-pagination">
                                <li>
                                    <a href="#" onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
                                        <i className="icon-chevron-left" />
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" onClick={() => setPage(page)}>
                                        {page}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>
                                        <i className="icon-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /all-attribute */}
                </div>
                {/* /main-content-wrap */}
            </div>
            {/* /main-content-wrap */}
            {/* bottom-page */}
            <div className="bottom-page">
                <div className="body-text">
                    Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved
                </div>
            </div>
            {/* /bottom-page */}
        </div>
    );
};

export default ListAddtributes;
