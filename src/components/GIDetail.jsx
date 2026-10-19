function GIDetail({ data }) {
  return (
    <div className="gi-detail">
      <figure className="gi-certificate">
        <img
          src="/images/gcn202.jpg"
          alt="Lễ trao Giấy chứng nhận đăng ký chỉ dẫn địa lý Trà Vinh cho sản phẩm quả dừa sáp"
        />
        <figcaption>Lễ trao Giấy chứng nhận chỉ dẫn địa lý cho quả dừa sáp Trà Vinh</figcaption>
      </figure>
      <div className="gi-information">
        <p className="section-eyebrow">Văn bằng bảo hộ nguồn gốc</p>
        <h3>
          CHỈ DẪN ĐỊA LÝ<br />
          <span>“TRÀ VINH” CHO QUẢ DỪA SÁP</span>
        </h3>
        <p className="gi-summary">
          Cục Sở hữu trí tuệ cấp văn bằng bảo hộ cho quả dừa sáp mang chỉ dẫn
          địa lý “Trà Vinh”; Ủy ban nhân dân tỉnh Trà Vinh là tổ chức quản lý.
        </p>
        <dl className="gi-facts">
          <div>
            <dt>Số Giấy chứng nhận</dt>
            <dd>{data.registrationNumber}</dd>
          </div>
          <div>
            <dt>Số Quyết định</dt>
            <dd>{data.decision}</dd>
          </div>
          <div>
            <dt>Ngày cấp</dt>
            <dd>{data.issuedDate}</dd>
          </div>
          <div>
            <dt>Tổ chức quản lý</dt>
            <dd>{data.managingOrganization}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default GIDetail
