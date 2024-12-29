const questions = [
    {
        question: "A fluid is defined as a substance that:",
        options: ["Has fixed volume", "Deforms continuously under shear stress", "Has fixed shape", "Cannot be compressed"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Elastic modulus is measured in:", 
        options: ["N/m²", "N/m", "Pascal", "Both a and c"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "The stress-strain curve is:",
        options: ["Always linear", "Never linear", "Linear up to elastic limit", "Linear after elastic limit"], 
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Hooke's law states that:",
        options: ["Stress ∝ Strain", "Strain ∝ Stress", "Stress = Strain", "None of these"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Young's modulus is the ratio of:",
        options: ["Longitudinal stress to longitudinal strain", "Volume stress to volume strain", "Shear stress to shear strain", "Lateral stress to lateral strain"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Pascal's law states that:",
        options: ["Pressure increases with depth", "Pressure decreases with height", "Pressure applied to enclosed fluid is transmitted undiminished in all directions", "Pressure only acts downward"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The SI unit of surface tension is:",
        options: ["N/m²", "N/m", "N·m", "N/m³"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Breaking stress is:",
        options: ["Minimum stress needed to break material", "Maximum stress needed to break material", "Average stress during breaking", "None of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Poisson's ratio is:",
        options: ["Always greater than 1", "Always less than 0.5", "Can be negative", "Equal to 1"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "Pressure in a fluid depends on:",
        options: ["Depth only", "Density only", "Both depth and density", "Neither depth nor density"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        question: "The density of water at 4°C is:",
        options: ["1000 kg/m³", "100 kg/m³", "10000 kg/m³", "1 kg/m³"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Strain is:",
        options: ["Force/Area", "Change in dimension/Original dimension", "Stress/Area", "Force × Area"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Viscosity of liquids with temperature:",
        options: ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Surface tension arises due to:",
        options: ["Gravitational forces", "Cohesive forces", "Adhesive forces", "Pressure forces"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The elastic limit is:",
        options: ["Maximum stress before permanent deformation", "Minimum stress for deformation", "Breaking point", "Yield point"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Bernoulli's principle is based on:",
        options: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of pressure"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The unit of kinematic viscosity is:",
        options: ["kg/ms", "m²/s", "kg/m³", "N/m²"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Stress is measured in:",
        options: ["No units", "Pascal", "Newton", "Meter"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Reynolds number is:",
        options: ["Dimensionless quantity", "Has units of velocity", "Has units of pressure", "Has units of force"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The bulk modulus of a material is:",
        options: ["Always positive", "Always negative", "Can be zero", "Can be infinity"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "In streamline flow:",
        options: ["Paths cross each other", "Paths never cross", "Velocity changes rapidly", "Flow is turbulent"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The coefficient of viscosity depends on:",
        options: ["Temperature only", "Pressure only", "Both temperature and pressure", "Neither temperature nor pressure"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Elastic hysteresis shows that:",
        options: ["Loading and unloading follow same path", "Loading and unloading follow different paths", "Only loading exists", "Only unloading exists"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "Surface tension of a liquid:",
        options: ["Increases with temperature", "Decreases with temperature", "Remains constant", "Is independent of temperature"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The pressure at a point in a fluid increases with depth due to:",
        options: ["Atmospheric pressure", "Weight of fluid column", "Surface tension", "Viscosity"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Shear modulus is related to:",
        options: ["Change in volume", "Change in length", "Change in shape", "Change in density"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Terminal velocity depends on:",
        options: ["Initial velocity", "Viscosity of fluid", "Both a and b", "Neither a nor b"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The dimensions of surface tension are:",
        options: ["[ML⁰T⁻²]", "[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        question: "Elastic fatigue is:",
        options: ["Temporary phenomenon", "Permanent phenomenon", "Both temporary and permanent", "Neither temporary nor permanent"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The equation of continuity is based on conservation of:",
        options: ["Mass", "Energy", "Momentum", "Force"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Work done in stretching a wire is:",
        options: ["Force × extension", "½ × force × extension", "Force/extension", "Extension/force"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Angle of contact for water with glass is:",
        options: ["Acute", "Obtuse", "Right angle", "Zero"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The velocity of efflux is given by:",
        options: ["√(2gh)", "2gh", "gh", "2√gh"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Young's modulus is maximum for:",
        options: ["Rubber", "Steel", "Wood", "Plastic"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "In steady flow, velocity is:",
        options: ["Constant at a point", "Variable at a point", "Zero at all points", "Maximum at all points"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Compressibility is inverse of:",
        options: ["Young's modulus", "Bulk modulus", "Shear modulus", "Elastic modulus"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The critical velocity in Reynolds number is:",
        options: ["Directly proportional to viscosity", "Inversely proportional to viscosity", "Independent of viscosity", "Proportional to square of viscosity"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "Stress-strain graph is:",
        options: ["Always straight line", "Never straight line", "Initially straight line", "Finally straight line"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The pressure in a soap bubble is:",
        options: ["Directly proportional to radius", "Inversely proportional to radius", "Independent of radius", "Proportional to square of radius"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Elastic after-effect is:",
        options: ["Immediate recovery", "Delayed recovery", "No recovery", "Partial recovery"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "In streamline flow, the velocity is:",
        options: ["Parallel to streamline", "Perpendicular to streamline", "At 45° to streamline", "Random in direction"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The breaking stress depends on:",
        options: ["Nature of material", "Temperature", "Time of loading", "All of these"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Magnus effect explains:",
        options: ["Flight of aircraft", "Swing in cricket", "Surface tension", "Viscosity"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "The elastic potential energy per unit volume is:",
        options: ["½ × stress × strain", "Stress × strain", "Stress/strain", "Strain/stress"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "For an ideal fluid:",
        options: ["Viscosity is zero", "Viscosity is infinite", "Density is zero", "Density is infinite"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Poisson's ratio cannot be:",
        options: ["0.25", "0.5", "0.3", "1.5"],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        question: "The rise of liquid in a capillary tube is directly proportional to:",
        options: ["Radius of tube", "Surface tension", "Density of liquid", "Length of tube"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Stress-strain curve is useful in finding:",
        options: ["Breaking point only", "Elastic limit only", "Various elastic properties", "Plastic properties only"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "According to Bernoulli's principle:",
        options: ["High velocity implies high pressure", "High velocity implies low pressure", "Velocity and pressure are independent", "Pressure is constant throughout"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The plastic behavior starts at:",
        options: ["Elastic limit", "Breaking point", "Yield point", "Origin"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The Reynolds number is given by:",
        options: ["ρvd/η", "ηvd/ρ", "ρv/ηd", "ηv/ρd"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Tensile strength is:",
        options: ["Maximum stress", "Minimum stress", "Average stress", "Zero stress"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The shape of a liquid drop is spherical due to:",
        options: ["Gravity", "Surface tension", "Viscosity", "Pressure"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Elastic limit depends on:",
        options: ["Temperature", "Nature of material", "Mode of loading", "All of these"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "In a hydraulic brake:",
        options: ["Force is amplified", "Distance is amplified", "Both force and distance are amplified", "Neither force nor distance is amplified"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The factor of safety is:",
        options: ["Breaking stress/Working stress", "Working stress/Breaking stress", "Maximum stress/Minimum stress", "Minimum stress/Maximum stress"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Streamlines cannot:",
        options: ["Be parallel", "Be curved", "Cross each other", "Be straight"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        question: "Ductility is measured by:",
        options: ["Percentage elongation", "Percentage reduction in area", "Both a and b", "Neither a nor b"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The velocity of sound in a fluid depends on:",
        options: ["Bulk modulus only", "Density only", "Both bulk modulus and density", "Neither bulk modulus nor density"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Strain energy is:",
        options: ["Always positive", "Always negative", "Can be zero", "Can be negative"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Surface tension is a property of:",
        options: ["Surface only", "Bulk of liquid only", "Both surface and bulk", "Neither surface nor bulk"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The elastic behavior is:",
        options: ["Time dependent", "Temperature dependent", "Both a and b", "Neither a nor b"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The pressure at a point in a fluid increases with depth due to:",
        options: ["Atmospheric pressure", "Weight of fluid column", "Surface tension", "Viscosity"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Work hardening is:",
        options: ["Increase in hardness by working", "Decrease in hardness by working", "No change in hardness", "First increase then decrease in hardness"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "In steady flow:",
        options: ["Streamlines are straight", "Path lines are straight", "Streamlines and path lines coincide", "Streamlines and path lines never coincide"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The breaking stress is:",
        options: ["Maximum for brittle materials", "Maximum for ductile materials", "Same for all materials", "Zero for all materials"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The coefficient of viscosity of a liquid:",
        options: ["Increases with pressure", "Decreases with pressure", "Is independent of pressure", "First increases then decreases with pressure"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Elasticity is:",
        options: ["Molecular property", "Atomic property", "Nuclear property", "Bulk property"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "The work done in increasing the surface area of a liquid film is:",
        options: ["Stored as potential energy", "Converted to kinetic energy", "Lost as heat", "Converted to sound energy"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Strain hardening is:",
        options: ["Beneficial", "Harmful", "Has no effect", "Sometimes beneficial"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The speed of efflux of a liquid through a small hole:",
        options: ["Increases with depth", "Decreases with depth", "Is independent of depth", "First increases then decreases with depth"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The elastic limit is:",
        options: ["Same for all materials", "Different for different materials", "Always zero", "Always infinite"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "In turbulent flow:",
        options: ["Reynolds number is low", "Reynolds number is high", "Reynolds number is zero", "Reynolds number is negative"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Hooke's law is valid for:",
        options: ["All deformations", "Small deformations only", "Large deformations only", "No deformations"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "The pressure inside a soap bubble is:",
        options: ["Less than atmospheric pressure", "Greater than atmospheric pressure", "Equal to atmospheric pressure", "Zero"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The elastic behavior depends on:",
        options: ["Temperature", "Time of loading", "Both a and b", "Neither a nor b"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The terminal velocity of a sphere falling through a viscous fluid is proportional to:",
        options: ["Square of radius", "Cube of radius", "Fourth power of radius", "First power of radius"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "Young's modulus is:",
        options: ["Always positive", "Always negative", "Can be zero", "Can be negative"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The ratio of inertial forces to viscous forces is:",
        options: ["Reynolds number", "Mach number", "Weber number", "Froude number"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Strain energy density is:",
        options: ["Energy per unit volume", "Energy per unit mass", "Energy per unit area", "Energy per unit length"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation P + ½ρv² + ρgh = constant represents:",
        options: ["Pascal's law", "Bernoulli's principle", "Stokes' law", "Poiseuille's law"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The breaking point occurs:",
        options: ["Before elastic limit", "At elastic limit", "After elastic limit", "At origin"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Viscous force is:",
        options: ["Conservative", "Non-conservative", "Both conservative and non-conservative", "Neither conservative nor non-conservative"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "The stress-strain curve is:",
        options: ["Same for all materials", "Different for different materials", "Always straight line", "Always parabola"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Surface tension depends on:",
        options: ["Temperature only", "Pressure only", "Both temperature and pressure", "Neither temperature nor pressure"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Elastic fatigue occurs due to:",
        options: ["Single loading", "Repeated loading", "No loading", "Continuous loading"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The pressure gradient in a fluid is:",
        options: ["Always positive", "Always negative", "Can be positive or negative", "Always zero"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The breaking stress is:",
        options: ["Maximum stress", "Minimum stress", "Average stress", "Zero stress"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "In streamline flow:",
        options: ["Velocity is constant", "Acceleration is constant", "Both velocity and acceleration are constant", "Neither velocity nor acceleration is constant"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The elastic limit depends on:",
        options: ["Temperature", "Time of loading", "Nature of material", "All of these"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Bernoulli's equation is based on:",
        options: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of charge"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The stress-strain curve shows:",
        options: ["Linear behavior only", "Non-linear behavior only", "Both linear and non-linear behavior", "Neither linear nor non-linear behavior"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Surface tension force is:",
        options: ["Always attractive", "Always repulsive", "Can be attractive or repulsive", "Always zero"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The elastic modulus is:",
        options: ["Same for all materials", "Different for different materials", "Always zero", "Always infinite"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "In steady flow:",
        options: ["Velocity changes with time", "Velocity doesn't change with time", "Velocity is zero", "Velocity is infinite"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Strain energy is maximum at:",
        options: ["Elastic limit", "Breaking point", "Yield point", "Origin"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The pressure in a fluid at rest:",
        options: ["Acts in all directions", "Acts only downward", "Acts only upward", "Acts only horizontally"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Young's modulus depends on:",
        options: ["Temperature", "Pressure", "Both temperature and pressure", "Neither temperature nor pressure"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The streamline flow occurs at:",
        options: ["High velocities", "Low velocities", "All velocities", "Zero velocity"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The stress-strain relationship is:",
        options: ["Linear for all materials", "Non-linear for all materials", "Linear within elastic limit", "Never linear"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The relationship between stress and strain in elastic limit is:",
        options: ["Linear", "Parabolic", "Hyperbolic", "Exponential"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The SI unit of strain energy is:",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The property of a material to regain its original shape is called:",
        options: ["Plasticity", "Elasticity", "Ductility", "Malleability"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "The ratio of longitudinal stress to longitudinal strain is called:",
        options: ["Bulk modulus", "Young's modulus", "Shear modulus", "Poisson's ratio"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "The force per unit area is called:",
        options: ["Strain", "Stress", "Pressure", "Tension"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "The change in volume per unit volume is called:",
        options: ["Linear strain", "Shear strain", "Volume strain", "Lateral strain"],
        correctAnswer: 2,
        difficulty: "medium"
    }
];




let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes
let timer;
let answeredQuestions = new Array(questions.length).fill(false);

function initializeQuiz() {
    loadQuestion();
    startTimer();
    createQuestionGrid();
    updateProgress();
    
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('active');
    });

    setTimeout(() => {
        const welcomeAnimation = document.querySelector('.welcome-animation');
        if (welcomeAnimation) {
            welcomeAnimation.style.display = 'none';
        }
    }, 4000);
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const difficultyBadge = document.getElementById('difficultyBadge');

    if (questionText && optionsGrid && currentQuestionNum && difficultyBadge) {
        questionText.textContent = question.question;
        currentQuestionNum.textContent = currentQuestion + 1;
        difficultyBadge.textContent = question.difficulty;

        optionsGrid.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.onclick = () => checkAnswer(index);
            button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionsGrid.appendChild(button);
        });
    }

    updateNavigationButtons();
}

function checkAnswer(selectedIndex) {
    if (answeredQuestions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
        showFeedback(false);
    }

    answeredQuestions[currentQuestion] = true;
    updateScore();
    updateProgress();
    updateQuestionGrid();
    
    if (answeredQuestions.filter(Boolean).length === questions.length) {
        showResults();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeLeftElement = document.getElementById('timeLeft');
    if (timeLeftElement) {
        timeLeftElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    }
}

function updateScore() {
    const scoreElements = document.querySelectorAll('#score');
    scoreElements.forEach(element => {
        element.textContent = score;
    });
}

function showFeedback(isCorrect, message = null) {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = `feedback-modal ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackModal.textContent = message || (isCorrect ? 'Correct!' : 'Incorrect!');
    
    document.body.appendChild(feedbackModal);
    
    setTimeout(() => {
        feedbackModal.remove();
    }, 2000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (grid) {
        grid.innerHTML = '';
        questions.forEach((_, index) => {
            const button = document.createElement('button');
            button.className = 'question-dot';
            button.onclick = () => jumpToQuestion(index);
            grid.appendChild(button);
        });
        updateQuestionGrid();
    }
}

function updateQuestionGrid() {
    const dots = document.getElementsByClassName('question-dot');
    Array.from(dots).forEach((dot, index) => {
        dot.className = 'question-dot';
        if (index === currentQuestion) dot.classList.add('current');
        if (answeredQuestions[index]) dot.classList.add('answered');
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
    updateProgress();
    updateQuestionGrid();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }
}

function showResults() {
    clearInterval(timer);
    
    const resultsModal = document.getElementById('resultsModal');
    const finalScore = document.getElementById('finalScore');
    const accuracy = document.getElementById('accuracy');
    const timeTaken = document.getElementById('timeTaken');
    
    if (resultsModal && finalScore && accuracy && timeTaken) {
        const accuracyValue = ((score / questions.length) * 100).toFixed(1);
        const timeSpent = 1800 - timeLeft;
        
        finalScore.textContent = `${score}/${questions.length}`;
        accuracy.textContent = `${accuracyValue}%`;
        timeTaken.textContent = 
            `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        
        resultsModal.classList.add('show');
        
        const restartBtn = document.querySelector('.restart-btn');
        if (!restartBtn) {
            const btn = document.createElement('button');
            btn.className = 'restart-btn';
            btn.innerHTML = '<i class="fas fa-redo"></i> Restart Quiz';
            btn.onclick = restartQuiz;
            resultsModal.appendChild(btn);
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1800;
    answeredQuestions = new Array(questions.length).fill(false);
    
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) {
        resultsModal.classList.remove('show');
    }
    
    updateQuestionGrid();
    updateProgress();
    updateScore();
    
    clearInterval(timer);
    startTimer();
    
    loadQuestion();
    
    showFeedback(true, 'Quiz Restarted! Good Luck!');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        checkAnswer(parseInt(e.key) - 1);
    }
});

window.onload = initializeQuiz;
