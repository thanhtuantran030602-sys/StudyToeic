// Data Structures for Weeks, Days, Vocab and Grammar
        const weeksData = [
            {
                id: 1,
                title: "Tuần 1: Nền tảng học tập 1",
                desc: "Xây dựng các thì ngữ pháp cốt lõi và từ vựng Văn phòng/Doanh nghiệp/Tài chính cơ bản.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 2,
                title: "Tuần 2: Nền tảng học tập 2",
                desc: "Học các cấu trúc câu phổ biến trong đề thi: câu bị động, mệnh đề quan hệ, so sánh, câu điều kiện.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 3,
                title: "Tuần 3: Luyện Part chuyên sâu 1",
                desc: "Luyện chuyên sâu Part 1, 2 (Listening) và kỹ thuật nhận diện từ loại nhanh trong Part 5.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 4,
                title: "Tuần 4: Luyện Part chuyên sâu 2",
                desc: "Chiến thuật bắt keyword Part 3, 4 và xử lý đoạn điền từ nhanh trong Part 6.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 5,
                title: "Tuần 5: Luyện Part 7 & Tổng ôn",
                desc: "Chiến thuật đọc nhanh email, tin nhắn, đoạn kép/ba trong Part 7 và làm Mock Test đầu tiên.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 6,
                title: "Tuần 6: Luyện đề & Tăng tốc",
                desc: "Phân tích lỗi sai, bấm thời gian từng part và giải đề ETS thực tế số 2.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 7,
                title: "Tuần 7: Tối ưu điểm số",
                desc: "Khắc phục điểm yếu, học mẹo loại bẫy đồng âm và bẫy đoạn đọc nhiễu.",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            },
            {
                id: 8,
                title: "Tuần 8: Tổng ôn & bứt phá",
                desc: "Thiết lập trạng thái như phòng thi thật, ôn tập toàn bộ sổ tay lỗi sai và chiến thắng!",
                days: ["T2", "T3", "T4", "T5", "T6", "T7"]
            }
        ];

        // Shadowing Script Database for Weeks 1 and 2
        const shadowingDatabase = {
            "Week1_T2": {
                title: "Shadowing bài 1: Part 1 - Tả người Văn phòng",
                text: "He is submitting the report to his colleague. She is filing some paperwork in the cabinet. The technician is repairing the photocopier in the corner. Employees are cooperating to meet the deadline at their workstations."
            },
            "Week1_T3": {
                title: "Shadowing bài 2: Part 1 - Tả vật Doanh nghiệp",
                text: "The inventory is stored in the warehouse. A printer is placed next to the computer on the desk. High quality merchandise is displayed on the retail shelves. A clear business strategy will boost our revenue."
            },
            "Week1_T4": {
                title: "Shadowing bài 3: Part 1 - Tài chính & Giao dịch",
                text: "We must stay within the budget for the new project. The accountant is reviewing the invoice and transaction details. Real estate is a valuable asset. The mortgage rates have dropped slightly this month."
            },
            "Week1_T5": {
                title: "Shadowing bài 4: Part 1 - Sân bay & Du lịch",
                text: "Passengers are boarding the plane at terminal two. The airport shuttle leaves every hour. It is necessary to keep your passport in a safe place. We have a five-hour layover in Paris before our flight departs."
            },
            "Week1_T6": {
                title: "Shadowing bài 5: Part 2 - Sức khỏe & Cuộc hẹn",
                text: "I have a dentist appointment at three PM today. The physician wrote a prescription for some preventive medicine. Does your health insurance cover the cost of the surgery? I wish you a very fast recovery."
            },
            "Week1_T7": {
                title: "Shadowing bài 6: Podcast tiếng Anh giao tiếp",
                text: "A balanced diet and regular exercise are crucial for a healthy lifestyle. Good nutrition helps boost the immune system. Taking daily vitamins can prevent chronic diseases and allergies."
            },
            "Week2_T2": {
                title: "Shadowing bài 7: Part 2 - Hỏi đáp Tiếp thị",
                text: "Who is in charge of promoting the new ad campaign? The marketing director is leading the survey on consumer habits. We distributed flyers in the city center to raise brand awareness."
            },
            "Week2_T3": {
                title: "Shadowing bài 8: Part 2 - Hội thoại Sản xuất",
                text: "Which assembly line produces the electronic components? The factory supervisor is conducting a safety inspection. All machinery must undergo regular maintenance to prevent defects."
            },
            "Week2_T4": {
                title: "Shadowing bài 9: Part 3 - Nhân sự & Tuyển dụng",
                text: "Have you reviewed the resume of the job applicant? Yes, she has the perfect qualifications for the personnel vacancy. I will schedule a formal interview with her tomorrow."
            },
            "Week2_T5": {
                title: "Shadowing bài 10: Part 3 - Công nghệ & Mạng",
                text: "The database server crashed due to a minor software glitch. Did you back up the files before installing the upgrade? We need to contact the wireless network administrator immediately."
            },
            "Week2_T6": {
                title: "Shadowing bài 11: Part 4 - Mua sắm & Hoàn tiền",
                text: "Welcome to the grand opening clearance sale. We offer a twenty percent discount on all items in aisle four. Remember to keep your receipt if you want a refund or product exchange."
            },
            "Week2_T7": {
                title: "Shadowing bài 12: Đề Mini Test tổng quát",
                text: "This is a baseline mini test to evaluate your current listening skills. Listen carefully to the conversations and choose the best answers. Try to avoid common traps like similar sounds."
            }
        };

        const defaultShadowingScripts = [
            {
                title: "Shadowing nâng cao: ETS Listening - Short Conversation",
                text: "Excuse me, I'm looking for the human resources office. Is it on the third floor? Yes, but you need to sign in at the security desk before taking the elevator. Make sure you have a photo ID with you."
            },
            {
                title: "Shadowing nâng cao: ETS Listening - Business Presentation",
                text: "Good morning, everyone. Today I'd like to present our quarterly sales revenue. Thanks to our new digital marketing campaign, we have seen a fifteen percent increase in retail orders this month."
            },
            {
                title: "Shadowing nâng cao: ETS Listening - Airport Announcement",
                text: "Attention passengers of flight eighty-two to Tokyo. Due to adverse weather conditions at the destination airport, our departure has been delayed by approximately forty-five minutes. Thank you for your patience."
            }
        ];

        // 200 Essential TOEIC Words divided in 10 themes (20 words per theme)
        // Linked to Day 1 to 10 of Weeks 1 and 2
        const vocabDatabase = {
            "Week1_T2": {
                theme: "Office (Văn phòng)",
                words: [
                    { word: "colleague", pron: "/ˈkɒliːɡ/", pos: "noun", mean: "đồng nghiệp", example: "My colleague helped me with the financial report." },
                    { word: "paperwork", pron: "/ˈpeɪpəwɜːk/", pos: "noun", mean: "công việc giấy tờ", example: "She spent the morning dealing with paperwork." },
                    { word: "photocopier", pron: "/ˈfəʊtəʊkɒpiə/", pos: "noun", mean: "máy photocopy", example: "The office photocopier is out of order today." },
                    { word: "memo", pron: "/ˈmeməʊ/", pos: "noun", mean: "thông báo nội bộ", example: "The manager sent a memo about the meeting." },
                    { word: "schedule", pron: "/ˈʃedjuːl/", pos: "noun/verb", mean: "lịch trình / lên lịch", example: "We need to schedule a product launch." },
                    { word: "file", pron: "/faɪl/", pos: "noun/verb", mean: "hồ sơ / sắp xếp tài liệu", example: "Please file these documents in alphabetical order." },
                    { word: "cabinet", pron: "/ˈhæb.ɪ.nət/", pos: "noun", mean: "tủ tài liệu", example: "The folders are kept in the filing cabinet." },
                    { word: "submit", pron: "/səbˈmɪt/", pos: "verb", mean: "nộp, trình duyệt", example: "Employees must submit weekly reports by Friday." },
                    { word: "delay", pron: "/dɪˈleɪ/", pos: "verb/noun", mean: "trì hoãn", example: "The construction project was delayed." },
                    { word: "agenda", pron: "/əˈdʒen.də/", pos: "noun", mean: "chương trình nghị sự", example: "The first item on the agenda is the budget." },
                    { word: "brainstorm", pron: "/ˈbreɪn.stɔːm/", pos: "verb", mean: "động não suy nghĩ", example: "Let's brainstorm some ideas for the project." },
                    { word: "collaborate", pron: "/kəˈlæb.ə.reɪt/", pos: "verb", mean: "hợp tác", example: "We collaborated with the marketing department." },
                    { word: "deadline", pron: "/ˈded.laɪn/", pos: "noun", mean: "hạn chót", example: "The deadline for the application is tomorrow." },
                    { word: "equip", pron: "/ɪˈkwɪp/", pos: "verb", mean: "trang bị", example: "The office is equipped with modern computers." },
                    { word: "headquarters", pron: "/ˌhedˈkwɔː.təz/", pos: "noun", mean: "trụ sở chính", example: "The company's headquarters is in New York." },
                    { word: "internship", pron: "/ˈɪn.tɜːn.ʃɪp/", pos: "noun", mean: "thực tập", example: "He applied for a summer marketing internship." },
                    { word: "partition", pron: "/pɑːˈtɪʃ.ən/", pos: "noun", mean: "vách ngăn", example: "A partition separates his office from the rest." },
                    { word: "workstation", pron: "/ˈwɜːk.steɪ.ʃən/", pos: "noun", mean: "chỗ làm việc", example: "Each worker has a personal workstation." },
                    { word: "overtime", pron: "/ˈəʊ.və.taɪm/", pos: "noun/adv", mean: "làm thêm giờ", example: "They worked overtime to finish the contract." },
                    { word: "productive", pron: "/prəˈdʌk.tɪv/", pos: "adjective", mean: "năng suất", example: "The brainstorm meeting was very productive." }
                ]
            },
            "Week1_T3": {
                theme: "Business (Kinh doanh)",
                words: [
                    { word: "acquire", pron: "/əˈkwaɪə/", pos: "verb", mean: "mua lại, đạt được", example: "The giant company acquired the startup." },
                    { word: "merchandise", pron: "/ˈmɜː.tʃən.daɪs/", pos: "noun", mean: "hàng hóa", example: "The store offers high-quality merchandise." },
                    { word: "profit", pron: "/ˈprɒf.ɪt/", pos: "noun", mean: "lợi nhuận", example: "The profits increased by fifteen percent." },
                    { word: "negotiation", pron: "/nəˌɡəʊ.ʃiˈeɪ.ʃən/", pos: "noun", mean: "sự đàm phán", example: "The contract is currently under negotiation." },
                    { word: "wholesale", pron: "/ˈhəʊl.seɪl/", pos: "noun/adj", mean: "bán buôn/sỉ", example: "They buy wholesale and sell to retailers." },
                    { word: "retail", pron: "/ˈriː.teɪl/", pos: "noun/adj", mean: "bán lẻ", example: "The retail price is slightly higher." },
                    { word: "monopoly", pron: "/məˈnɒp.əl.i/", pos: "noun", mean: "sự độc quyền", example: "They have a monopoly in local transport." },
                    { word: "transaction", pron: "/trænˈzæk.ʃən/", pos: "noun", mean: "giao dịch", example: "The bank transaction took three seconds." },
                    { word: "brand", pron: "/brænd/", pos: "noun", mean: "thương hiệu", example: "They created a global brand image." },
                    { word: "strategy", pron: "/ˈstræt.ə.dʒi/", pos: "noun", mean: "chiến lược", example: "A clear marketing strategy is necessary." },
                    { word: "client", pron: "/ˈklaɪ.ənt/", pos: "noun", mean: "khách hàng", example: "We prioritize our clients' requests." },
                    { word: "competitor", pron: "/kəmˈpet.ɪ.tər/", pos: "noun", mean: "đối thủ cạnh tranh", example: "The competitor launched a similar service." },
                    { word: "demand", pron: "/dɪˈmɑːnd/", pos: "noun/verb", mean: "nhu cầu", example: "Demand for organic food is rising." },
                    { word: "enterprise", pron: "/ˈen.tə.praɪz/", pos: "noun", mean: "doanh nghiệp", example: "He owns a small family enterprise." },
                    { word: "expansion", pron: "/ɪkˈspæn.ʃən/", pos: "noun", mean: "sự mở rộng", example: "Business expansion requires more staff." },
                    { word: "inventory", pron: "/ˈɪn.vən.tər.i/", pos: "noun", mean: "hàng tồn kho", example: "They update the inventory once a month." },
                    { word: "launch", pron: "/lɔːntʃ/", pos: "verb/noun", mean: "tung ra, khai trương", example: "The company will launch a new app next week." },
                    { word: "partnership", pron: "/ˈpɑːt.nə.ʃɪp/", pos: "noun", mean: "quan hệ đối tác", example: "The two firms entered into a partnership." },
                    { word: "revenue", pron: "/ˈrev.ən.juː/", pos: "noun", mean: "doanh thu", example: "Advertising brings a lot of revenue." },
                    { word: "signature", pron: "/ˈsɪɡ.nə.tʃər/", pos: "noun", mean: "chữ ký", example: "Please put your signature on the last page." }
                ]
            },
            "Week1_T4": {
                theme: "Finance (Tài chính)",
                words: [
                    { word: "budget", pron: "/ˈbʌdʒ.ɪt/", pos: "noun/verb", mean: "ngân sách", example: "The annual budget must be approved." },
                    { word: "invoice", pron: "/ˈɪn.vɔɪs/", pos: "noun", mean: "hóa đơn", example: "The invoice was sent to your office." },
                    { word: "interest", pron: "/ˈɪn.trəst/", pos: "noun", mean: "lãi suất, mối quan tâm", example: "Bank interest rates dropped this month." },
                    { word: "invest", pron: "/ɪnˈvest/", pos: "verb", mean: "đầu tư", example: "We decided to invest in real estate." },
                    { word: "receipt", pron: "/rɪˈsiːt/", pos: "noun", mean: "biên lai", example: "Keep your receipt for tax reasons." },
                    { word: "accountant", pron: "/əˈkaʊn.tənt/", pos: "noun", mean: "kế toán viên", example: "The accountant is preparing our taxes." },
                    { word: "asset", pron: "/ˈæs.et/", pos: "noun", mean: "tài sản", example: "Good software is a company's main asset." },
                    { word: "bankruptcy", pron: "/ˈbæŋ.krəpt.si/", pos: "noun", mean: "sự phá sản", example: "The economic crisis caused bankruptcy." },
                    { word: "debt", pron: "/det/", pos: "noun", mean: "khoản nợ", example: "They paid off all their debts recently." },
                    { word: "dividend", pron: "/ˈdɪv.ɪ.dend/", pos: "noun", mean: "cổ tức", example: "Shareholders received a high dividend." },
                    { word: "expenditure", pron: "/ɪkˈspen.dɪ.tʃər/", pos: "noun", mean: "chi phí tiêu dùng", example: "We must reduce our business expenditure." },
                    { word: "mortgage", pron: "/ˈmɔː.ɡɪdʒ/", pos: "noun", mean: "thế chấp", example: "They took out a mortgage to buy the office." },
                    { word: "reimburse", pron: "/ˌriː.ɪmˈbɜːs/", pos: "verb", mean: "hoàn tiền, bồi hoàn", example: "The firm reimburses travel expenses." },
                    { word: "audit", pron: "/ˈɔː.dɪt/", pos: "noun/verb", mean: "kiểm toán", example: "The yearly financial audit will start Monday." },
                    { word: "inflation", pron: "/ɪnˈfleɪ.ʃən/", pos: "noun", mean: "lạm phát", example: "Inflation is affecting food prices." },
                    { word: "ledger", pron: "/ˈledʒ.ər/", pos: "noun", mean: "sổ cái kế toán", example: "Please check the numbers in the ledger." },
                    { word: "portfolio", pron: "/ˌpɔːtˈfəʊ.li.ə/", pos: "noun", mean: "danh mục đầu tư", example: "He has a diverse investment portfolio." },
                    { word: "subsidy", pron: "/ˈsʌb.sɪ.di/", pos: "noun", mean: "trợ cấp", example: "The government gave a subsidy to farms." },
                    { word: "yield", pron: "/jiːld/", pos: "noun/verb", mean: "lợi nhuận sản lượng", example: "The investment yields high returns." },
                    { word: "revenue", pron: "/ˈrev.ən.juː/", pos: "noun", mean: "doanh thu", example: "Monthly revenue peaked in December." }
                ]
            },
            "Week1_T5": {
                theme: "Travel (Du lịch)",
                words: [
                    { word: "baggage", pron: "/ˈbæɡ.ɪdʒ/", pos: "noun", mean: "hành lý", example: "The passengers claimed their baggage." },
                    { word: "itinerary", pron: "/aɪˈtɪn.ər.ər.i/", pos: "noun", mean: "lịch trình chuyến đi", example: "We followed the tour guide's itinerary." },
                    { word: "boarding", pron: "/ˈbɔː.dɪŋ/", pos: "noun", mean: "lên máy bay/tàu", example: "Boarding will start in ten minutes." },
                    { word: "destination", pron: "/ˌdes.tɪˈneɪ.ʃən/", pos: "noun", mean: "điểm đến", example: "Paris is a popular tourist destination." },
                    { word: "accommodation", pron: "/əˌkɒm.əˈdeɪ.ʃən/", pos: "noun", mean: "chỗ ở", example: "The hotel offers luxury accommodation." },
                    { word: "customs", pron: "/ˈkʌs.təmz/", pos: "noun", mean: "hải quan", example: "We passed through customs without delay." },
                    { word: "delay", pron: "/dɪˈleɪ/", pos: "verb/noun", mean: "trì hoãn", example: "The flight delay lasted two hours." },
                    { word: "reservation", pron: "/ˌrez.əˈveɪ.ʃən/", pos: "noun", mean: "đặt chỗ trước", example: "I made a dinner reservation for two." },
                    { word: "shuttle", pron: "/ˈʃʌt.əl/", pos: "noun", mean: "xe đưa đón", example: "The airport shuttle runs every hour." },
                    { word: "layover", pron: "/ˈleɪˌəʊ.vər/", pos: "noun", mean: "điểm dừng nghỉ giữa chặng", example: "We had a five-hour layover in Tokyo." },
                    { word: "cancellation", pron: "/ˌkæn.səlˈeɪ.ʃən/", pos: "noun", mean: "sự hủy chuyến", example: "Last-minute cancellation fees apply." },
                    { word: "complimentary", pron: "/ˌkɒm.plɪˈmen.tər.i/", pos: "adjective", mean: "miễn phí", example: "The hotel offers complimentary breakfast." },
                    { word: "departure", pron: "/dɪˈpɑː.tʃər/", pos: "noun", mean: "khởi hành", example: "The departure time is scheduled for 9 AM." },
                    { word: "fare", pron: "/feər/", pos: "noun", mean: "giá vé tàu xe", example: "Train fares are rising next month." },
                    { word: "passport", pron: "/ˈpɑːs.pɔːt/", pos: "noun", mean: "hộ chiếu", example: "Keep your passport in a safe place." },
                    { word: "sightseeing", pron: "/ˈsaɪtˌsiː.ɪŋ/", pos: "noun", mean: "ngắm cảnh", example: "We went sightseeing around London." },
                    { word: "terminal", pron: "/ˈtɜː.mɪ.nəl/", pos: "noun", mean: "nhà ga sân bay", example: "International flights leave terminal 2." },
                    { word: "vacancy", pron: "/ˈveɪ.kən.si/", pos: "noun", mean: "phòng trống, chỗ trống", example: "The motel has no vacancy tonight." },
                    { word: "embark", pron: "/ɪmˈbɑːk/", pos: "verb", mean: "lên tàu/bắt đầu", example: "They embarked on a cruise ship yesterday." },
                    { word: "steward", pron: "/ˈstjʊə.d/", pos: "noun", mean: "tiếp viên", example: "The flight steward was very helpful." }
                ]
            },
            "Week1_T6": {
                theme: "Health (Sức khỏe)",
                words: [
                    { word: "appointment", pron: "/əˈpɔɪnt.mənt/", pos: "noun", mean: "cuộc hẹn", example: "I have a dentist appointment at 3 PM." },
                    { word: "prescription", pron: "/prɪˈskrɪp.ʃən/", pos: "noun", mean: "đơn thuốc", example: "The doctor wrote a prescription for antibiotics." },
                    { word: "symptom", pron: "/ˈsɪmp.təm/", pos: "noun", mean: "triệu chứng", example: "Fever is a common symptom of flu." },
                    { word: "clinic", pron: "/ˈklɪn.ɪk/", pos: "noun", mean: "phòng khám", example: "The health clinic is near my office." },
                    { word: "nutrition", pron: "/njuːˈtrɪʃ.ən/", pos: "noun", mean: "dinh dưỡng", example: "Good nutrition is key to healthy living." },
                    { word: "dosage", pron: "/ˈdəʊ.sɪdʒ/", pos: "noun", mean: "liều lượng", example: "Do not exceed the recommended dosage." },
                    { word: "physician", pron: "/fɪˈzɪʃ.ən/", pos: "noun", mean: "bác sĩ điều trị", example: "The physician examined the patient." },
                    { word: "hygiene", pron: "/ˈhaɪ.dʒiːn/", pos: "noun", mean: "vệ sinh dịch tễ", example: "Personal hygiene stops bacterial spread." },
                    { word: "therapy", pron: "/ˈθer.ə.pi/", pos: "noun", mean: "liệu pháp", example: "Physical therapy helped his back pain." },
                    { word: "vaccine", pron: "/ˈvæk.siːn/", pos: "noun", mean: "vắc-xin", example: "The vaccine prevents viral infection." },
                    { word: "diagnose", pron: "/ˌdaɪ.əɡˈnəʊz/", pos: "verb", mean: "chẩn đoán", example: "He was diagnosed with high blood pressure." },
                    { word: "allergy", pron: "/ˈæl.ə.dʒi/", pos: "noun", mean: "dị ứng", example: "She has a pollen allergy." },
                    { word: "chronic", pron: "/ˈkrɒn.ɪk/", pos: "adjective", mean: "mãn tính", example: "He suffers from chronic back pain." },
                    { word: "epidemic", pron: "/ˌep.ɪˈdem.ɪk/", pos: "noun", mean: "bệnh dịch", example: "The flu epidemic spread rapidly." },
                    { word: "immune", pron: "/ɪˈmjuːn/", pos: "adjective", mean: "miễn dịch", example: "Healthy diets boost immune systems." },
                    { word: "insurance", pron: "/ɪnˈʃɔː.rəns/", pos: "noun", mean: "bảo hiểm", example: "Does your health insurance cover dental?" },
                    { word: "pharmacy", pron: "/ˈfɑː.mə.si/", pos: "noun", mean: "nhà thuốc", example: "You can buy medicine at the pharmacy." },
                    { word: "recovery", pron: "/rɪˈkʌv.ər.i/", pos: "noun", mean: "sự hồi phục", example: "We wish you a fast recovery." },
                    { word: "surgery", pron: "/ˈsɜː.dʒər.i/", pos: "noun", mean: "phẫu thuật", example: "The surgery took four hours." },
                    { word: "preventive", pron: "/prɪˈven.tɪv/", pos: "adjective", mean: "phòng bệnh", example: "Regular checks are great preventive care." }
                ]
            },
            "Week2_T2": {
                theme: "Marketing (Tiếp thị)",
                words: [
                    { word: "advertise", pron: "/ˈæd.və.taɪz/", pos: "verb", mean: "quảng cáo", example: "They advertise products on social media." },
                    { word: "campaign", pron: "/kæmˈpeɪn/", pos: "noun", mean: "chiến dịch", example: "The new ad campaign was very popular." },
                    { word: "consumer", pron: "/kənˈsjuː.mər/", pos: "noun", mean: "người tiêu dùng", example: "Consumer habits are changing rapidly." },
                    { word: "market", pron: "/ˈmɑː.kɪt/", pos: "noun/verb", mean: "thị trường / bán hàng", example: "They want to expand their target market." },
                    { word: "promote", pron: "/prəˈməʊt/", pos: "verb", mean: "quảng bá, thăng chức", example: "They promote healthy diets at schools." },
                    { word: "slogan", pron: "/ˈsləʊ.ɡən/", pos: "noun", mean: "khẩu hiệu quảng cáo", example: "Their slogan is easy to remember." },
                    { word: "survey", pron: "/ˈsɜː.veɪ/", pos: "noun/verb", mean: "khảo sát", example: "We conducted a survey on customer satisfaction." },
                    { word: "target", pron: "/ˈtɑː.ɡɪt/", pos: "noun/verb", mean: "mục tiêu / hướng đến", example: "They target young professionals." },
                    { word: "awareness", pron: "/əˈweə.nəs/", pos: "noun", mean: "sự nhận thức", example: "The brand wants to raise public awareness." },
                    { word: "discount", pron: "/ˈdɪs.kaʊnt/", pos: "noun/verb", mean: "giảm giá", example: "We offer a twenty percent discount online." },
                    { word: "endorse", pron: "/ɪnˈdɔːs/", pos: "verb", mean: "bảo chứng, ủng hộ", example: "Celebrities endorse this cosmetics brand." },
                    { word: "flyer", pron: "/ˈflaɪ.ər/", pos: "noun", mean: "tờ rơi quảng cáo", example: "We distributed flyers in the city center." },
                    { word: "segment", pron: "/ˈseɡ.mənt/", pos: "noun", mean: "phân khúc thị trường", example: "They belong to the premium market segment." },
                    { word: "launch", pron: "/lɔːntʃ/", pos: "verb/noun", mean: "ra mắt sản phẩm", example: "The product launch is next month." },
                    { word: "branding", pron: "/ˈbræn.dɪŋ/", pos: "noun", mean: "xây dựng thương hiệu", example: "Branding is crucial for business growth." },
                    { word: "exhibition", pron: "/ˌek.sɪˈbɪʃ.ən/", pos: "noun", mean: "triển lãm", example: "The trade exhibition attracted many buyers." },
                    { word: "focus", pron: "/ˈfəʊ.kəs/", pos: "verb/noun", mean: "trọng tâm, tập trung", example: "The focus of this ad is quality." },
                    { word: "sponsor", pron: "/ˈspɒn.sər/", pos: "verb/noun", mean: "tài trợ", example: "They sponsor local athletic events." },
                    { word: "feedback", pron: "/ˈfiːd.bæk/", pos: "noun", mean: "phản hồi", example: "Customer feedback was mostly positive." },
                    { word: "merchandise", pron: "/ˈmɜː.tʃən.daɪs/", pos: "noun", mean: "hàng hóa tiếp thị", example: "The band sells shirts and other merchandise." }
                ]
            },
            "Week2_T3": {
                theme: "Manufacturing (Sản xuất)",
                words: [
                    { word: "assembly", pron: "/əˈsem.bli/", pos: "noun", mean: "dây chuyền lắp ráp", example: "Cars are built on the assembly line." },
                    { word: "component", pron: "/kəmˈpəʊ.nənt/", pos: "noun", mean: "linh kiện, thành phần", example: "Electronic components are imported." },
                    { word: "factory", pron: "/ˈfæk.tər.i/", pos: "noun", mean: "nhà máy", example: "The factory produces thousands of toys." },
                    { word: "machinery", pron: "/məˈʃiː.nər.i/", pos: "noun", mean: "máy móc thiết bị", example: "Modern machinery speeds up production." },
                    { word: "output", pron: "/ˈaʊt.pʊt/", pos: "noun", mean: "sản lượng đầu ra", example: "The factory's weekly output is rising." },
                    { word: "raw", pron: "/rɔː/", pos: "adjective", mean: "nguyên liệu thô", example: "Wood is the raw material for paper." },
                    { word: "warehouse", pron: "/ˈweə.haʊs/", pos: "noun", mean: "kho chứa hàng", example: "Boxes are stored in the warehouse." },
                    { word: "automation", pron: "/ˌɔː.təˈmeɪ.ʃən/", pos: "noun", mean: "tự động hóa", example: "Factory automation reduced staff costs." },
                    { word: "defect", pron: "/ˈdiː.fekt/", pos: "noun", mean: "lỗi sản phẩm, khuyết tật", example: "The inspector found a defect in the glass." },
                    { word: "inspection", pron: "/ɪnˈspek.ʃən/", pos: "noun", mean: "sự thanh tra kiểm tra", example: "Quality inspection is strict here." },
                    { word: "maintenance", pron: "/ˈmeɪn.tən.əns/", pos: "noun", mean: "bảo trì máy móc", example: "Regular maintenance prevents breakdowns." },
                    { word: "operator", pron: "/ˈɒp.ər.eɪ.tər/", pos: "noun", mean: "người vận hành máy", example: "Ask the machine operator for help." },
                    { word: "surplus", pron: "/ˈsɜː.pləs/", pos: "noun", mean: "thặng dư, dư thừa", example: "They sold the surplus inventory cheaply." },
                    { word: "specification", pron: "/ˌspes.ɪ.fɪˈkeɪ.ʃən/", pos: "noun", mean: "thông số kỹ thuật", example: "The engine meets our strict specifications." },
                    { word: "production", pron: "/prəˈdʌk.ʃən/", pos: "noun", mean: "sản xuất", example: "We need to boost production efficiency." },
                    { word: "supervisor", pron: "/ˈsuː.pə.vaɪ.zər/", pos: "noun", mean: "người giám sát", example: "The warehouse supervisor checks shipments." },
                    { word: "safety", pron: "/ˈseɪf.ti/", pos: "noun", mean: "sự an toàn lao động", example: "Wear a helmet for safety in the factory." },
                    { word: "logistics", pron: "/ləˈdʒɪs.tɪks/", pos: "noun", mean: "hậu cần, kho vận", example: "Our logistics team coordinates shipping." },
                    { word: "wholesale", pron: "/ˈhəʊl.seɪl/", pos: "noun/adj", mean: "bán sỉ sản phẩm", example: "Wholesale manufacturing drops costs." },
                    { word: "standards", pron: "/ˈstæn.dəd/", pos: "noun", mean: "tiêu chuẩn chất lượng", example: "All products meet high safety standards." }
                ]
            },
            "Week2_T4": {
                theme: "Personnel (Nhân sự)",
                words: [
                    { word: "recruit", pron: "/rɪˈkruːt/", pos: "verb/noun", mean: "tuyển dụng / lính mới", example: "They recruit fresh graduates every year." },
                    { word: "resume", pron: "/ˈrez.juː.meɪ/", pos: "noun", mean: "sơ yếu lý lịch", example: "Please send your resume to HR." },
                    { word: "salary", pron: "/ˈsæl.ər.i/", pos: "noun", mean: "lương định kỳ", example: "The salary is paid on the last day." },
                    { word: "qualification", pron: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", pos: "noun", mean: "bằng cấp chuyên môn", example: "She has the perfect qualifications for it." },
                    { word: "interview", pron: "/ˈɪn.tə.vjuː/", pos: "noun/verb", mean: "phỏng vấn", example: "The job interview lasted half an hour." },
                    { word: "benefit", pron: "/ˈben.ɪ.fɪt/", pos: "noun/verb", mean: "phúc lợi / hưởng lợi", example: "Health insurance is a key employee benefit." },
                    { word: "pension", pron: "/ˈpen.ʃən/", pos: "noun", mean: "lương hưu", example: "He retired and lives on a small pension." },
                    { word: "promotion", pron: "/prəˈməʊ.ʃən/", pos: "noun", mean: "thăng chức, quảng bá", example: "She received a promotion to manager." },
                    { word: "resignation", pron: "/ˌrez.ɪɡˈneɪ.ʃən/", pos: "noun", mean: "sự từ chức, xin nghỉ", example: "He handed in his resignation yesterday." },
                    { word: "termination", pron: "/ˌtɜː.mɪˈneɪ.ʃən/", pos: "noun", mean: "chấm dứt hợp đồng", example: "Contract termination requires one month notice." },
                    { word: "appraisal", pron: "/əˈpreɪ.zəl/", pos: "noun", mean: "đánh giá năng lực", example: "Annual performance appraisals start next week." },
                    { word: "probation", pron: "/prəˈbeɪ.ʃən/", pos: "noun", mean: "thời gian thử việc", example: "His probation period lasts three months." },
                    { word: "vacancy", pron: "/ˈveɪ.kən.si/", pos: "noun", mean: "chỗ trống tuyển dụng", example: "There is an IT vacancy in our team." },
                    { word: "colleague", pron: "/ˈcol.eeg/", pos: "noun", mean: "đồng nghiệp", example: "I have great relationship with colleagues." },
                    { word: "orientation", pron: "/ˌɔː.ri.enˈteɪ.ʃən/", pos: "noun", mean: "buổi định hướng", example: "Orientation for new hires starts tomorrow." },
                    { word: "applicant", pron: "/ˈæp.lɪ.kənt/", pos: "noun", mean: "người ứng tuyển", example: "We interviewed ten applicants today." },
                    { word: "severance", pron: "/ˈsev.ər.əns/", pos: "noun", mean: "trợ cấp thôi việc", example: "She received a generous severance package." },
                    { word: "overtime", pron: "/ˈəʊ.və.taɪm/", pos: "noun", mean: "thêm giờ", example: "Overtime pay is double the standard rate." },
                    { word: "commute", pron: "/kəˈmjuːt/", pos: "verb/noun", mean: "đi làm hàng ngày", example: "She commutes to work by subway." },
                    { word: "labor", pron: "/ˈleɪ.bər/", pos: "noun", mean: "lao động", example: "Manual labor is required in the warehouse." }
                ]
            },
            "Week2_T5": {
                theme: "Technology (Công nghệ)",
                words: [
                    { word: "database", pron: "/ˈdeɪ.tə.beɪs/", pos: "noun", mean: "cơ sở dữ liệu", example: "Our customer database is highly secure." },
                    { word: "software", pron: "/ˈsɒft.weər/", pos: "noun", mean: "phần mềm máy tính", example: "We updated the accounting software." },
                    { word: "network", pron: "/ˈnet.wɜːk/", pos: "noun/verb", mean: "mạng lưới kết nối", example: "The office wireless network is down." },
                    { word: "device", pron: "/dɪˈvaɪs/", pos: "noun", mean: "thiết bị phần cứng", example: "Turn off all electronic devices on flight." },
                    { word: "upgrade", pron: "/ʌpˈɡreɪd/", pos: "verb/noun", mean: "nâng cấp", example: "We must upgrade our server hardware." },
                    { word: "backup", pron: "/ˈbæk.ʌp/", pos: "noun/verb", mean: "sao lưu dự phòng", example: "Keep a backup of all critical files." },
                    { word: "security", pron: "/sɪˈkjʊə.rɪ.ti/", pos: "noun", mean: "an ninh, bảo mật", example: "Cybersecurity measures are updated daily." },
                    { word: "crash", pron: "/kræʃ/", pos: "verb/noun", mean: "sự cố máy hỏng, sập", example: "The system crashed due to database load." },
                    { word: "interface", pron: "/ˈɪn.tə.feɪs/", pos: "noun", mean: "giao diện người dùng", example: "The app has a user-friendly interface." },
                    { word: "protocol", pron: "/ˈprəʊ.tə.kɒl/", pos: "noun", mean: "giao thức kết nối", example: "They followed the standard security protocol." },
                    { word: "broadband", pron: "/ˈbrɔːd.bænd/", pos: "noun", mean: "băng thông rộng", example: "We installed high-speed broadband." },
                    { word: "encrypt", pron: "/ɪnˈkrɪpt/", pos: "verb", mean: "mã hóa dữ liệu", example: "Passwords are encrypted in our database." },
                    { word: "hardware", pron: "/ˈhɑːd.weər/", pos: "noun", mean: "phần cứng", example: "Computers, printers are examples of hardware." },
                    { word: "installation", pron: "/ˌɪn.stəˈleɪ.ʃən/", pos: "noun", mean: "sự cài đặt", example: "Software installation takes five minutes." },
                    { word: "compatibility", pron: "/kəmˌpæt.əˈbɪl.ə.ti/", pos: "noun", mean: "tính tương thích", example: "Check file compatibility before opening." },
                    { word: "processor", pron: "/ˈprəʊ.ses.ər/", pos: "noun", mean: "bộ vi xử lý", example: "This computer has a fast Intel processor." },
                    { word: "server", pron: "/ˈsɜː.vər/", pos: "noun", mean: "máy chủ hệ thống", example: "The web server handles thousands of requests." },
                    { word: "glitch", pron: "/ɡlɪtʃ/", pos: "noun", mean: "lỗi kỹ thuật nhỏ", example: "A minor software glitch delayed the launch." },
                    { word: "wireless", pron: "/ˈwaɪə.ləs/", pos: "adjective", mean: "không dây", example: "We buy wireless keyboard and mouse." },
                    { word: "automated", pron: "/ˈɔː.tə.meɪ.tɪd/", pos: "adjective", mean: "tự động hóa", example: "Our backup process is fully automated." }
                ]
            },
            "Week2_T6": {
                theme: "Shopping (Mua sắm)",
                words: [
                    { word: "receipt", pron: "/rɪˈsiːt/", pos: "noun", mean: "biên lai hóa đơn", example: "Please keep your receipt for refunds." },
                    { word: "refund", pron: "/ˈriː.fʌnd/", pos: "noun/verb", mean: "hoàn tiền", example: "Customers can get a full refund within a week." },
                    { word: "bargain", pron: "/ˈbɑː.ɡɪn/", pos: "noun/verb", mean: "món hời / trả giá", example: "This laptop is a bargain at five hundred dollars." },
                    { word: "cashier", pron: "/kæʃˈɪər/", pos: "noun", mean: "nhân viên thu ngân", example: "The cashier scanned my items quickly." },
                    { word: "aisle", pron: "/aɪl/", pos: "noun", mean: "lối đi giữa các quầy", example: "Milk is located in aisle number four." },
                    { word: "warranty", pron: "/ˈwɒr.ən.ti/", pos: "noun", mean: "sự bảo hành", example: "This TV has a three-year warranty." },
                    { word: "customer", pron: "/ˈkʌs.tə.mər/", pos: "noun", mean: "khách hàng mua sắm", example: "Customer service solved my issues." },
                    { word: "coupon", pron: "/ˈkuː.pɒn/", pos: "noun", mean: "phiếu giảm giá", example: "Use this coupon for a ten percent discount." },
                    { word: "delivery", pron: "/dɪˈlɪv.ər.i/", pos: "noun", mean: "sự giao hàng", example: "We offer free home delivery on big items." },
                    { word: "exchange", pron: "/ɪksˈtʃeɪndʒ/", pos: "verb/noun", mean: "đổi hàng khác", example: "I want to exchange this shirt for a larger size." },
                    { word: "retail", pron: "/ˈriː.teɪl/", pos: "noun/adj", mean: "bán lẻ", example: "Retail sales increased during the holidays." },
                    { word: "wholesale", pron: "/ˈhəʊl.seɪl/", pos: "noun/adj", mean: "bán buôn/sỉ", example: "Buying wholesale is much cheaper." },
                    { word: "catalog", pron: "/ˈkæt.əl.ɒɡ/", pos: "noun", mean: "mục lục sản phẩm", example: "Browse our latest catalog online." },
                    { word: "merchant", pron: "/ˈmɜː.tʃənt/", pos: "noun", mean: "thương gia", example: "Online merchants accept credit cards." },
                    { word: "defect", pron: "/ˈdiː.fekt/", pos: "noun", mean: "lỗi sản phẩm", example: "Return the product if there is a defect." },
                    { word: "purchase", pron: "/ˈpɜː.tʃəs/", pos: "verb/noun", mean: "mua sắm / vật mua", example: "I made a secure online purchase." },
                    { word: "clearance", pron: "/ˈklɪə.rəns/", pos: "noun", mean: "xả hàng thanh lý", example: "This store has a big clearance sale today." },
                    { word: "inventory", pron: "/ˈɪn.vən.tər.i/", pos: "noun", mean: "hàng hóa trong kho", example: "Inventory checks run every Saturday." },
                    { word: "brand", pron: "/brænd/", pos: "noun", mean: "thương hiệu sản phẩm", example: "I prefer this brand of shoes." },
                    { word: "trolley", pron: "/ˈtrɒl.i/", pos: "noun", mean: "xe đẩy siêu thị", example: "Put your shopping items in the trolley." }
                ]
            }
        };

        // Grammar Lessons Database
        const grammarDatabase = {
            "Week1_T2": {
                title: "Các thì đơn cơ bản (Simple Tenses)",
                formula: "HTĐ: S + V(s/es) | QKĐ: S + V2/ed | TLĐ: S + will + V",
                desc: "HTĐ diễn tả chân lý, thói quen (every day). QKĐ diễn tả việc đã chấm dứt trong quá khứ (yesterday, ago). TLĐ diễn tả quyết định nhất thời hoặc dự báo tương lai (tomorrow, next week).",
                usage: "• Thì hiện tại đơn: Thói quen, sự thật hiển nhiên (always, usually, every day).<br>• Thì quá khứ đơn: Sự việc đã chấm dứt hoàn toàn ở quá khứ (yesterday, last year, 2 years ago).<br>• Thì tương lai đơn: Quyết định ngay lúc nói, lời hứa hoặc dự đoán (tomorrow, next week, soon).",
                examples: "1. She <b>submits</b> the paperwork daily. (Hiện tại đơn)<br>2. They <b>delayed</b> the flight yesterday due to storm. (Quá khứ đơn)<br>3. We <b>will schedule</b> a brainstorming session tomorrow. (Tương lai đơn)"
            },
            "Week1_T3": {
                title: "Thì Tiếp Diễn & Hoàn Thành (Continuous & Perfect Tenses)",
                formula: "TD: S + be + V-ing | HTHT: S + have/has + V3/ed",
                desc: "Tiếp diễn diễn tả hành động đang xảy ra tại mốc thời gian cụ thể (now, at this time). Hiện tại hoàn thành diễn tả việc bắt đầu ở quá khứ kéo dài đến hiện tại (since, for, already, recently, yet).",
                usage: "• Hiện tại tiếp diễn: Đang xảy ra lúc nói hoặc kế hoạch tương lai (now, at the moment).<br>• Hiện tại hoàn thành: Kết quả hành động ở quá khứ nhưng ảnh hưởng hiện tại, hoặc kinh nghiệm (since, for, just, already, yet, recently).",
                examples: "1. The technician <b>is repairing</b> the photocopier now. (Tiếp diễn)<br>2. Our competitor <b>has launched</b> a new strategy recently. (Hoàn thành)<br>3. We <b>have collaborated</b> with their team for 3 years. (Hoàn thành)"
            },
            "Week1_T4": {
                title: "Ôn tập các thì động từ (Verb Tenses Review)",
                formula: "Phân biệt cách chia động từ theo mốc thời gian",
                desc: "Thực hành làm bài tập kết hợp các thì. Lưu ý trạng từ chỉ thời gian để chọn đáp án đúng: since/for (HTHT), ago/yesterday (QKĐ), next/tomorrow (TLĐ).",
                usage: "• Cần xác định mốc thời gian trong câu trước khi chọn thì.<br>• Chú ý sự hòa hợp chủ ngữ và động từ (Chủ ngữ số ít đi với V-s/es hoặc has/is).<br>• Nhận dạng trạng từ thời gian là chiếc chìa khóa vàng để lấy điểm nhanh.",
                examples: "1. Since 2022, our company <b>has acquired</b> three startups. (HTHT vì có 'Since')<br>2. Last month, we <b>budgeted</b> $50,000 for marketing. (Quá khứ đơn vì có 'Last month')<br>3. I <b>will receive</b> the final invoice tomorrow. (Tương lai đơn vì có 'tomorrow')"
            },
            "Week1_T5": {
                title: "Từ loại cơ bản (Nouns, Pronouns, Adjectives, Adverbs)",
                formula: "Vị trí: Adj + N | Adv + V | Be + Adj | V thường + Adv",
                desc: "N (Danh từ) làm chủ ngữ/tân ngữ. Pron (Đại từ) thay thế cho N. Adj (Tính từ) bổ nghĩa cho N đứng trước. Adv (Trạng từ) bổ nghĩa cho V, Adj hoặc cả câu.",
                usage: "• Tính từ (Adj) bổ nghĩa danh từ, đứng trước danh từ hoặc sau 'be'.<br>• Trạng từ (Adv) bổ nghĩa cho động từ thường, đứng trước hoặc sau động từ, hoặc bổ nghĩa cho cả câu (thường tận cùng bằng đuôi -ly).",
                examples: "1. We had a <b>productive</b> meeting yesterday. (Adj + N)<br>2. The staff works <b>productively</b> to meet the deadline. (V thường + Adv)<br>3. She completed the <b>paperwork</b> very <b>quickly</b>. (N & Adv)"
            },
            "Week1_T6": {
                title: "Giới từ & Liên từ (Prepositions & Conjunctions)",
                formula: "Prep + N/V-ing | Clause + Conjunction + Clause",
                desc: "Giới từ chỉ thời gian/nơi chốn (in, on, at, during). Liên từ nối các mệnh đề lại với nhau (and, but, or, because, although, when, while).",
                usage: "• Giới từ (Preposition) phải đi kèm một cụm danh từ hoặc V-ing.<br>• Liên từ (Conjunction) dùng nối hai mệnh đề độc lập hoặc phụ thuộc. Luôn xác định xem sau chỗ trống là Mệnh đề hay Cụm danh từ.",
                examples: "1. The meeting was delayed <b>because of</b> the heavy rain. (Giới từ + Cụm N)<br>2. The meeting was delayed <b>because</b> it rained heavily. (Liên từ + Mệnh đề)<br>3. She worked overtime <b>although</b> she was tired. (Liên từ + Mệnh đề)"
            },
            "Week2_T2": {
                title: "Câu bị động (Passive Voice)",
                formula: "S + be + V3/ed (+ by O)",
                desc: "Dùng khi chủ ngữ là vật bị tác động hoặc đối tượng thực hiện hành động không quan trọng. Chia động từ 'be' tương ứng với thì của câu gốc.",
                usage: "• Luôn kiểm tra xem chủ ngữ là người hay vật thực hiện hành động.<br>• Dấu hiệu thường thấy: Có giới từ 'by' chỉ tác nhân ở phía sau.<br>• Cấu trúc động từ luôn phải có 'be' (am/is/are/was/were/been) kết hợp với động từ cột 3 hoặc thêm -ed.",
                examples: "1. The office <b>is equipped</b> with modern computers. (Hiện tại bị động)<br>2. The contract <b>was signed</b> by the client yesterday. (Quá khứ bị động)<br>3. A new application <b>will be launched</b> next week. (Tương lai bị động)"
            },
            "Week2_T3": {
                title: "Mệnh đề quan hệ (Relative Clauses)",
                formula: "Who (chỉ người) | Which (chỉ vật) | That (chung) | Whose + N",
                desc: "Dùng để giải thích rõ hơn cho danh từ đứng trước nó. Who làm chủ ngữ chỉ người, Whom làm tân ngữ chỉ người, Which chỉ vật, Whose chỉ sở hữu.",
                usage: "• Who/Whom thay thế cho danh từ chỉ người.<br>• Which thay thế cho danh từ chỉ vật.<br>• Whose chỉ sự sở hữu, bắt buộc theo sau bởi danh từ không có mạo từ (a/an/the).<br>• That có thể thay thế cho Who/Which trong mệnh đề xác định.",
                examples: "1. The colleague <b>who</b> helped me with the paperwork is very nice. (Who làm S chỉ người)<br>2. The factory <b>which</b> produces toys is expanding. (Which chỉ vật)<br>3. The client <b>whose</b> signature is on the contract is from New York. (Whose chỉ sở hữu)"
            },
            "Week2_T4": {
                title: "Câu so sánh (Comparisons)",
                formula: "Hơn: short-er / more + long | Nhất: the short-est / the most + long",
                desc: "So sánh bằng: as + adj/adv + as. So sánh hơn: dùng than. So sánh nhất: dùng the. Chú ý tính từ ngắn (1 âm tiết) và tính từ dài (>=2 âm tiết).",
                usage: "• So sánh bằng: as [tính từ/trạng từ] as.<br>• So sánh hơn: Thêm đuôi '-er' vào tính từ ngắn hoặc dùng 'more' trước tính từ dài, kèm theo 'than'.<br>• So sánh nhất: Thêm đuôi '-est' vào tính từ ngắn hoặc dùng 'most' trước tính từ dài, kèm theo 'the'.",
                examples: "1. The retail price is <b>higher than</b> the wholesale price. (So sánh hơn)<br>2. This workstation is <b>as productive as</b> that one. (So sánh bằng)<br>3. This is <b>the most expensive</b> machinery in the factory. (So sánh nhất)"
            },
            "Week2_T5": {
                title: "Câu điều kiện loại 1 & 2 (Conditional Sentences)",
                formula: "L1: If + S + V(s/es), S + will + V | L2: If + S + V2/ed, S + would + V",
                desc: "Loại 1 diễn tả sự việc có thể xảy ra ở hiện tại/tương lai. Loại 2 diễn tả giả định trái ngược với thực tế ở hiện tại (chú ý If I were...)",
                usage: "• Loại 1 (Điều kiện có thật): Dùng để đưa ra giả định thực tế ở hiện tại/tương lai.<br>• Loại 2 (Điều kiện giả định không có thật): Dùng để giả định trái ngược hoàn toàn với thực tế ở hiện tại. Động từ tobe ở mệnh đề If luôn là 'were' cho mọi ngôi.",
                examples: "1. If we <b>invest</b> now, we <b>will profit</b> later. (Điều kiện loại 1)<br>2. If I <b>were</b> you, I <b>would upgrade</b> the database server. (Điều kiện loại 2)<br>3. If they <b>conducted</b> a survey, they <b>would get</b> feedback. (Điều kiện loại 2)"
            },
            "Week2_T6": {
                title: "Danh động từ & Động từ nguyên mẫu (Gerund vs Infinitive)",
                formula: "V + V-ing (avoid, enjoy...) | V + to-V (decide, want...)",
                desc: "Một số động từ chỉ đi với danh động từ (Gerund - Ving), một số chỉ đi với động từ nguyên mẫu có to (To-V). Cần học thuộc lòng danh sách các từ này.",
                usage: "• Nhóm đi với V-ing: avoid, postpone, delay, keep, practice, suggest, mind, enjoy...<br>• Nhóm đi với To-V: decide, refuse, agree, expect, plan, promise, offer, fail, want...<br>• Nhóm có thể đi với cả 2 nhưng đổi nghĩa: remember, forget, stop, try...",
                examples: "1. We decided <b>to upgrade</b> our security software. (decide + To-V)<br>2. Please avoid <b>making</b> noise in the library. (avoid + V-ing)<br>3. They agreed <b>to sign</b> the sales contract. (agree + To-V)"
            }
        };
