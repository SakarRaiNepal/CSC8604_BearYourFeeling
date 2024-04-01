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

// Displays emotion details on the page based on the selected emotion.
function displayEmotionDetails(emotion) {
    // Finds the matching emotion object.
    const detail = Learning.find(d => d.emotion === emotion);
    if (detail) {
        document.getElementById("inform").textContent = detail.inform;
        document.getElementById("scenario-image").src = detail.image;
    }
}
// Shows a popup with the correct image.
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
    if (newTag != undefined) {
        // Display the correct answer popup based on the fetched emotion.
        if (newTag === "Happy") { // Shows the correct image based on the fetched emotion - Happy.
            showCorrectAnswerPopup("./assets/Button/Happy.png");
        }
        if (newTag === "Sad") {// Shows the correct image based on the fetched emotion - Sad.
            showCorrectAnswerPopup("./assets/Button/Sad.png");
        }
        if (newTag === "Angry") {// Shows the correct image based on the fetched emotion - Angry.
            showCorrectAnswerPopup("./assets/Button/Angry.png");
        }
        if (newTag === "Fear") {// Shows the correct image based on the fetched emotion - Fear.
            showCorrectAnswerPopup("./assets/Button/Fear.png");
        }
        if (newTag === "Disgust") {// Shows the correct image based on the fetched emotion - Disgust.
            showCorrectAnswerPopup("./assets/Button/Disgust.png");
        }
    }
    setTimeout(refresh, 1000);// Continues to refresh the data every second.
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
        window.location.href = 'newEmotion.html';
    }
});