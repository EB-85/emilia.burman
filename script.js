document.addEventListener("DOMContentLoaded", function () {
    // Ladataan header.html
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Nyt voidaan lisätä hampurilaisvalikon toiminnallisuus
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            menuToggle.addEventListener("click", function () {
                navLinks.classList.toggle("active");
            });

            // Sulkee valikon, kun käyttäjä klikkaa linkkiä
            document.addEventListener("click", function (event) {
                if (event.target.matches(".nav-links a")) {
                    document.querySelector(".nav-links").classList.remove("active");
                }
            });
        });
});
