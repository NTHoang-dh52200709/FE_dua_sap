// Gợi ý thực hiện tại nhà, biên soạn riêng; video là tài liệu tham khảo được ghi rõ.
const recipesData = {
  '01': {
    title: 'Dừa sáp dầm sữa đá', time: '15 phút', servings: '2 phần',
    ingredients: ['200 g cơm dừa sáp', '2–3 muỗng canh sữa đặc', '50 ml sữa tươi không đường', 'Đá bào và đậu phộng rang tùy thích'],
    steps: ['Nạo cơm dừa vào tô, loại bỏ phần gáo còn sót và cắt miếng vừa ăn.', 'Thêm sữa đặc và sữa tươi, dùng thìa dầm nhẹ để cơm dừa hòa với sữa nhưng vẫn còn miếng.', 'Chia ra ly, thêm đá bào rồi rắc đậu phộng rang. Trộn đều và thưởng thức ngay.'],
    tip: 'Thêm sữa từng ít một để điều chỉnh độ đặc và vị ngọt. Giữ lại một ít cơm dừa nguyên miếng để món ăn có độ dẻo.',
    video: { id: 'd5O85iU5t3s', title: 'Cách làm dừa sáp dầm sữa đơn giản', channel: 'Dừa Sáp Trà Vinh COCOSAP', note: 'Video hướng dẫn trực tiếp món dừa sáp dầm sữa. Lượng nguyên liệu trên là gợi ý cho 2 phần.' },
  },
  '02': {
    title: 'Sinh tố dừa sáp', time: '15 phút', servings: '2 ly',
    ingredients: ['200 g cơm dừa sáp', '100 ml sữa tươi không đường', '2 muỗng canh sữa đặc', '1 ly nhỏ đá viên hoặc đá bào'],
    steps: ['Cắt nhỏ cơm dừa; để riêng một ít nếu muốn dùng làm phần ăn kèm.', 'Cho cơm dừa, sữa tươi và sữa đặc vào máy. Xay đến khi hỗn hợp mịn.', 'Thêm đá và xay tiếp. Nếu quá đặc, thêm từng chút sữa tươi để máy xay hoạt động dễ hơn.', 'Rót ra ly, thêm cơm dừa đã để riêng và dùng ngay khi còn lạnh.'],
    tip: 'Xay cơm dừa với sữa trước khi cho đá giúp hỗn hợp mịn hơn. Có thể giảm sữa đặc nếu thích vị ngọt nhẹ.',
    video: { id: 'tfjdo2UnqQw', title: 'Cách làm dừa sáp dầm sữa đá và sinh tố dừa sáp', channel: 'Lê tuyền Người miền tây', note: 'Video giới thiệu cả hai cách: dầm sữa đá và xay sinh tố.' },
  },
  '03': {
    title: 'Kem dừa sáp tại nhà', time: '20 phút + 6–8 giờ đông lạnh', servings: '4 phần',
    ingredients: ['200 g cơm dừa sáp', '200 ml whipping cream để lạnh', '80–100 g sữa đặc', 'Đậu phộng rang hoặc dừa sấy để ăn kèm'],
    steps: ['Xay mịn cơm dừa với sữa đặc. Làm lạnh phần hỗn hợp này trước khi trộn kem.', 'Đánh whipping cream lạnh đến bông mềm, nhấc que thấy chóp kem hơi rủ xuống.', 'Trộn nhẹ hỗn hợp dừa vào kem bằng phới, tránh khuấy mạnh làm xẹp bọt khí.', 'Cho vào hộp có nắp và để ngăn đông 6–8 giờ đến khi đông chắc. Múc ra, thêm phần ăn kèm tùy thích.'],
    tip: 'Đây là kem đông lạnh làm tại nhà. Sản phẩm kem sấy thăng hoa trong ảnh cần thiết bị và quy trình chế biến khác.',
    video: { id: 'Oi9IgWLP0Z4', title: 'Cách làm kem dừa sáp thơm béo, mát lạnh', channel: 'Bếp Của Vợ', note: 'Tham khảo cách làm kem dừa sáp trong video; phiên bản không trứng trên được biên soạn riêng cho gian bếp gia đình.' },
  },
  '04': {
    title: 'Sữa chua trộn dừa sáp', time: '10 phút', servings: '2 phần',
    ingredients: ['150 g cơm dừa sáp', '2 hộp sữa chua đã làm lạnh (100 g/hộp)', '1–2 muỗng canh sữa đặc tùy khẩu vị', 'Trái cây cắt nhỏ hoặc hạt rang tùy thích'],
    steps: ['Cắt cơm dừa sáp thành miếng nhỏ, chia vào hai bát hoặc ly.', 'Cho sữa chua và sữa đặc vào, trộn nhẹ để giữ kết cấu cơm dừa.', 'Thêm trái cây hoặc hạt rang và dùng lạnh. Nếu chưa dùng ngay, đậy kín và cho vào ngăn mát.'],
    tip: 'Cách này dùng sữa chua làm sẵn, không cần ủ men. Sữa chua sấy giòn trong ảnh là sản phẩm chế biến khác.',
    video: { id: 'j5i2YqUfwD8', title: 'Sữa chua dừa', channel: 'Bếp nhà sin', note: 'Video tham khảo về sữa chua dừa thông thường. Gợi ý trên là phiên bản trộn sữa chua làm sẵn với dừa sáp, không phải công thức sấy giòn hay công thức ủ trong video.' },
  },
  '05': {
    title: 'Mứt dừa sáp dẻo', time: '60–90 phút + thời gian ướp', servings: '1 mẻ nhỏ',
    ingredients: ['300 g cơm dừa sáp có thể cắt sợi', '150 g đường', 'Một ít vani nếu thích'],
    steps: ['Cắt cơm dừa thành sợi hoặc miếng dày vừa phải. Thao tác nhẹ để miếng dừa không nát.', 'Trộn dừa với đường, để đường tan và ngấm vào dừa khoảng 1–2 giờ.', 'Cho toàn bộ vào chảo chống dính. Đun lửa vừa đến khi sôi, sau đó hạ nhỏ và đảo nhẹ.', 'Khi nước đường cạn, sên lửa nhỏ đến khi miếng dừa ráo, dẻo và đường bám quanh. Dàn ra khay, để nguội hẳn rồi cho vào hộp sạch.'],
    tip: 'Độ ẩm của dừa sáp khác nhau giữa các trái nên thời gian sên có thể thay đổi. Dùng cơm còn giữ được hình dạng; cơm quá nhão khó làm mứt sợi.',
    video: { id: '4SRB3_ZQ4i8', title: 'Cách làm mứt dừa sáp sao cho ngon nhất', channel: 'NGHĨA LỤA MÊ KÔNG', note: 'Tham khảo thao tác chế biến mứt dừa sáp. Điều chỉnh thời gian sên theo độ ẩm thực tế của nguyên liệu.' },
  },
  '06': {
    title: 'Bánh canh nhân dừa sáp', time: 'Khoảng 60 phút', servings: '2–3 phần',
    ingredients: ['150 g cơm dừa sáp cắt sợi', '200 g bột năng và một ít bột áo', 'Nước sôi để nhồi bột, thêm từ từ', '1 lít nước dùng, 200 g tôm đã sơ chế', 'Hành lá, hành tím, muối và gia vị vừa đủ'],
    steps: ['Nấu nước dùng với hành tím, nêm vừa ăn. Nấu tôm chín rồi để riêng.', 'Thêm nước sôi từng ít vào bột năng, trộn bằng thìa rồi nhồi khi bột đủ nguội để chạm tay, đến khi có khối bột dẻo.', 'Cán bột, cắt thành dải và bọc quanh các sợi cơm dừa sáp. Rắc ít bột áo để các sợi không dính nhau.', 'Luộc bánh trong nồi nước sôi đến khi lớp bột chín trong. Chuyển sang tô, chan nước dùng nóng, thêm tôm và hành lá.'],
    tip: 'Đây là phiên bản gợi ý nhân dừa sáp. Xem video để quan sát cách bọc bột và tạo sợi; lượng nước nhồi phụ thuộc loại bột.',
    video: { id: 'rd8cMYRRsaU', title: 'Cách làm bánh canh dừa sáp tại nhà – hướng dẫn chi tiết', channel: 'Cô Gái Hay Thích Ăn Uống', note: 'Video hướng dẫn bánh canh dừa sáp với giò heo và tôm. Phiên bản trên dùng nước dùng chuẩn bị sẵn để rút gọn công đoạn.' },
  },
  '07': {
    title: 'Tìm hiểu cách làm kẹo dừa', time: 'Tùy công thức video', servings: '1 mẻ thử nhỏ',
    ingredients: ['Nguyên liệu kẹo dừa theo định lượng trong video đã chọn', 'Cơm dừa sáp xay mịn cho phiên bản biến tấu', 'Chảo đáy dày, phới chịu nhiệt, khuôn và giấy nến'],
    steps: ['Xem trọn công thức video và chuẩn bị đúng định lượng của mẻ kẹo cơ bản trước khi bắt đầu.', 'Nấu hỗn hợp theo hướng dẫn, đảo đều và kiểm soát lửa để đường không cháy.', 'Để thử biến tấu với dừa sáp, làm riêng một mẻ nhỏ. Cơm dừa có thêm độ ẩm nên cần điều chỉnh công thức và thời gian nấu; không thay nguyên liệu theo tỷ lệ 1:1.', 'Đổ hỗn hợp đạt độ vào khuôn lót giấy nến, để nguội rồi cắt. Kết cấu kẹo phụ thuộc công thức và mức cô đặc.'],
    tip: 'Video là công thức kẹo dừa cơ bản, không phải công thức kẹo dừa sáp Vicosap. Phần này giới thiệu kỹ thuật và hướng biến tấu, chưa phải định lượng chuẩn cho kẹo dừa sáp.',
    video: { id: 'KIZEp0a8s3w', title: 'Cách làm: KẸO DỪA chỉ với 3 nguyên liệu', channel: 'Thiện family', note: 'Tham khảo kỹ thuật làm kẹo dừa thông thường. Chưa tìm được video hướng dẫn công thức kẹo dừa sáp đủ rõ để dùng thay thế.' },
  },
  '08': {
    title: 'Gợi ý sáng tạo: dừa sáp dầm trái cây', time: '15 phút', servings: '2 phần',
    ingredients: ['150 g cơm dừa sáp', '150 g xoài chín, bơ hoặc mít', '2 muỗng canh sữa đặc hoặc 1 hộp sữa chua', 'Đá bào và hạt rang tùy thích'],
    steps: ['Cắt trái cây thành miếng vừa ăn. Dừa sáp nạo miếng nhỏ và để lạnh.', 'Chia cơm dừa và trái cây vào hai ly, thêm sữa đặc hoặc sữa chua.', 'Dầm nhẹ, thêm đá và hạt rang nếu thích. Thưởng thức ngay để giữ hương vị trái cây.'],
    tip: 'Đây là một gợi ý trong nhóm món sáng tạo; ảnh thẻ minh họa món dừa sáp chiên bột, không phải món dầm trái cây này.',
    video: { id: '3vZtY7Qtf2c', title: 'Biết cách này ăn dừa sáp ngon hơn', channel: 'Bếp Nhà Đang Hồng', note: 'Video tham khảo cách thưởng thức dừa sáp. Gợi ý kết hợp trái cây ở trên được biên soạn riêng, không phải hướng dẫn món chiên bột trong ảnh.' },
  },
}

export default recipesData
