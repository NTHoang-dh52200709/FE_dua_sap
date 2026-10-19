import { useState } from 'react'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import FoodModal from '../components/FoodModal'
import GIDetail from '../components/GIDetail'
import ProductCard from '../components/ProductCard'
import ScienceDiagram from '../components/ScienceDiagram'
import Timeline from '../components/Timeline'
import foodData from '../data/foodData'
import geographicData from '../data/geographicData'
import productsData from '../data/productsData'
import timelineData from '../data/timelineData'
import { storyCopy, landFeatures, farmerRoles, comparisonCopy, regularSteps, waxSteps } from '../data/editorialData'

const coconutTraits = [
  'Cơm dừa đặc ruột',
  'Mềm và dẻo',
  'Béo đặc trưng',
  'Nước ít hơn dừa thông thường',
  'Nội nhũ có cấu trúc đặc biệt',
]

function Home() {
  const [selectedFood, setSelectedFood] = useState(foodData[0])
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false)

  const openFoodDetails = (food) => {
    setSelectedFood(food)
    setIsFoodModalOpen(true)
  }

  return (
    <main>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="container home-hero-content">
          <p className="section-eyebrow">Một câu chuyện từ miền đất phù sa</p>
          <h1 id="hero-title">
            DỪA SÁP<br />TRÀ VINH
          </h1>
          <p className="hero-statement">
            {storyCopy.hero}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#trai-dua">
              Khám phá câu chuyện <i className="bi bi-arrow-down-right" aria-hidden="true" />
            </a>
            <Link className="btn btn-outline-light" to="/san-pham">
              Xem sản phẩm <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#trai-dua" aria-label="Cuộn đến phần Trái dừa">
          <span>Cuộn để khám phá</span>
          <i className="bi bi-arrow-down" aria-hidden="true" />
        </a>
      </section>

      <section className="story-section coconut-section" id="trai-dua" aria-labelledby="coconut-title">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="coconut-visual" role="img" aria-label="Phần cơm đặc ruột của trái dừa sáp Trà Vinh" />
            </div>
            <div className="col-lg-6">
              <p className="section-eyebrow">01 · Trái dừa</p>
              <h2 id="coconut-title">TRÁI DỪA</h2>
              <p className="story-intro">Điều gì khiến dừa sáp khác với một trái dừa thông thường?</p>
              <ul className="trait-list">
                {coconutTraits.map((trait) => (
                  <li key={trait}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="comparison" aria-label="So sánh dừa thường và dừa sáp">
            <div className="comparison-side regular-coconut">
              <span>DỪA THƯỜNG</span>
              <strong>Thanh mát</strong>
              <small>{comparisonCopy.regular}</small>
            </div>
            <div className="comparison-divider"><span>và</span></div>
            <div className="comparison-side wax-coconut">
              <span>DỪA SÁP</span>
              <strong>Béo dẻo</strong>
              <small>{comparisonCopy.wax}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section land-section" id="vung-dat" aria-labelledby="land-title">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-7">
              <p className="section-eyebrow">02 · Vùng đất</p>
              <h2 id="land-title">
                VÙNG ĐẤT
                <br />
                LÀM NÊN HƯƠNG VỊ
              </h2>
              <p className="story-intro">
                {storyCopy.land}
              </p>
            </div>
            <div className="col-lg-5">
              <div className="land-location">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                <span>TRÀ VINH<br /><strong>CẦU KÈ</strong></span>
              </div>
            </div>
          </div>
          <div className="row g-4 land-lower">
            <div className="col-lg-5">
              <div className="land-map" role="img" aria-label="Bản đồ vùng Cầu Kè, Trà Vinh">
                <i className="bi bi-geo-alt-fill" aria-hidden="true" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="land-features">
                {landFeatures.map((feature) => (
                  <article className="land-feature" key={feature.title}>
                    <i className={`bi ${feature.icon}`} aria-hidden="true" />
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section history-section" id="100-nam" aria-labelledby="history-title">
        <div className="container">
          <div className="history-heading">
            <div>
              <p className="section-eyebrow">03 · Câu chuyện 100 năm</p>
              <h2 id="history-title">
                HƠN 100 NĂM<br />MỘT CÂU CHUYỆN<br />ĐƯỢC GÌN GIỮ
              </h2>
            </div>
            <p className="history-intro">
              {storyCopy.history}
            </p>
          </div>
          <Timeline items={timelineData} />
          <blockquote className="history-quote">
            “Không chỉ là một giống dừa,<br />mà là một phần ký ức của vùng đất.”
          </blockquote>
        </div>
      </section>

      <section className="story-section science-section" id="khoa-hoc" aria-labelledby="science-title">
        <div className="container">
          <div className="science-heading">
            <div>
              <p className="section-eyebrow">04 · Khoa học</p>
              <h2 id="science-title">BÍ MẬT PHÍA SAU<br />LỚP “SÁP”</h2>
            </div>
            <p className="science-intro">{storyCopy.science}</p>
          </div>

          <div className="row g-4 science-diagrams">
            <div className="col-lg-6">
              <ScienceDiagram title="DỪA THƯỜNG" steps={regularSteps} />
            </div>
            <div className="col-lg-6">
              <ScienceDiagram title="DỪA SÁP" steps={waxSteps} accent />
            </div>
          </div>

          <div className="macapuno-note">
            <p className="section-eyebrow">Thuật ngữ</p>
            <h3>MAKAPUNO / MACAPUNO</h3>
            <p>
              {storyCopy.macapuno}
            </p>
          </div>

          <div className="anatomy-layout">
            <div className="anatomy-copy">
              <p className="section-eyebrow">Giải phẫu một trái dừa</p>
              <h3>Cấu trúc bên trong</h3>
              <p>{storyCopy.anatomyIntro}</p>
              <div className="anatomy-detail">
                <strong>CẤU TẠO DỪA SÁP</strong>
                <span>{storyCopy.anatomyDetail}</span>
              </div>
            </div>
            <img
              className="anatomy-image"
              src="/images/cautaoduasap.png"
              alt="Ảnh bổ đôi dừa sáp với chú thích gáo dừa, cơm dừa và nước dừa"
            />
          </div>
        </div>
      </section>

      <section className="story-section farmer-section" id="nguoi-nong-dan" aria-labelledby="farmer-title">
        <div className="container">
          <div className="farmer-heading">
            <div>
              <p className="section-eyebrow">05 · Người nông dân</p>
              <h2 id="farmer-title">
                ĐẰNG SAU MỖI TRÁI DỪA<br />LÀ MỘT NGƯỜI GIỮ NGHỀ
              </h2>
            </div>
            <p className="farmer-intro">{storyCopy.farmer}</p>
          </div>

          <div className="farmer-portrait" role="img" aria-label="Hình ảnh người nông dân Trà Vinh">
            <blockquote>“Giữ được cây dừa<br />là giữ được một phần<br />ký ức của quê mình.”</blockquote>
            <span className="farmer-caption">Cầu Kè · Trà Vinh</span>
          </div>

          <div className="farmer-roles">
            <article className="farmer-role farmer-role-featured">
              <span className="role-index">01</span>
              <div>
                <h3>NGƯỜI TRỒNG</h3>
                <p>{farmerRoles[0].text}</p>
              </div>
            </article>
            <article className="farmer-role">
              <span className="role-index">02</span>
              <div>
                <h3>NGƯỜI GIỮ GIỐNG</h3>
                <p>{farmerRoles[1].text}</p>
              </div>
            </article>
            <article className="farmer-role farmer-role-with-image">
              <div
                className="role-image"
                role="img"
                aria-label="Người dân sơ chế và làm sản phẩm từ dừa sáp"
              />
              <div>
                <span className="role-index">03</span>
                <h3>NGƯỜI LÀM SẢN PHẨM</h3>
                <p>{farmerRoles[2].text}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="story-section food-section" id="am-thuc" aria-labelledby="food-title">
        <div className="container">
          <div className="food-heading">
            <div>
              <p className="section-eyebrow">06 · Ẩm thực</p>
              <h2 id="food-title">DỪA SÁP<br />TRÊN BÀN ĂN</h2>
            </div>
            <p className="food-intro">{storyCopy.cuisine}</p>
          </div>

          <div className="food-gallery">
            {foodData.map((food) => (
              <FoodCard food={food} key={food.name} onSelect={openFoodDetails} />
            ))}
          </div>

          <div className="food-statistic">
            <strong>127 món</strong>
            <span>Con số được ghi nhận trong hoạt động chế biến và trưng bày món ăn từ dừa sáp tại sự kiện năm 2024.</span>
          </div>
        </div>
      </section>

      <FoodModal
        food={selectedFood}
        open={isFoodModalOpen}
        onClose={() => setIsFoodModalOpen(false)}
      />

      <section className="story-section product-section" id="san-pham" aria-labelledby="product-title">
        <div className="container">
          <div className="product-heading">
            <div>
              <p className="section-eyebrow">07 · Sản phẩm</p>
              <h2 id="product-title">TỪ TRÁI DỪA<br />ĐẾN HỆ SINH THÁI<br />SẢN PHẨM</h2>
            </div>
            <p className="product-intro">{storyCopy.products}</p>
          </div>
          <div className="product-showcase">
            {productsData.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="story-section gi-section" id="chi-dan-dia-ly" aria-labelledby="gi-title">
        <div className="container">
          <div className="gi-heading">
            <div>
              <p className="section-eyebrow">08 · Chỉ dẫn địa lý</p>
              <h2 id="gi-title">MỘT TÊN GỌI GẮN<br />VỚI MỘT VÙNG ĐẤT</h2>
            </div>
            <p className="gi-intro">
              {storyCopy.gi}
            </p>
          </div>

          <GIDetail data={geographicData} />

          <div className="gi-flow" aria-label="Giá trị của chỉ dẫn địa lý">
            {geographicData.giFlow.map((step, index) => (
              <div className="gi-flow-step" key={step}>
                <span>{step}</span>
                {index < geographicData.giFlow.length - 1 && (
                  <i className="bi bi-arrow-down" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="gi-features">
            {geographicData.giFeatures.map((feature) => (
              <article className="gi-feature" key={feature.title}>
                <i className={`bi ${feature.icon}`} aria-hidden="true" />
                <h3>{feature.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="container final-cta-content">
          <p className="section-eyebrow">Một hành trình vẫn đang tiếp nối</p>
          <h2 id="final-cta-title">
            CÂU CHUYỆN<br />CHƯA DỪNG LẠI
          </h2>
          <p>
            Từ một giống dừa đặc biệt,<br />
            người Trà Vinh đã tạo nên một giá trị đặc sản được gìn giữ qua nhiều thế hệ.
          </p>
          <div className="final-cta-actions">
            <Link className="btn btn-primary" to="/san-pham">
              Khám phá sản phẩm <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
            <Link className="btn btn-outline-light" to="/dua-sap">
              Tìm hiểu về dừa sáp <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
