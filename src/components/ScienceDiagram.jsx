function ScienceDiagram({ title, steps, accent = false }) {
  return (
    <article className={`science-diagram${accent ? ' science-diagram-accent' : ''}`}>
      <h3>{title}</h3>
      <div className="science-flow">
        {steps.map((step, index) => (
          <div className="science-step" key={step}>
            <span>{step}</span>
            {index < steps.length - 1 && <i className="bi bi-arrow-right" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </article>
  )
}

export default ScienceDiagram
