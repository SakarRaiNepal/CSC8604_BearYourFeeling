// Defines an array to hold emotions with corresponding messages and images.
const Learning = [
    {
        emotion: "Happy",
        inform: "You feel Happy today!",
        image: "./assets/Button/Happy.png"
    },

    {
        emotion: "Sad",
        inform: "You feel Sad today!",
        image: "./assets/Button/Sad.png"
    },
    {
        emotion: "Angry",
        inform: "You feel Angry today!",
        image: "./assets/Button/Angry.png"
    },
    {
        emotion: "Fear",
        inform: "You feel Fear today!",
        image: "./assets/Button/Fear.png"
    },
    {
        emotion: "Disgust",
        inform: "You feel Disgust today!",
        image: "./assets/Button/Disgust.png"
    },
];
//Update the webpage based on the user's selected emotion.
function displayEmotionDetails(emotion) {
    // Find the matching emotion in the Learning array anf if found display the details.
    const detail = Learning.find(d => d.emotion === emotion);
    if (detail) {
        document.getElementById("inform").textContent = detail.inform;
        document.getElementById("scenario-image").src = detail.image;
    }
}
// Shows a popup with the correct answer's image.
function showCorrectAnswerPopup(imageSrc) {
    document.getElementById("correct-answer-image").src = imageSrc;
    document.getElementById("correctAnswerPopup").style.display = "block";
    document.getElementById("inform").innerText = "Happy";

}

// Handles keyboard input for testing purposes, mapping keys to emotions. We used for when testing with keyboard
function handleKeyPress(event) {
    const keyMap = {
        'a': 'Happy',
        's': 'Sad',
        'd': 'Angry',
        'f': 'Fear',
        'g': 'Disgust',
    };
    const emotion = keyMap[event.key.toLowerCase()]; // Ensure the key is converted to lower case

    if (emotion) {
        displayEmotionDetails(emotion);
    }
}

//------------------------------------------------------------------------------------

async function fetchData(url) {
    const response = await fetch(url) // Make a network request to the URL
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    (response.json)
    return await response.json(); // Parse the JSON in the response

}

async function refresh() {
    // Use the fetchData function
    const newTag = await fetchData('http://localhost:3000/');
    console.log(">>>" + newTag); // Process the data
    // Display the correct answer popup based on the fetched emotion.
    if (newTag != undefined) {
        if (newTag === "Happy") {
            showCorrectAnswerPopup("./assets/Emotions/Happy.jpg");
        }
        if (newTag === "Sad") {
            showCorrectAnswerPopup("./assets/Emotions/Sad.jpg");
        }
        if (newTag === "Angry") {
            showCorrectAnswerPopup("./assets/Emotions/Angry.jpg");
        }
        if (newTag === "Fear") {
            showCorrectAnswerPopup("./assets/Emotions/Fear.jpg");
        }
        if (newTag === "Disgust") {
            showCorrectAnswerPopup("./assets/Emotions/Disgust.jpg");
        }
    }
    setTimeout(refresh, 1000);// Continuously refresh every second.
}

//-------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // Setup click event listeners for each emotion image
    const emotionImages = document.querySelectorAll('.emotion-image');
    emotionImages.forEach(image => {
        image.addEventListener('click', function () {
            const emotion = this.getAttribute('data-emotion');
            displayEmotionDetails(emotion);
        });
    });
    // Add the event listener for keydown events on the document
    document.addEventListener('keydown', handleKeyPress);
});


// Listens for uesr to press 'h' key to navigate to introduce.html. read_button.sh `xdotool` simulates an 'h' key press
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'h') {
        window.location.href = 'question.html';
    }
});