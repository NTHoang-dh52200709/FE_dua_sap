import { useEffect, useRef, useState } from 'react'

function Timeline({ items }) {
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisibleItems((current) => (
              current.includes(index) ? current : [...current, index]
            ))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((item) => item && observer.observe(item))
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="timeline-component">
      {items.map((item, index) => (
        <article
          className={`timeline-event${visibleItems.includes(index) ? ' is-visible' : ''}`}
          data-index={index}
          key={item.year}
          ref={(element) => {
            itemRefs.current[index] = element
          }}
        >
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-card">
            <div
              className="timeline-image"
              style={{ backgroundImage: `url(${item.image})` }}
              role="img"
              aria-label={`Hình ảnh cho mốc ${item.year}`}
            />
            <div className="timeline-copy">
              <p className="timeline-year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Timeline
