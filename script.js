document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Hampurilaisvalikon toiminnallisuus
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            menuToggle.addEventListener("click", function () {
                navLinks.classList.toggle("active");
            });
        });
});


