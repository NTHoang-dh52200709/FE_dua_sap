function FoodCard({ food, onSelect }) {
  return (
    <article className="food-card">
      <div className="food-card-image" role="img" aria-label={`Hình ảnh ${food.name}`} style={{ backgroundImage: `url(${food.image})` }} />
      <div className="food-card-body">
        <p className="food-card-index">{food.index}</p>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <button className="food-card-button" type="button" onClick={() => onSelect(food)}>
          Xem món <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

export default FoodCard
