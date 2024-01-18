
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Esto proporciona un desplazamiento suave
    });
}

// Asigna el evento de clic al enlace de "INICIO"
document.querySelector('.navigation-link[href="#inicio"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTop();
});


function scrollToContent() {
    // Encuentra el elemento con la clase 'about-us' y desplázate hacia él
    document.querySelector('.about-us').scrollIntoView({ behavior: 'smooth' })
}

// Función para desplazarse suavemente a las secciones al hacer clic en los enlaces de la barra de navegación
document.querySelectorAll('.navigation-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Obtener referencia al botón
var boton = document.getElementById("miBoton");

// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
    // Redirigir a la página de galería
    window.location.href = "./pages/galeria.html";
});