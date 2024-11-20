// Timer variables
let countdown;
let timerActive = false;
let secondsLeft = 60; // Set initial time in seconds (e.g., 1 minute)

// Select DOM elements
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Update the display with formatted time
function updateTimerDisplay() {
    timeDisplay.textContent = formatTime(secondsLeft);
}

// Start the countdown
function startTimer() {
    if (timerActive) return; // Prevent starting multiple timers
    timerActive = true;
    countdown = setInterval(() => {
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            alert('Time is up!');
            timerActive = false;
        } else {
            secondsLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

// Reset the timer
function resetTimer() {
    clearInterval(countdown);
    secondsLeft = 120; // Reset to the initial time
    updateTimerDisplay();
    timerActive = false;
}

// Event listeners for the buttons
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the timer display
updateTimerDisplay();
