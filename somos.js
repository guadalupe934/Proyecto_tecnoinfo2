document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".images img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("¡Explorando la belleza de los océanos!");
        });
    });
});
