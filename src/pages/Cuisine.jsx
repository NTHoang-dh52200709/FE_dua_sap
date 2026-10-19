import { useState } from 'react'
import { storyCopy } from '../data/editorialData'
import SectionTitle from '../components/SectionTitle'
import DetailCta from '../components/DetailCta'
import FoodCard from '../components/FoodCard'
import FoodModal from '../components/FoodModal'
import PageHero from '../components/PageHero'
import foodData from '../data/foodData'

function Cuisine() {
  const [selectedFood, setSelectedFood] = useState(foodData[0])
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false)

  const openFoodDetails = (food) => {
    setSelectedFood(food)
    setIsFoodModalOpen(true)
  }

  return (
    <main>
      <PageHero
        eyebrow="06 · Ẩm thực"
        title="DỪA SÁP TRÊN BÀN ĂN"
        description="Từ cơm dừa nguyên bản đến những món ăn mở ra nhiều cách thưởng thức sản vật Trà Vinh."
        image="/images/duasapdam.jpg"
      />

      <section className="detail-body">
        <div className="container">
          <SectionTitle
            eyebrow="Các món từ dừa sáp"
            title="Một vùng vị giác phong phú"
            description={storyCopy.cuisine}
          />
          <div className="detail-gallery">
            {foodData.map((food) => (
              <FoodCard
                food={food}
                key={food.name}
                onSelect={openFoodDetails}
              />
            ))}
          </div>
        </div>
      </section>

      <FoodModal
        food={selectedFood}
        modalId="detailFoodModal"
        open={isFoodModalOpen}
        onClose={() => setIsFoodModalOpen(false)}
      />

      <DetailCta
        title="Từ món ăn đến sản phẩm"
        description="Khi hương vị được giữ lại, giá trị của trái dừa có thể đi xa hơn bàn ăn."
        nextPath="/san-pham"
        nextLabel="Xem hệ sinh thái sản phẩm"
      />
    </main>
  )
}

export default Cuisine
