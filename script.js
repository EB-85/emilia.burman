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

 // Formspree-lomakkeen käsittely
    const form = document.getElementById("contact-form");

    if (form) { // Tarkistetaan, että lomake löytyy
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Estetään oletustoiminto (uudelleenlataus)

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => {
                if (response.ok) {
                    form.innerHTML = "<p>Kiitos! Viestisi on lähetetty onnistuneesti. Vastaan viestiisi mahdollisimman pian!</p>";
                } else {
                    form.innerHTML = "<p>Jokin meni pieleen. Yritä uudelleen.</p>";
                }
            }).catch(error => {
                form.innerHTML = "<p>Jokin meni pieleen. Yritä uudelleen.</p>";
            });
        });
    }
});
