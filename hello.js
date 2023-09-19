const questions = [
    { question: "Question 1: Which type of JavaScript language is ___", options: ["1) Object-Oriented ", "2) Object-Based ", "3) Assembly-language ", "4) High-level "], answer: 1 },

    { question: "Question 2: Which one of the following also known as Conditional Expression ", options: ["1) Alternative to if-else ", "2) Switch statement ", "3) If-then-else statement ", "4) immediate if "], answer: 3 },

    { question: "Question 3:  When interpreter encounters an empty statements, what it will do", options: ["1) Shows a warning ", "2) Prompts to complete the statement ", "3) Throws an error ", "4) Ignores the statements "], answer: 3},

    { question: "Question 4: The function and var are known as:", options: ["1) Keywords ", "2) Data types ", "3) Declaration statements ", "4) Prototypes "], answer: 2},

    { question: "Question 5: Arrays in JavaScript are defined by which of the following statements?", options: ["1) It is an ordered list of values ", "2) It is an ordered list of objects ", "3) It is an ordered list of string ", "4) It is an ordered list of functions "], answer: 0},

];

        let currentQuestion = 0;
        let userResponses = new Array(questions.length).fill(null);
        let score = 0;

        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");
        const nextButton = document.getElementById("next-button");
        const prevButton = document.getElementById("prev-button");
        const submitButton = document.getElementById("submit-button");
        const scoreContainer = document.getElementById("score-container");
        const scoreDisplay = document.getElementById("score");
        const mad=document.getElementById("mad");

        function showQuestion(questionIndex) {
            const question = questions[questionIndex];
            questionText.textContent = question.question;
            optionsContainer.innerHTML = "";
            for (let i = 0; i < question.options.length; i++) {
                const optionLabel = document.createElement("label");
                optionLabel.textContent = question.options[i];
                const optionInput = document.createElement("input");
                optionInput.type = "radio";
                optionInput.name = "answer";
                optionInput.value = i;
                if (userResponses[questionIndex] !== null && i === userResponses[questionIndex]) {
                    optionInput.checked = true;
                }
                optionLabel.appendChild(optionInput);
                optionsContainer.appendChild(optionLabel);
            }
        }

        function updateButtons() {
            prevButton.disabled = currentQuestion === 0;
            nextButton.style.display = currentQuestion < questions.length - 1 ? "block" : "none";
            submitButton.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
        }

        showQuestion(currentQuestion);
        updateButtons();

        nextButton.addEventListener("click", () => {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                userResponses[currentQuestion] = parseInt(selectedAnswer.value);
                currentQuestion++;
                showQuestion(currentQuestion);
                updateButtons();
            }
        });

        prevButton.addEventListener("click", () => {
            currentQuestion--;
            showQuestion(currentQuestion);
            updateButtons();
        });

        submitButton.addEventListener("click", () => {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                userResponses[currentQuestion] = parseInt(selectedAnswer.value);
                for (let i = 0; i < questions.length; i++) {
                    if (userResponses[i] === questions[i].answer) {
                        score++;
                    }
                }
                scoreDisplay.textContent = score;
                prevButton.style.display="none";
                scoreContainer.style.display = "block";
                questionText.style.display = "none";
                optionsContainer.style.display = "none";
                submitButton.style.display = "none";
                mad.style.display="none";
            }
        });


        function refresh(){
            window.location.reload();
        }