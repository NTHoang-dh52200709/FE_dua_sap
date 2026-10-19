function FaqList({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary><span>0{index + 1}</span>{item.question}<i className="bi bi-plus" aria-hidden="true" /></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
