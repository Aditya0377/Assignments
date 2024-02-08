const buttons = document.querySelectorAll("button");
const sections = document.querySelectorAll(".section");


function showSection(sectionId, buttonId) {
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
    buttons.forEach(button => button.classList.remove("active"));
    document.getElementById(buttonId).classList.add("active");
}


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const sectionId = `section${index + 1}`;
        showSection(sectionId, button.id);
    });
});


showSection("section1", "button1");