import { storyCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import productsData from '../data/productsData'

function Products() {
  return (
    <main>
      <PageHero
        eyebrow="07 · Sản phẩm"
        title="TỪ TRÁI DỪA ĐẾN HỆ SINH THÁI SẢN PHẨM"
        description="Những cách phát triển sản phẩm giúp giá trị dừa sáp đi xa hơn mà vẫn giữ bản sắc địa phương."
        image="/images/duasaptuoi.jpg"
      />

      <section className="detail-body">
        <div className="container">
          <SectionTitle
            eyebrow="Sản phẩm tiêu biểu"
            title="Giữ lại điều đặc biệt"
            description={storyCopy.products}
          />
          <div className="detail-products">
            {productsData.map((product) => (
              <ProductCard key={product.name} product={product} showLink={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="container">
          <SectionTitle
            eyebrow="Nhóm sản phẩm"
            title="Nhiều hình thức, một nguồn gốc"
          />
          <div className="detail-feature-list">
            {productsData.map((product) => (
              <article className="detail-feature" key={product.name}>
                <span>{product.index}</span>
                <h3>{product.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DetailCta
        title="Một tên gọi gắn với một vùng đất"
        description="Giá trị sản phẩm được nâng đỡ bởi nguồn gốc và câu chuyện phía sau nó."
        nextPath="/chi-dan-dia-ly"
        nextLabel="Tìm hiểu chỉ dẫn địa lý"
      />
    </main>
  )
}

export default Products
