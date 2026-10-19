import { regularSteps, waxSteps, storyCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import ScienceDiagram from '../components/ScienceDiagram'
import coconutData from '../data/coconutData'

const scienceFaqs = [
  {
    question: 'Makapuno / Macapuno nghĩa là gì?',
    answer:
      'Macapuno là tên gọi tại Philippines cho dạng dừa có nội nhũ mềm và đầy. Đây là tên mô tả đặc tính, không phải tên khoa học của một loài dừa riêng.',
  },
  {
    question: 'Polysaccharide liên quan gì đến cơm dừa sáp?',
    answer:
      'Polysaccharide là nhóm carbohydrate gồm nhiều đơn vị đường liên kết. Nghiên cứu trên Macapuno ghi nhận sự chuyển hóa galactomannan khác với dừa thường, góp phần tạo kết cấu mềm và dạng gel của nội nhũ. Sơ đồ trên chỉ khái quát quá trình này.',
  },
]

function Science() {
  return (
    <main>
      <PageHero
        eyebrow="04 · Khoa học"
        title="BÍ MẬT PHÍA SAU LỚP “SÁP”"
        description={storyCopy.science}
        image="/images/cautaoduasap.png"
      />

      <section className="detail-body">
        <div className="container">
          <div className="detail-panel">
            <SectionTitle
              eyebrow="Tên khoa học"
              title={coconutData.scientificName}
              description="Cấu trúc bên trong trái dừa tạo nên trải nghiệm mềm, dẻo và béo đặc trưng."
            />
          </div>
          <div className="row g-4 mt-4 science-diagrams">
            <div className="col-lg-6">
              <ScienceDiagram title="DỪA THƯỜNG" steps={regularSteps} />
            </div>
            <div className="col-lg-6">
              <ScienceDiagram title="DỪA SÁP" steps={waxSteps} accent />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <SectionTitle
            eyebrow="Makapuno / Macapuno"
            title="Một thuật ngữ cho sự khác biệt"
            description={storyCopy.macapuno}
          />
          <FaqList items={scienceFaqs} />
        </div>
      </section>

      <DetailCta
        title="Khoa học đi cùng người giữ nghề"
        description="Mỗi đặc tính của trái dừa đều gắn với bàn tay và kinh nghiệm của người nông dân."
        nextPath="/nguoi-nong-dan"
        nextLabel="Gặp người giữ nghề"
      />
    </main>
  )
}

export default Science
