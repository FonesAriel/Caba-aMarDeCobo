document.addEventListener("DOMContentLoaded", function () {
    var galleryImages = document.querySelectorAll(".gallery-image");

    // Función para crear y mostrar la vista previa
    function showPreview(imageSrc, imageAlt) {
        var previewContainer = document.createElement("div");
        previewContainer.classList.add("image-preview-container");

        var previewImage = document.createElement("img");
        previewImage.src = imageSrc;
        previewImage.alt = imageAlt;

        // Agrega un evento clic para cerrar la vista previa al tocar la imagen
        previewImage.addEventListener("click", function () {
            previewContainer.remove();
        });

        previewContainer.appendChild(previewImage);

        // Agrega el contenedor de la vista previa al cuerpo del documento
        document.body.appendChild(previewContainer);
    }

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Si hay una vista previa abierta, ciérrala
            var existingPreview = document.querySelector(".image-preview-container");
            if (existingPreview) {
                existingPreview.remove();
            } else {
                // Si no hay una vista previa, crea y muestra una
                showPreview(this.src, this.alt);
            }
        });
    });
});
