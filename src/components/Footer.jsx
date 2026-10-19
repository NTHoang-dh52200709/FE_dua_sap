import { Link } from 'react-router-dom'

const footerNavigation = [
  { label: 'Dừa sáp', path: '/dua-sap' },
  { label: 'Vùng đất', path: '/vung-dat' },
  { label: '100 năm', path: '/100-nam' },
  { label: 'Khoa học', path: '/khoa-hoc' },
  { label: 'Người nông dân', path: '/nguoi-nong-dan' },
  { label: 'Ẩm thực', path: '/am-thuc' },
  { label: 'Sản phẩm', path: '/san-pham' },
  { label: 'Chỉ dẫn địa lý', path: '/chi-dan-dia-ly' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" to="/">
            <img className="brand-logo" src="/images/logo.svg" alt="" aria-hidden="true" />
            <span>
              <strong>DỪA SÁP</strong>
              <small>TRÀ VINH</small>
            </span>
          </Link>
          <p className="footer-copy">Website giới thiệu và quảng bá giá trị dừa sáp Trà Vinh.</p>
        </div>
        <div>
          <p className="footer-kicker">Điều hướng</p>
          <ul className="footer-links">
            {footerNavigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-kicker">Về dự án</p>
          <p className="footer-copy">
            Một không gian kể chuyện về giống dừa đặc sản, vùng trồng và những
            giá trị được gìn giữ qua nhiều thế hệ.
          </p>
          <details className="footer-sources">
            <summary>Tài liệu tham khảo</summary>
            <ul className="footer-links">
              <li><a href="https://ipvietnam.gov.vn/web/guest/cac-bai-viet-ve-chi-dan-ia-ly/-/asset_publisher/fNUbGw2ZxGKy/content/bao-ho-chi-dan-ia-ly-tra-vinh-cho-san-pham-qua-dua-sap" target="_blank" rel="noreferrer">Cục Sở hữu trí tuệ · Lịch sử và chỉ dẫn địa lý</a></li>
              <li><a href="https://www.tvu.edu.vn/bao-ton-dac-san-dua-sap-nho-cong-nghe-nuoi-cay-mo-te-bao/" target="_blank" rel="noreferrer">Đại học Trà Vinh · Bảo tồn nguồn giống</a></li>
              <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0304423814003215" target="_blank" rel="noreferrer">Nghiên cứu · Đặc điểm Macapuno</a></li>
              <li><a href="https://ask.loc.gov/science/faq/308429" target="_blank" rel="noreferrer">Library of Congress · Cấu tạo trái dừa</a></li>
              <li><a href="https://nhandan.vn/post-827057.html" target="_blank" rel="noreferrer">Báo Nhân Dân · Hội thi 127 món năm 2024</a></li>
              <li><a href="https://www.vicosap.com.vn/" target="_blank" rel="noreferrer">Vicosap · Các sản phẩm chế biến</a></li>
            </ul>
          </details>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© 2026 Dừa sáp Trà Vinh</small>
        <span>Giá trị bản địa · Tri thức cộng đồng</span>
      </div>
    </footer>
  )
}

export default Footer
