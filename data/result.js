// Listens for uesr to press 'h' key to navigate to introduce.html. read_button.sh `xdotool` simulates an 'h' key press
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'h') {
        window.location.href = 'yourFeeling.html';
    }
});

// Displays the quiz results extracted from URL query
function displayResults() {
    // Retrieves 'score' and 'total' values from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const total = urlParams.get('total');
    console.log(score + ' ' + total)

    // Update the page to display the final score
    document.getElementById('scoreDisplay').textContent = `${score} out of ${total} !`;
}
// Calls displayResults to immediately show results upon page load.
displayResults();
