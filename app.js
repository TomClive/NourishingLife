const allQuestions = [
    {
        question: "What process do plants use to make their own food?",
        options: ["Digestion", "Photosynthesis", "Pollination", "Germination"],
        correct: 1
    },
    {
        question: "What substance do plants store their sugar as?",
        options: ["Fat", "Protein", "Starch", "Salt"],
        correct: 2
    },
    {
        question: "Which part of the plant sucks up water and acts as an anchor?",
        options: ["Leaves", "Stem", "Flower", "Roots"],
        correct: 3
    },
    {
        question: "What is the male part of the flower called?",
        options: ["Carpel", "Stamen", "Petal", "Sepal"],
        correct: 1
    },
    {
        question: "What is the waste product of photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Water", "Starch"],
        correct: 0
    },
    {
        question: "What are the two raw materials needed for photosynthesis?",
        options: ["Oxygen and Sugar", "Water and Carbon dioxide", "Light and Heat", "Starch and Iodine"],
        correct: 1
    },
    {
        question: "Which part of the seed grows to form a new plant?",
        options: ["Seed coat", "Food store", "Embryo", "Stigma"],
        correct: 2
    },
    {
        question: "What does the ovary of a flower develop into after fertilisation?",
        options: ["Seed", "Stem", "Leaf", "Fruit"],
        correct: 3
    },
    {
        question: "Which teeth are mainly used for tearing food?",
        options: ["Incisors", "Canines", "Molars", "Pre-molars"],
        correct: 1
    },
    {
        question: "What chemical is used in the lab to test for the presence of starch?",
        options: ["Water", "Acid", "Iodine", "Bile"],
        correct: 2
    },
    {
        question: "In the human digestive system, where does food go after the stomach?",
        options: ["Large Intestine", "Small Intestine", "Oesophagus", "Liver"],
        correct: 1
    },
    {
        question: "What does the term 'pollination' mean?",
        options: ["Seeds blowing in the wind", "Pollen moving from anther to stigma", "Roots growing deep", "A seed sprouting"],
        correct: 1
    },
    {
        question: "What type of animal eats both plants and other animals?",
        options: ["Herbivore", "Carnivore", "Omnivore", "Producer"],
        correct: 2
    },
    {
        question: "Which teeth do the hard work of grinding and crushing food?",
        options: ["Canines", "Incisors", "Molars", "Wisdom teeth"],
        correct: 2
    },
    {
        question: "Why do we need to digest our food?",
        options: ["To make it taste better", "To break it into molecules small enough to enter the blood", "To stop us from burping", "To create oxygen"],
        correct: 1
    }
];

// Game State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let frogScale = 1;

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    end: document.getElementById('end-screen')
};

const frog = document.getElementById('frog');
const fly = document.getElementById('fly');
const frogComment = document.getElementById('frog-comment');
const scoreEl = document.getElementById('score');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options');
const feedbackMsg = document.getElementById('feedback-message');
const nextBtn = document.getElementById('next-btn');

// Initialize
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz() {
    // Select 10 random questions
    currentQuestions = shuffleArray(allQuestions).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    frogScale = 1;
    
    updateFrogScale();
    scoreEl.textContent = score;
    totalQEl.textContent = currentQuestions.length;
    
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    currentQEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = q.question;
    
    optionsGrid.innerHTML = '';
    feedbackMsg.className = 'hidden';
    nextBtn.classList.add('hidden');
    
    // Create option buttons
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => checkAnswer(index, btn));
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correct;
    
    // Disable all buttons
    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    feedbackMsg.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    
    if (isCorrect) {
        score++;
        scoreEl.textContent = score;
        feedbackMsg.textContent = "Correct! Yummy fly! 🪰";
        feedbackMsg.style.color = "var(--success)";
        feedFrog();
    } else {
        feedbackMsg.textContent = "Incorrect! The frog is still hungry. 😢";
        feedbackMsg.style.color = "var(--error)";
        starveFrog();
    }
}

const happyComments = ["Ribbit!", "Yum!", "Delicious!", "More flies!", "BUUUURP!", "Tasty!"];
const sadComments = ["Grrr...", "*stomach rumbles*", "Hungry...", "Croak...", "Need bugs!"];

function feedFrog() {
    // Show fly animation
    fly.classList.remove('hidden');
    
    // Slight delay before frog "eats" it
    setTimeout(() => {
        fly.classList.add('flying');
        frog.classList.add('eating');
        
        // Increase scale
        frogScale += 0.15;
        updateFrogScale();
        
        showComment(happyComments[Math.floor(Math.random() * happyComments.length)]);
        
        setTimeout(() => {
            fly.classList.remove('flying');
            fly.classList.add('hidden');
            frog.classList.remove('eating');
        }, 500);
    }, 100);
}

function starveFrog() {
    frog.classList.add('wrong');
    showComment(sadComments[Math.floor(Math.random() * sadComments.length)]);
    setTimeout(() => {
        frog.classList.remove('wrong');
    }, 500);
}

function showComment(text) {
    frogComment.textContent = text;
    frogComment.classList.remove('hidden');
    // Reset animation by cloning and replacing
    const newComment = frogComment.cloneNode(true);
    frogComment.parentNode.replaceChild(newComment, frogComment);
    
    // Re-assign to variable since we replaced it
    const updatedComment = document.getElementById('frog-comment');
    
    setTimeout(() => {
        updatedComment.classList.add('hidden');
    }, 1000);
}

function updateFrogScale() {
    document.documentElement.style.setProperty('--frog-scale', frogScale);
    frog.style.transform = `scale(${frogScale})`;
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('final-score').textContent = score;
    const finalRankEl = document.getElementById('final-rank');
    
    let rank = "";
    if (score === 10) rank = "Absolute Unit 👑🐸";
    else if (score >= 8) rank = "Chubby Croaker 🐸";
    else if (score >= 5) rank = "Healthy Hopper 🐸";
    else rank = "Tiny Tadpole 🦠";
    
    finalRankEl.textContent = `Rank: ${rank}`;
    
    // The final frog matches the size they achieved
    const finalFrog = document.querySelector('.final-frog');
    finalFrog.style.transform = `scale(${Math.min(frogScale, 2.5)})`; // Cap it slightly for the final screen so it doesn't break layout
    
    showScreen('end');
}

function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenId].classList.add('active');
}
