document.addEventListener("DOMContentLoaded", function () {
    // Ladataan header.html
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Haetaan juuri ladatut elementit
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            if (menuToggle && navLinks) {
                menuToggle.addEventListener("click", function () {
                    navLinks.classList.toggle("active");
                });
            }
        });
});

