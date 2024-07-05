// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all toggle buttons
    const buttons = document.querySelectorAll(".toggle-button");

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Find the description container (sibling element)
            const description = button.previousElementSibling;

            // Toggle the 'show-description' class on the description container
            description.classList.toggle("show-description");

            // Change button text based on visibility
            if (description.classList.contains("show-description")) {
                button.textContent = "Show Less";
            } else {
                button.textContent = "Show More";
            }
        });
    });
});
