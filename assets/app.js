// Tasks checklist data compiled for all 8 weeks and days (T2-T7)
        let checklistState = JSON.parse(localStorage.getItem('toeic_checklist_state')) || {};
        let vocabIndexState = 0; // Current word index for active day card
        let activeVocabMode = 'flashcard'; // 'flashcard' or 'quiz'
        let activeVocabSource = 'daily'; // 'daily' or 'image'
        let activeImageVocabSet = 'Image37';
        let activeGrammarTab = 'formula'; // 'formula', 'usage', or 'examples'

        // Current UI state variables
        let activeWeek = 1;
        let activeDay = "T2";

        // Quiz State Variables
        let quizQuestions = [];
        let currentQuizIndex = 0;
        let quizScore = 0;
        let quizAnswersSelected = [];

        // Shadowing Player State Variables
        let shadowingPlaying = false;
        let shadowingTimerInterval = null;
        let shadowingSeconds = 0;
        const shadowingMaxSeconds = 60; // Simulate 1 minute audio

        // Mock test data table
        let mockTestData = JSON.parse(localStorage.getItem('toeic_mock_tests')) || [
            { id: "Baseline", title: "Mini Test 1", week: "Tuần 2", lc: "", rc: "", note: "Bài thi đánh giá năng lực cơ bản đầu tiên" },
            { id: "Mock1", title: "Full Mock Test #1", week: "Tuần 5", lc: "", rc: "", note: "Thi thử full 200 câu sau giai đoạn học từng part" },
            { id: "Mock2", title: "Full Mock Test #2", week: "Tuần 6", lc: "", rc: "", note: "Bắt đầu giai đoạn rèn đề tính giờ" },
            { id: "Mock3", title: "Full Mock Test #3", week: "Tuần 7", lc: "", rc: "", note: "Đề ETS tăng cường chiến thuật loại nhiễu" },
            { id: "Mock4", title: "Full Mock Test #4", week: "Tuần 8", lc: "", rc: "", note: "Thi mô phỏng áp lực phòng thi thật" },
            { id: "Mock5", title: "Full Mock Test #5", week: "Tuần 8", lc: "", rc: "", note: "Bài thi thử rà soát cuối cùng trước ngày thi thật" }
        ];

        // Generate daily tasks checklist items dynamically based on Week and Day
        function getDailyTasks(week, day) {
            const list = [];
            const key = `W${week}_${day}`;
            
            if (week === 1) {
                if (day === "T2") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Các thì cơ bản", desc: "Học lý thuyết thì Hiện tại đơn, Quá khứ đơn, Tương lai đơn. Làm 15 câu bài tập trắc nghiệm." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Office", desc: "Học 20 từ thông minh ở bảng bên cạnh, nghe phát âm, lật thẻ xem ví dụ và chép lại." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Shadowing Part 1", desc: "Nghe Audio 6 tranh tả người Part 1 ETS 2020 Test 1. Nói lặp lại ngay sau người bản xứ." });
                } else if (day === "T3") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Các thì Tiếp diễn & Hoàn thành", desc: "Học thì Hiện tại tiếp diễn, Quá khứ tiếp diễn và Hiện tại hoàn thành." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Business", desc: "Học 20 từ thông minh mới. Rà soát nhanh lại 20 từ chủ đề Office hôm qua." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Shadowing Part 1 (Tranh tả vật)", desc: "Nghe Audio 6 tranh tả vật Part 1 ETS 2020 Test 2. Thực hành shadowing nhịp điệu tiếng Anh." });
                } else if (day === "T4") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Ôn tập các thì & Làm bài tập", desc: "Hệ thống lại 6 thì đã học. Làm 30 câu trắc nghiệm tổng hợp chia thì động từ." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Finance", desc: "Học 20 từ tài chính. Ghi chú các từ khó vào sổ tay." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Nghe Part 1 (10 câu)", desc: "Nghe trọn vẹn 10 câu Part 1 đề thi thử, chấm điểm xem đúng bao nhiêu câu." });
                } else if (day === "T5") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Từ loại cơ bản (Danh, Tính, Động, Trạng)", desc: "Học vị trí của N, Adj, Adv, Pronoun trong câu. Đây là câu ăn điểm nhanh của Part 5!" });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Travel", desc: "Học 20 từ du lịch, ga tàu, sân bay. Đây là chủ đề cực kỳ phổ biến của Listening." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Shadowing Part 1 nâng cao", desc: "Chọn 3 câu mô tả tranh phức tạp, nghe đi nghe lại, chép chính tả rồi nói đuổi." });
                } else if (day === "T6") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Giới từ & Liên từ", desc: "Học cách dùng giới từ thời gian/không gian và các liên từ phổ biến (because, although, but...)." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Health", desc: "Học 20 từ vựng phòng khám, bác sĩ, đơn thuốc. Dùng flashcards để học." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Nghe 10 câu Part 2", desc: "Nghe 10 câu hỏi đáp Part 2. Tránh bẫy lặp âm hoặc đồng âm." });
                } else if (day === "T7") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Tổng ôn sáng (1h): Hệ thống kiến thức tuần 1", desc: "Đọc lại toàn bộ lý thuyết ngữ pháp đã ghi chép từ Thứ 2 đến Thứ 6." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Kiểm tra từ vựng tối (45p): Ôn tập 100 từ vựng", desc: "Dùng tính năng Flashcards ôn tập toàn bộ 100 từ vựng đã học trong tuần." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (30p): Podcast tiếng Anh dễ", desc: "Nghe các mẩu chuyện ngắn hoặc podcast tiếng Anh giao tiếp đơn giản để thư giãn." });
                }
            } else if (week === 2) {
                if (day === "T2") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Câu bị động (Passive Voice)", desc: "Học cấu trúc Be + V3/ed cho các thì. Nhận biết câu bị động dựa vào ngữ cảnh và giới từ 'by'." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Marketing", desc: "Học 20 từ quảng cáo, tiếp thị, chiến dịch." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Nghe Part 2 (15 câu)", desc: "Tập trung nghe từ đầu tiên (Who, Where, When, Why, How...) để tìm câu trả lời chuẩn xác." });
                } else if (day === "T3") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Mệnh đề quan hệ (Who, Whom, Which, That)", desc: "Học cách dùng đại từ quan hệ thay thế cho chủ ngữ hoặc tân ngữ." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Manufacturing", desc: "Học 20 từ nhà máy, sản xuất, máy móc thiết bị." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Nghe Part 2 nâng cao", desc: "Nghe trọn vẹn 15 câu hỏi dạng gián tiếp, câu hỏi đuôi hoặc câu đề nghị khó nhằn." });
                } else if (day === "T4") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): So sánh hơn, so sánh nhất, so sánh bằng", desc: "Phân biệt công thức tính từ ngắn và tính từ dài. Chú ý các trường hợp đặc biệt (good -> better -> best)." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Personnel", desc: "Học 20 từ nhân sự, tuyển dụng, CV, chế độ lương." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Part 3 (3 bài hội thoại)", desc: "Tập trung đọc trước 3 câu hỏi trước khi audio phát. Khoanh vùng thông tin cần tìm." });
                } else if (day === "T5") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Câu điều kiện loại 1 & loại 2", desc: "Học công thức mệnh đề If và mệnh đề chính. Lưu ý cách chia động từ giả định ở loại 2." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Technology", desc: "Học 20 từ công nghệ, phần mềm, cơ sở dữ liệu." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Part 3 nâng cao", desc: "Thực hành nghe và trả lời 3 bài hội thoại khó, sau đó đọc lại transcript để dò từ mới." });
                } else if (day === "T6") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "Ngữ pháp sáng (1h): Danh động từ & Động từ nguyên mẫu (Ving vs To V)", desc: "Học thuộc lòng các động từ đi kèm Ving (avoid, keep...) và các động từ đi kèm To V (decide, expect...)." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "Từ vựng tối (45p): 20 từ chủ đề Shopping", desc: "Học 20 từ mua sắm, siêu thị, bảo hành, hóa đơn." });
                    list.push({ id: `${key}_t3`, badge: "listen", name: "Luyện nghe tối (15p): Part 4 (3 bài nói ngắn)", desc: "Luyện tập nghe bài phát biểu, quảng cáo hoặc hướng dẫn của 1 người nói." });
                } else if (day === "T7") {
                    list.push({ id: `${key}_t1`, badge: "grammar", name: "MINI TEST SÁNG (2h): 50 câu LC + 50 câu RC", desc: "Thi thử rút gọn nửa đề thi thật (ETS 2020 Test 1) để đánh giá năng lực nền tảng ban đầu." });
                    list.push({ id: `${key}_t2`, badge: "vocab", name: "TỐI SỬA ĐỀ (1h): Phân tích chi tiết lỗi sai", desc: "Ghi nhận kết quả vào bảng theo dõi. Xem kỹ tại sao mình chọn sai và ghi chép sổ tay." });
                }
            } else {
                // Generates standardized structural task items for advanced weeks 3 to 8
                const phaseName = week <= 5 ? "GĐ 2: Luyện Part" : (week <= 7 ? "GĐ 3: Luyện Đề" : "GĐ 4: Vượt Ngưỡng");
                
                list.push({ id: `${key}_t1`, badge: "grammar", name: `Sáng (1h): Học chiến thuật & Ôn điểm NP yếu`, desc: `Rà soát kiến thức, ghi chép chiến thuật của Part trọng tâm tuần. Thực hành 30 câu trắc nghiệm chuyên đề.` });
                list.push({ id: `${key}_t2`, badge: "vocab", name: `Chiều (45p): Ôn luyện 20 từ vựng nâng cao`, desc: `Ôn tập từ vựng qua các bài đọc hiểu hoặc flashcards. Tích lũy các từ đồng nghĩa hay gặp trong đề.` });
                
                if (day === "T7") {
                    list.push({ id: `${key}_t3`, badge: "listen", name: `Tối (2h): THI THỬ MOCK TEST & Ghi điểm`, desc: `Làm bài thi thử nghiêm túc. Lưu kết quả vào bảng theo dõi để kiểm chứng tiến trình học!` });
                } else {
                    list.push({ id: `${key}_t3`, badge: "listen", name: `Tối (1.5h): Luyện chuyên sâu đề ETS`, desc: `Luyện tập nghe/đọc các part tương ứng theo tài liệu ETS 2022. Đọc kỹ phần giải thích chi tiết đáp án.` });
                }
            }

            return list;
        }

        // Initialize Web Application Elements
        function initApp() {
            renderWeeksSidebar();
            renderDayTabs();
            loadActiveDayDashboard();
            renderScoreTracker();
            updateOverallProgress();
            
            // Load saved theme
            const savedTheme = localStorage.getItem('toeic_myle_theme') || 'default';
            window.changeTheme(savedTheme);
            
            // Load saved wish
            const savedWish = localStorage.getItem('toeic_myle_wish');
            displayMyleWish(savedWish);
            
            // Set canvas dynamic resize
            window.addEventListener('resize', () => {
                const canvas = document.getElementById("confettiCanvas");
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
                const stardustCanvas = document.getElementById("stardustCanvas");
                if (stardustCanvas) {
                    stardustCanvas.width = window.innerWidth;
                    stardustCanvas.height = window.innerHeight;
                }
            });

            // Start stardust canvas
            initStardustCanvas();
        }

        // ==========================================================================
        // MỸ LỆ PREMIUM FLEX EDITION SCRIPTS & ENGINES
        // ==========================================================================

        // Web Audio API Synthesizer & SFX Engine
        let audioCtx = null;
        let ambientTimer = null;
        let ambientPlaying = false;
        let sfxEnabled = true;
        let activeSynthNodes = [];

        function initAudioContext() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }

        // SFX Sound Generator
        window.playSfx = function(type) {
            if (!sfxEnabled) return;
            try {
                initAudioContext();
                const now = audioCtx.currentTime;
                
                if (type === 'click' || type === 'tab') {
                    // Soft bubble pop
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(400, now);
                    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
                    
                    gain.gain.setValueAtTime(0.08, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                    
                    osc.start(now);
                    osc.stop(now + 0.08);
                } else if (type === 'check') {
                    // Crystal bell chime
                    const osc1 = audioCtx.createOscillator();
                    const osc2 = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    
                    osc1.connect(gain);
                    osc2.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc1.type = 'sine';
                    osc2.type = 'sine';
                    
                    osc1.frequency.setValueAtTime(987.77, now); // B5
                    osc2.frequency.setValueAtTime(1318.51, now + 0.04); // E6
                    
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.setValueAtTime(0.12, now + 0.04);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                    
                    osc1.start(now);
                    osc2.start(now + 0.04);
                    osc1.stop(now + 0.6);
                    osc2.stop(now + 0.6);
                } else if (type === 'uncheck') {
                    // Downward slide
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(600, now);
                    osc.frequency.linearRampToValueAtTime(300, now + 0.15);
                    
                    gain.gain.setValueAtTime(0.06, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    
                    osc.start(now);
                    osc.stop(now + 0.15);
                } else if (type === 'success') {
                    // Arpeggio chime success
                    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5, E5, G5, C6
                    notes.forEach((freq, index) => {
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(audioCtx.destination);
                        
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, now + index * 0.07);
                        
                        gain.gain.setValueAtTime(0.0, now);
                        gain.gain.linearRampToValueAtTime(0.06, now + index * 0.07 + 0.02);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.07 + 0.4);
                        
                        osc.start(now + index * 0.07);
                        osc.stop(now + index * 0.07 + 0.45);
                    });
                }
            } catch (e) {
                console.error("Audio error", e);
            }
        }

        // Ambient Music Synthesizer (Lofi style soft chord pads + soothing rain)
        let rainNode = null;

        function startRain() {
            if (rainNode) return;
            try {
                const bufferSize = 2 * audioCtx.sampleRate;
                const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }
                
                const whiteNoise = audioCtx.createBufferSource();
                whiteNoise.buffer = noiseBuffer;
                whiteNoise.loop = true;
                
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(700, audioCtx.currentTime); // warm soothing rain sound
                
                const gainNode = audioCtx.createGain();
                gainNode.gain.setValueAtTime(0.003, audioCtx.currentTime); // extremely quiet
                
                whiteNoise.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                whiteNoise.start(0);
                rainNode = { source: whiteNoise, gain: gainNode };
            } catch (e) {
                console.error("Rain synth error", e);
            }
        }

        function stopRain() {
            if (rainNode) {
                try {
                    rainNode.source.stop();
                } catch(e) {}
                rainNode = null;
            }
        }

        window.toggleAmbientMusic = function() {
            try {
                initAudioContext();
                const btn = document.getElementById("ambientMusicBtn");
                
                if (ambientPlaying) {
                    ambientPlaying = false;
                    btn.innerHTML = "🎵 Nhạc Lofi";
                    btn.classList.remove("active");
                    
                    if (ambientTimer) {
                        clearInterval(ambientTimer);
                        ambientTimer = null;
                    }
                    
                    stopRain();
                    
                    activeSynthNodes.forEach(node => {
                        try { node.stop(); } catch(e) {}
                    });
                    activeSynthNodes = [];
                } else {
                    ambientPlaying = true;
                    btn.innerHTML = "🎵 Nhạc: Bật";
                    btn.classList.add("active");
                    
                    startRain();
                    playAmbientSequence();
                    // Play a new chord every 7.5 seconds
                    ambientTimer = setInterval(playAmbientSequence, 7500);
                }
            } catch (e) {
                console.error("Audio error", e);
            }
        }

        const chordProgressions = [
            [110.00, 130.81, 164.81, 196.00, 246.94], // Am9 (A2, C3, E3, G3, B3)
            [87.31, 110.00, 130.81, 164.81, 196.00],  // Fmaj9 (F2, A2, C3, E3, G3)
            [65.41, 98.00, 123.47, 146.83, 164.81],   // Cmaj9 (C2, G2, B2, D3, E3)
            [82.41, 98.00, 123.47, 146.83, 185.00]    // Em9 (E2, G2, B2, D3, F#3)
        ];
        let currentProgressionIndex = 0;

        function playAmbientSequence() {
            if (!ambientPlaying) return;
            const now = audioCtx.currentTime;
            const chord = chordProgressions[currentProgressionIndex];
            
            // Collect node to stop when user toggles OFF
            chord.forEach(freq => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                const filter = audioCtx.createBiquadFilter();
                
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(320, now); // Ultra-deep lofi warmth
                
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(audioCtx.destination);
                
                osc.type = 'triangle'; 
                osc.frequency.setValueAtTime(freq, now);
                
                // Slow attack, sustain, slow release envelope (9.5s total play duration)
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.015, now + 3.2); // 3.2s slow attack
                gain.gain.setValueAtTime(0.015, now + 7.0);          // 3.8s sustain
                gain.gain.linearRampToValueAtTime(0, now + 9.5);     // 2.5s release
                
                osc.start(now);
                osc.stop(now + 9.6);
                activeSynthNodes.push(osc);
            });
            
            currentProgressionIndex = (currentProgressionIndex + 1) % chordProgressions.length;
        }

        window.toggleSfxState = function() {
            sfxEnabled = document.getElementById("sfxToggle").checked;
        }

        // Change application theme dynamically
        window.changeTheme = function(themeName) {
            const body = document.body;
            body.classList.remove("theme-rose-gold", "theme-lavender", "theme-emerald");
            
            document.querySelectorAll(".theme-btn").forEach(btn => btn.classList.remove("active"));
            
            if (themeName !== "default") {
                body.classList.add(`theme-${themeName}`);
            }
            
            const btn = document.querySelector(`.theme-btn[data-theme="${themeName}"]`);
            if (btn) btn.classList.add("active");
            
            localStorage.setItem('toeic_myle_theme', themeName);

            playSfx('click');
        }

        // Canvas Stardust particles (Starfall)
        let stardustActive = true;
        function initStardustCanvas() {
            const canvas = document.getElementById("stardustCanvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            let particles = [];
            
            for (let i = 0; i < 40; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedY: Math.random() * 0.3 + 0.15,
                    speedX: Math.random() * 0.2 - 0.1,
                    opacity: Math.random() * 0.5 + 0.2,
                    pulseSpeed: Math.random() * 0.02 + 0.005,
                    pulseDirection: Math.random() > 0.5 ? 1 : -1
                });
            }
            
            function animate() {
                if (!stardustActive) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#10b981';
                
                particles.forEach(p => {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = primaryColor;
                    ctx.globalAlpha = p.opacity;
                    ctx.shadowBlur = p.size * 5;
                    ctx.shadowColor = primaryColor;
                    ctx.fill();
                    ctx.shadowBlur = 0; 
                    
                    p.y -= p.speedY;
                    p.x += p.speedX + Math.sin(p.y / 40) * 0.06;
                    
                    p.opacity += p.pulseSpeed * p.pulseDirection;
                    if (p.opacity > 0.8) {
                        p.pulseDirection = -1;
                    } else if (p.opacity < 0.1) {
                        p.pulseDirection = 1;
                    }
                    
                    if (p.y < -10) {
                        p.y = canvas.height + 10;
                        p.x = Math.random() * canvas.width;
                    }
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }

        // Motivation Quotes and Wishing Jar
        const myleQuotes = [
            "Không cần vội, Mỹ Lệ cứ học từng chút một. Mỗi ngày đều hơn một chút là rất ổn rồi.",
            "Hôm nay chỉ cần hoàn thành đúng phần đã đặt ra. Chậm một chút cũng được, miễn là không bỏ cuộc.",
            "Một bài nghe khó không nói lên điều gì cả. Nghe lại, ghi lỗi sai, rồi mình tiến thêm một bước.",
            "TOEIC là đường dài. Mỹ Lệ cứ đi đều, đi chắc, rồi kết quả sẽ tự đến.",
            "Nếu hôm nay mệt, học ít lại cũng được. Quan trọng là vẫn giữ được nhịp.",
            "Mỗi từ mới, mỗi câu sửa sai đều là một viên gạch nhỏ cho mục tiêu của Mỹ Lệ.",
            "Cố lên Mỹ Lệ. Có người tin là em làm được, nên mình cứ bình tĩnh học tiếp nhé."
        ];
        let currentQuoteIndex = 0;

        window.nextMyleQuote = function() {
            currentQuoteIndex = (currentQuoteIndex + Math.floor(Math.random() * (myleQuotes.length - 1)) + 1) % myleQuotes.length;
            document.getElementById("myleQuoteText").innerText = `"${myleQuotes[currentQuoteIndex]}"`;
            playSfx('click');
        }

        window.saveMyleWish = function() {
            const input = document.getElementById("myleWishInput");
            const wish = input.value.trim();
            if (wish) {
                localStorage.setItem('toeic_myle_wish', wish);
                displayMyleWish(wish);
                input.value = "";
                
                triggerConfetti();
                playSfx('success');
            }
        }

        function displayMyleWish(wish) {
            const container = document.getElementById("savedWishDisplay");
            if (wish) {
                container.innerHTML = `🌟 <strong>Mục tiêu hôm nay:</strong> "${wish}"`;
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        }

        // Render Weeks Sidebar List
        function renderWeeksSidebar() {
            const weekList = document.getElementById("weekList");
            weekList.innerHTML = "";

            weeksData.forEach(week => {
                const li = document.createElement("li");
                li.className = `week-item ${week.id === activeWeek ? 'active' : ''}`;
                li.onclick = () => {
                    playSfx('tab');
                    activeWeek = week.id;
                    document.querySelectorAll(".week-item").forEach(el => el.classList.remove("active"));
                    li.classList.add("active");
                    
                    document.getElementById("currentWeekTitle").innerText = week.title;
                    document.getElementById("currentWeekDesc").innerText = week.desc;
                    
                    renderDayTabs();
                    loadActiveDayDashboard();

                    if (typeof showMainPage === 'function') {
                        showMainPage();
                    }
                };

                // Calculate progress of this specific week
                let completed = 0;
                let total = 0;
                week.days.forEach(d => {
                    const tasks = getDailyTasks(week.id, d);
                    total += tasks.length;
                    tasks.forEach(t => {
                        if (checklistState[t.id]) completed++;
                    });
                });
                
                const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

                li.innerHTML = `
                    <span>${week.title.split(":")[0]}</span>
                    <div class="week-progress-circle">${percent}%</div>
                `;
                weekList.appendChild(li);
            });
        }

        // Render Day Tabs for currently selected Week
        function renderDayTabs() {
            const dayTabs = document.getElementById("dayTabs");
            dayTabs.innerHTML = "";
            
            const activeWeekData = weeksData.find(w => w.id === activeWeek);
            
            activeWeekData.days.forEach(day => {
                const btn = document.createElement("button");
                btn.className = `day-tab ${day === activeDay ? 'active' : ''}`;
                btn.innerText = day;
                btn.onclick = () => {
                    playSfx('tab');
                    activeDay = day;
                    document.querySelectorAll(".day-tab").forEach(el => el.classList.remove("active"));
                    btn.classList.add("active");
                    loadActiveDayDashboard();
                };
                dayTabs.appendChild(btn);
            });
        }

        function getDailyVocabKey() {
            return `Week${activeWeek}_${activeDay}`;
        }

        function getActiveVocabKey() {
            return activeVocabSource === 'image' ? activeImageVocabSet : getDailyVocabKey();
        }

        function getVocabDb(vocabKey) {
            return vocabDatabase[vocabKey] || (typeof imageVocabDatabase !== 'undefined' ? imageVocabDatabase[vocabKey] : null);
        }

        function updateVocabSourceControls() {
            const dailyBtn = document.getElementById("sourceDailyVocab");
            const imageBtn = document.getElementById("sourceImageVocab");
            const imageSelect = document.getElementById("imageVocabSetSelect");
            const imageToolbar = document.getElementById("imageVocabToolbar");
            if (!dailyBtn || !imageBtn || !imageSelect || !imageToolbar) return;

            dailyBtn.classList.toggle("active", activeVocabSource === 'daily');
            imageBtn.classList.toggle("active", activeVocabSource === 'image');
            imageToolbar.classList.toggle("is-visible", activeVocabSource === 'image');
            imageSelect.value = activeImageVocabSet;
        }

        window.switchVocabSource = function(source) {
            if (source === 'daily' && !vocabDatabase[getDailyVocabKey()]) {
                source = 'image';
            }
            activeVocabSource = source;
            vocabIndexState = 0;
            updateVocabSourceControls();
            renderWordGrid(getActiveVocabKey());
            switchVocabMode('flashcard');
        }

        window.switchImageVocabSet = function(setKey) {
            activeImageVocabSet = setKey;
            activeVocabSource = 'image';
            vocabIndexState = 0;
            updateVocabSourceControls();
            renderWordGrid(getActiveVocabKey());
            switchVocabMode('flashcard');
        }

        // Load tasks, vocab and grammar content for active week and day
        function loadActiveDayDashboard() {
            // Reset state
            stopShadowingPlayer();

            // 1. Render checklist
            const dailyTaskList = document.getElementById("dailyTaskList");
            dailyTaskList.innerHTML = "";
            
            const tasks = getDailyTasks(activeWeek, activeDay);
            
            tasks.forEach(task => {
                const item = document.createElement("div");
                const isCompleted = !!checklistState[task.id];
                item.className = `task-item ${isCompleted ? 'completed' : ''}`;
                item.onclick = () => toggleTaskCompleted(task.id, item);
                
                item.innerHTML = `
                    <div class="task-checkbox">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div class="task-body">
                        <span class="task-badge badge-${task.badge}">${task.badge === 'vocab' ? 'từ vựng' : (task.badge === 'grammar' ? 'ngữ pháp' : 'nghe')}</span>
                        <div class="task-name">${task.name}</div>
                        <div class="task-desc">${task.desc}</div>
                    </div>
                `;
                dailyTaskList.appendChild(item);
            });

            // 2. Render Vocabulary Card
            const dailyVocabKey = getDailyVocabKey();
            const vocabPanel = document.getElementById("vocabPanel");
            vocabPanel.style.display = "flex";
            
            if (activeVocabSource === 'daily' && !vocabDatabase[dailyVocabKey]) {
                activeVocabSource = 'image';
            }
            updateVocabSourceControls();
            vocabIndexState = 0;
            const vocabKey = getActiveVocabKey();
            
            // Redraw word list grid
            renderWordGrid(vocabKey);
            
            if (activeVocabMode === 'quiz') {
                startQuiz(vocabKey);
            } else {
                updateVocabCardUI(vocabKey);
            }

            // 3. Render Grammar Card
            const grammarKey = `Week${activeWeek}_${activeDay}`;
            const grammarPanel = document.getElementById("grammarPanel");
            
            if (grammarDatabase[grammarKey]) {
                grammarPanel.style.display = "flex";
                document.getElementById("grammarTitle").innerText = grammarDatabase[grammarKey].title;
                switchGrammarTab(activeGrammarTab);
            } else {
                grammarPanel.style.display = "none";
            }

            // 4. Render shadowing audio control
            const shadowingCard = document.getElementById("shadowingCard");
            const hasListening = tasks.some(t => t.badge === 'listen');
            if (hasListening) {
                shadowingCard.style.display = "flex";
                
                // Get shadowing script
                const shadowingKey = `Week${activeWeek}_${activeDay}`;
                let scriptObj = shadowingDatabase[shadowingKey];
                if (!scriptObj) {
                    // Fallback to default index-based scripts
                    const idx = (activeWeek + activeDay.charCodeAt(0)) % defaultShadowingScripts.length;
                    scriptObj = defaultShadowingScripts[idx];
                }
                
                document.getElementById("shadowingScriptTitle").innerText = scriptObj.title;
                document.getElementById("shadowingScriptBox").innerHTML = prepareScriptHTML(scriptObj.text);
                
                // Reset progress bar & timer UI
                document.getElementById("playerProgressBar").style.width = "0%";
                document.getElementById("playerTimer").innerText = "0:00";
            } else {
                shadowingCard.style.display = "none";
            }

            // 5. Update general tip text
            const tipsText = document.getElementById("tipsText");
            if (activeWeek <= 2) {
                tipsText.innerText = "Dành tối thiểu 2 giờ để tập trung học từ mới và ghi chú công thức ngữ pháp. Luôn ghi nhận phát âm to từ vựng để tạo liên kết âm thanh.";
            } else if (activeWeek <= 5) {
                tipsText.innerText = "Giai đoạn học part chuyên sâu: Hãy làm quen với format đề thi. Khi làm bài, hãy bắt buộc khoanh tròn các từ khóa của câu hỏi trước khi nghe.";
            } else {
                tipsText.innerText = "Giai đoạn chạy đề thật: Nhất quyết phải đặt đồng hồ đếm ngược 75 phút khi làm bài Reading, không được tra từ điển trong lúc làm bài.";
            }
        }

        // Toggle task checklist completion status
        function toggleTaskCompleted(taskId, element) {
            checklistState[taskId] = !checklistState[taskId];
            localStorage.setItem('toeic_checklist_state', JSON.stringify(checklistState));
            
            if (checklistState[taskId]) {
                element.classList.add("completed");
                playSfx('check');
                
                // Check if all daily tasks are completed, trigger confetti!
                const dailyTasks = getDailyTasks(activeWeek, activeDay);
                const allDone = dailyTasks.every(t => !!checklistState[t.id]);
                if (allDone) {
                    triggerConfetti();
                    playSfx('success');
                }
            } else {
                element.classList.remove("completed");
                playSfx('uncheck');
            }
            
            // Recompute stats
            updateOverallProgress();
            renderWeeksSidebar();
            
            // Auto streak increase if tasks are done
            updateStreakDays();
        }

        // Update Vocab Card layout
        function updateVocabCardUI(vocabKey) {
            const db = getVocabDb(vocabKey);
            if (!db) return;
            const word = db.words[vocabIndexState];
            
            // Reset flip state
            document.getElementById("vocabCard").classList.remove("flipped");
            
            document.getElementById("vocabThemeName").innerText = db.theme;
            document.getElementById("currentWordIndex").innerText = vocabIndexState + 1;
            document.getElementById("totalWordCount").innerText = db.words.length;
            document.getElementById("vocabScopeLabel").innerText = activeVocabSource === 'image' ? "Bộ từ" : "Chủ đề";
            
            document.getElementById("wordPos").innerText = word.pos;
            document.getElementById("wordName").innerText = word.word;
            document.getElementById("wordPron").innerText = word.pron;
            
            document.getElementById("wordMean").innerText = word.mean;
            document.getElementById("wordExample").innerText = `"${word.example}"`;
            
            // Update active state in grid chips
            document.querySelectorAll(".word-chip").forEach((chip, idx) => {
                if (idx === vocabIndexState) {
                    chip.classList.add("active");
                } else {
                    chip.classList.remove("active");
                }
            });
        }

        // Render Vocabulary quick selector grid below flashcard
        function renderWordGrid(vocabKey) {
            const grid = document.getElementById("wordGrid");
            grid.innerHTML = "";
            
            const db = getVocabDb(vocabKey);
            if (!db) return;
            const mastered = JSON.parse(localStorage.getItem('toeic_mastered_words')) || {};
            
            db.words.forEach((word, idx) => {
                const chip = document.createElement("div");
                const isMastered = !!mastered[word.word];
                chip.className = `word-chip ${idx === vocabIndexState ? 'active' : ''} ${isMastered ? 'mastered' : ''}`;
                chip.innerText = idx + 1;
                chip.onclick = (e) => {
                    e.stopPropagation();
                    vocabIndexState = idx;
                    switchVocabMode('flashcard');
                    updateVocabCardUI(vocabKey);
                };
                grid.appendChild(chip);
            });
        }

        function nextVocabWord() {
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (db) {
                vocabIndexState = (vocabIndexState + 1) % db.words.length;
                updateVocabCardUI(vocabKey);
            }
        }

        function prevVocabWord() {
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (db) {
                vocabIndexState = (vocabIndexState - 1 + db.words.length) % db.words.length;
                updateVocabCardUI(vocabKey);
            }
        }

        function markWordMastered() {
            let mastered = JSON.parse(localStorage.getItem('toeic_mastered_words')) || {};
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (!db) return;
            const word = db.words[vocabIndexState];
            
            mastered[word.word] = true;
            localStorage.setItem('toeic_mastered_words', JSON.stringify(mastered));
            
            document.getElementById("vocabMasteredCount").innerText = Object.keys(mastered).length;
            
            // Re-render word grid to show the green tick
            renderWordGrid(vocabKey);
            
            // Animate effect
            const btn = document.querySelector(".btn-primary");
            btn.innerText = "Đã thuộc ✔";
            btn.style.background = "#34d399";
            setTimeout(() => {
                btn.innerText = "Đã thuộc ✔";
                btn.style.background = "var(--primary)";
                nextVocabWord();
            }, 300);
        }

        function speakEnglishText(text, rate = 0.85) {
            const synth = window.speechSynthesis;
            if (synth.speaking) {
                synth.cancel();
            }

            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'en-US';
            utter.rate = rate;
            synth.speak(utter);
        }

        // Speech Synthesis for Vocabulary
        function handleSpeakClick(event) {
            event.stopPropagation(); // prevent card flip
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (!db) return;
            const word = db.words[vocabIndexState];
            speakEnglishText(word.word, 0.68);
        }

        function handleExampleSpeakClick(event) {
            event.stopPropagation(); // prevent card flip
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (!db) return;
            const word = db.words[vocabIndexState];
            speakEnglishText(word.example, 0.72);
        }

        function handleCardClick(event, cardEl) {
            // Flip the card unless they clicked the speaker button
            if (!event.target.closest('.speaker-btn')) {
                cardEl.classList.toggle('flipped');
            }
        }

        // Switch panel modes: Flashcard, Quiz, or Review Test
        window.switchVocabMode = function(mode) {
            activeVocabMode = mode;
            document.getElementById("tabFlashcard").className = `panel-tab ${mode === 'flashcard' ? 'active' : ''}`;
            document.getElementById("tabQuiz").className = `panel-tab ${mode === 'quiz' ? 'active' : ''}`;
            document.getElementById("tabReviewTest").className = `panel-tab ${mode === 'review-test' ? 'active' : ''}`;
            
            const vocabKey = getActiveVocabKey();
            renderWordGrid(vocabKey);
            
            // Toggle views using is-hidden class consistently
            const flashEl = document.getElementById("vocabFlashcardView");
            const quizEl = document.getElementById("vocabQuizView");
            const rvtEl = document.getElementById("vocabReviewTestView");

            flashEl.classList.toggle("is-hidden", mode !== 'flashcard');
            quizEl.classList.toggle("is-hidden", mode !== 'quiz');
            rvtEl.classList.toggle("is-hidden", mode !== 'review-test');

            if (mode === 'flashcard') {
                updateVocabCardUI(vocabKey);
            } else if (mode === 'quiz') {
                startQuiz(vocabKey);
            } else if (mode === 'review-test') {
                initReviewTestSetup();
            }
        }

        // Quiz Logic Engine
        function startQuiz(vocabKey) {
            const db = getVocabDb(vocabKey);
            if (!db) return;
            
            // Generate 5 random questions
            const shuffledWords = [...db.words].sort(() => 0.5 - Math.random());
            quizQuestions = shuffledWords.slice(0, 5).map(item => {
                // Select 3 random incorrect answers from this day's vocabulary
                const incorrects = db.words
                    .filter(w => w.word !== item.word)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map(w => w.mean);
                
                const choices = [...incorrects, item.mean].sort(() => 0.5 - Math.random());
                
                return {
                    word: item.word,
                    pron: item.pron,
                    correct: item.mean,
                    choices: choices
                };
            });
            
            currentQuizIndex = 0;
            quizScore = 0;
            quizAnswersSelected = [];
            
            renderQuizQuestion();
        }

        function renderQuizQuestion() {
            const panel = document.getElementById("quizPanel");
            panel.innerHTML = "";
            
            if (currentQuizIndex >= quizQuestions.length) {
                // Show quiz results
                panel.innerHTML = `
                    <div style="text-align: center; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                        <span style="font-size: 3rem;">🏆</span>
                        <h4 style="font-family: 'Outfit', sans-serif; font-size: 1.4rem; font-weight: 700; color: white;">Hoàn thành bài luyện tập!</h4>
                        <p style="font-size: 1.1rem;">Bạn trả lời chính xác: <strong style="color: var(--primary); font-size: 1.3rem;">${quizScore}/${quizQuestions.length}</strong> câu hỏi.</p>
                        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem; width: 100%;">
                            <button class="btn btn-primary" style="flex-grow: 1;" onclick="restartQuiz()">Luyện lại</button>
                            <button class="btn" style="flex-grow: 1;" onclick="switchVocabMode('flashcard')">Trở lại Flashcard</button>
                        </div>
                    </div>
                `;
                
                if (quizScore === quizQuestions.length) {
                    triggerConfetti();
                }
                return;
            }
            
            const q = quizQuestions[currentQuizIndex];
            
            const questionHeader = document.createElement("div");
            questionHeader.className = "quiz-header";
            questionHeader.innerText = `Câu hỏi ${currentQuizIndex + 1} trên ${quizQuestions.length}`;
            panel.appendChild(questionHeader);
            
            const questionTitle = document.createElement("div");
            questionTitle.className = "quiz-question";
            questionTitle.innerHTML = `Nghĩa của từ: <strong style="color: var(--secondary); font-size: 1.35rem;">${q.word}</strong> <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted); font-style: italic;">${q.pron}</span> là gì?`;
            panel.appendChild(questionTitle);
            
            const choicesBox = document.createElement("div");
            choicesBox.className = "quiz-choices";
            
            q.choices.forEach(choice => {
                const choiceBtn = document.createElement("button");
                choiceBtn.className = "quiz-choice";
                choiceBtn.innerText = choice;
                choiceBtn.onclick = () => handleQuizAnswer(choice, choiceBtn);
                choicesBox.appendChild(choiceBtn);
            });
            panel.appendChild(choicesBox);
        }

        function handleQuizAnswer(selectedOption, buttonEl) {
            const q = quizQuestions[currentQuizIndex];
            const choicesButtons = document.querySelectorAll(".quiz-choice");
            
            // Disable all buttons to avoid multiple clicks
            choicesButtons.forEach(btn => btn.disabled = true);
            
            if (selectedOption === q.correct) {
                buttonEl.classList.add("correct");
                quizScore++;
            } else {
                buttonEl.classList.add("incorrect");
                // Highlight the correct answer too
                choicesButtons.forEach(btn => {
                    if (btn.innerText === q.correct) {
                        btn.classList.add("correct");
                    }
                });
            }
            
            // Advance to next question after 1.5 seconds
            setTimeout(() => {
                currentQuizIndex++;
                renderQuizQuestion();
            }, 1500);
        }

        window.restartQuiz = function() {
            const vocabKey = getActiveVocabKey();
            startQuiz(vocabKey);
        }

        // ============================================================
        // VOCAB REVIEW TEST ENGINE (In-panel mini full test)
        // ============================================================

        let rvtQuestions = [];
        let rvtCurrentIndex = 0;
        let rvtScore = 0;
        let rvtAnswers = [];
        let rvtDirection = 'en_vi';
        let rvtTimerInterval = null;
        let rvtSeconds = 0;

        function initReviewTestSetup() {
            // Stop any running timer
            rvtStopTimer();
            // Show setup, hide quiz & result
            document.getElementById("rvtSetupView").classList.remove("is-hidden");
            document.getElementById("rvtQuizView").classList.add("is-hidden");
            document.getElementById("rvtResultView").classList.add("is-hidden");

            // Update setup description with current vocab set info
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (db) {
                document.getElementById("rvtSetupDesc").innerText =
                    `Kiểm tra ${db.words.length} từ vựng — Chủ đề: ${db.theme}`;
            }
        }

        window.startReviewTest = function() {
            const vocabKey = getActiveVocabKey();
            const db = getVocabDb(vocabKey);
            if (!db || db.words.length === 0) {
                alert("Không tìm thấy từ vựng để kiểm tra!");
                return;
            }

            rvtDirection = document.querySelector('input[name="rvtDir"]:checked').value;
            const countVal = document.querySelector('input[name="rvtCount"]:checked').value;

            // Build questions
            const allWords = [...db.words];
            const shuffled = allWords.sort(() => 0.5 - Math.random());
            let qCount = countVal === 'all' ? shuffled.length : parseInt(countVal);
            qCount = Math.min(qCount, shuffled.length);
            const selected = shuffled.slice(0, qCount);

            const questionField = rvtDirection === 'en_vi' ? 'word' : 'mean';
            const answerField = rvtDirection === 'en_vi' ? 'mean' : 'word';

            rvtQuestions = selected.map(item => {
                // Get distractors from the full set
                let distractors = allWords
                    .filter(w => w[answerField].toLowerCase().trim() !== item[answerField].toLowerCase().trim())
                    .map(w => w[answerField]);
                distractors = Array.from(new Set(distractors)).sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [item[answerField], ...distractors].sort(() => 0.5 - Math.random());
                return {
                    wordData: item,
                    questionText: item[questionField],
                    correctAnswer: item[answerField],
                    choices
                };
            });

            rvtCurrentIndex = 0;
            rvtScore = 0;
            rvtAnswers = [];

            // Switch to quiz view
            document.getElementById("rvtSetupView").classList.add("is-hidden");
            document.getElementById("rvtQuizView").classList.remove("is-hidden");
            document.getElementById("rvtResultView").classList.add("is-hidden");

            rvtStartTimer();
            rvtRenderQuestion();

            if (window.playSfx) window.playSfx('click');
        };

        function rvtStartTimer() {
            rvtSeconds = 0;
            document.getElementById("rvtTimer").innerText = "0:00";
            if (rvtTimerInterval) clearInterval(rvtTimerInterval);
            rvtTimerInterval = setInterval(() => {
                rvtSeconds++;
                const m = Math.floor(rvtSeconds / 60);
                const s = rvtSeconds % 60;
                document.getElementById("rvtTimer").innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
            }, 1000);
        }

        function rvtStopTimer() {
            if (rvtTimerInterval) {
                clearInterval(rvtTimerInterval);
                rvtTimerInterval = null;
            }
        }

        function rvtRenderQuestion() {
            const q = rvtQuestions[rvtCurrentIndex];

            // Progress
            const pct = (rvtCurrentIndex / rvtQuestions.length) * 100;
            document.getElementById("rvtProgress").style.width = `${pct}%`;
            document.getElementById("rvtCounter").innerText = `Câu ${rvtCurrentIndex + 1} / ${rvtQuestions.length}`;

            // Prompt label
            document.getElementById("rvtPrompt").innerText =
                rvtDirection === 'en_vi' ? "Chọn nghĩa Tiếng Việt đúng:" : "Chọn từ Tiếng Anh đúng:";

            // Word display
            const displayEl = document.getElementById("rvtWordDisplay");
            if (rvtDirection === 'en_vi') {
                displayEl.innerHTML = `${q.questionText}<div class="rvt-word-sub">${q.wordData.pron || ''}</div>`;
            } else {
                displayEl.innerHTML = `"${q.questionText}"`;
            }

            // Hide explanation & disable next
            document.getElementById("rvtExplanation").classList.add("is-hidden");
            const nextBtn = document.getElementById("rvtBtnNext");
            nextBtn.disabled = true;
            nextBtn.innerText = rvtCurrentIndex === rvtQuestions.length - 1 ? "Xem kết quả 🏁" : "Tiếp theo ▶";

            // Render options
            const optGrid = document.getElementById("rvtOptions");
            optGrid.innerHTML = "";
            q.choices.forEach((choice, idx) => {
                const btn = document.createElement("button");
                btn.className = "rvt-opt-btn";
                btn.innerHTML = `<span class="rvt-opt-letter">${String.fromCharCode(65 + idx)}</span><span>${choice}</span>`;
                btn.onclick = () => rvtSelectOption(btn, choice);
                optGrid.appendChild(btn);
            });
        }

        function rvtSelectOption(selectedBtn, choiceText) {
            const q = rvtQuestions[rvtCurrentIndex];
            const allBtns = document.querySelectorAll(".rvt-opt-btn");

            // Lock all buttons
            allBtns.forEach(b => b.disabled = true);

            const isCorrect = choiceText.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();

            rvtAnswers.push({ question: q, selected: choiceText, isCorrect });

            if (isCorrect) {
                selectedBtn.classList.add("correct");
                rvtScore++;
                if (window.playSfx) window.playSfx('check');
            } else {
                selectedBtn.classList.add("incorrect");
                if (window.playSfx) window.playSfx('uncheck');
                // Highlight correct
                allBtns.forEach(b => {
                    const txt = b.querySelector("span:last-child");
                    if (txt && txt.innerText.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
                        b.classList.add("correct");
                    }
                });
            }

            // Auto-pronounce English word
            if (rvtDirection === 'vi_en' && 'speechSynthesis' in window) {
                const u = new SpeechSynthesisUtterance(q.wordData.word);
                u.lang = 'en-US'; u.rate = 0.8;
                window.speechSynthesis.speak(u);
            }

            // Show explanation
            const expEl = document.getElementById("rvtExplanation");
            expEl.innerHTML = `
                <span class="rvt-exp-word">${q.wordData.word}</span>
                <span class="rvt-exp-pos">(${q.wordData.pos || ''})</span>
                <span class="rvt-exp-pron">${q.wordData.pron || ''}</span>
                <div class="rvt-exp-mean">➜ ${q.wordData.mean}</div>
                ${q.wordData.example ? `<div style="font-size:0.82rem;margin-top:0.3rem;font-style:italic;">&ldquo;${q.wordData.example}&rdquo;</div>` : ''}
            `;
            expEl.classList.remove("is-hidden");

            document.getElementById("rvtBtnNext").disabled = false;
        }

        window.nextReviewQuestion = function() {
            if (rvtCurrentIndex < rvtQuestions.length - 1) {
                rvtCurrentIndex++;
                if (window.playSfx) window.playSfx('click');
                rvtRenderQuestion();
            } else {
                rvtShowResults();
            }
        };

        function rvtShowResults() {
            rvtStopTimer();
            if (window.playSfx) window.playSfx('success');

            document.getElementById("rvtSetupView").classList.add("is-hidden");
            document.getElementById("rvtQuizView").classList.add("is-hidden");
            document.getElementById("rvtResultView").classList.remove("is-hidden");

            const pct = Math.round((rvtScore / rvtQuestions.length) * 100);
            document.getElementById("rvtResultScore").innerText = `${rvtScore}/${rvtQuestions.length}`;
            document.getElementById("rvtResultPct").innerText = `${pct}%`;

            const circle = document.getElementById("rvtResultCircle");
            const gradeEl = document.getElementById("rvtResultGrade");
            circle.className = "rvt-result-circle";
            if (pct >= 90) {
                circle.classList.add("high");
                gradeEl.innerText = "🏆 Xuất sắc! Mỹ Lệ thuộc hết rồi!";
                if (typeof triggerConfetti === 'function') triggerConfetti();
            } else if (pct >= 70) {
                circle.classList.add("mid");
                gradeEl.innerText = "🌟 Rất tốt! Còn vài từ cần ôn thêm!";
            } else {
                circle.classList.add("low");
                gradeEl.innerText = "💪 Cố lên! Ôn lại các từ sai nhé!";
            }

            const m = Math.floor(rvtSeconds / 60);
            const s = rvtSeconds % 60;
            document.getElementById("rvtResultTime").innerText = `${m}:${s < 10 ? '0' : ''}${s}`;

            // Render review list
            const listEl = document.getElementById("rvtReviewList");
            listEl.innerHTML = "";
            rvtAnswers.forEach((ans, idx) => {
                const item = document.createElement("div");
                item.className = `rvt-review-item ${ans.isCorrect ? 'correct' : 'wrong'}`;
                const badge = `<span class="rvt-review-badge ${ans.isCorrect ? 'ok' : 'fail'}">${ans.isCorrect ? '✓ Đúng' : '✕ Sai'}</span>`;
                const qText = rvtDirection === 'en_vi'
                    ? `${badge}<strong>${ans.question.wordData.word}</strong> <em style="color:var(--text-muted);font-size:0.8rem;">${ans.question.wordData.pron || ''}</em>`
                    : `${badge}<strong>"${ans.question.questionText}"</strong>`;
                const aText = ans.isCorrect
                    ? `Đáp án: <span class="correct-ans">${ans.question.correctAnswer}</span>`
                    : `Bạn chọn: <span class="wrong-ans">${ans.selected}</span> &nbsp;|&nbsp; Đúng: <span class="correct-ans">${ans.question.correctAnswer}</span>`;
                item.innerHTML = `<div class="rvt-review-q">${qText}</div><div class="rvt-review-a">${aText}</div>`;
                listEl.appendChild(item);
            });
        }

        window.retryReviewTest = function() {
            if (window.playSfx) window.playSfx('click');
            window.startReviewTest();
        };

        window.backToReviewSetup = function() {
            if (window.playSfx) window.playSfx('click');
            rvtStopTimer();
            initReviewTestSetup();
        };

        // Switch Grammar card tabs: Formula, Usage, Examples
        window.switchGrammarTab = function(tabName) {
            activeGrammarTab = tabName;
            document.getElementById("gramTabFormula").className = `panel-tab ${tabName === 'formula' ? 'active' : ''}`;
            document.getElementById("gramTabUsage").className = `panel-tab ${tabName === 'usage' ? 'active' : ''}`;
            document.getElementById("gramTabExamples").className = `panel-tab ${tabName === 'examples' ? 'active' : ''}`;
            
            const grammarKey = `Week${activeWeek}_${activeDay}`;
            const data = grammarDatabase[grammarKey];
            const contentBox = document.getElementById("grammarTabContent");
            
            if (!data) return;
            
            contentBox.innerHTML = "";
            if (tabName === 'formula') {
                contentBox.innerHTML = `
                    <div class="grammar-formula">${data.formula}</div>
                    <p class="grammar-item-desc">${data.desc}</p>
                `;
            } else if (tabName === 'usage') {
                contentBox.innerHTML = `
                    <p class="grammar-item-desc" style="line-height: 1.8;">${data.usage}</p>
                `;
            } else {
                // Examples
                contentBox.innerHTML = `
                    <div class="grammar-item-desc" style="display: flex; flex-direction: column; gap: 0.65rem;">
                        ${data.examples.split("<br>").map(item => `<div class="grammar-example-item">${item}</div>`).join("")}
                    </div>
                `;
            }
        }

        // Safety word tokenizer helper
        function prepareScriptHTML(text) {
            const regex = /\S+/g;
            let match;
            let html = "";
            let idx = 0;
            while ((match = regex.exec(text)) !== null) {
                const start = match.index;
                const end = regex.lastIndex;
                const w = match[0];
                html += `<span class="shadow-word" id="word_${idx}" data-start="${start}" data-end="${end}">${w}</span> `;
                idx++;
            }
            return html;
        }

        // Shadowing Voice Playback Logic using Text-to-Speech
        let currentUtterance = null;
        let shadowingStartTime = 0;

        window.toggleShadowingPlayer = function() {
            if (shadowingPlaying) {
                stopShadowingPlayer();
            } else {
                startShadowingPlayer();
            }
        }

        function startShadowingPlayer() {
            const scriptBox = document.getElementById("shadowingScriptBox");
            const scriptText = scriptBox.textContent.trim();
            if (!scriptText) return;
            
            const synth = window.speechSynthesis;
            if (synth.speaking) {
                synth.cancel();
            }
            
            shadowingPlaying = true;
            document.getElementById("audioWaves").classList.add("playing");
            document.getElementById("playBtn").classList.remove("btn-primary");
            document.getElementById("playIcon").innerHTML = "⏸ Pause Audio";
            
            // Clear highlights
            document.querySelectorAll(".shadow-word").forEach(span => span.classList.remove("highlighted"));
            
            // Create utterance
            currentUtterance = new SpeechSynthesisUtterance(scriptText);
            currentUtterance.lang = 'en-US';
            currentUtterance.rate = 0.80; // slightly slower for speech shadowing
            
            shadowingSeconds = 0;
            shadowingStartTime = Date.now();
            
            // Timer interval
            shadowingTimerInterval = setInterval(() => {
                shadowingSeconds = Math.floor((Date.now() - shadowingStartTime) / 1000);
                const min = Math.floor(shadowingSeconds / 60);
                const sec = shadowingSeconds % 60;
                document.getElementById("playerTimer").innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
            }, 1000);
            
            // Map text boundary and highlight spoken words
            currentUtterance.onboundary = function(event) {
                if (event.name === 'word') {
                    const charIndex = event.charIndex;
                    const pct = (charIndex / scriptText.length) * 100;
                    document.getElementById("playerProgressBar").style.width = `${pct}%`;
                    
                    const spans = document.querySelectorAll(".shadow-word");
                    spans.forEach(span => {
                        const start = parseInt(span.getAttribute("data-start"));
                        const end = parseInt(span.getAttribute("data-end"));
                        if (charIndex >= start && charIndex < end) {
                            span.classList.add("highlighted");
                            span.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        } else {
                            span.classList.remove("highlighted");
                        }
                    });
                }
            };
            
            currentUtterance.onend = function() {
                document.getElementById("playerProgressBar").style.width = "100%";
                setTimeout(() => {
                    stopShadowingPlayer();
                    document.getElementById("playerProgressBar").style.width = "0%";
                    document.getElementById("playerTimer").innerText = "0:00";
                }, 800);
            };
            
            currentUtterance.onerror = function() {
                stopShadowingPlayer();
            };
            
            synth.speak(currentUtterance);
        }

        function stopShadowingPlayer() {
            const synth = window.speechSynthesis;
            if (synth.speaking) {
                synth.cancel();
            }
            
            shadowingPlaying = false;
            const wave = document.getElementById("audioWaves");
            const playBtn = document.getElementById("playBtn");
            const playIcon = document.getElementById("playIcon");
            
            if (wave) wave.classList.remove("playing");
            if (playBtn) playBtn.classList.add("btn-primary");
            if (playIcon) playIcon.innerHTML = "▶ Play Audio";
            
            if (shadowingTimerInterval) {
                clearInterval(shadowingTimerInterval);
                shadowingTimerInterval = null;
            }
            
            // Clear highlights
            document.querySelectorAll(".shadow-word").forEach(span => span.classList.remove("highlighted"));
        }

        window.handleProgressClick = function(event) {
            // Cannot seek speech synthesis utterance directly via progress click easily
            // So we disable or ignore seeking click for TTS to maintain system stability
        }

        // Confetti Fireworks celebration canvas drawing
        function triggerConfetti() {
            const canvas = document.getElementById("confettiCanvas");
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            let pieces = [];
            const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899'];
            
            for (let i = 0; i < 120; i++) {
                pieces.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * -canvas.height - 20,
                    size: Math.random() * 8 + 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speed: Math.random() * 4 + 2,
                    angle: Math.random() * 360,
                    rotationSpeed: Math.random() * 4 - 2
                });
            }
            
            let active = true;
            function draw() {
                if (!active) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let finished = true;
                pieces.forEach(p => {
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.angle * Math.PI / 180);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
                    ctx.restore();
                    
                    p.y += p.speed;
                    p.angle += p.rotationSpeed;
                    p.x += Math.sin(p.y / 20) * 0.4;
                    
                    if (p.y < canvas.height) {
                        finished = false;
                    }
                });
                
                if (finished) {
                    active = false;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                } else {
                    requestAnimationFrame(draw);
                }
            }
            draw();
            // Automatically clear animation loop after 4 seconds
            setTimeout(() => { active = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }, 4000);
        }

        // Calculate and display overall roadmap progress
        function updateOverallProgress() {
            let total = 0;
            let completed = 0;
            
            for (let w = 1; w <= 8; w++) {
                const days = ["T2", "T3", "T4", "T5", "T6", "T7"];
                days.forEach(d => {
                    const tasks = getDailyTasks(w, d);
                    total += tasks.length;
                    tasks.forEach(t => {
                        if (checklistState[t.id]) completed++;
                    });
                });
            }

            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
            
            document.getElementById("overallPercent").innerText = `${percent}%`;
            document.getElementById("overallProgressBar").style.width = `${percent}%`;
            document.getElementById("completedTasksCount").innerText = completed;
            document.getElementById("totalTasksCount").innerText = total;

            // Load counts
            const mastered = JSON.parse(localStorage.getItem('toeic_mastered_words')) || {};
            document.getElementById("vocabMasteredCount").innerText = Object.keys(mastered).length;
            
            const streak = localStorage.getItem('toeic_streak_days') || 0;
            document.getElementById("streakDays").innerText = streak;
        }

        // Streak Days calculation logic
        function updateStreakDays() {
            let streak = parseInt(localStorage.getItem('toeic_streak_days') || "0");
            const lastActive = localStorage.getItem('toeic_last_active_date');
            const today = new Date().toDateString();
            
            if (lastActive !== today) {
                if (lastActive) {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    if (new Date(lastActive).toDateString() === yesterday.toDateString()) {
                        streak += 1;
                    } else {
                        streak = 1;
                    }
                } else {
                    streak = 1;
                }
                localStorage.setItem('toeic_streak_days', streak);
                localStorage.setItem('toeic_last_active_date', today);
                document.getElementById("streakDays").innerText = streak;
            }
        }

        // Render SVG Line Chart for Mock Test Tracker
        function drawScoreChart() {
            const chartContent = document.getElementById("chartContent");
            const chartPlaceholder = document.getElementById("chartPlaceholder");
            chartContent.innerHTML = "";
            
            // Filter tests that have scores
            const activeTests = [];
            mockTestData.forEach((test, idx) => {
                if (test.lc !== "" && test.rc !== "") {
                    const score = parseInt(test.lc) + parseInt(test.rc);
                    activeTests.push({ index: idx, score: score, title: test.title });
                }
            });
            
            if (activeTests.length === 0) {
                chartPlaceholder.style.display = "flex";
                return;
            }
            chartPlaceholder.style.display = "none";
            
            // Viewport dimensions in SVG coordinates: 600 width, 200 height
            // We give 50px margins left/right, and map indices 0-5 to xCoords:
            const xCoords = [60, 160, 260, 360, 460, 560];
            const getScoreY = (score) => {
                // Map score 0-990 to y 170 to 30
                const minVal = 0;
                const maxVal = 990;
                const minY = 170;
                const maxY = 30;
                return minY - ((score - minVal) / (maxVal - minVal)) * (minY - maxY);
            };
            
            // Build points
            const points = activeTests.map(t => ({
                x: xCoords[t.index],
                y: getScoreY(t.score),
                val: t.score,
                title: t.title
            }));
            
            // 1. Draw SVG Gradient Area under the path
            if (points.length >= 2) {
                let areaD = `M ${points[0].x} 170`;
                points.forEach(p => {
                    areaD += ` L ${p.x} ${p.y}`;
                });
                areaD += ` L ${points[points.length-1].x} 170 Z`;
                
                const areaPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                areaPath.setAttribute("d", areaD);
                areaPath.setAttribute("fill", "url(#chartGrad)");
                chartContent.appendChild(areaPath);
            }
            
            // 2. Draw connecting lines
            if (points.length >= 2) {
                let lineD = `M ${points[0].x} ${points[0].y}`;
                for (let i = 1; i < points.length; i++) {
                    lineD += ` L ${points[i].x} ${points[i].y}`;
                }
                
                const linePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                linePath.setAttribute("d", lineD);
                linePath.setAttribute("fill", "none");
                linePath.setAttribute("stroke", "url(#lineGrad)");
                linePath.setAttribute("stroke-width", "3");
                linePath.setAttribute("stroke-linecap", "round");
                linePath.setAttribute("stroke-linejoin", "round");
                chartContent.appendChild(linePath);
            }
            
            // 3. Draw dots & texts
            points.forEach(p => {
                // Glow circles
                const glowCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                glowCircle.setAttribute("cx", p.x);
                glowCircle.setAttribute("cy", p.y);
                glowCircle.setAttribute("r", "8");
                glowCircle.setAttribute("fill", "var(--secondary)");
                glowCircle.setAttribute("opacity", "0.25");
                chartContent.appendChild(glowCircle);
                
                // Actual dot
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", p.x);
                circle.setAttribute("cy", p.y);
                circle.setAttribute("r", "4");
                circle.setAttribute("fill", "#ffffff");
                circle.setAttribute("stroke", "var(--secondary)");
                circle.setAttribute("stroke-width", "2");
                chartContent.appendChild(circle);
                
                // Score text
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", p.x);
                text.setAttribute("y", p.y - 12);
                text.setAttribute("fill", "#ffffff");
                text.setAttribute("font-size", "10");
                text.setAttribute("font-weight", "bold");
                text.setAttribute("text-anchor", "middle");
                text.textContent = p.val;
                chartContent.appendChild(text);
                
                // Test label on X-axis
                const labelText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                labelText.setAttribute("x", p.x);
                labelText.setAttribute("y", "185");
                labelText.setAttribute("fill", "var(--text-muted)");
                labelText.setAttribute("font-size", "8");
                labelText.setAttribute("text-anchor", "middle");
                labelText.textContent = p.title;
                chartContent.appendChild(labelText);
            });
        }

        // Render Mock Test Tracker Table
        function renderScoreTracker() {
            const tableBody = document.getElementById("scoreTableBody");
            tableBody.innerHTML = "";

            mockTestData.forEach((test, idx) => {
                const tr = document.createElement("tr");
                const total = (test.lc !== "" && test.rc !== "") ? (parseInt(test.lc) + parseInt(test.rc)) : "-";
                
                let evalText = "Chưa làm bài";
                let evalStyle = "color: var(--text-muted);";
                if (total !== "-") {
                    if (total >= 600) {
                        evalText = "🎯 Tiến bộ rõ rệt";
                        evalStyle = "color: var(--success); font-weight: bold;";
                    } else if (total >= 500) {
                        evalText = "💪 Nhịp học ổn định";
                        evalStyle = "color: var(--warning); font-weight: bold;";
                    } else {
                        evalText = "📚 Cần nỗ lực ôn tập thêm";
                        evalStyle = "color: #ef4444;";
                    }
                }

                tr.innerHTML = `
                    <td style="font-weight: 600; color: white;">${test.title}</td>
                    <td>${test.week}</td>
                    <td>
                        <input type="number" class="score-input" min="0" max="495" placeholder="0-495" 
                               value="${test.lc}" onchange="updateScore('${test.id}', 'lc', this.value)">
                    </td>
                    <td>
                        <input type="number" class="score-input" min="0" max="495" placeholder="0-495" 
                               value="${test.rc}" onchange="updateScore('${test.id}', 'rc', this.value)">
                    </td>
                    <td class="score-total">${total}</td>
                    <td style="${evalStyle}">${evalText}</td>
                `;
                tableBody.appendChild(tr);
            });
            
            // Draw chart of scores
            drawScoreChart();
        }

        // Update score inputs
        window.updateScore = function(testId, type, val) {
            const test = mockTestData.find(t => t.id === testId);
            if (test) {
                const num = val === "" ? "" : Math.min(495, Math.max(0, parseInt(val)));
                test[type] = num;
                localStorage.setItem('toeic_mock_tests', JSON.stringify(mockTestData));
                renderScoreTracker();
            }
        }

        // Initialize application on page load
        window.onload = initApp;

