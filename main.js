// Simple interactive script for the website
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const visualizationsBtn = document.querySelector('.button-link');

    // Click event for header
    header.addEventListener('click', function() {
        alert('Hello, welcome to my personal website!');
    });

    // Click event for the visualizations button
    visualizationsBtn.addEventListener('click', function() {
        visualizationsBtn.style.backgroundColor = "lightblue";  // Change button color when clicked
        visualizationsBtn.textContent = "Loading...";  // Change button text when clicked
        setTimeout(() => {
            visualizationsBtn.textContent = "Go to Visualizations";  // Revert text back after delay
            visualizationsBtn.style.backgroundColor = "#4CAF50";  // Revert color back after delay
        }, 2000);  // Simulate loading for 2 seconds
    });
});
