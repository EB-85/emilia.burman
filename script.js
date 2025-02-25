// Lataa header.html joka sivulle
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => console.error("Virhe ladattaessa headeria:", error));
});
