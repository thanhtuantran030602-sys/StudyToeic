// TOEIC Vocab Review & Test Engine for Mỹ Lệ
// Self-contained logic for comprehensive vocabulary testing

(function() {
    // State Variables
    let allVocabPool = [];
    let testQuestions = [];
    let currentQIndex = 0;
    let testScore = 0;
    let testAnswers = []; // Stores user selections and metadata for review
    let vtTimerInterval = null;
    let vtSeconds = 0;
    let testDirection = 'en_vi'; // 'en_vi' or 'vi_en'
    let autoPronounce = true;

    // Initialize Vocab Test page
    window.initVocabTestPage = function() {
        allVocabPool = getAllVocabWords();
        updateFilterCounts();
        resetSetupUI();
    };

    // Gather and deduplicate all vocabulary words from daily & image databases
    function getAllVocabWords() {
        let pool = [];
        
        // 1. Daily vocab from vocabDatabase
        if (typeof vocabDatabase !== 'undefined') {
            for (let key in vocabDatabase) {
                if (vocabDatabase.hasOwnProperty(key) && vocabDatabase[key].words) {
                    vocabDatabase[key].words.forEach(w => {
                        pool.push({
                            word: w.word.trim(),
                            pron: w.pron ? w.pron.trim() : '/.../',
                            pos: w.pos ? w.pos.trim() : 'n/a',
                            mean: w.mean.trim(),
                            example: w.example ? w.example.trim() : '',
                            theme: vocabDatabase[key].theme || 'Lộ trình'
                        });
                    });
                }
            }
        }
        
        // 2. Image vocab from imageVocabDatabase
        if (typeof imageVocabDatabase !== 'undefined') {
            for (let key in imageVocabDatabase) {
                if (imageVocabDatabase.hasOwnProperty(key) && imageVocabDatabase[key].words) {
                    imageVocabDatabase[key].words.forEach(w => {
                        pool.push({
                            word: w.word.trim(),
                            pron: w.pron ? w.pron.trim() : 'Từ trong ảnh',
                            pos: w.pos ? w.pos.trim() : 'TOEIC',
                            mean: w.mean.trim(),
                            example: w.example ? w.example.trim() : '',
                            theme: imageVocabDatabase[key].theme || 'Trang ảnh'
                        });
                    });
                }
            }
        }
        
        // Deduplicate by word name (case-insensitive)
        let seen = new Set();
        return pool.filter(item => {
            let lowWord = item.word.toLowerCase();
            if (seen.has(lowWord)) {
                return false;
            }
            seen.add(lowWord);
            return true;
        });
    }

    // Update the numbers next to the filter labels
    function updateFilterCounts() {
        const masteredMap = JSON.parse(localStorage.getItem('toeic_mastered_words')) || {};
        
        let masteredCount = 0;
        let learningCount = 0;
        
        allVocabPool.forEach(w => {
            if (masteredMap[w.word]) {
                masteredCount++;
            } else {
                learningCount++;
            }
        });
        
        const countAllEl = document.getElementById("vtCountAll");
        const countMasteredEl = document.getElementById("vtCountMastered");
        const countLearningEl = document.getElementById("vtCountLearning");
        
        if (countAllEl) countAllEl.innerText = `(${allVocabPool.length} từ)`;
        if (countMasteredEl) countMasteredEl.innerText = `(${masteredCount} từ)`;
        if (countLearningEl) countLearningEl.innerText = `(${learningCount} từ)`;
        
        // Save these for validation check during test start
        window.vtCounts = {
            all: allVocabPool.length,
            mastered: masteredCount,
            learning: learningCount
        };
    }

    function resetSetupUI() {
        document.getElementById("vocabTestSetupView").classList.remove("is-hidden");
        document.getElementById("vocabTestQuizView").classList.add("is-hidden");
        document.getElementById("vocabTestResultView").classList.add("is-hidden");
        stopVtTimer();
    }

    // Text-to-Speech Engine
    function speakText(text, rate = 0.8) {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            if (synth.speaking) {
                synth.cancel();
            }
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'en-US';
            utter.rate = rate;
            synth.speak(utter);
        }
    }

    // Exposed trigger for pronunciation buttons
    window.speakVtWord = function(text) {
        speakText(text, 0.75);
    };

    window.speakVtExample = function(text) {
        speakText(text, 0.8);
    };

    // Start Vocab Quiz
    window.startVocabTest = function() {
        const category = document.querySelector('input[name="vtCategory"]:checked').value;
        testDirection = document.querySelector('input[name="vtDirection"]:checked').value;
        const countSelect = document.getElementById("vtQCount").value;
        autoPronounce = document.getElementById("vtAutoPronounce").checked;
        
        // 1. Filter pool
        const masteredMap = JSON.parse(localStorage.getItem('toeic_mastered_words')) || {};
        let filteredPool = [];
        
        if (category === 'all') {
            filteredPool = [...allVocabPool];
        } else if (category === 'mastered') {
            filteredPool = allVocabPool.filter(w => masteredMap[w.word]);
        } else if (category === 'learning') {
            filteredPool = allVocabPool.filter(w => !masteredMap[w.word]);
        }
        
        if (filteredPool.length === 0) {
            alert("Không tìm thấy từ vựng nào trong danh mục đã chọn! Hãy chọn danh mục khác.");
            return;
        }
        
        // 2. Select quiz words
        // Shuffle pool
        filteredPool.sort(() => 0.5 - Math.random());
        
        let qCount = countSelect === 'all' ? filteredPool.length : parseInt(countSelect);
        qCount = Math.min(qCount, filteredPool.length);
        
        const selectedWords = filteredPool.slice(0, qCount);
        
        // 3. Form questions
        // Distractor field depends on direction
        const questionField = testDirection === 'en_vi' ? 'word' : 'mean';
        const answerField = testDirection === 'en_vi' ? 'mean' : 'word';
        
        testQuestions = selectedWords.map(item => {
            // Get distractors from the entire pool
            let distractors = allVocabPool
                .map(w => w[answerField].trim())
                .filter(val => val.toLowerCase() !== item[answerField].toLowerCase().trim() && val !== "");
            
            // Unique distractors
            distractors = Array.from(new Set(distractors));
            
            // Shuffle distractors and pick 3
            distractors.sort(() => 0.5 - Math.random());
            const pickedDistractors = distractors.slice(0, 3);
            
            // Combine and shuffle choices
            const choices = [item[answerField], ...pickedDistractors].sort(() => 0.5 - Math.random());
            
            return {
                wordData: item,
                questionText: item[questionField],
                correctAnswer: item[answerField],
                choices: choices
            };
        });
        
        // 4. Initialize Test State
        currentQIndex = 0;
        testScore = 0;
        testAnswers = [];
        
        // Play click sound
        if (window.playSfx) window.playSfx('click');
        
        // Toggle view
        document.getElementById("vocabTestSetupView").classList.add("is-hidden");
        document.getElementById("vocabTestQuizView").classList.remove("is-hidden");
        document.getElementById("vocabTestResultView").classList.add("is-hidden");
        
        // Set test meta labels
        const categoryLabel = category === 'all' ? 'Tất cả' : (category === 'mastered' ? 'Đã thuộc' : 'Chưa thuộc');
        const directionLabel = testDirection === 'en_vi' ? 'Anh → Việt' : 'Việt → Anh';
        document.getElementById("vtTestMetaTitle").innerText = `Kiểm Tra Từ Vựng (${categoryLabel} • ${directionLabel})`;
        
        startTimer();
        renderVocabQuestion();
    };

    function startTimer() {
        vtSeconds = 0;
        document.getElementById("vtTimer").innerText = "0:00";
        if (vtTimerInterval) clearInterval(vtTimerInterval);
        vtTimerInterval = setInterval(() => {
            vtSeconds++;
            const min = Math.floor(vtSeconds / 60);
            const sec = vtSeconds % 60;
            document.getElementById("vtTimer").innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }, 1000);
    }

    function stopVtTimer() {
        if (vtTimerInterval) {
            clearInterval(vtTimerInterval);
            vtTimerInterval = null;
        }
    }

    // Render current question
    function renderVocabQuestion() {
        const q = testQuestions[currentQIndex];
        
        // Update Progress Bar
        const progressPercent = ((currentQIndex) / testQuestions.length) * 100;
        document.getElementById("vtQProgress").style.width = `${progressPercent}%`;
        
        // Question number labels
        document.getElementById("vtQNumLabel").innerText = `Câu hỏi ${currentQIndex + 1}`;
        document.getElementById("vtQCounter").innerText = `Câu ${currentQIndex + 1} / ${testQuestions.length}`;
        
        // Question prompt & text
        if (testDirection === 'en_vi') {
            document.getElementById("vtQPrompt").innerText = "Chọn nghĩa Tiếng Việt đúng cho từ dưới đây:";
            document.getElementById("vtQWord").innerText = q.questionText;
            document.getElementById("vtQPron").innerText = q.wordData.pron;
            document.getElementById("vtQPron").style.display = "block";
            
            // Show audio trigger on question card
            document.getElementById("vtQAudioBtn").style.display = "flex";
            document.getElementById("vtQAudioBtn").onclick = () => speakText(q.questionText, 0.75);
            
            if (autoPronounce) {
                setTimeout(() => speakText(q.questionText, 0.75), 150);
            }
        } else {
            document.getElementById("vtQPrompt").innerText = "Chọn từ Tiếng Anh thích hợp cho nghĩa dưới đây:";
            document.getElementById("vtQWord").innerText = q.questionText;
            document.getElementById("vtQPron").style.display = "none";
            document.getElementById("vtQAudioBtn").style.display = "none";
        }
        
        // Hide Explanation and Next Button
        document.getElementById("vtExplanation").classList.add("is-hidden");
        document.getElementById("vtBtnNext").disabled = true;
        
        // Render Options Grid
        const optionsGrid = document.getElementById("vtQOptions");
        optionsGrid.innerHTML = "";
        
        q.choices.forEach((choice, idx) => {
            const btn = document.createElement("button");
            btn.className = "vt-option-btn";
            btn.innerHTML = `
                <span class="vt-option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="vt-option-text">${choice}</span>
            `;
            btn.onclick = () => selectVocabOption(btn, choice);
            optionsGrid.appendChild(btn);
        });
    }

    function selectVocabOption(selectedBtn, choiceText) {
        const q = testQuestions[currentQIndex];
        const optionButtons = document.querySelectorAll(".vt-option-btn");
        
        // Disable all option clicks
        optionButtons.forEach(btn => btn.disabled = true);
        
        const isCorrect = choiceText.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
        
        // Record response
        testAnswers.push({
            question: q,
            selected: choiceText,
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            testScore++;
            if (window.playSfx) window.playSfx('check');
        } else {
            selectedBtn.classList.add("incorrect");
            if (window.playSfx) window.playSfx('uncheck');
            
            // Highlight the correct answer
            optionButtons.forEach(btn => {
                const textSpan = btn.querySelector(".vt-option-text");
                if (textSpan && textSpan.innerText.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
                    btn.classList.add("correct");
                }
            });
        }
        
        // Speak the English word automatically if answering in vi_en mode (helps link english spelling to sound)
        if (testDirection === 'vi_en') {
            speakText(q.wordData.word, 0.75);
        }
        
        // Show detail explanation box
        const explanationBox = document.getElementById("vtExplanation");
        explanationBox.innerHTML = `
            <div class="vt-exp-header">
                <span class="vt-exp-word">${q.wordData.word}</span>
                <span class="vt-exp-pos">(${q.wordData.pos})</span>
                <span class="vt-exp-pron">${q.wordData.pron}</span>
                <button class="speaker-btn vt-speaker-mini" onclick="speakVtWord('${q.wordData.word}')" title="Nghe từ">🔊 Nghe từ</button>
            </div>
            <div class="vt-exp-mean"><strong>Nghĩa:</strong> ${q.wordData.mean}</div>
            ${q.wordData.example ? `
            <div class="vt-exp-example">
                <strong>Ví dụ:</strong> "${q.wordData.example}"
                <button class="speaker-btn vt-speaker-mini" onclick="speakVtExample('${q.wordData.example.replace(/"/g, '&quot;')}')" title="Nghe ví dụ">🔊 Nghe ví dụ</button>
            </div>` : ''}
            <div class="vt-exp-theme">📌 Thuộc bộ: <strong>${q.wordData.theme}</strong></div>
        `;
        explanationBox.classList.remove("is-hidden");
        
        // Enable Next button
        document.getElementById("vtBtnNext").disabled = false;
        
        // If last question, change next button text to Finish
        if (currentQIndex === testQuestions.length - 1) {
            document.getElementById("vtBtnNext").innerText = "Xem kết quả 🏁";
        } else {
            document.getElementById("vtBtnNext").innerText = "Tiếp theo ▶";
        }
    }

    window.nextVocabQuestion = function() {
        if (currentQIndex < testQuestions.length - 1) {
            currentQIndex++;
            if (window.playSfx) window.playSfx('click');
            renderVocabQuestion();
        } else {
            showVocabTestResults();
        }
    };

    function showVocabTestResults() {
        stopVtTimer();
        if (window.playSfx) window.playSfx('success');
        
        // Toggle view
        document.getElementById("vocabTestSetupView").classList.add("is-hidden");
        document.getElementById("vocabTestQuizView").classList.add("is-hidden");
        document.getElementById("vocabTestResultView").classList.remove("is-hidden");
        
        // Score metrics
        const scorePercent = Math.round((testScore / testQuestions.length) * 100);
        document.getElementById("vtResultScore").innerText = `${testScore}/${testQuestions.length}`;
        document.getElementById("vtResultPercent").innerText = `${scorePercent}%`;
        
        // Grade message and styling
        const gradeEl = document.getElementById("vtResultGrade");
        const circleEl = document.getElementById("vtResultCircle");
        
        circleEl.className = "ex-result-circle"; // Reset class list
        if (scorePercent >= 90) {
            gradeEl.innerText = "🏆 Xuất sắc, Mỹ Lệ ơi!";
            circleEl.classList.add("ex-result-circle--high");
            // Trigger confetti for awesome score
            if (typeof triggerConfetti === 'function') triggerConfetti();
        } else if (scorePercent >= 70) {
            gradeEl.innerText = "🌟 Rất tốt! Tiếp tục phát huy nha!";
            circleEl.classList.add("ex-result-circle--mid");
        } else {
            gradeEl.innerText = "💪 Cố lên! Ôn tập lỗi sai và làm lại nhé!";
            circleEl.classList.add("ex-result-circle--low");
        }
        
        // Timer display
        const min = Math.floor(vtSeconds / 60);
        const sec = vtSeconds % 60;
        document.getElementById("vtResultTime").innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        
        // Render Review Detailed List
        renderVocabReview();
    }

    function renderVocabReview() {
        const reviewListEl = document.getElementById("vtReviewList");
        reviewListEl.innerHTML = "";
        
        testAnswers.forEach((ans, idx) => {
            const item = document.createElement("div");
            item.className = `ex-review-item ${ans.isCorrect ? 'ex-review-item--correct' : 'ex-review-item--incorrect'}`;
            
            // Directional text displays
            let promptText = "";
            let selectionDetails = "";
            
            if (testDirection === 'en_vi') {
                promptText = `Từ: <strong class="text-secondary" style="font-size:1.1rem;">${ans.question.questionText}</strong> <i>(${ans.question.wordData.pos}) ${ans.question.wordData.pron}</i>`;
                selectionDetails = `
                    <div class="vt-review-ans-row">
                        <span>Lựa chọn của bạn: <strong class="${ans.isCorrect ? 'text-primary' : 'text-danger'}">${ans.selected}</strong></span>
                        ${!ans.isCorrect ? `<span>Đáp án đúng: <strong class="text-primary">${ans.question.correctAnswer}</strong></span>` : ''}
                    </div>
                `;
            } else {
                promptText = `Nghĩa: <strong class="text-secondary" style="font-size:1.1rem;">"${ans.question.questionText}"</strong>`;
                selectionDetails = `
                    <div class="vt-review-ans-row">
                        <span>Lựa chọn của bạn: <strong class="${ans.isCorrect ? 'text-primary' : 'text-danger'}">${ans.selected}</strong></span>
                        ${!ans.isCorrect ? `<span>Đáp án đúng: <strong class="text-primary">${ans.question.correctAnswer}</strong></span>` : ''}
                    </div>
                `;
            }
            
            item.innerHTML = `
                <div class="ex-review-header">
                    <span class="ex-review-badge ${ans.isCorrect ? 'ex-review-badge--correct' : 'ex-review-badge--incorrect'}">
                        ${ans.isCorrect ? '✓ Đúng' : '✕ Sai'}
                    </span>
                    <span>Câu hỏi ${idx + 1} • Bộ: ${ans.question.wordData.theme}</span>
                </div>
                
                <div style="margin-top:0.5rem;">
                    ${promptText}
                </div>
                
                ${selectionDetails}
                
                <div class="vt-review-example-box" style="margin-top:0.5rem; padding-top:0.5rem; border-top: 1px dashed rgba(255,255,255,0.06);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:0.9rem;"><strong>Từ vựng:</strong> ${ans.question.wordData.word} (${ans.question.wordData.pos}) ${ans.question.wordData.pron} ➔ <em>${ans.question.wordData.mean}</em></span>
                        <button class="speaker-btn vt-speaker-mini" style="font-size:0.75rem; padding:0.2rem 0.4rem;" onclick="speakVtWord('${ans.question.wordData.word}')">🔊 Nghe từ</button>
                    </div>
                    ${ans.question.wordData.example ? `
                    <div style="margin-top:0.3rem; font-size:0.85rem; color: var(--text-muted); display:flex; justify-content:space-between; align-items:center;">
                        <span><strong>Ví dụ:</strong> "${ans.question.wordData.example}"</span>
                        <button class="speaker-btn vt-speaker-mini" style="font-size:0.75rem; padding:0.2rem 0.4rem;" onclick="speakVtExample('${ans.question.wordData.example.replace(/"/g, '&quot;')}')">🔊 Nghe VD</button>
                    </div>
                    ` : ''}
                </div>
            `;
            
            reviewListEl.appendChild(item);
        });
    }

    window.retryVocabTest = function() {
        if (window.playSfx) window.playSfx('click');
        window.startVocabTest();
    };

    window.backToVocabSetup = function() {
        if (window.playSfx) window.playSfx('click');
        updateFilterCounts();
        resetSetupUI();
    };
})();
