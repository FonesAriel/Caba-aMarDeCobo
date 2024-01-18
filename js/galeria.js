// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todas las imágenes de la galería
    var galleryImages = document.querySelectorAll(".gallery-image");

    // Itera sobre cada imagen
    galleryImages.forEach(function (image) {
        // Agrega un evento de clic a cada imagen
        image.addEventListener("click", function () {
            // Crea un contenedor para la vista previa
            var previewContainer = document.createElement("div");
            previewContainer.classList.add("image-preview-container");

            // Crea la imagen de la vista previa
            var previewImage = document.createElement("img");
            previewImage.src = this.src;
            previewImage.alt = this.alt;

            // Agrega la imagen de la vista previa al contenedor
            previewContainer.appendChild(previewImage);

            // Crea un botón para cerrar la vista previa
            var closeButton = document.createElement("button");
            closeButton.innerText = "Cerrar";
            closeButton.addEventListener("click", function () {
                // Elimina el contenedor de la vista previa al hacer clic en el botón
                previewContainer.remove();
            });

            // Agrega el botón de cerrar al contenedor de la vista previa
            previewContainer.appendChild(closeButton);

            // Agrega el contenedor de la vista previa al cuerpo del documento
            document.body.appendChild(previewContainer);
        });
    });
});