const button = document.getElementById("hover");
const leenaText = document.getElementById("Leena");

button.addEventListener("mouseover", () => {
    leenaText.style.textShadow = "0px 0px 15px #41f7c6";
});

button.addEventListener("mouseout", () => {
    leenaText.style.textShadow = "none";
});

function downloadResume() {
    // Create temporary link
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Leena_Ikhlef_Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}