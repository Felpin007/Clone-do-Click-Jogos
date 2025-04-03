/**
 * Handles the pagination logic for the featured games section.
 * Updates the active dot indicator and enables/disables
 * previous/next buttons based on the current index.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all pagination dots
    const dots = document.querySelectorAll('.featured-pagination .dot');
    // Select previous and next buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Initialize the current index and total number of dots
    let currentIndex = 0;
    const totalDots = dots.length;

    /**
     * Updates the visual state of the pagination dots and buttons.
     * Adds 'active' class to the current dot and removes it from others.
     * Disables prev/next buttons when at the beginning/end of the slides.
     */
    function updateActiveDot() {
        // Loop through each dot
        dots.forEach((dot, index) => {
            // Add 'active' class if it's the current index, otherwise remove it
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        // Disable the 'previous' button if at the first slide (index 0)
        prevBtn.disabled = currentIndex === 0;
        // Disable the 'next' button if at the last slide
        nextBtn.disabled = currentIndex === totalDots - 1;
    }

    // Add click event listeners to each dot
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            // Get the index from the dot's data attribute
            currentIndex = parseInt(dot.getAttribute('data-index'));
            // Update the active dot display
            updateActiveDot();
            // TODO: In a real scenario, load the corresponding featured games here
            // console.log(`Load featured games for index: ${currentIndex}`);
        });
    });

    // Add click event listener to the 'previous' button
    prevBtn.addEventListener('click', () => {
        // Check if not already at the first slide
        if (currentIndex > 0) {
            // Decrement the index
            currentIndex--;
            // Update the active dot display
            updateActiveDot();
            // TODO: Load the previous set of games
            // console.log(`Load previous featured games, new index: ${currentIndex}`);
        }
    });

    // Add click event listener to the 'next' button
    nextBtn.addEventListener('click', () => {
        // Check if not already at the last slide
        if (currentIndex < totalDots - 1) {
            // Increment the index
            currentIndex++;
            // Update the active dot display
            updateActiveDot();
            // TODO: Load the next set of games
            // console.log(`Load next featured games, new index: ${currentIndex}`);
        }
    });

    // Set the initial state of the pagination on page load
    updateActiveDot();
});
