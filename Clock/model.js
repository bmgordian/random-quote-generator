// Get the element where we'll display the time
const timeDisplay = document.getElementById("time-display");

// Function to update the time
function updateTime() {
  const now = new Date();  // Get the current date and time
  let hours = now.getHours();  // Get current hour
  let minutes = now.getMinutes();  // Get current minutes
  let seconds = now.getSeconds();  // Get current seconds

  // Add leading zero for single digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time in format HH:MM:SS
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
