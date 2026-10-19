import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import GIDetail from '../components/GIDetail'
import PageHero from '../components/PageHero'
import geographicData from '../data/geographicData'

const officialSourceUrl =
  'https://ipvietnam.gov.vn/web/guest/tin-tuc-su-kien/-/' +
  'asset_publisher/7xsjBfqhCDAV/content/' +
  'bao-ho-chi-dan-ia-ly-tra-vinh-cho-san-pham-qua-dua-sap' +
  '?inheritRedirect=false&refererPlid=194714'

function GeographicIndication() {
  return (
    <main>
      <PageHero
        eyebrow="08 · Chỉ dẫn địa lý"
        title="MỘT TÊN GỌI GẮN VỚI MỘT VÙNG ĐẤT"
        description="Chỉ dẫn địa lý giúp nhận diện nguồn gốc, đặc tính và giá trị của dừa sáp Trà Vinh."
        image="/images/gcn202.jpg"
      />

      <section className="detail-body">
        <div className="container">
          <GIDetail data={geographicData} />
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <SectionTitle
            eyebrow="Giá trị được nhận diện"
            title="Từ vùng địa lý đến thương hiệu"
          />
          <div className="gi-flow">
            {geographicData.giFlow.map((step, index) => (
              <div className="gi-flow-step" key={step}>
                <span>{step}</span>
                {index < geographicData.giFlow.length - 1 && (
                  <i className="bi bi-arrow-down" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="detail-ref">
            <strong>Nguồn tham khảo:</strong>{' '}
            <a
              href={officialSourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Cục Sở hữu trí tuệ
            </a>
            .
          </div>
        </div>
      </section>

      <DetailCta
        title="Câu chuyện chưa dừng lại"
        description="Từ một giống dừa đặc biệt, một vùng đất tiếp tục kể câu chuyện của mình."
        nextPath="/"
        nextLabel="Về trang chủ"
      />
    </main>
  )
}

export default GeographicIndication
