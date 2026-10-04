function showMessage() {
    document.getElementById("message").innerHTML =
        "✨ Hello ! Welcome to my personal profile!";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function showContact() {
    var contact = document.getElementById("contactInfo");

    if (contact.style.display === "none" || contact.style.display === "") {
        contact.style.display = "block";
    } else {
        contact.style.display = "none";
    }
}