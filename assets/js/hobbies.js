// Get all the hobby buttons and the hobby content sections
const hobbyButtons = document.querySelectorAll(".highlight-item");
const hobbyContents = document.querySelectorAll(".hobby-content");

// Add click event listeners to all buttons
hobbyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        
        hobbyButtons.forEach((btn) => btn.classList.remove("active"));
        
        // Hide all hobby content sections
        hobbyContents.forEach((content) => (content.style.display = "none"));
        
        // Add 'active' class to the clicked button
        button.classList.add("active");
        
        // Show the corresponding hobby content
        const hobbyId = button.getAttribute("data-hobby");
        const targetContent = document.getElementById(hobbyId);
        console.log("Clicked button:", button);
        console.log("Target hobby ID:", hobbyId);
        console.log("Target content element:", targetContent);
        if (targetContent) {
            targetContent.style.display = "block";
        }
    });
});