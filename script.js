document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Määritä dynaaminen otsikko sivun mukaan
            let pageTitle = document.getElementById("page-title");
            let path = window.location.pathname;

            if (path.includes("index.html") || path === "/") {
                pageTitle.textContent = "Etusivu";
            } else if (path.includes("palvelut.html")) {
                pageTitle.textContent = "Palvelut";
            } else if (path.includes("yhteystiedot.html")) {
                pageTitle.textContent = "Yhteystiedot";
            }
        })
        .catch(error => console.error("Virhe ladattaessa headeria:", error));
});
