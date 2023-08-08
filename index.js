
document.addEventListener("DOMContentLoaded", function() {
  const imageContainers = document.querySelectorAll(".image-container");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  imageContainers.forEach((container) => {
    container.addEventListener("click", function() {
      const image = this.querySelector("img");
      const clone = image.cloneNode(true);
      lightbox.innerHTML = "";
      lightbox.appendChild(clone);
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", function(e) {
    if (e.target !== e.currentTarget) return;
    this.style.display = "none";
  });
});