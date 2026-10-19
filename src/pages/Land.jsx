import { landFeatures } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import PageHero from '../components/PageHero'
import geographicData from '../data/geographicData'

function Land() {
  return (
    <main>
      <PageHero
        eyebrow="02 · Vùng đất"
        title="CẦU KÈ, TRÀ VINH"
        description="Nơi đất, nước, khí hậu và kinh nghiệm canh tác cùng tạo nên một vùng dừa đặc biệt."
        image="/images/maps.png"
      />

      <section className="detail-body">
        <div className="container detail-lead-grid">
          <div className="detail-copy">
            <SectionTitle
              eyebrow="Một vùng đất"
              title="Điều kiện làm nên hương vị"
              description={geographicData.landscape}
            />
            <ul className="detail-list">
              {geographicData.values.map((value) => (
                <li key={value}>
                  <i className="bi bi-leaf" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="detail-visual"
            style={{ '--detail-image': "url('/images/maps.png')" }}
            role="img"
            aria-label="Bản đồ vùng Cầu Kè, Trà Vinh"
          />
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <div className="detail-band-heading">
            <p className="section-eyebrow">Bốn nền tảng</p>
            <h2>VÙNG ĐẤT LÀM NÊN HƯƠNG VỊ</h2>
          </div>
          <div className="editorial-grid">
            {landFeatures.map((foundation) => (
              <article className="editorial-item" key={foundation.title}>
                <i className={`bi ${foundation.icon}`} aria-hidden="true" />
                <h3>{foundation.title}</h3>
                <p>{foundation.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DetailCta
        title="Một thế kỷ được tiếp nối"
        description="Từ Cầu Kè, câu chuyện dừa sáp đã đi qua nhiều dấu mốc đáng nhớ."
        nextPath="/100-nam"
        nextLabel="Xem dòng thời gian"
      />
    </main>
  )
}

export default Land
