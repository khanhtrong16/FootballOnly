import axios from "axios";
import React, { useEffect, useState } from "react";
import useList from "../../../hook/useList";
import useDelete from "../../../hook/useDelete";
import { Link } from "react-router-dom";

const ListProduct = () => {
    const limit = 5;
    const [page, setPage] = useState(1);
    const { data, isLoading } = useList("court", limit, page);
    const courts = data?.court;
    const { mutate } = useDelete("court");
    const removeData = (id) => {
        const confirm = window.confirm("Nếu bạn xóa sẽ mất hết dữ liệu sân con?");
        if (!confirm) {
            return;
        }
        mutate(id);
    };
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }
    const totalCourt = data?.totalCourt;
    const totalPages = Math.ceil(parseInt(totalCourt.length) / limit);
    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                        <h3>All Products</h3>
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
                                    <div className="text-tiny">Product</div>
                                </a>
                            </li>
                            <li>
                                <i className="icon-chevron-right" />
                            </li>
                            <li>
                                <div className="text-tiny">All Products</div>
                            </li>
                        </ul>
                    </div>
                    <div className="wg-box">
                        <div className="flex items-center justify-between gap10 flex-wrap">
                            <div className="wg-filter flex-grow">
                                <form className="form-search">
                                    <fieldset className="name">
                                        <input type="text" placeholder="Search here..." name="name" tabIndex={2} required />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button type="submit">
                                            <i className="icon-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <a>
                                <Link className="tf-button style-1 w208" to={"/admin/addProduct"}>
                                    <i className="icon-plus" />
                                    Add new
                                </Link>
                            </a>
                        </div>

                        <div className="wg-table table-product-list">
                            <ul className="table-title flex gap20 mb-14">
                                <li>
                                    <div className="body-title">Name</div>
                                </li>
                                <li>
                                    <div className="body-title">Location</div>
                                </li>
                                <li>
                                    <div className="body-title">function</div>
                                </li>
                            </ul>
                            {courts.map((item, index) => (
                                <ul key={index} className="flex flex-column">
                                    <li className="wg-product item-row gap20">
                                        <div className="name">
                                            <div className="image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="title line-clamp-2 mb-0">
                                                <a href="#" className="body-text">
                                                    {item.name}
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="title line-clamp-2 ">{item.location}</div>
                                        </div>
                                        <div className="list-icon-function">
                                            <div className="item eye">
                                                <Link to={`/admin/courtDetail/${item._id}`}>
                                                    <i className="icon-eye" />
                                                </Link>
                                            </div>

                                            <div className="item edit">
                                                <Link to={`/admin/updateProduct/${item._id}`}>
                                                    <i className="icon-edit-3" />
                                                </Link>
                                            </div>
                                            <div className="item trash">
                                                <i className="icon-trash-2" onClick={() => removeData(item._id)} />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
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
                </div>
            </div>
            <div className="bottom-page">
                <div className="body-text">
                    Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
