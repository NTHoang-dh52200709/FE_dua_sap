import { useEffect } from 'react'

function PageHero({ eyebrow, title, description, image }) {
  useEffect(() => {
    const defaultTitle = 'Dừa sáp Trà Vinh'
    const defaultDescription = 'Khám phá câu chuyện, vùng đất, khoa học, ẩm thực và giá trị của dừa sáp Trà Vinh.'

    document.title = `${title} | Dừa sáp Trà Vinh`

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', description)

    return () => {
      document.title = defaultTitle
      if (descriptionTag) descriptionTag.setAttribute('content', defaultDescription)
    }
  }, [description, title])

  return (
    <section
      className="detail-hero"
      style={{ '--detail-image': `url(${image})` }}
      aria-labelledby="detail-hero-title"
    >
      <div className="container detail-hero-content">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 id="detail-hero-title">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default PageHero
