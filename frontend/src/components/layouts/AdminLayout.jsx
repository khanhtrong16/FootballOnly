import React, { useEffect } from "react";
import "../../assets/css/styles.css";
import "../../assets/font/fonts.css";
import "../../assets/icon/style.css";
import "../../assets/images/favicon.png";
import "../../assets/css/cssAdmin.css";
import $ from "jquery";
import { Link, Outlet } from "react-router-dom";
import useOne from "../../hook/useOne";
import { jwtDecode } from "jwt-decode";
const AdminLayout = () => {
    const token = localStorage.getItem("token");

    let id = null;
    if (token) {
        try {
            const decoded = jwtDecode(token);
            id = decoded?.id;
        } catch (error) {
            console.error("Invalid token:", error);
        }
    }

    const { data, isLoading } = useOne("user", id);
    const user = data?.user;

    useEffect(() => {
        const menuleft = () => {
            if ($("div").hasClass("section-menu-left")) {
                var bt = $(".section-menu-left").find(".has-children");
                bt.on("click", function () {
                    var args = { duration: 200 };
                    if ($(this).hasClass("active")) {
                        $(this).children(".sub-menu").slideUp(args);
                        $(this).removeClass("active");
                    } else {
                        $(".sub-menu").slideUp(args);
                        $(this).children(".sub-menu").slideDown(args);
                        $(".menu-item.has-children").removeClass("active");
                        $(this).addClass("active");
                    }
                });
                $(".sub-menu-item").on("click", function (event) {
                    event.stopPropagation();
                });
            }
        };

        menuleft(); // Gọi hàm khi component render

        return () => {
            $(".has-children").off("click"); // Cleanup tránh lỗi event lặp
            $(".sub-menu-item").off("click");
        };
    }, []);
    if (isLoading)
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    return (
        <div className="admin">
            <div id="wrapper">
                <div id="page" className>
                    <div className="layout-wrap">
                        <div className="section-menu-left">
                            <div className="box-logo">
                                <Link to={"/"}>
                                    <img
                                        className
                                        id="logo_header"
                                        alt
                                        src="https://themesflat.co/html/ecomus/images/logo/logo.svg"
                                        data-light="../images/logo/logo.svg"
                                        data-dark="https://themesflat.co/html/ecomus/images/logo/logo-white.svg"
                                    />
                                </Link>
                                <div className="button-show-hide">
                                    <i className="icon-chevron-left" />
                                </div>
                            </div>
                            <div className="section-menu-left-wrap">
                                <div className="center">
                                    <div className="center-item">
                                        <ul className>
                                            <li className="menu-item active">
                                                <Link to={"/admin"}>
                                                    <div className="icon">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M12.2652 3.57566C12.1187 3.42921 11.8813 3.42921 11.7348 3.57566L5.25 10.0605V19.8748C5.25 20.0819 5.41789 20.2498 5.625 20.2498H9V16.1248C9 15.0893 9.83947 14.2498 10.875 14.2498H13.125C14.1605 14.2498 15 15.0893 15 16.1248V20.2498H18.375C18.5821 20.2498 18.75 20.0819 18.75 19.8748V10.0605L12.2652 3.57566ZM20.25 11.5605L21.2197 12.5302C21.5126 12.8231 21.9874 12.8231 22.2803 12.5302C22.5732 12.2373 22.5732 11.7624 22.2803 11.4695L13.3258 2.51499C12.5936 1.78276 11.4064 1.78276 10.6742 2.515L1.71967 11.4695C1.42678 11.7624 1.42678 12.2373 1.71967 12.5302C2.01256 12.8231 2.48744 12.8231 2.78033 12.5302L3.75 11.5605V19.8748C3.75 20.9104 4.58947 21.7498 5.625 21.7498H18.375C19.4105 21.7498 20.25 20.9104 20.25 19.8748V11.5605ZM13.5 20.2498H10.5V16.1248C10.5 15.9177 10.6679 15.7498 10.875 15.7498H13.125C13.3321 15.7498 13.5 15.9177 13.5 16.1248V20.2498Z"
                                                                fill="#111111"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">Ecommerce</div>
                                                </Link>
                                            </li>
                                            <li className="menu-item has-children">
                                                <a href="javascript:void(0);" className="menu-item-button">
                                                    <div className="icon">
                                                        <i className="icon-file-plus" />
                                                    </div>
                                                    <div className="text">Product</div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li className="sub-menu-item">
                                                        <Link to={"/admin/listProduct"}>
                                                            <div className="text">All Products</div>
                                                        </Link>
                                                    </li>
                                                    <li className="sub-menu-item">
                                                        {/* <a href="add-product.html" className> */}
                                                        <Link to={"/admin/addProduct"}>
                                                            <div className="text">Add Product</div>
                                                        </Link>
                                                        {/* </a> */}
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children">
                                                <a href="javascript:void(0);" className="menu-item-button">
                                                    <div className="icon">
                                                        <svg
                                                            width={24}
                                                            height={22}
                                                            viewBox="0 0 22 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M0.5 1.875C0.5 0.839466 1.33947 0 2.375 0H19.625C20.6605 0 21.5 0.839466 21.5 1.875V3.375C21.5 4.29657 20.8351 5.06285 19.9589 5.22035L19.3733 15.1762C19.28 16.7619 17.9669 18 16.3785 18H5.62154C4.03311 18 2.71999 16.7619 2.62671 15.1762L2.04108 5.22035C1.16485 5.06285 0.5 4.29657 0.5 3.375V1.875ZM2.75659 3.75C2.75266 3.74997 2.74873 3.74997 2.74479 3.75H2.375C2.16789 3.75 2 3.58211 2 3.375V1.875C2 1.66789 2.16789 1.5 2.375 1.5H19.625C19.8321 1.5 20 1.66789 20 1.875V3.375C20 3.58211 19.8321 3.75 19.625 3.75H19.2552C19.2513 3.74997 19.2473 3.74997 19.2434 3.75H2.75659ZM3.54541 5.25L4.12412 15.0881C4.17076 15.8809 4.82732 16.5 5.62154 16.5H16.3785C17.1727 16.5 17.8292 15.8809 17.8759 15.0881L18.4546 5.25H3.54541ZM8.24976 8.25C8.24976 7.83579 8.58554 7.5 8.99976 7.5H12.9998C13.414 7.5 13.7498 7.83579 13.7498 8.25C13.7498 8.66421 13.414 9 12.9998 9H8.99976C8.58554 9 8.24976 8.66421 8.24976 8.25Z"
                                                                fill="#111111"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">Attributes</div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li className="sub-menu-item">
                                                        <Link to={"/admin/listAddtribute"}>
                                                            <div className="text">Shift</div>
                                                        </Link>
                                                    </li>
                                                    <li className="sub-menu-item">
                                                        <Link to={"/admin/addAddtribute"}>
                                                            <div className="text">Add shift</div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children">
                                                <a href="javascript:void(0);" className="menu-item-button">
                                                    <div className="icon">
                                                        <svg
                                                            width={24}
                                                            height={22}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M5.1392 7.41658C5.73654 7.87694 6.38132 8.27855 7.06498 8.61284C7.30482 7.3722 7.67417 6.24668 8.1472 5.30063C8.29118 5.01266 8.44837 4.7351 8.61825 4.47262C7.20101 5.11026 5.99608 6.13656 5.1392 7.41658ZM12 2.25C8.3534 2.25 5.17543 4.25226 3.50379 7.21378C2.70535 8.62832 2.25 10.2621 2.25 12C2.25 12.8417 2.35682 13.6595 2.55803 14.4401C3.64146 18.6436 7.45701 21.75 12 21.75C16.543 21.75 20.3585 18.6436 21.442 14.4401C21.6432 13.6595 21.75 12.8417 21.75 12C21.75 10.2621 21.2947 8.62832 20.4962 7.21378C18.8246 4.25226 15.6466 2.25 12 2.25ZM12 3.75C11.1945 3.75 10.2633 4.4225 9.48884 5.97145C9.0479 6.85334 8.69814 7.95052 8.48423 9.18993C9.5902 9.55342 10.772 9.75 12 9.75C13.228 9.75 14.4098 9.55342 15.5158 9.18993C15.3019 7.95052 14.9521 6.85334 14.5112 5.97145C13.7367 4.4225 12.8055 3.75 12 3.75ZM16.935 8.61284C16.6952 7.3722 16.3258 6.24668 15.8528 5.30063C15.7088 5.01266 15.5516 4.7351 15.3817 4.47262C16.799 5.11026 18.0039 6.13656 18.8608 7.41657C18.2635 7.87693 17.6187 8.27855 16.935 8.61284ZM15.7017 10.7042C14.53 11.0591 13.2872 11.25 12 11.25C10.7128 11.25 9.46996 11.0591 8.29832 10.7042C8.26657 11.1256 8.25 11.5583 8.25 12C8.25 13.2235 8.37714 14.3782 8.60185 15.4155C9.70027 15.6349 10.8365 15.75 12 15.75C13.1635 15.75 14.2997 15.6349 15.3981 15.4155C15.6229 14.3782 15.75 13.2235 15.75 12C15.75 11.5583 15.7334 11.1256 15.7017 10.7042ZM17.0027 15.0136C17.1639 14.0617 17.25 13.0479 17.25 12C17.25 11.3733 17.2192 10.7588 17.16 10.1625C18.023 9.7801 18.8356 9.30479 19.5851 8.7493C20.0129 9.74621 20.25 10.8447 20.25 12C20.25 12.6024 20.1856 13.189 20.0634 13.7535C19.0944 14.2668 18.0705 14.6906 17.0027 15.0136ZM14.9409 17.0206C13.9826 17.1716 13.0004 17.25 12 17.25C10.9996 17.25 10.0174 17.1716 9.0591 17.0206C9.18976 17.3811 9.33365 17.7182 9.48884 18.0286C10.2633 19.5775 11.1945 20.25 12 20.25C12.8055 20.25 13.7367 19.5775 14.5112 18.0286C14.6664 17.7182 14.8102 17.3811 14.9409 17.0206ZM15.3819 19.5272C15.5517 19.2648 15.7089 18.9873 15.8528 18.6994C16.1562 18.0925 16.417 17.4118 16.6283 16.6742C17.5649 16.4364 18.4735 16.1281 19.348 15.7552C18.4955 17.42 17.0936 18.757 15.3819 19.5272ZM8.61812 19.5272C8.44828 19.2648 8.29114 18.9873 8.1472 18.6994C7.84377 18.0925 7.583 17.4118 7.37171 16.6742C6.4351 16.4364 5.52652 16.1281 4.65199 15.7552C5.50454 17.42 6.9064 18.757 8.61812 19.5272ZM3.93656 13.7535C4.90563 14.2668 5.92951 14.6906 6.99729 15.0136C6.83612 14.0617 6.75 13.0479 6.75 12C6.75 11.3733 6.7808 10.7588 6.84003 10.1625C5.97701 9.7801 5.16437 9.30479 4.41491 8.7493C3.98705 9.74621 3.75 10.8447 3.75 12C3.75 12.6024 3.81444 13.189 3.93656 13.7535Z"
                                                                fill="#0A0A0C"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">Online Store</div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li className="sub-menu-item">
                                                        <Link to={"/"}>
                                                            <div className="text">View Store</div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <Link to={"/logout"}>
                                                    <div className="icon">
                                                        <svg
                                                            width={24}
                                                            height={22}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.125 18.6875C8.125 18.903 8.0394 19.1097 7.88702 19.262C7.73465 19.4144 7.52799 19.5 7.3125 19.5H1.625C1.19402 19.5 0.780698 19.3288 0.475951 19.024C0.171205 18.7193 0 18.306 0 17.875V1.625C0 1.19402 0.171205 0.780698 0.475951 0.475951C0.780698 0.171205 1.19402 0 1.625 0H7.3125C7.52799 0 7.73465 0.0856026 7.88702 0.237976C8.0394 0.390349 8.125 0.597012 8.125 0.8125C8.125 1.02799 8.0394 1.23465 7.88702 1.38702C7.73465 1.5394 7.52799 1.625 7.3125 1.625H1.625V17.875H7.3125C7.52799 17.875 7.73465 17.9606 7.88702 18.113C8.0394 18.2653 8.125 18.472 8.125 18.6875ZM19.2623 9.17516L15.1998 5.11266C15.0474 4.9602 14.8406 4.87455 14.625 4.87455C14.4094 4.87455 14.2026 4.9602 14.0502 5.11266C13.8977 5.26511 13.812 5.47189 13.812 5.6875C13.812 5.90311 13.8977 6.10989 14.0502 6.26234L16.7263 8.9375H7.3125C7.09701 8.9375 6.89035 9.0231 6.73798 9.17548C6.5856 9.32785 6.5 9.53451 6.5 9.75C6.5 9.96549 6.5856 10.1722 6.73798 10.3245C6.89035 10.4769 7.09701 10.5625 7.3125 10.5625H16.7263L14.0502 13.2377C13.8977 13.3901 13.812 13.5969 13.812 13.8125C13.812 14.0281 13.8977 14.2349 14.0502 14.3873C14.2026 14.5398 14.4094 14.6255 14.625 14.6255C14.8406 14.6255 15.0474 14.5398 15.1998 14.3873L19.2623 10.3248C19.3379 10.2494 19.3978 10.1598 19.4387 10.0611C19.4796 9.9625 19.5006 9.85678 19.5006 9.75C19.5006 9.64322 19.4796 9.5375 19.4387 9.43886C19.3978 9.34023 19.3379 9.25062 19.2623 9.17516Z"
                                                                fill="#111111"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">Log out</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /section-menu-left */}
                        {/* section-content-right */}
                        <div className="section-content-right">
                            {/* header-dashboard */}
                            <div className="header-dashboard">
                                <div className="wrap">
                                    <div className="header-left">
                                        <a href="index.html">
                                            <img
                                                className
                                                id="logo_header_mobile"
                                                alt
                                                src="https://themesflat.co/html/ecomus/images/logo/logo.svg"
                                                data-light="../images/logo/logo.svg"
                                                data-dark="https://themesflat.co/html/ecomus/images/logo/logo-white.svg"
                                            />
                                        </a>
                                        <div className="button-show-hide">
                                            <i className="icon-chevron-left" />
                                        </div>
                                        <form className="form-search flex-grow">
                                            <fieldset className="name">
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className="show-search"
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
                                            <div className="box-content-search" id="box-content-search">
                                                <ul className="mb-24">
                                                    <li className="mb-14">
                                                        <div className="body-title">Top selling product</div>
                                                    </li>
                                                    <li className="mb-14">
                                                        <div className="divider" />
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-1.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Neptune Longsleeve
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-2.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Ribbed Tank Top
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-3.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Ribbed modal T-shirt
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul className>
                                                    <li className="mb-14">
                                                        <div className="body-title">Order product</div>
                                                    </li>
                                                    <li className="mb-14">
                                                        <div className="divider" />
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-4.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Oversized Motif T-shirt
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-5.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            V-neck linen T-shirt
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-6.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Jersey thong body
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/product-7.jpg" alt />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Jersey thong body
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-grid">
                                        {/* <div className="header-item country">
                                            <select className="image-select no-text">
                                                <option data-thumbnail="images/country/1.png">ENG</option>
                                                <option data-thumbnail="images/country/9.png">VIE</option>
                                            </select>
                                        </div>
                                        <div className="header-item button-dark-light">
                                            <i className="icon-moon" />
                                        </div>
                                        <div className="popup-wrap noti type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <span className="text-tiny">1</span>
                                                        <i className="icon-bell" />
                                                    </span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <h6>Notifications</h6>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/customers/customer-1.jpg" alt />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Cameron Williamson
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">Hello?</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/customers/customer-2.jpg" alt />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Ralph Edwards
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">Are you there? interested i this...</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/customers/customer-3.jpg" alt />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Eleanor Pena
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">Interested in this loads?</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/customers/customer-1.jpg" alt />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Jane Cooper
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">Okay...Do we have a deal?</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popup-wrap message type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton2"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <span className="text-tiny">1</span>
                                                        <i className="icon-message-square" />
                                                    </span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton2">
                                                    <li>
                                                        <h6>Message</h6>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-1">
                                                            <div className="image">
                                                                <i className="icon-noti-1" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">Discount available</div>
                                                                <div className="text-tiny">
                                                                    Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-2">
                                                            <div className="image">
                                                                <i className="icon-noti-2" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">Account has been verified</div>
                                                                <div className="text-tiny">Mauris libero ex, iaculis vitae rhoncus et</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-3">
                                                            <div className="image">
                                                                <i className="icon-noti-3" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">Order shipped successfully</div>
                                                                <div className="text-tiny">Integer aliquam eros nec sollicitudin sollicitudin</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-4">
                                                            <div className="image">
                                                                <i className="icon-noti-4" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">
                                                                    Order pending: <span>ID 305830</span>
                                                                </div>
                                                                <div className="text-tiny">Ultricies at rhoncus at ullamcorper</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="header-item button-zoom-maximize">
                                            <div className>
                                                <i className="icon-maximize" />
                                            </div>
                                        </div>
                                        <div className="popup-wrap apps type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton4"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <svg
                                                            width={14}
                                                            height={14}
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.625 0.812501C3.06874 0.812501 2.52497 0.977451 2.06246 1.28649C1.59995 1.59553 1.23946 2.03479 1.02659 2.5487C0.813719 3.06262 0.758022 3.62812 0.866543 4.17369C0.975064 4.71926 1.24293 5.2204 1.63626 5.61374C2.0296 6.00707 2.53074 6.27494 3.07631 6.38346C3.62188 6.49198 4.18738 6.43628 4.7013 6.22341C5.21522 6.01054 5.65447 5.65006 5.96351 5.18754C6.27255 4.72503 6.4375 4.18126 6.4375 3.625C6.4375 2.87908 6.14118 2.16371 5.61374 1.63626C5.08629 1.10882 4.37092 0.812501 3.625 0.812501ZM3.625 5.3125C3.29125 5.3125 2.96498 5.21353 2.68748 5.02811C2.40997 4.84268 2.19368 4.57913 2.06595 4.27078C1.93823 3.96243 1.90481 3.62313 1.96993 3.29579C2.03504 2.96844 2.19576 2.66776 2.43176 2.43176C2.66776 2.19576 2.96844 2.03504 3.29579 1.96993C3.62313 1.90481 3.96243 1.93823 4.27078 2.06595C4.57913 2.19368 4.84268 2.40997 5.02811 2.68748C5.21353 2.96498 5.3125 3.29125 5.3125 3.625C5.3125 4.07255 5.13471 4.50178 4.81824 4.81824C4.50178 5.13471 4.07255 5.3125 3.625 5.3125ZM10.375 6.4375C10.9313 6.4375 11.475 6.27255 11.9375 5.96351C12.4001 5.65447 12.7605 5.21522 12.9734 4.7013C13.1863 4.18738 13.242 3.62188 13.1335 3.07631C13.0249 2.53074 12.7571 2.0296 12.3637 1.63626C11.9704 1.24293 11.4693 0.975064 10.9237 0.866543C10.3781 0.758022 9.81262 0.813719 9.2987 1.02659C8.78479 1.23946 8.34553 1.59995 8.03649 2.06246C7.72745 2.52497 7.5625 3.06874 7.5625 3.625C7.5625 4.37092 7.85882 5.08629 8.38626 5.61374C8.91371 6.14118 9.62908 6.4375 10.375 6.4375ZM10.375 1.9375C10.7088 1.9375 11.035 2.03647 11.3125 2.2219C11.59 2.40732 11.8063 2.67087 11.934 2.97922C12.0618 3.28757 12.0952 3.62687 12.0301 3.95422C11.965 4.28156 11.8042 4.58224 11.5682 4.81824C11.3322 5.05425 11.0316 5.21496 10.7042 5.28008C10.3769 5.34519 10.0376 5.31177 9.72922 5.18405C9.42087 5.05633 9.15732 4.84003 8.9719 4.56253C8.78647 4.28502 8.6875 3.95876 8.6875 3.625C8.6875 3.17745 8.86529 2.74823 9.18176 2.43176C9.49823 2.11529 9.92745 1.9375 10.375 1.9375ZM3.625 7.5625C3.06874 7.5625 2.52497 7.72745 2.06246 8.03649C1.59995 8.34553 1.23946 8.78479 1.02659 9.2987C0.813719 9.81262 0.758022 10.3781 0.866543 10.9237C0.975064 11.4693 1.24293 11.9704 1.63626 12.3637C2.0296 12.7571 2.53074 13.0249 3.07631 13.1335C3.62188 13.242 4.18738 13.1863 4.7013 12.9734C5.21522 12.7605 5.65447 12.4001 5.96351 11.9375C6.27255 11.475 6.4375 10.9313 6.4375 10.375C6.4375 9.62908 6.14118 8.91371 5.61374 8.38626C5.08629 7.85882 4.37092 7.5625 3.625 7.5625ZM3.625 12.0625C3.29125 12.0625 2.96498 11.9635 2.68748 11.7781C2.40997 11.5927 2.19368 11.3291 2.06595 11.0208C1.93823 10.7124 1.90481 10.3731 1.96993 10.0458C2.03504 9.71844 2.19576 9.41776 2.43176 9.18176C2.66776 8.94576 2.96844 8.78504 3.29579 8.71993C3.62313 8.65481 3.96243 8.68823 4.27078 8.81595C4.57913 8.94368 4.84268 9.15997 5.02811 9.43748C5.21353 9.71498 5.3125 10.0412 5.3125 10.375C5.3125 10.8226 5.13471 11.2518 4.81824 11.5682C4.50178 11.8847 4.07255 12.0625 3.625 12.0625ZM10.375 7.5625C9.81874 7.5625 9.27497 7.72745 8.81246 8.03649C8.34995 8.34553 7.98946 8.78479 7.77659 9.2987C7.56372 9.81262 7.50802 10.3781 7.61654 10.9237C7.72506 11.4693 7.99293 11.9704 8.38626 12.3637C8.7796 12.7571 9.28074 13.0249 9.82631 13.1335C10.3719 13.242 10.9374 13.1863 11.4513 12.9734C11.9652 12.7605 12.4045 12.4001 12.7135 11.9375C13.0226 11.475 13.1875 10.9313 13.1875 10.375C13.1875 9.62908 12.8912 8.91371 12.3637 8.38626C11.8363 7.85882 11.1209 7.5625 10.375 7.5625ZM10.375 12.0625C10.0412 12.0625 9.71498 11.9635 9.43748 11.7781C9.15997 11.5927 8.94368 11.3291 8.81595 11.0208C8.68823 10.7124 8.65481 10.3731 8.71993 10.0458C8.78504 9.71844 8.94576 9.41776 9.18176 9.18176C9.41776 8.94576 9.71844 8.78504 10.0458 8.71993C10.3731 8.65481 10.7124 8.68823 11.0208 8.81595C11.3291 8.94368 11.5927 9.15997 11.7781 9.43748C11.9635 9.71498 12.0625 10.0412 12.0625 10.375C12.0625 10.8226 11.8847 11.2518 11.5682 11.5682C11.2518 11.8847 10.8226 12.0625 10.375 12.0625Z"
                                                                fill="#0A0A0C"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton4">
                                                    <li>
                                                        <h6>Related apps</h6>
                                                    </li>
                                                    <li>
                                                        <ul className="list-apps">
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-1.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Photoshop</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-2.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">illustrator</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-3.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Sheets</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-4.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Gmail</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-5.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Messenger</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-6.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Youtube</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-7.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Flaticon</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-8.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Instagram</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-9.png" alt />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">PDF</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all app
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div className="popup-wrap user type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton3"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-user wg-user">
                                                        <span className="image">
                                                            <img src="" alt />
                                                        </span>
                                                        <span className="flex flex-column">
                                                            <span className="body-text text-main-dark">{user.username}</span>
                                                            <span className="text-tiny">Sale Administrator</span>
                                                        </span>
                                                    </span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton3">
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-user" />
                                                            </div>
                                                            <div className="body-title-2">Account</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-mail" />
                                                            </div>
                                                            <div className="body-title-2">Inbox</div>
                                                            <div className="number">27</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-file-text" />
                                                            </div>
                                                            <div className="body-title-2">Taskboard</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="setting.html" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-settings" />
                                                            </div>
                                                            <div className="body-title-2">Setting</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-headphones" />
                                                            </div>
                                                            <div className="body-title-2">Support</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to={"/logout"}>
                                                            <div className="icon">
                                                                <i className="icon-log-out" />
                                                            </div>
                                                            <div className="body-title-2">Log out</div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Outlet />
                        </div>
                        {/* /section-content-right */}
                    </div>
                    {/* /layout-wrap */}
                </div>
                {/* /#page */}
            </div>
        </div>
    );
};

export default AdminLayout;
