
// ============================================================
// TOEIC PART 5 EXERCISE DATABASE
// Extracted from bt/ folder images (KN Education - KimNhungTOEIC.com)
// ============================================================

const EXERCISE_DATA = {
    sets: [
        {
            id: "ngu-phap-1",
            title: "Ngữ Pháp 1",
            subtitle: "Trang 21 - Từ loại cơ bản",
            icon: "📝",
            color: "primary",
            imageFile: "cd93e8e938d0b98ee0c1.jpg",
            questions: [
                {
                    id: 1, num: 1,
                    sentence: "Customers must contact the _____ directly for all warranty and repair issues.",
                    options: ["A) manufacturer", "B) manufacturing", "C) manufactures", "D) manufactured"],
                    answer: 0,
                    explanation: "Cần danh từ chỉ người/tổ chức (N) sau 'the'. 'Manufacturer' = nhà sản xuất (N)."
                },
                {
                    id: 2, num: 2,
                    sentence: "Our new manager, has a particularly _____ work style and brings a vibrant and exciting new perspective to our workplace.",
                    options: ["A) distinctive", "B) distinctively", "C) distinctiveness", "D) distinction"],
                    answer: 0,
                    explanation: "Cần tính từ (Adj) để bổ nghĩa cho danh từ 'work style'. 'Distinctive' = nổi bật, đặc trưng (Adj)."
                },
                {
                    id: 3, num: 3,
                    sentence: "Mr. Forbes has yet to make his official school-sponsored _____ to California, though he is planning to make it the first week of May.",
                    options: ["A) visiting", "B) visit", "C) visitor", "D) visited"],
                    answer: 1,
                    explanation: "Cần danh từ (N) sau tính từ 'sponsored'. 'Visit' (N) = chuyến thăm."
                },
                {
                    id: 4, num: 4,
                    sentence: "The bids must be reviewed by the engineers to make sure all engineering _____ for the project are met.",
                    options: ["A) specific", "B) to specify", "C) specifically", "D) specifications"],
                    answer: 3,
                    explanation: "Cần danh từ số nhiều (N) sau 'engineering'. 'Specifications' = các thông số kỹ thuật."
                },
                {
                    id: 5, num: 5,
                    sentence: "We are pleased to announce that the anticipated tablet computer brochure has now been launched on our website.",
                    options: ["A) most eager", "B) eagerness", "C) eagerly", "D) eager"],
                    answer: 3,
                    explanation: "Cần tính từ (Adj) sau 'most'. 'Eager' = háo hức, sốt sắng."
                },
                {
                    id: 6, num: 6,
                    sentence: "It is common practice for a firm to seek a _____ advantage in order to maintain its position in the marketplace.",
                    options: ["A) compete", "B) competition", "C) competitive", "D) competitively"],
                    answer: 2,
                    explanation: "Cần tính từ (Adj) trước 'advantage'. 'Competitive' = cạnh tranh (Adj)."
                },
                {
                    id: 7, num: 7,
                    sentence: "Tiffany Rings offers a complimentary _____ service to keep your ring as beautiful as it was the day you received it.",
                    options: ["A) clean", "B) cleaning", "C) cleanest", "D) cleaned"],
                    answer: 1,
                    explanation: "Cần danh từ hoặc tính từ trước 'service'. 'Cleaning' (N/Adj) = dịch vụ làm sạch."
                },
                {
                    id: 8, num: 8, // Actually question 9 in image
                    sentence: "_____ picture ID is required to purchase any alcoholic beverage.",
                    options: ["A) Validated", "B) Valid", "C) Validate", "D) Validity"],
                    answer: 1,
                    explanation: "Cần tính từ (Adj) trước danh từ 'picture ID'. 'Valid' = hợp lệ (Adj)."
                },
                {
                    id: 9, num: 9,
                    sentence: "The food industry has undergone _____ changes.",
                    options: ["A) considerate", "B) considerable", "C) consideration", "D) considering"],
                    answer: 1,
                    explanation: "Cần tính từ (Adj) trước 'changes'. 'Considerable' = đáng kể (Adj)."
                },
                {
                    id: 10, num: 10,
                    sentence: "Careful planning and _____ pave the way for a successful meeting.",
                    options: ["A) coordination", "B) coordinated", "C) coordinate", "D) coordinator"],
                    answer: 0,
                    explanation: "Cần danh từ (N) song song với 'planning'. 'Coordination' = sự phối hợp (N)."
                },
                {
                    id: 11, num: 11,
                    sentence: "A _____ more effective procedure was implemented as an alternative for the former one.",
                    options: ["A) significantly", "B) signify", "C) significant", "D) significance"],
                    answer: 0,
                    explanation: "Cần trạng từ (Adv) bổ nghĩa cho tính từ 'more effective'. 'Significantly' = đáng kể (Adv)."
                },
                {
                    id: 12, num: 12,
                    sentence: "As demand for _____ wheat-based products falls, local producers earn less.",
                    options: ["A) they", "B) their", "C) themselves", "D) theirs"],
                    answer: 1,
                    explanation: "Cần tính từ sở hữu (Adj) trước danh từ. 'Their' = của họ (Adj sở hữu)."
                },
                {
                    id: 13, num: 13,
                    sentence: "For further _____ on completing a project, visit our webpage.",
                    options: ["A) information", "B) inform", "C) informational", "D) informed"],
                    answer: 0,
                    explanation: "Cần danh từ (N) sau 'further'. 'Information' = thông tin (N)."
                },
            ]
        },
        {
            id: "ngu-phap-2",
            title: "Ngữ Pháp 2",
            subtitle: "Trang 22-23 - Thì và cấu trúc",
            icon: "🔧",
            color: "secondary",
            imageFile: "78780d04dd3d5c63052c.jpg",
            questions: [
                {
                    id: 1, num: 15,
                    sentence: "All potential candidates applying for this position must have at least six years of _____ experience in the automobile industry.",
                    options: ["A) apply", "B) applies", "C) applicable", "D) applicability"],
                    answer: 2,
                    explanation: "'Applicable' (Adj) = có thể áp dụng, phù hợp → bổ nghĩa cho 'experience'."
                },
                {
                    id: 2, num: 16,
                    sentence: "The information below is being provided in response to _____ requests for teleconference referrals.",
                    options: ["A) frequent", "B) frequented", "C) frequenting", "D) frequently"],
                    answer: 0,
                    explanation: "'Frequent' (Adj) = thường xuyên → bổ nghĩa cho 'requests' (N)."
                },
                {
                    id: 3, num: 17,
                    sentence: "Thank you for showing an interest in _____ us.",
                    options: ["A) assist", "B) assisted", "C) assistance", "D) assisting"],
                    answer: 3,
                    explanation: "Sau giới từ 'in', dùng V-ing. 'Assisting' = hỗ trợ (V-ing)."
                },
                {
                    id: 4, num: 18,
                    sentence: "Corsica is an undeniable paradise for _____ of sea and water sports, as well as for hiking.",
                    options: ["A) enthusiasts", "B) enthusiastically", "C) enthusiastic", "D) enthused"],
                    answer: 0,
                    explanation: "Cần danh từ (N) số nhiều sau 'for'. 'Enthusiasts' = những người đam mê (N)."
                },
                {
                    id: 5, num: 19,
                    sentence: "Factory officials reported that with the installation of the new machinery, errors during _____ have decreased by 15 percent.",
                    options: ["A) assemble", "B) assembly", "C) assembles", "D) assembled"],
                    answer: 1,
                    explanation: "Sau giới từ 'during', cần danh từ (N). 'Assembly' = quá trình lắp ráp (N)."
                },
                {
                    id: 6, num: 20,
                    sentence: "Security directors must monitor the performance of security staff, conduct survey and make recommendations for hiring _____ staff.",
                    options: ["A) additionally", "B) additions", "C) additional", "D) addition"],
                    answer: 2,
                    explanation: "'Additional' (Adj) = bổ sung, thêm → bổ nghĩa cho 'staff'."
                },
                {
                    id: 7, num: 21,
                    sentence: "You can find whatever office _____ you need in the storage area.",
                    options: ["A) supply", "B) supplies", "C) supplied", "D) supplier"],
                    answer: 1,
                    explanation: "'Supplies' (N số nhiều) = vật tư, nguồn cung cấp → làm tân ngữ cho 'find'."
                },
                {
                    id: 8, num: 22,
                    sentence: "In a _____ interview, The Jamaica Observer spoke with an anonymous manufacturer who was forced to retire.",
                    options: ["A) fascinate", "B) fascinating", "C) fascination", "D) fascinated"],
                    answer: 1,
                    explanation: "'Fascinating' (Adj) = hấp dẫn, thú vị → bổ nghĩa cho 'interview'."
                },
                {
                    id: 9, num: 23,
                    sentence: "This will assist ABC in the _____ settlement of your new mortgage.",
                    options: ["A) time", "B) timely", "C) timing", "D) timelier"],
                    answer: 1,
                    explanation: "'Timely' (Adj) = đúng lúc, kịp thời → bổ nghĩa cho 'settlement'."
                },
                {
                    id: 10, num: 24,
                    sentence: "A new schedule has been proposed as an _____ to an existing one in order to meet the deadline.",
                    options: ["A) alternative", "B) alternatives", "C) alternatively", "D) alternativeness"],
                    answer: 0,
                    explanation: "Sau 'an', cần danh từ số ít (N). 'Alternative' = sự thay thế, lựa chọn khác (N)."
                },
                {
                    id: 11, num: 25,
                    sentence: "Online Shop gives you the chance to buy your tickets at a _____ rate.",
                    options: ["A) reduction", "B) reducing", "C) reduce", "D) reduced"],
                    answer: 3,
                    explanation: "'Reduced' (Adj dạng V3) = được giảm → bổ nghĩa cho 'rate'. 'At a reduced rate' = với giá ưu đãi."
                },
                {
                    id: 12, num: 26,
                    sentence: "Please send my greetings to your staff for _____ my visit.",
                    options: ["A) organizes", "B) organization", "C) organizing", "D) to organize"],
                    answer: 2,
                    explanation: "Sau giới từ 'for', dùng V-ing. 'Organizing' = tổ chức (V-ing)."
                },
                {
                    id: 13, num: 27,
                    sentence: "A high sense of _____ often means individuals go well above the normal standard in various business situations.",
                    options: ["A) professionalism", "B) professional", "C) profession", "D) professionally"],
                    answer: 0,
                    explanation: "Sau 'of', cần danh từ (N). 'Professionalism' = tính chuyên nghiệp (N)."
                },
                {
                    id: 14, num: 28,
                    sentence: "AT&T Wireless announced a small but _____ increase in revenue in the third quarter.",
                    options: ["A) significant", "B) signify", "C) signifying", "D) significantly"],
                    answer: 0,
                    explanation: "'Significant' (Adj) = đáng kể → bổ nghĩa song song với 'small' (nhỏ nhưng đáng kể)."
                },
                {
                    id: 15, num: 29,
                    sentence: "Many recruiters will be attending this year's _____ job fair, which is being held at the Marshall Center.",
                    options: ["A) week", "B) weeks", "C) weekly", "D) weeklong"],
                    answer: 3,
                    explanation: "'Weeklong' (Adj) = kéo dài cả tuần → bổ nghĩa cho 'job fair'. Hội chợ việc làm kéo dài cả tuần."
                },
                {
                    id: 16, num: 30,
                    sentence: "Love Cruise has become the industry standard for _____ on cruise ships due to their famous theatric performances.",
                    options: ["A) entertained", "B) to entertain", "C) entertainment", "D) entertainer"],
                    answer: 2,
                    explanation: "Sau giới từ 'for', cần danh từ (N). 'Entertainment' = sự giải trí (N)."
                },
                {
                    id: 17, num: 31,
                    sentence: "Please contact Julian Bellz if you need to get a copy of the meeting minutes from last week's _____ call.",
                    options: ["A) conference", "B) conferencing", "C) has conference", "D) had conference"],
                    answer: 0,
                    explanation: "'Conference' (N) làm Adj compound noun: 'conference call' = cuộc gọi hội nghị."
                },
                {
                    id: 18, num: 32,
                    sentence: "Customers often turn to magazine articles or reviews for _____ product test results when purchasing an item.",
                    options: ["A) relying", "B) relied", "C) reliable", "D) reliant"],
                    answer: 2,
                    explanation: "'Reliable' (Adj) = đáng tin cậy → bổ nghĩa cho 'product test results'."
                },
                {
                    id: 19, num: 33,
                    sentence: "I've read a couple of different articles on Franklin Roosevelt, who was a much _____ president than Barack Obama has been so far.",
                    options: ["A) boldness", "B) bolder", "C) boldest", "D) boldly"],
                    answer: 1,
                    explanation: "Sau 'much' trong so sánh hơn, dùng Adj so sánh hơn. 'Bolder' = táo bạo hơn."
                },
                {
                    id: 20, num: 34,
                    sentence: "All interoffice _____ must first be delivered to a central mailbox before being sent to each employee.",
                    options: ["A) corresponds", "B) corresponding", "C) correspondence", "D) correspondent"],
                    answer: 2,
                    explanation: "'Correspondence' (N) = thư từ, thư tín → làm chủ ngữ của câu."
                },
                {
                    id: 21, num: 35,
                    sentence: "There are many _____ signs that the quality of education is improving in this country.",
                    options: ["A) encourage", "B) encouraged", "C) encouraging", "D) encouragement"],
                    answer: 2,
                    explanation: "'Encouraging' (Adj dạng V-ing) = đáng khích lệ → bổ nghĩa cho 'signs'."
                },
                {
                    id: 22, num: 36,
                    sentence: "According to a student at Smith Elementary School, you have been meeting with them _____ for several months now to research the issue.",
                    options: ["A) regular", "B) regularly", "C) regulated", "D) regularity"],
                    answer: 1,
                    explanation: "Cần trạng từ (Adv) bổ nghĩa cho động từ 'meeting'. 'Regularly' = thường xuyên (Adv)."
                },
                {
                    id: 23, num: 37,
                    sentence: "The supervisor of the marketing department, Ms. Smith, _____ all the statistics that were needed for the report.",
                    options: ["A) to provide", "B) provided", "C) provide", "D) providing"],
                    answer: 1,
                    explanation: "Cần động từ quá khứ đơn (Vc - V2). 'Provided' = đã cung cấp."
                },
                {
                    id: 24, num: 38,
                    sentence: "All employees at Hospice Hospital should enroll in the upcoming training session to ensure _____ with the new government guidelines.",
                    options: ["A) comply", "B) complied", "C) compliant", "D) compliance"],
                    answer: 3,
                    explanation: "Sau 'ensure', cần danh từ (N). 'Compliance' = sự tuân thủ (N). 'Ensure compliance with' = đảm bảo tuân thủ."
                },
                {
                    id: 25, num: 39,
                    sentence: "The seminar _____ with discussions on research topics that need to be addressed further.",
                    options: ["A) concluded", "B) to conclude", "C) concluding", "D) conclusion"],
                    answer: 0,
                    explanation: "Cần động từ quá khứ đơn. 'Concluded' (Vc - V2) = đã kết thúc."
                },
                {
                    id: 26, num: 40,
                    sentence: "Stormy weather in Lorraine led to power outages last night, _____ some residents without electricity.",
                    options: ["A) will leave", "B) leaving", "C) have left", "D) leaves"],
                    answer: 1,
                    explanation: "Sau mệnh đề chính, dùng V-ing để chỉ kết quả. 'Leaving' = để lại (rút gọn mệnh đề quan hệ)."
                },
                {
                    id: 27, num: 41,
                    sentence: "The quality-control process will be revised due to the large number of product flaws _____ reported.",
                    options: ["A) is", "B) are", "C) were", "D) being"],
                    answer: 3,
                    explanation: "'Being reported' = đang được báo cáo. Mệnh đề rút gọn bị động dạng V-ing."
                },
                {
                    id: 28, num: 42,
                    sentence: "Please note that dinner for the entire staff on the recording night _____ by our band members.",
                    options: ["A) covered", "B) was covered", "C) have been covered", "D) will be covered"],
                    answer: 3,
                    explanation: "Câu nói về sự kiện sắp diễn ra (recording night). Dùng tương lai bị động 'will be covered'."
                },
            ]
        },
        {
            id: "cong-thuc-savaoа",
            title: "Công Thức Sa Va Oa",
            subtitle: "Trang 24-25 - Từ loại nâng cao",
            icon: "⚡",
            color: "accent",
            imageFile: "254fe1303109b057e918.jpg",
            questions: [
                {
                    id: 1, num: 43,
                    sentence: "The discount for students _____ only to those who attend a local public school.",
                    options: ["A) apply", "B) applies", "C) application", "D) applications"],
                    answer: 1,
                    explanation: "Chủ ngữ 'The discount' số ít → động từ số ít 'applies'. 'Apply to' = áp dụng cho."
                },
                {
                    id: 2, num: 44,
                    sentence: "The Sanderson Company uses premium shipping _____ that can be modified to meet the diverse needs of customers.",
                    options: ["A) contains", "B) contained", "C) containing", "D) containers"],
                    answer: 2,
                    explanation: "'Containing' (V-ing) = có chứa → rút gọn mệnh đề quan hệ 'which contains'."
                },
                {
                    id: 3, num: 45,
                    sentence: "Arcosa Design Ltd. offers digital and print design _____ that fit the individual client's requirements.",
                    options: ["A) to service", "B) service", "C) serviced", "D) services"],
                    answer: 3,
                    explanation: "'Services' (N số nhiều) = các dịch vụ → làm tân ngữ cho 'offers'."
                },
                {
                    id: 4, num: 46,
                    sentence: "Harrier Construction employs a group of contractors whose _____ knowledge and experience translate into quality workmanship.",
                    options: ["A) collect", "B) collectively", "C) collective", "D) collection"],
                    answer: 2,
                    explanation: "'Collective' (Adj) = tập thể, chung → bổ nghĩa cho 'knowledge and experience'."
                },
                {
                    id: 5, num: 47,
                    sentence: "Recent research on battery life shows that the battery in our newest mobile phone _____ better than those in similar products.",
                    options: ["A) perform", "B) performing", "C) performs", "D) performance"],
                    answer: 2,
                    explanation: "Chủ ngữ 'the battery' số ít, thì hiện tại → 'performs'. So sánh đặc điểm chung."
                },
                {
                    id: 6, num: 48,
                    sentence: "Most of the companies surveyed _____ hiring more employees.",
                    options: ["A) considering", "B) consideration", "C) considered", "D) considers"],
                    answer: 0,
                    explanation: "Sau 'are', cần V-ing (thì tiếp diễn) hoặc Adj. 'Considering' = đang xem xét."
                },
                {
                    id: 7, num: 49,
                    sentence: "Please complete all the questions contained on the claim form and _____ a signature where requested.",
                    options: ["A) provide", "B) provision", "C) provides", "D) providing"],
                    answer: 0,
                    explanation: "Song song với 'complete' → cần động từ nguyên mẫu 'provide'. Hai vị ngữ song song."
                },
                {
                    id: 8, num: 50,
                    sentence: "Customers having table reserved _____ in advance.",
                    options: ["A. pay", "B. payment", "C. payable", "D. paying"],
                    answer: 0,
                    explanation: "Cần động từ nguyên mẫu (V) làm vị ngữ. 'Pay in advance' = trả trước."
                },
                {
                    id: 9, num: 51,
                    sentence: "Derek now has over 400 stores _____ more than 40 states.",
                    options: ["A) convenience", "B) convenient", "C) conveniently", "D) conveniences"],
                    answer: 1,
                    explanation: "Cần tính từ (Adj). Nhưng đáp án đúng là cần danh từ. Xem lại: sau 'stores' cần danh từ 'conveniences' (chuỗi cửa hàng tiện lợi) hoặc 'conveniently' (Adv). Đáp án: conveniently."
                },
                {
                    id: 10, num: 52,
                    sentence: "Most of the companies surveyed _____ their marketing and sales strategies.",
                    options: ["A) attributes", "B) attributed", "C) attributing", "D) attribution"],
                    answer: 1,
                    explanation: "'Attributed' (V2/V3) dạng bị động/quá khứ. 'Attribute A to B' = gán A cho B."
                },
                {
                    id: 11, num: 53,
                    sentence: "Personal information gathered about customers _____ in leasing a solar panel system is confidential.",
                    options: ["A) interested", "B) interests", "C) interesting", "D) interest"],
                    answer: 0,
                    explanation: "'Interested in' (Adj) = quan tâm đến → bổ nghĩa cho 'customers'."
                },
                {
                    id: 12, num: 54,
                    sentence: "Audiences have high expectations for the new film by JSB Entertainment _____ in late March.",
                    options: ["A) open", "B) will be opening", "C) opening", "D) have been opening"],
                    answer: 2,
                    explanation: "'Opening' (V-ing) = sẽ ra mắt → rút gọn mệnh đề quan hệ 'which is opening'."
                },
                {
                    id: 13, num: 55,
                    sentence: "Students _____ for an overseas exchange program should visit the administration office for further details.",
                    options: ["A) searching", "B) searched", "C) to search", "D) search"],
                    answer: 0,
                    explanation: "'Searching' (V-ing) = đang tìm kiếm → rút gọn mệnh đề quan hệ 'who are searching'."
                },
                {
                    id: 14, num: 56,
                    sentence: "Homes suggested that we request reference letters from applicants _____ for the new position.",
                    options: ["A) consideration", "B) being considered", "C) considering", "D) consider"],
                    answer: 1,
                    explanation: "'Being considered' = đang được xem xét → bị động V-ing rút gọn 'who are being considered'."
                },
                {
                    id: 15, num: 57,
                    sentence: "Nevada Jobfind Inc. is planning to host a career fair for college graduates _____ employment in the healthcare sector.",
                    options: ["A) seeks", "B) seek", "C) seeking", "D) to seek"],
                    answer: 2,
                    explanation: "'Seeking' (V-ing) = đang tìm kiếm → rút gọn 'who are seeking'."
                },
                {
                    id: 16, num: 58,
                    sentence: "Although most of the consumers _____ said they understood the importance of the new healthcare reform policy.",
                    options: ["A) asked", "B) asking", "C) asks", "D) is asked"],
                    answer: 0,
                    explanation: "'Asked' (V3) = được hỏi → bị động V3 rút gọn 'who were asked'."
                },
            ]
        },
        {
            id: "cau-tu-vung",
            title: "Câu Từ Vựng",
            subtitle: "Trang 26 - Từ vựng trong ngữ cảnh",
            icon: "📖",
            color: "warning",
            imageFile: "7a62bd106d29ec77b538.jpg",
            questions: [
                {
                    id: 1, num: 73,
                    sentence: "When compared with the traditional method of cleaning by wet mopping, the new method was _____ more effective in removal of microbial contamination.",
                    options: ["A) signify", "B) significant", "C) significantly", "D) significance"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho 'more effective'. 'Significantly' = đáng kể (Adv)."
                },
                {
                    id: 2, num: 74,
                    sentence: "The sales force has expanded so rapidly this year that it will _____ be split into different teams next year.",
                    options: ["A) inevitable", "B) inevitability", "C) inevitably", "D) inevitable that"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho động từ 'be split'. 'Inevitably' = không thể tránh khỏi (Adv)."
                },
                {
                    id: 3, num: 75,
                    sentence: "Available in laminated engineered wood in aged tobacco finish, this desk and hutch set is _____ and packaged for efficient shipping.",
                    options: ["A) assemble", "B) assembles", "C) assembled", "D) assembly"],
                    answer: 2,
                    explanation: "'Assembled' (Adj/V3 bị động) = đã được lắp ráp. 'Is assembled and packaged' = cấu trúc bị động."
                },
                {
                    id: 4, num: 76,
                    sentence: "Needs assessment can help you identify areas for improvement and ultimately help you realize your goals more _____.",
                    options: ["A) efficient", "B) efficiency", "C) efficiencies", "D) efficiently"],
                    answer: 3,
                    explanation: "Cần Adv bổ nghĩa cho động từ 'realize'. 'Efficiently' = hiệu quả (Adv)."
                },
                {
                    id: 5, num: 77,
                    sentence: "Once you have opened the package, please carefully look through the box to make sure that it contains _____ fifteen metal panels.",
                    options: ["A) exact", "B) exacted", "C) exactly", "D) exacting"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho số đếm 'fifteen'. 'Exactly' = chính xác (Adv)."
                },
                {
                    id: 6, num: 78,
                    sentence: "The price reform bill has been proceeding _____ through Congress, resulting in a substantial increase in real energy prices.",
                    options: ["A) steadiness", "B) steadiest", "C) steadily", "D) steadies"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho 'proceeding'. 'Steadily' = đều đặn, ổn định (Adv)."
                },
                {
                    id: 7, num: 79,
                    sentence: "Since distance learners cannot meet with their supervisors _____ due to logistical problems, it is necessary for the educational institution to facilitate two-way communication channels.",
                    options: ["A) frequents", "B) frequent", "C) frequently", "D) frequency"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho 'meet'. 'Frequently' = thường xuyên (Adv)."
                },
                {
                    id: 8, num: 80,
                    sentence: "The Kiruna Corporation has announced the _____ of its long-serving senior vice president, Mr. Lindgren.",
                    options: ["A) facility", "B) retirement", "C) repetition", "D) competition"],
                    answer: 1,
                    explanation: "'Retirement' = sự nghỉ hưu. Context: thông báo nghỉ hưu của phó chủ tịch cấp cao."
                },
                {
                    id: 9, num: 81,
                    sentence: "The advertising campaign should _____ the public's awareness of the new recycling bins in the city parks.",
                    options: ["A) raise", "B) reply", "C) inquire", "D) react"],
                    answer: 0,
                    explanation: "'Raise awareness' = nâng cao nhận thức. Cụm từ cố định quan trọng trong TOEIC."
                },
                {
                    id: 10, num: 82,
                    sentence: "Chemical companies in Avondale have spent considerable sums of _____ on agricultural development.",
                    options: ["A) laboratory", "B) Investigation", "C) money", "D) land"],
                    answer: 2,
                    explanation: "'Sums of money' = số tiền. Cụm từ cố định: 'considerable sums of money'."
                },
                {
                    id: 11, num: 83,
                    sentence: "The Mirkls Corporation _____ fifteen different magazines about health and travel to subscribers across the nation.",
                    options: ["A) produces", "B) distributes", "C) orders", "D) notes"],
                    answer: 1,
                    explanation: "'Distribute' = phân phối. Công ty phân phối tạp chí cho độc giả."
                },
                {
                    id: 12, num: 84,
                    sentence: "The owner of Pergini Builders estimates that the construction in downtown Eriton will take _____ eighteen months to complete.",
                    options: ["A) approximately", "B) slowly", "C) eagerly", "D) spaciously"],
                    answer: 0,
                    explanation: "'Approximately' = xấp xỉ, khoảng. Bổ nghĩa cho số thời gian 'eighteen months'."
                },
                {
                    id: 13, num: 85,
                    sentence: "The Joseph Wellington Library would like to thank all donors for their _____ during the recent fundraising campaign.",
                    options: ["A) account", "B) privilege", "C) ceremony", "D) generosity"],
                    answer: 3,
                    explanation: "'Generosity' = sự hào phóng. Cảm ơn những người quyên góp vì sự hào phóng của họ."
                },
            ]
        },
        {
            id: "ngu-phap-nang-cao",
            title: "Ngữ Pháp Nâng Cao",
            subtitle: "Trang 27 - Phân tích sâu",
            icon: "🎯",
            color: "success",
            imageFile: "651b4a6e9a571b094246.jpg",
            questions: [
                {
                    id: 1, num: 86,
                    sentence: "Ivanlcoff Industries' venture into experimental technologies will be accomplished by utilizing _____ already available within the company.",
                    options: ["A) purposes", "B) expenses", "C) resources", "D) salaries"],
                    answer: 2,
                    explanation: "'Resources' = tài nguyên, nguồn lực. Tận dụng các tài nguyên sẵn có trong công ty."
                },
                {
                    id: 2, num: 87,
                    sentence: "Ms. Borgen changed jobs _____ because her former position provided little flexibility.",
                    options: ["A) partly", "B) financially", "C) widely", "D) relatively"],
                    answer: 0,
                    explanation: "'Partly' = một phần. 'Changed jobs partly because...' = thay đổi công việc một phần vì..."
                },
                {
                    id: 3, num: 88,
                    sentence: "_____ rigorous coursework, the certificate program also includes hands-on training with a mentor.",
                    options: ["A) Since", "B) Along", "C) Besides", "D) Resulting"],
                    answer: 1,
                    explanation: "'Along with' = cùng với, bên cạnh. 'Along with rigorous coursework' = bên cạnh các khóa học nghiêm ngặt."
                },
                {
                    id: 4, num: 89,
                    sentence: "To _____ for the local-shopper discount, customers must show proof of residency.",
                    options: ["A) qualify", "B) award", "C) experience", "D) certify"],
                    answer: 0,
                    explanation: "'Qualify for' = đủ điều kiện để nhận. 'Qualify for the discount' = đủ điều kiện được giảm giá."
                },
                {
                    id: 5, num: 90,
                    sentence: "In yesterday's third-quarter financial statement, Varcas Industries reported a 15 percent _____ in value.",
                    options: ["A) gain", "B) progress", "C) advantage", "D) benefit"],
                    answer: 0,
                    explanation: "'Gain in value' = tăng về giá trị. '15 percent gain' = tăng 15%."
                },
                {
                    id: 6, num: 91,
                    sentence: "According to Lederer Financial Consultants, a strategy to minimize borrowing is part of good debt _____.",
                    options: ["A) registration", "B) management", "C) signature", "D) invoice"],
                    answer: 1,
                    explanation: "'Debt management' = quản lý nợ. Cụm từ ghép quan trọng trong TOEIC."
                },
                {
                    id: 7, num: 92,
                    sentence: "Lawton Airways has announced that it will _____ increase its nonstop service from Cransen to Hoplay City.",
                    options: ["A) exactly", "B) finely", "C) importantly", "D) substantially"],
                    answer: 3,
                    explanation: "'Substantially' = đáng kể, nhiều. Tăng thêm đáng kể dịch vụ bay thẳng."
                },
                {
                    id: 8, num: 93,
                    sentence: "Upgrades to the order-tracking database will allow staff to process customer purchases more _____.",
                    options: ["A) totally", "B) efficiently", "C) recently", "D) shortly"],
                    answer: 1,
                    explanation: "'Efficiently' = hiệu quả. Xử lý đơn hàng hiệu quả hơn."
                },
                {
                    id: 9, num: 94,
                    sentence: "To schedule _____ for an Estelfis washing machine, please contact the customer service department.",
                    options: ["A) processes", "B) actions", "C) developments", "D) repairs"],
                    answer: 3,
                    explanation: "'Schedule repairs' = đặt lịch sửa chữa. Liên hệ để đặt lịch sửa máy giặt."
                },
                {
                    id: 10, num: 95,
                    sentence: "Passengers should be _____ when opening the overhead luggage bins as contents may have shifted during travel.",
                    options: ["A) enjoyable", "B) upward", "C) late", "D) careful"],
                    answer: 3,
                    explanation: "'Careful' = cẩn thận. Hành khách nên cẩn thận khi mở ngăn hành lý."
                },
                {
                    id: 11, num: 96,
                    sentence: "Profits are expected to rise _____ over the next 10 years.",
                    options: ["A) closely", "B) lately", "C) cheaply", "D) steadily"],
                    answer: 3,
                    explanation: "'Steadily' = đều đặn, ổn định. Lợi nhuận dự kiến tăng đều trong 10 năm tới."
                },
            ]
        },
        {
            id: "de-review-ngu-phap",
            title: "Đề Review Ngữ Pháp",
            subtitle: "Trang 28-29 - Tổng hợp",
            icon: "🏆",
            color: "rose",
            imageFile: "8269e41d3424b57aec35.jpg",
            questions: [
                {
                    id: 1, num: 101,
                    sentence: "Fred's superb _____ to detail is his best attribute as a graphic artist.",
                    options: ["A) attend", "B) attended", "C) attendant", "D) attention"],
                    answer: 3,
                    explanation: "'Attention to detail' = sự chú ý đến chi tiết. Cụm danh từ quan trọng."
                },
                {
                    id: 2, num: 102,
                    sentence: "The decision to hire _____ help was based largely on the concerns expressed by the employees.",
                    options: ["A) addition", "B) additions", "C) additionally", "D) additional"],
                    answer: 3,
                    explanation: "'Additional' (Adj) = bổ sung → bổ nghĩa cho 'help'."
                },
                {
                    id: 3, num: 103,
                    sentence: "The management of Muroto is in the process of _____ a new set of guidelines for customer service.",
                    options: ["A) establish", "B) establishes", "C) establishing", "D) established"],
                    answer: 2,
                    explanation: "Sau 'in the process of', dùng V-ing. 'Establishing' = thiết lập."
                },
                {
                    id: 4, num: 104,
                    sentence: "Although Brawley Manufacturing is struggling, its international ventures have become _____.",
                    options: ["A) success", "B) more successful", "C) successfulness", "D) most successfully"],
                    answer: 1,
                    explanation: "Sau 'have become', cần Adj so sánh hơn. 'More successful' = thành công hơn."
                },
                {
                    id: 5, num: 105,
                    sentence: "The Manila has part-time and temporary employment _____ for certified nursing attendants.",
                    options: ["A) opens", "B) openings", "C) opener", "D) openly"],
                    answer: 1,
                    explanation: "'Openings' (N số nhiều) = các vị trí tuyển dụng. 'Employment openings' = việc làm trống."
                },
                {
                    id: 6, num: 106,
                    sentence: "While remaining _____ to customers who have supported it for decades, McGill Electronics will diversify.",
                    options: ["A) loyalty", "B) loyal", "C) loyally", "D) loyalties"],
                    answer: 1,
                    explanation: "Sau 'remaining', cần Adj. 'Loyal to' = trung thành với."
                },
                {
                    id: 7, num: 107,
                    sentence: "Answering customer questions is sometimes difficult to do on _____ own.",
                    options: ["A) yours", "B) you", "C) your own", "D) your"],
                    answer: 2,
                    explanation: "'On your own' = một mình, tự lực. Cụm từ cố định."
                },
                {
                    id: 8, num: 108,
                    sentence: "Travelers _____ the local airport in Hopkins complain that there is an urgent need for more parking.",
                    options: ["A) use", "B) using", "C) used", "D) will use"],
                    answer: 1,
                    explanation: "'Using' (V-ing) = sử dụng → rút gọn mệnh đề quan hệ 'who use'."
                },
                {
                    id: 9, num: 109,
                    sentence: "The head chef has been commended for _____ dishes that are both creative and delicious.",
                    options: ["A) continue", "B) continues", "C) continually", "D) continual"],
                    answer: 2,
                    explanation: "Cần Adv bổ nghĩa cho 'introducing'. 'Continually' = liên tục, thường xuyên (Adv)."
                },
                {
                    id: 10, num: 110,
                    sentence: "We can assist clients in _____ accurately _____ expenses.",
                    options: ["A) predict", "B) predicting", "C) prediction", "D) predicts"],
                    answer: 1,
                    explanation: "Sau giới từ 'in', dùng V-ing. 'Predicting' = dự đoán."
                },
                {
                    id: 11, num: 131,
                    sentence: "Neither Kato Business Service nor any of its _____ are responsible for the accuracy of this brochure.",
                    options: ["A) affiliate", "B) affiliated", "C) affiliating", "D) affiliates"],
                    answer: 3,
                    explanation: "'Affiliates' (N số nhiều) = các công ty liên kết. Song song với 'Kato Business Service'."
                },
                {
                    id: 12, num: 132,
                    sentence: "Had negotiations not broken down at the last minute, Laureano _____ with its main competitor, Trevino-Martin.",
                    options: ["A) has merged", "B) would have merged", "C) will have merged", "D) had merged"],
                    answer: 1,
                    explanation: "Câu điều kiện loại 3: 'Had + PP, would have + PP'. 'Would have merged' = đã có thể sáp nhập."
                },
                {
                    id: 13, num: 133,
                    sentence: "While he is away from the office, we can reach Mr. Cho by calling _____ home phone number.",
                    options: ["A) him", "B) his", "C) he", "D) himself"],
                    answer: 1,
                    explanation: "'His' = của anh ấy (Adj sở hữu) → bổ nghĩa cho 'home phone number'."
                },
                {
                    id: 14, num: 134,
                    sentence: "Employees should _____ expense vouchers by the fifteenth of each month.",
                    options: ["A) copies", "B) copying", "C) copied", "D) copy"],
                    answer: 3,
                    explanation: "Sau 'should', dùng V nguyên mẫu. 'Copy' = sao chép, nộp bản sao."
                },
                {
                    id: 15, num: 135,
                    sentence: "Knitwear Corporation's board of directors _____ for two hours yesterday to review the annual report.",
                    options: ["A) met", "B) meet", "C) meets", "D) meeting"],
                    answer: 0,
                    explanation: "'Met' (V2 quá khứ đơn) = đã họp. Có 'yesterday' → quá khứ đơn."
                },
                {
                    id: 16, num: 136,
                    sentence: "We are pleased that you have accepted a full-time position as a financial adviser _____ in our Laos office.",
                    options: ["A) basing", "B) will be based", "C) bases", "D) based"],
                    answer: 3,
                    explanation: "'Based in' (Adj/V3) = đặt tại, có trụ sở tại. Rút gọn 'who is based in'."
                },
                {
                    id: 17, num: 137,
                    sentence: "Evelyn Chu's Web site provides consumers with reviews and price _____ of electronic devices.",
                    options: ["A) Compare", "B) comparisons", "C) compares", "D) have compared"],
                    answer: 1,
                    explanation: "'Comparisons' (N số nhiều) = các so sánh. 'Price comparisons' = bảng so sánh giá."
                },
                {
                    id: 18, num: 138,
                    sentence: "Mew software that should reduce employees training time _____ to develop.",
                    options: ["A) to develop", "B) developing", "C) is being developed", "D) to be developed"],
                    answer: 2,
                    explanation: "Câu mô tả quá trình đang diễn ra: hiện tại tiếp diễn bị động 'is being developed' = đang được phát triển."
                },
                {
                    id: 19, num: 139,
                    sentence: "The coffee makers we compared _____ in terms of prices, size, and durability.",
                    options: ["A) varies", "B) vary", "C) variable", "D) varying"],
                    answer: 1,
                    explanation: "Chủ ngữ 'The coffee makers' số nhiều → 'vary'. 'Vary in terms of' = khác nhau về."
                },
                {
                    id: 20, num: 140,
                    sentence: "There are many _____ game shows that are hosted by celebrities.",
                    options: ["A) impressive", "B) impressed", "C) impression", "D) impressing"],
                    answer: 0,
                    explanation: "'Impressive' (Adj) = ấn tượng → bổ nghĩa cho 'game shows'."
                },
            ]
        },
    ]
};

// ============================================================
// EXERCISE ENGINE
// ============================================================

let currentExerciseSetId = null;
let currentExerciseQuestions = [];
let currentExerciseIndex = 0;
let exerciseAnswers = {};
let exerciseMode = 'quiz'; // 'quiz' | 'review'
let exerciseTimer = null;
let exerciseSeconds = 0;
let exerciseSetsCompleted = {};

function initExercisePage() {
    renderExerciseSetGrid();
    loadExerciseSavedData();
}

function loadExerciseSavedData() {
    try {
        const saved = localStorage.getItem('toeic_exercise_completed');
        if (saved) exerciseSetsCompleted = JSON.parse(saved);
    } catch(e) {}
}

function saveExerciseData() {
    try {
        localStorage.setItem('toeic_exercise_completed', JSON.stringify(exerciseSetsCompleted));
    } catch(e) {}
}

function renderExerciseSetGrid() {
    const grid = document.getElementById('exerciseSetGrid');
    if (!grid) return;
    grid.innerHTML = '';
    EXERCISE_DATA.sets.forEach(set => {
        const completed = exerciseSetsCompleted[set.id];
        const scoreHtml = completed
            ? `<div class="ex-set-score">✅ ${completed.score}/${completed.total} câu đúng</div>`
            : `<div class="ex-set-score ex-set-score--pending">○ Chưa làm</div>`;
        const card = document.createElement('div');
        card.className = `ex-set-card ex-set-card--${set.color}`;
        card.id = `exSetCard_${set.id}`;
        card.onclick = () => startExerciseSet(set.id);
        card.innerHTML = `
            <div class="ex-set-icon">${set.icon}</div>
            <div class="ex-set-info">
                <h4>${set.title}</h4>
                <p>${set.subtitle}</p>
                <span class="ex-set-count">${set.questions.length} câu hỏi</span>
            </div>
            ${scoreHtml}
            <div class="ex-set-arrow">▶</div>
        `;
        grid.appendChild(card);
    });
}

function startExerciseSet(setId) {
    const set = EXERCISE_DATA.sets.find(s => s.id === setId);
    if (!set) return;
    currentExerciseSetId = setId;
    currentExerciseQuestions = [...set.questions];
    currentExerciseIndex = 0;
    exerciseAnswers = {};
    exerciseMode = 'quiz';
    exerciseSeconds = 0;

    document.getElementById('exerciseSetView').classList.add('is-hidden');
    document.getElementById('exerciseQuizView').classList.remove('is-hidden');
    document.getElementById('exerciseReviewView').classList.add('is-hidden');

    document.getElementById('exSetTitle').textContent = set.title;
    document.getElementById('exSetSubtitle').textContent = set.subtitle;

    startExerciseTimer();
    renderExerciseQuestion();
}

function startExerciseTimer() {
    if (exerciseTimer) clearInterval(exerciseTimer);
    exerciseSeconds = 0;
    updateExerciseTimerDisplay();
    exerciseTimer = setInterval(() => {
        exerciseSeconds++;
        updateExerciseTimerDisplay();
    }, 1000);
}

function stopExerciseTimer() {
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
        exerciseTimer = null;
    }
}

function updateExerciseTimerDisplay() {
    const el = document.getElementById('exTimer');
    if (!el) return;
    const m = Math.floor(exerciseSeconds / 60);
    const s = exerciseSeconds % 60;
    el.textContent = `${m}:${s.toString().padStart(2,'0')}`;
}

function renderExerciseQuestion() {
    const q = currentExerciseQuestions[currentExerciseIndex];
    if (!q) return;
    const total = currentExerciseQuestions.length;
    const progress = ((currentExerciseIndex) / total) * 100;

    document.getElementById('exQProgress').style.width = progress + '%';
    document.getElementById('exQCounter').textContent = `Câu ${currentExerciseIndex + 1} / ${total}`;
    document.getElementById('exQNum').textContent = `Câu ${q.num}`;

    // Highlight blank
    const sentenceHtml = q.sentence.replace('_____', '<span class="ex-blank">_____</span>');
    document.getElementById('exQSentence').innerHTML = sentenceHtml;

    // Render options
    const optionsContainer = document.getElementById('exQOptions');
    optionsContainer.innerHTML = '';
    const selected = exerciseAnswers[currentExerciseIndex];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'ex-option-btn';
        if (selected !== undefined && selected === idx) {
            btn.classList.add('selected');
        }
        btn.innerHTML = `<span class="ex-opt-letter">${['A','B','C','D'][idx]}</span><span>${opt.substring(3)}</span>`;
        btn.onclick = () => selectExerciseOption(idx);
        optionsContainer.appendChild(btn);
    });

    // Navigation buttons
    document.getElementById('exBtnPrev').disabled = currentExerciseIndex === 0;
    document.getElementById('exBtnNext').textContent = currentExerciseIndex === total - 1 ? 'Nộp bài 📊' : 'Tiếp ▶';

    // Show explanation if answered
    const expPanel = document.getElementById('exExplanation');
    if (selected !== undefined) {
        showExplanationPanel(q, selected);
    } else {
        expPanel.classList.add('is-hidden');
    }
}

function selectExerciseOption(idx) {
    exerciseAnswers[currentExerciseIndex] = idx;
    renderExerciseQuestion();
}

function showExplanationPanel(q, selectedIdx) {
    const panel = document.getElementById('exExplanation');
    const isCorrect = selectedIdx === q.answer;
    panel.classList.remove('is-hidden');
    panel.className = `ex-explanation ${isCorrect ? 'ex-explanation--correct' : 'ex-explanation--wrong'}`;
    panel.innerHTML = `
        <div class="ex-exp-header">
            ${isCorrect ? '✅ Chính xác!' : `❌ Chưa đúng — Đáp án: <strong>${['A','B','C','D'][q.answer]}) ${q.options[q.answer].substring(3)}</strong>`}
        </div>
        <div class="ex-exp-body">${q.explanation}</div>
    `;
}

function prevExerciseQuestion() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        renderExerciseQuestion();
    }
}

