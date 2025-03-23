function Contact() {
  return (
    <>
      <main className="container py-5">
        <div className="text-center">
          <h1 className="text-uppercase fw-bold">Liên hệ với chúng tôi</h1>
          <p className="text-muted">
            Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, hãy liên hệ ngay với
            chúng tôi!
          </p>
        </div>

        <div className="row mt-4">
          {/* Cột thông tin liên hệ */}
          <div className="col-md-6 d-flex">
            <div className="card border-0 shadow-sm p-4 w-100">
              <h3 className="text-center">Thông tin liên hệ</h3>
              <p>
                <i className="bi bi-envelope-fill text-primary"></i>{" "}
                <strong>Email:</strong> contact@tamthaitu.com
              </p>
              <p>
                <i className="bi bi-telephone-fill text-primary"></i>{" "}
                <strong>Hotline:</strong> 0987.654.JQK
              </p>
              <p>
                <i className="bi bi-geo-alt-fill text-primary"></i>{" "}
                <strong>Địa chỉ:</strong> Số 99, Ngõ 123, Đường Phương Canh,
                Xuân Phương, Nam Từ Liêm, Hà Nội.
              </p>
            </div>
          </div>

          {/* Cột gửi tin nhắn */}
          <div className="col-md-6 d-flex">
            <div className="card border-0 shadow-sm p-4 w-100">
              <h3 className="text-center">Gửi tin nhắn</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Nhập email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Nội dung
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Nhập tin nhắn"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4">
                    Gửi ngay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Contact;
