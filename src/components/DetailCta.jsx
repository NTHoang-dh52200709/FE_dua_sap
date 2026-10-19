import { Link } from 'react-router-dom'

function DetailCta({ eyebrow = 'Tiếp tục khám phá', title, description, nextPath, nextLabel }) {
  return (
    <section className="detail-cta">
      <div className="container detail-cta-inner">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="btn btn-primary" to={nextPath}>{nextLabel} <i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

export default DetailCta