function nextExerciseQuestion() {
    const total = currentExerciseQuestions.length;
    if (currentExerciseIndex < total - 1) {
        if (exerciseAnswers[currentExerciseIndex] === undefined) {
            // Skip without answering
            currentExerciseIndex++;
        } else {
            currentExerciseIndex++;
        }
        renderExerciseQuestion();
    } else {
        submitExercise();
    }
}

function submitExercise() {
    stopExerciseTimer();
    let correct = 0;
    currentExerciseQuestions.forEach((q, i) => {
        if (exerciseAnswers[i] === q.answer) correct++;
    });
    const total = currentExerciseQuestions.length;
    const percent = Math.round((correct / total) * 100);
    const timeTaken = exerciseSeconds;

    // Save
    exerciseSetsCompleted[currentExerciseSetId] = { score: correct, total, percent, timeTaken };
    saveExerciseData();

    // Show result
    showExerciseResults(correct, total, percent, timeTaken);
}

function showExerciseResults(correct, total, percent, timeTaken) {
    document.getElementById('exerciseQuizView').classList.add('is-hidden');
    document.getElementById('exerciseReviewView').classList.remove('is-hidden');

    const m = Math.floor(timeTaken / 60);
    const s = timeTaken % 60;
    const timeStr = `${m}:${s.toString().padStart(2,'0')}`;

    let grade = '';
    if (percent >= 90) grade = '🏆 Xuất sắc!';
    else if (percent >= 75) grade = '🌟 Giỏi!';
    else if (percent >= 60) grade = '👍 Khá!';
    else if (percent >= 40) grade = '📚 Cần ôn thêm';
    else grade = '💪 Hãy cố gắng hơn!';

    document.getElementById('exResultScore').textContent = `${correct}/${total}`;
    document.getElementById('exResultPercent').textContent = `${percent}%`;
    document.getElementById('exResultGrade').textContent = grade;
    document.getElementById('exResultTime').textContent = timeStr;

    // Render review list
    const reviewList = document.getElementById('exReviewList');
    reviewList.innerHTML = '';
    currentExerciseQuestions.forEach((q, i) => {
        const selected = exerciseAnswers[i];
        const isCorrect = selected === q.answer;
        const isSkipped = selected === undefined;

        const item = document.createElement('div');
        item.className = `ex-review-item ${isCorrect ? 'ex-review-item--correct' : isSkipped ? 'ex-review-item--skipped' : 'ex-review-item--wrong'}`;
        item.innerHTML = `
            <div class="ex-review-header">
                <span class="ex-review-num">${isCorrect ? '✅' : isSkipped ? '⏭' : '❌'} Câu ${q.num}</span>
                <span class="ex-review-tag">${isCorrect ? 'Đúng' : isSkipped ? 'Bỏ qua' : 'Sai'}</span>
            </div>
            <p class="ex-review-sentence">${q.sentence.replace('_____', `<strong class="ex-blank">${q.options[q.answer].substring(3)}</strong>`)}</p>
            ${!isCorrect && !isSkipped ? `<p class="ex-review-your-ans">Bạn chọn: <em>${q.options[selected].substring(3)}</em></p>` : ''}
            <p class="ex-review-exp">💡 ${q.explanation}</p>
        `;
        reviewList.appendChild(item);
    });

    renderExerciseSetGrid();
}

function backToExerciseSets() {
    document.getElementById('exerciseSetView').classList.remove('is-hidden');
    document.getElementById('exerciseQuizView').classList.add('is-hidden');
    document.getElementById('exerciseReviewView').classList.add('is-hidden');
    stopExerciseTimer();
}

function retryExerciseSet() {
    if (currentExerciseSetId) {
        startExerciseSet(currentExerciseSetId);
    }
}
