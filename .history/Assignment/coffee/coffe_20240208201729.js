// rating ractangle
const rectangles = document.querySelectorAll('.rectangle');
const submitButton = document.querySelector('.submit-button');

rectangles.forEach(rectangle => {
    rectangle.addEventListener('click', () => {
        const value = rectangle.dataset.value;

        // Deselect all if clicking again on a selected rectangle
        if (rectangle.dataset.selected === "true") {
            rectangles.forEach(r => r.dataset.selected = "false");
            return;
        }

        // Select clicked and previous squares recursively
        for (let i = 0; i <= value - 1; i++) {
            rectangles[i].dataset.selected = "true";
        }
    });
});

submitButton.addEventListener('click', () => {
    // Handle submitting the selected rating (e.g., send to server)
    const selectedValues = [];
    for (const rectangle of rectangles) {
        if (rectangle.dataset.selected === "true") {
            selectedValues.push(rectangle.dataset.value);
        }
    }
    console.log("Submitted ratings:", selectedValues);
});