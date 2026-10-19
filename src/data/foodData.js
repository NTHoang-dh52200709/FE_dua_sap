import recipesData from './recipesData'

const foodData = [
  {
    index: '01',
    name: 'Dừa sáp dằm',
    description: "Cơm dừa sáp được dằm nhẹ cùng sữa và đá, giữ lại những miếng mềm dẻo để nhai chậm. Có thể thêm đậu phộng rang để tạo điểm giòn, điều chỉnh vị ngọt theo sở thích.",
    image: '/images/duasapdam.jpg',
  },
  {
    index: '02',
    name: 'Sinh tố dừa sáp',
    description: "Xay cơm dừa sáp với sữa và đá tạo thành thức uống mịn, sánh và thơm dịu. Thêm ít cơm dừa cắt nhỏ sau khi xay là một gợi ý để cảm nhận rõ hơn kết cấu của nguyên liệu.",
    image: '/images/sinhtoduasap.jpg',
  },
  {
    index: '03',
    name: 'Kem dừa sáp',
    description: "Dừa sáp có thể góp mặt trong kem lạnh hoặc sản phẩm kem sấy thăng hoa. Hai cách chế biến mang lại trải nghiệm khác nhau: mát mịn khi đông lạnh và giòn tan ở dạng sấy.",
    image: '/images/kemduasap.webp',
  },
  {
    index: '04',
    name: 'Sữa chua dừa sáp',
    description: "Vị chua dịu của sữa chua đi cùng cơm dừa béo mềm tạo nên món tráng miệng hài hòa. Ngoài cách dùng lạnh, còn có sản phẩm sữa chua dừa sáp sấy giòn như hình minh họa.",
    image: '/images/suachuaduasap.jpg',
  },
  {
    index: '05',
    name: 'Mứt dừa sáp',
    description: "Cơm dừa được cắt và chế biến cùng đường thành món mứt thơm béo. Tùy công thức và cách sên, thành phẩm có thể khác nhau về độ mềm, độ dẻo và lớp đường bên ngoài.",
    image: '/images/mucduasap.jpg',
  },
  {
    index: '06',
    name: 'Bánh canh dừa sáp',
    description: "Một gợi ý biến tấu món bánh canh với dừa sáp, hải sản và nước dùng. Phần cơm dừa mang đến độ béo và kết cấu mềm, tạo điểm nhấn bên cạnh sợi bánh quen thuộc.",
    image: '/images/banhcanhduasap.webp',
  },
  {
    index: '07',
    name: 'Kẹo dừa sáp',
    description: "Kẹo đưa hương vị dừa sáp vào từng phần nhỏ, thuận tiện chia sẻ hoặc làm quà. Các phiên bản kết hợp lá dứa hay ca cao mở thêm lựa chọn bên cạnh vị dừa nguyên bản.",
    image: '/images/keoduasap.webp',
  },
  {
    index: '08',
    name: 'Các món sáng tạo từ dừa sáp',
    description: "Từ món ngọt đến món mặn, dừa sáp gợi nhiều cách phối hợp nguyên liệu. Những sáng tạo trong bếp khai thác độ mềm, béo và khả năng kết hợp của cơm dừa để tạo trải nghiệm mới.",
    image: '/images/monsangtao.jpg',
  },
]

export default foodData.map((food) => ({ ...food, recipe: recipesData[food.index] }))
