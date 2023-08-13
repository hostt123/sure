document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-container img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    function showImage(index) {
        lightbox.innerHTML = `<img src="${galleryImages[index].src}" alt="${galleryImages[index].alt}">`;
        document.body.appendChild(lightbox);
        lightbox.style.display = "flex";
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", function() {
            showImage(index);
        });
    });

    lightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    function openLightbox() {
        lightbox.style.display = "flex";
        for (let i = 0; i < galleryImages.length; i++) {
            setTimeout(() => showImage(i), i * 1500); // Delay each image display
        }
    }

    const exploreButton = document.querySelector(".explore-button");
    exploreButton.addEventListener("click", openLightbox);
});
