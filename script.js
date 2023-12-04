// Assuming you're using const or let to declare variables
const first = document.getElementById("first");
const panel = document.getElementsByClassName('content');

first.addEventListener("click", function() {
    // Toggle between hiding and showing the active panel
    if (panel.style.display="none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
});
// console.log("radhe radhe")