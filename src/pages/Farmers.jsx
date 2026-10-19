import { farmerRoles, storyCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import PageHero from '../components/PageHero'

function Farmers() {
  return (
    <main>
      <PageHero
        eyebrow="05 · Người nông dân"
        title="NGƯỜI GIỮ NGHỀ"
        description="Đằng sau mỗi trái dừa là kinh nghiệm, sự chăm sóc và một sinh kế gắn với quê hương."
        image="/images/nongdan.webp"
      />

      <section className="detail-body">
        <div className="container detail-lead-grid">
          <div
            className="detail-visual"
            style={{ '--detail-image': "url('/images/nongdan2.webp')" }}
            role="img"
            aria-label="Người dân sơ chế dừa tại Trà Vinh"
          />
          <div className="detail-copy">
            <SectionTitle
              eyebrow="Con người"
              title="Tri thức nằm trong từng vườn dừa"
              description={storyCopy.farmer}
            />
            <div className="quote-block">
              <i className="bi bi-quote" aria-hidden="true" />
              <p>Giữ được cây dừa là giữ được một phần ký ức của quê mình.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <div className="detail-band-heading">
            <p className="section-eyebrow">Một nghề, nhiều vai trò</p>
            <h2>TỪ VƯỜN DỪA ĐẾN SINH KẾ</h2>
          </div>
          <div className="editorial-grid">
            {farmerRoles.map((role) => (
              <article className="editorial-item" key={role.title}>
                <i className={`bi ${role.icon}`} aria-hidden="true" />
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DetailCta
        title="Khi sản vật bước lên bàn ăn"
        description="Dừa sáp tiếp tục câu chuyện của mình qua những món ăn và cách thưởng thức mới."
        nextPath="/am-thuc"
        nextLabel="Khám phá ẩm thực"
      />
    </main>
  )
}

export default Farmers
