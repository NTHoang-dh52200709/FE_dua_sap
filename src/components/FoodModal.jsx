import { useEffect, useRef } from 'react'

function FoodModal({ food, modalId = 'foodModal', open, onClose }) {
  const dialogRef = useRef(null)
  const recipe = food.recipe

  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.classList.add('modal-open')
    document.body.style.overflow = 'hidden'
    const dialog = dialogRef.current
    dialog.querySelector('.modal-body').scrollTop = 0
    dialog.querySelector('button')?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const items = dialog.querySelectorAll('button, a[href]')
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    dialog.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      document.body.style.overflow = previousOverflow
      dialog.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div
        className={`modal fade${open ? ' show' : ''}`}
        id={modalId}
        tabIndex="-1"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${modalId}Label`}
        style={{ display: 'block' }}
        onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable food-recipe-dialog">
          <div className="modal-content food-modal">
            <div className="modal-header">
              <p className="section-eyebrow">Vào bếp cùng dừa sáp</p>
              <button
                type="button"
                className="btn-close"
                aria-label="Đóng"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div
                className="food-modal-image"
                role="img"
                aria-label={`Hình ảnh ${food.name}`}
                style={{ backgroundImage: `url(${food.image})` }}
              />
              <p className="food-card-index">{food.index}</p>
              <h2 id={`${modalId}Label`}>{food.name}</h2>
              <p className="recipe-description">{food.description}</p>
              <div className="recipe-meta">
                <span><i className="bi bi-clock" aria-hidden="true" /> {recipe.time}</span>
                <span><i className="bi bi-people" aria-hidden="true" /> {recipe.servings}</span>
              </div>
              <p className="recipe-version">Gợi ý tại nhà · {recipe.title}</p>
              <div className="recipe-layout">
                <section className="recipe-ingredients" aria-labelledby={`${modalId}Ingredients`}>
                  <h3 id={`${modalId}Ingredients`}>Nguyên liệu</h3>
                  <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
                <section className="recipe-method" aria-labelledby={`${modalId}Steps`}>
                  <h3 id={`${modalId}Steps`}>Cách làm</h3>
                  <ol>{recipe.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                </section>
              </div>
              <p className="recipe-tip"><strong>Mẹo & lưu ý</strong>{recipe.tip}</p>
              <section className="recipe-video" aria-labelledby={`${modalId}Video`}>
                <p className="section-eyebrow">Video tham khảo</p>
                <h3 id={`${modalId}Video`}>{recipe.video.title}</h3>
                <p className="recipe-channel">Kênh: {recipe.video.channel}</p>
                <p>{recipe.video.note}</p>
                <a className="btn btn-primary recipe-video-link" href={`https://www.youtube.com/watch?v=${recipe.video.id}`} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube" aria-hidden="true" /> Xem trên YouTube
                  <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                  <span className="visually-hidden"> (mở trong tab mới)</span>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="modal-backdrop fade show"
          role="presentation"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default FoodModal
