document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    document.getElementById("success-message").textContent = "Thank you for your feedback!";
    this.reset();  // Clear the form
});
