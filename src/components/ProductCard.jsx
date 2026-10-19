import { Link } from 'react-router-dom'

function ProductCard({ product, showLink = true }) {
  return (
    <article className="product-card">
      <div
        className="product-card-image"
        role="img"
        aria-label={`Hình ảnh ${product.name}`}
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <span className="product-badge">{product.badge}</span>
      </div>
      <div className="product-card-body">
        <p className="product-index">{product.index}</p>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        {showLink && (
          <Link className="product-card-button" to="/san-pham">
            Khám phá <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}

export default ProductCard
