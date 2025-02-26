document.addEventListener("DOMContentLoaded", function () {
    // Ladataan header.html
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Lisätään valikkotoiminnallisuus delegoituna, jotta se toimii myös etusivulla
            document.body.addEventListener("click", function (event) {
                const menuToggle = document.querySelector(".menu-toggle");
                const navLinks = document.querySelector(".nav-links");

                if (menuToggle && navLinks && event.target === menuToggle) {
                    navLinks.classList.toggle("active");
                }
            });
        });
});

