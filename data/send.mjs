import { beginReadCard } from "./read.mjs";

let emotion = '';

// Unified function to process RFID input for both actions and emotions
async function processRFIDInput(cardVal) {
    switch (cardVal) {
        case "33caa13":// RFID card value for "Sad"
            console.log('blue')
            emotion = "Sad"
            break;
        case "63db1213":// RFID card value for "Angry"
            console.log('red')
            emotion = "Angry"
            break;
        case "432cf8":// RFID card value for "Happy"
            console.log('yellow')
            emotion = "Happy"
            break;
        case "a3a0b13":// RFID card value for "Disgust"
            console.log('green')
            emotion = "Disgust"
            break;
        case "23cb23f8":// RFID card value for "Fear"
            console.log('purple')
            emotion = "Fear"
            break;
        default:// Handles unknown RFID card values
            console.log("Unknown RFID input:", cardVal);
    }
}

// Returns the current emotion and resets the stored emotion for the next card read.
function getEmotion() {
    let returnValue = emotion;
    emotion = '';// Resets the emotion after it's retrieved.
    return returnValue;

}

// Starts listening for RFID card reads
beginReadCard(processRFIDInput)

// Exports getEmotion function for use in other modules.
export { getEmotion }