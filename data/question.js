let currentQuestionIndex = 0;
let score = 0;
let answeredCorrectly = false;

//----------------------------------------------------------------------------------
// Defines the quiz questions, each with an emotion, image, and flags for first attempt.
const questions = [
    {
        question: "What feeling do you have when you share and eat yummy ice cream with your friends and you laugh and smile?",
        correct: "Happy",
        image: "./assets/Emotions/Happy.jpg",
        correctAnswerImage: "assets/Try/Correct.png",// Images for correct answer.
        wrongAnswerImage: "./assets/Try/happy.png",// Images for incorrect attempts.
        firstAttempt: true
    },
    {
        question: "What feeling do you have when you can't find your teddy bear, and you start to cry with your shoulders drooping down?",
        correct: "Sad",
        image: "./assets/Emotions/Sad.jpg",
        correctAnswerImage: "assets/Try/Correct.png",// Images for correct answer.
        wrongAnswerImage: "./assets/Try/sad.png",// Images for incorrect attempts.
        firstAttempt: true
    },
    {
        question: "How do you feel when you try to throw the ball into the hoop, but it doesn't go in, and you want to stomp your feet and cry?",
        correct: "Angry",
        image: "./assets/Emotions/Angry.jpg",
        correctAnswerImage: "assets/Try/Correct.png",// Images for correct answer.
        wrongAnswerImage: "./assets/Try/angry.png",// Images for incorrect attempts.
        firstAttempt: true
    },
    {
        question: "How do you feel when you're alone at night, and you think you see a big, scary monster with sharp claws? You quickly hide under your blanket, close your eyes tight, and your heart beats really fast?",
        correct: "Fear",
        image: "./assets/Emotions/Fear.jpg",
        correctAnswerImage: "assets/Try/Correct.png",// Images for correct answer.
        wrongAnswerImage: "./assets/Try/fear.png",// Images for incorrect attempts.
        firstAttempt: true
    },
    {
        question: "What feeling do you have when you find a big wiggly worm inside your apple, your face frowns, your nose wrinkles, and you want to throw the apple away?",
        correct: "Disgust",
        image: "./assets/Emotions/Disgust.jpg",
        correctAnswerImage: "assets/Try/Correct.png",// Images for correct answer.
        wrongAnswerImage: "./assets/Try/disgust.png",// Images for incorrect attempts.
        firstAttempt: true
    }
];

async function fetchData(url) {
    const response = await fetch(url) // Make a network request to the URL
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    (response.json)
    return await response.json(); // Parse the JSON in the response

}

//----------------------------------------------------------------------------------
function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const popupVisible = document.querySelector('.popup').style.display !== 'none';

    // Close popup if 'h' is pressed or any key when popup is visible
    if (key === 'h' || popupVisible) {
        closePopup(); // Close the popup
        // Prevent further actions if a popup was visible
        if (popupVisible) return;
    }

    // Handles keyboard input for testing purposes, mapping keys to emotions. We used for when testing with keyboard
    const answerKeys = {
        'a': 'Happy',
        's': 'Sad',
        'd': 'Angry',
        'f': 'Fear',
        'g': 'Disgust'
    };

    const selectedEmotion = answerKeys[key];
    // Proceed with selecting an answer if popup is not visible
    if (selectedEmotion) {
        selectAnswer(selectedEmotion);
    }


}

document.addEventListener('keydown', handleKeyPress);

//----------------------------------------------------------------------------------
async function refresh() {
    // Use the fetchData function
    const newTag = await fetchData('http://localhost:3000/');
    console.log(">>>" + newTag);
    if (newTag != undefined) {
        if (newTag === "Happy") {// Selects the answer based on fetched emotion data.
            selectAnswer(newTag);
        }
        if (newTag === "Sad") {
            selectAnswer(newTag);
        }
        if (newTag === "Angry") {
            selectAnswer(newTag);
        }
        if (newTag === "Fear") {
            selectAnswer(newTag);
        }
        if (newTag === "Disgust") {
            selectAnswer(newTag);
        }
    }
    setTimeout(refresh, 1000);// Refreshes every second.
}

// Displays the current question and its associated image.
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    document.getElementById("question-image").src = question.image;
    answeredCorrectly = false; // Resets for the new question.
    updateScoreTracker();// Updates the displayed score.
}

// Checks the selected answer, updates the score if correct, and shows feedback popups.
function selectAnswer(selectedEmotion) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedEmotion === currentQuestion.correct) { // Checks if the answer is correct.
        if (currentQuestion.firstAttempt) {
            score++;// records score on first correct attempt
            updateScoreTracker();
        }
        currentQuestion.firstAttempt = false; // Mark the question as attempted
        answeredCorrectly = true; // Set flag as true because correct answer was selected
        showCorrectAnswerPopup(currentQuestion.correctAnswerImage);
    } else {
        currentQuestion.firstAttempt = false;
        showTryAgainPopup(currentQuestion.wrongAnswerImage);
    }
}
//---------------------------------------------------------------------------------------------------------------
// Shows the popup for a correct answer with the provided image.
function showCorrectAnswerPopup(imageSrc) {
    document.getElementById("correct-answer-image").src = imageSrc;
    document.getElementById("correctAnswerPopup").style.display = "block";
}

// Shows the popup for a wrong answer and encourages trying again.
function showTryAgainPopup(imageSrc) {
    document.getElementById("wrong-answer-image").src = imageSrc;
    document.getElementById("tryAgainPopup").style.display = "block";
}

// Closes any open feedback popups and, if the answer was correct, moves to the next question or displays results.
function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
    if (answeredCorrectly) {
        moveToNextQuestionOrDisplayResults();
    }
    // Reset answeredCorrectly flag after handling popup closure
    answeredCorrectly = false;
}

//---------------------------------------------------------------------------------------------------------------
// Updates the quiz's score display to show the current score out of the total number of questions.
function updateScoreTracker() {
    document.getElementById("score-tracker").textContent = `Score: ${score} / ${questions.length}`;
}

// Advances to the next question in the quiz or, if all questions have been answered, shows the final results.
function moveToNextQuestionOrDisplayResults() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResults();
    }
}

// Redirects to the results page, adding the score and total questions to the URL for access on the next page.
function displayResults() {
    window.location.href = `result.html?score=${score}&total=${questions.length}`;
}
//---------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.emotion-image').forEach(item => {
        item.addEventListener('click', event => {
            const selectedEmotion = event.target.getAttribute('data-emotion');
            selectAnswer(selectedEmotion);
        });
    });
    document.addEventListener('keydown', handleKeyPress);
});