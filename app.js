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
    },
    {
        question: "What part of the plant protects the tubes that carry food and water, and helps the plant stand up?",
        options: ["Roots", "Leaves", "Stem", "Flowers"],
        correct: 2
    },
    {
        question: "Which part of the flower produces nectar to attract insects?",
        options: ["Anther", "Sepal", "Nectary", "Stigma"],
        correct: 2
    },
    {
        question: "Which part of the seed protects it before it grows?",
        options: ["Food store", "Embryo", "Seed coat", "Pollen tube"],
        correct: 2
    },
    {
        question: "What is the process called when a seed starts to grow into a new plant?",
        options: ["Pollination", "Photosynthesis", "Germination", "Fertilisation"],
        correct: 2
    },
    {
        question: "Which of these is a benefit of plants for the environment?",
        options: ["They cause floods", "They add oxygen to the atmosphere", "They produce carbon dioxide", "They eat insects"],
        correct: 1
    },
    {
        question: "In wind-pollinated flowers, what do the petals usually look like?",
        options: ["Bright and colorful", "Small and dull", "Large and scented", "Covered in nectar"],
        correct: 1
    },
    {
        question: "After pollination, what does the pollen grain grow down into the style?",
        options: ["A root", "A leaf", "A pollen tube", "A seed coat"],
        correct: 2
    },
    {
        question: "What is the female part of the flower called?",
        options: ["Stamen", "Anther", "Filament", "Carpel"],
        correct: 3
    },
    {
        question: "What part of the flower develops into the seed after fertilisation?",
        options: ["Ovary", "Ovule", "Petal", "Sepal"],
        correct: 1
    },
    {
        question: "What happens during fertilisation in a plant?",
        options: ["A bee drinks nectar", "The pollen nucleus joins with the ovule nucleus", "The seed grows a root", "The flower falls off"],
        correct: 1
    },
    {
        question: "Why is seed dispersal important?",
        options: ["To feed birds", "To help the new seedlings grow without competing with the parent plant", "To stop the plant from growing too fast", "To make the fruit taste better"],
        correct: 1
    },
    {
        question: "What kind of organism can make its own food using sunlight?",
        options: ["Consumer", "Herbivore", "Carnivore", "Producer"],
        correct: 3
    },
    {
        question: "Which part of the digestive system connects the mouth to the stomach?",
        options: ["Small Intestine", "Liver", "Oesophagus", "Rectum"],
        correct: 2
    },
    {
        question: "What is the function of stomach acid?",
        options: ["To turn starch into sugar", "To make ideal conditions for enzymes to break down proteins", "To absorb water", "To chew the food"],
        correct: 1
    },
    {
        question: "Which teeth are best designed for snipping and cutting food at the front of the mouth?",
        options: ["Incisors", "Canines", "Molars", "Pre-molars"],
        correct: 0
    },
    {
        question: "What percentage of vascular plants on earth are flowering plants?",
        options: ["10%", "50%", "94%", "100%"],
        correct: 2
    },
    {
        question: "Which type of plants have stems that act like tubes?",
        options: ["Non-vascular", "Fungi", "Vascular", "Seaweed"],
        correct: 2
    },
    {
        question: "About how many plant species do humans actually consume?",
        options: ["10", "200", "5,000", "300,000"],
        correct: 1
    },
    {
        question: "What does the pollen grain grow down from the stigma to reach the ovule?",
        options: ["A root", "A leaf", "A pollen tube", "A petal"],
        correct: 2
    },
    {
        question: "What are the two parts that make up the stamen (male part) of a flower?",
        options: ["Stigma and Style", "Anther and Filament", "Ovary and Ovule", "Petal and Sepal"],
        correct: 1
    },
    {
        question: "Which type of flower usually has small and dull petals?",
        options: ["Insect-pollinated", "Wind-pollinated", "Water-pollinated", "Sun-pollinated"],
        correct: 1
    },
    {
        question: "What is the hardest material in the human body?",
        options: ["Bone", "Dentine", "Enamel", "Cement"],
        correct: 2
    },
    {
        question: "Which area of a human tooth contains nerves and blood vessels?",
        options: ["Enamel", "Crown", "Root", "Pulp cavity"],
        correct: 3
    },
    {
        question: "Why do ruminants like buffalos belch all day?",
        options: ["They drink too much water", "Microbes digesting cellulose produce gas", "They eat too fast", "To communicate with the herd"],
        correct: 1
    },
    {
        question: "Why is buffalo dung more uniform than zebra dung?",
        options: ["Zebras eat faster", "Buffalos eat only flowers", "Buffalos digest plants more completely", "Zebras don't have teeth"],
        correct: 2
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
