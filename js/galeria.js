const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.lightbox__close');
let openedBy;

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('img');
    openedBy = item;
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    dialog.showModal();
    closeButton.focus();
  });
});

function closeLightbox() { dialog.close(); openedBy?.focus(); }
closeButton.addEventListener('click', closeLightbox);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeLightbox(); });
dialog.addEventListener('close', () => { dialogImage.src = ''; });
