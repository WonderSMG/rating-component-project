// Select DOM elements
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector("#submit-button");
const goBackButton = document.querySelector("#go-back-button");
const ratingState = document.querySelector("#rating-state");
const thankYouState = document.querySelector("#thank-you-state");
const selectedRatingDisplay = document.querySelector("#selected-rating");

// State to track the selected rating
let selectedRating = null;

// Ensure only the rating state is visible initially
ratingState.classList.remove("hidden");
thankYouState.classList.add("hidden");

// Function to handle rating selection
function handleRatingSelection(event) {
  // Remove active class and reset background for all buttons
  ratingButtons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "hsl(213, 19%, 24%)"; // Reset to original background
    button.style.color = "hsl(217, 12%, 63%)"; // Reset to original text color
  });

  // Add active class and set background to white for the clicked button
  const clickedButton = event.target;
  clickedButton.classList.add("active");
  clickedButton.style.backgroundColor = "white"; // Set background to white
  clickedButton.style.color = "hsl(216, 12%, 8%)"; // Set text color to dark for contrast

  // Update the selected rating
  selectedRating = clickedButton.textContent;
}

// Function to handle form submission
function handleSubmit(event) {
  // Prevent default form behavior
  event.preventDefault();

  // Validate that a rating is selected
  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }

  // Transition to the thank you state
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  // Display the selected rating in the thank you message
  selectedRatingDisplay.textContent = selectedRating;
}

// Function to handle "Go Back" button click
function handleGoBack() {
  // Transition back to the rating state
  thankYouState.classList.add("hidden");
  ratingState.classList.remove("hidden");

  // Reset the selected rating
  selectedRating = null;

  // Remove active class and reset background for all buttons
  ratingButtons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "hsl(213, 19%, 24%)"; // Reset to original background
    button.style.color = "hsl(217, 12%, 63%)"; // Reset to original text color
  });
}

// Add event listeners to rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener("click", handleRatingSelection);
});

// Add event listener to the submit button
submitButton.addEventListener("click", handleSubmit);

// Add event listener to the "Go Back" button
goBackButton.addEventListener("click", handleGoBack);