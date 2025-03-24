import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/cssClient.css";
import LoginForm from "../auth/Login";
import RegisterForm from "../auth/Register";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
function ClientLayout() {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    useEffect(() => {
        if (!token) {
            setUser(null);
            return;
        }
        try {
            const decoded = jwtDecode(token);
            fetchUser(decoded.id);
        } catch (error) {
            console.error("Lỗi khi decode token:", error);
            handleLogout();
        }
    }, [token]);
    const fetchUser = async (userId) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/user/${userId}`);
            setUser(data.user);
        } catch (error) {
            console.error("Lỗi khi lấy thông tin user:", error);
            handleLogout();
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
    };

    return (
        <div className="client-layout all">
            <header className="header">
                <div className="header-row">
                    <div className="container">
                        <div className="row align-items-center header-top">
                            <div className="col-sm-6 col-12 text-center text-sm-start">
                                <Link to="/" className="home-logo nav-link text-white fs-3">
                                    <img className="w-20 h-20" src="https://i.imgur.com/skIMnQk.png" alt="" />
                                </Link>
                            </div>
                            {user?.role == "owner" ? (
                                <div className="col-auto ms-auto d-flex d-none d-sm-block booking-btn">
                                    <Link to="/admin" className="nav-link text-end text-white">
                                        Trang quản trị
                                    </Link>
                                </div>
                            ) : (
                                <div className="col-auto ms-auto d-flex d-none d-sm-block booking-btn">
                                    <Link to="/booking" className="nav-link text-end text-white">
                                        Đặt sân ngay
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="header-row">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">
                                            <i className="bi bi-house-door"></i> Trang chủ
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/liststadium">
                                            Danh sách sân bóng
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/introduce">
                                            Giới thiệu
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">
                                            Liên hệ
                                        </Link>
                                    </li>
                                </ul>
                                {user ? (
                                    <ul className="navbar-nav ms-auto">
                                        <li className="d-flex align-items-center">
                                            <a className="ms-2 text-decoration-none text-white ">{user.username}</a>
                                        </li>
                                        <li className="d-flex align-items-center ps-2">
                                            <a onClick={handleLogout} className="btn btn-primary">
                                                Đăng Xuất
                                            </a>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="navbar-nav ms-auto">
                                        <li>
                                            <a
                                                href="#"
                                                className="ms-2 text-decoration-none text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowLogin(true);
                                                    setShowRegister(false);
                                                }}
                                            >
                                                Đăng Nhập
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="ms-2 text-decoration-none text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowRegister(true);
                                                    setShowLogin(false);
                                                }}
                                            >
                                                Đăng Ký
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            {showLogin && (
                <div className="overlay" onClick={() => setShowLogin(false)}>
                    <div className="form-container" onClick={(e) => e.stopPropagation()}>
                        <LoginForm handleClose={() => setShowLogin(false)} />
                    </div>
                </div>
            )}
            {showRegister && (
                <div className="overlay" onClick={() => setShowRegister(false)}>
                    <div className="form-container" onClick={(e) => e.stopPropagation()}>
                        <RegisterForm handleClose={() => setShowRegister(false)} />
                    </div>
                </div>
            )}

            <footer className="footer text-white">
                <div className="container py-4">
                    <div className="row">
                        {/* Giới thiệu */}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <h5 className="text-uppercase">Giới thiệu</h5>
                            <p>Chúng tôi cung cấp tiện ích thông minh giúp bạn tìm kiếm sân bóng đá ở khắp mọi nội trong thành phố Hà Nội</p>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link to="/privacy-policy" className="text-white nav-link">
                                        Chính sách bảo mật
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/refund-policy" className="text-white nav-link">
                                        Chính sách huỷ (đổi trả)
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/inspection-policy" className="text-white nav-link">
                                        Chính sách kiểm hàng
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/payment-policy" className="text-white nav-link">
                                        Chính sách thanh toán
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Thông tin */}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <h5 className="text-uppercase">Thông tin</h5>
                            <div className="d-flex flex-column gap-2">
                                <p>
                                    <i className="bi bi-envelope"></i>
                                    <Link to="mailto:contact@tamthaitu.com" className="text-white">
                                        {" "}
                                        contact@tamthaitu.com
                                    </Link>
                                </p>
                                <p>
                                    <i className="bi bi-geo-alt"></i> Số 99, Ngõ 123, Đường Phương Canh, Phường Xuân Phương, Quận Nam Từ Liêm, Thành
                                    phố Hà Nội.
                                </p>
                                <p>
                                    <i className="bi bi-telephone"></i>
                                    <Link to="tel:0987654JQK" className="text-white">
                                        {" "}
                                        0987.654.JQK
                                    </Link>
                                </p>
                                <p>
                                    <i className="bi bi-file-earmark-text"></i> Giấy phép ĐKKD: 0110175404 (Cấp ngày 28/11/2030)
                                </p>
                            </div>
                        </div>

                        {/* Liên hệ */}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <h5 className="text-uppercase">Liên hệ</h5>
                            <p>
                                Chăm sóc khách hàng: <strong>0987.654.JQK</strong>
                            </p>
                            <div className="d-flex justify-content-md-start justify-content-center gap-3  ">
                                <Link to="#" className="text-white fs-4">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link to="#" className="text-white fs-4">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link to="#" className="text-white fs-4">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white opacity-50" />
                    <p className="text-center mt-3">&copy; 2025 Tam Thái Tử</p>
                </div>
            </footer>
        </div>
    );
}

export default ClientLayout;
