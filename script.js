function alternarImagen(id) {
  const img = document.getElementById(id);
  const original = img.getAttribute("data-original");
  const alt = img.getAttribute("data-alt");

  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = img.src.endsWith(alt) ? original : alt;
    img.classList.remove("fade-out");
    img.classList.add("fade-in");

    setTimeout(() => {
      img.classList.remove("fade-in");
    }, 500);
  }, 300);
}

function alternarInfo(contenedor, evento) {
  if (window.innerWidth <= 768) {
    if (evento.target.closest('.cambiar-btn')) return;
    contenedor.classList.toggle("mostrar-info");
  }
}

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});
