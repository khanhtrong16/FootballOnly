function Home() {
    return (
        <main>
            <div className="banner">
                <img
                    src="https://vanhoadoisong.vn/wp-content/uploads/2022/09/100-hinh-nen-anh-bong-da-dep-full-hd-cho-may-tinh-dien-thoai-35.jpg"
                    alt="Banner"
                    className="img-fluid w-100"
                />
                <div className="container content-overlay">
                    <h1 className="text-white text-uppercase mt-3 mb-3 title">Chào mừng đến với hệ thống đặt sân</h1>
                    <p className="text-white mb-4">Tìm sân bóng nhanh chóng và dễ dàng ngay tại Hà Nội.</p>
                    <form className="search-form">
                        <input type="text" className="form-control" placeholder="Nhập khu vực, tên sân..." />
                        <button type="submit" className="btn fw-medium text-white">
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </div>
            <div className="content-row">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mb-3 content-dash">
                            <div className="content-box text-center">
                                <i className="bi bi-geo-alt icon-large"></i>
                                <h5>Tìm kiếm vị trí sân</h5>
                                <p>Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 content-dash">
                            <div className="content-box text-center">
                                <i className="bi bi-calendar-check icon-large"></i>
                                <h5>Đặt lịch online</h5>
                                <p>Không cần đến trực tiếp, không cần gọi điện đặt lịch, bạn hoàn toàn có thể đặt sân ở bất kì đâu có internet</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 content-dash">
                            <div className="content-box text-center">
                                <i className="bi bi-people icon-large"></i>
                                <h5>Tìm đối, bắt cặp đấu</h5>
                                <p>Tìm kiếm, giao lưu các đội thi đấu thể thao, kết nối, xây dựng cộng đồng thể thao sôi nổi, mạnh mẽ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
