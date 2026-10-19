import { comparisonCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import coconutData from '../data/coconutData'

const faqs = [
  {
    question: 'Dừa sáp khác dừa thường ở điểm nào?',
    answer:
      'Dừa sáp có phần cơm dừa đặc ruột, mềm, dẻo và béo đặc trưng; lượng nước thường ít hơn dừa thông thường.',
  },
  {
    question: 'Phần đặc biệt của dừa sáp nằm ở đâu?',
    answer:
      'Cơm dừa là nội nhũ rắn, còn nước dừa là nội nhũ lỏng. Ở trái sáp, phần cơm có kết cấu mềm xốp và dày hơn; mức độ sáp có thể khác nhau giữa các trái.',
  },
  {
    question: 'Dừa sáp có thể được thưởng thức như thế nào?',
    answer:
      'Cơm dừa sáp có thể dùng trực tiếp hoặc trở thành nguyên liệu cho nhiều món ăn, thức uống và sản phẩm.',
  },
]

function Coconut() {
  return (
    <main>
      <PageHero
        eyebrow="01 · Giống dừa đặc sản"
        title="DỪA SÁP LÀ GÌ?"
        description="Một giống dừa đặc biệt với phần cơm dừa mềm, dẻo và béo đặc trưng từ Trà Vinh."
        image="/images/dua-sap.png"
      />

      <section className="detail-body">
        <div className="container detail-lead-grid">
          <div
            className="detail-visual"
            style={{ '--detail-image': "url('/images/saploai1.webp')" }}
            role="img"
            aria-label="Phần cơm đặc ruột bên trong trái dừa sáp Trà Vinh"
          />
          <div className="detail-copy">
            <SectionTitle
              eyebrow="Dừa sáp"
              title="Một trái dừa khác biệt"
              description="Dừa sáp mang trong mình những đặc điểm làm nên trải nghiệm riêng khi thưởng thức."
            />
            <ul className="detail-list">
              {coconutData.traits.map((trait) => (
                <li key={trait}>
                  <i className="bi bi-check2" aria-hidden="true" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <div className="detail-band-heading">
            <p className="section-eyebrow">So sánh</p>
            <h2>DỪA THƯỜNG<br />VÀ DỪA SÁP</h2>
          </div>
          <div className="comparison">
            <div className="comparison-side">
              <span>DỪA THƯỜNG</span>
              <strong>Thanh mát</strong>
              <small>{comparisonCopy.regular}</small>
            </div>
            <div className="comparison-divider"><span>và</span></div>
            <div className="comparison-side">
              <span>DỪA SÁP</span>
              <strong>Béo dẻo</strong>
              <small>{comparisonCopy.wax}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container">
          <SectionTitle
            eyebrow="Giải đáp"
            title="Những điều thường được hỏi"
            description="Một vài câu hỏi nền tảng về giống dừa đặc sản của Trà Vinh."
          />
          <FaqList items={faqs} />
        </div>
      </section>

      <DetailCta
        title="Từ trái dừa đến vùng đất"
        description="Hương vị của dừa sáp bắt đầu từ nơi cây dừa được nuôi dưỡng."
        nextPath="/vung-dat"
        nextLabel="Khám phá vùng đất"
      />
    </main>
  )
}

export default Coconut
