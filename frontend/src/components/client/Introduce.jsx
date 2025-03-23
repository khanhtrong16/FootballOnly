function Introduce() {
  return (
    <>
      <main className="container py-5">
        <div className="text-center">
          <h1 className="text-uppercase fw-bold">Quản lý sân bóng</h1>
          <p className="text-muted">
            Hệ thống hỗ trợ quản lý sân bóng, đặt lịch và theo dõi thông tin dễ
            dàng.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card border-0 shadow-sm p-4 h-100 w-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1049/1049311.png"
                alt="Quản lý sân bãi"
                className="mx-auto d-block"
                width={60}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Quản lý sân bãi</h5>
                <p className="card-text text-muted text-center">
                  Thêm, sửa, xóa và cập nhật thông tin sân bóng dễ dàng.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card border-0 shadow-sm p-4 h-100 w-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="Quản lý khách hàng"
                className="mx-auto d-block"
                width={60}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Quản lý khách hàng</h5>
                <p className="card-text text-muted text-center">
                  Theo dõi thông tin khách hàng và lịch sử đặt sân.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card border-0 shadow-sm p-4 h-100 w-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="Đặt sân linh hoạt"
                className="mx-auto d-block"
                width={60}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Đặt sân linh hoạt</h5>
                <p className="card-text text-muted text-center">
                  Đặt sân theo giờ, kiểm tra tình trạng sân trống nhanh chóng.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card border-0 shadow-sm p-4 h-100 w-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2011/2011170.png"
                alt="Quản lý doanh thu"
                className="mx-auto d-block"
                width={60}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Quản lý doanh thu</h5>
                <p className="card-text text-muted text-center">
                  Theo dõi doanh thu, xuất báo cáo chi tiết và minh bạch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Introduce;
