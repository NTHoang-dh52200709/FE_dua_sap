import { storyCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import PageHero from '../components/PageHero'
import Timeline from '../components/Timeline'
import timelineData from '../data/timelineData'

function History() {
  return (
    <main>
      <PageHero
        eyebrow="03 · Dòng thời gian"
        title="HƠN 100 NĂM"
        description="Một câu chuyện được gìn giữ qua những mốc thời gian của dừa sáp Trà Vinh."
        image="/images/100nam.jpg"
      />

      <section className="detail-timeline">
        <div className="container">
          <SectionTitle
            eyebrow="1924 — 2024"
            title="Một thế kỷ được ghi nhớ"
            description={storyCopy.history}
          />
          <Timeline items={timelineData} />
        </div>
      </section>

      <section className="detail-body">
        <div className="container detail-panel">
          <SectionTitle
            eyebrow="Di sản"
            title="Một phần ký ức của vùng đất"
            description="Dừa sáp không chỉ được nhìn qua một mùa vụ, mà còn qua những kinh nghiệm được truyền lại, sưu tập và bảo tồn."
          />
        </div>
      </section>

      <DetailCta
        title="Khoa học phía sau lớp sáp"
        description="Nhìn gần hơn vào cấu trúc làm nên sự khác biệt của cơm dừa sáp."
        nextPath="/khoa-hoc"
        nextLabel="Khám phá khoa học"
      />
    </main>
  )
}

export default History
