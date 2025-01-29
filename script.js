// Seleccionar elementos
const galleryItems = document.querySelectorAll('.gallery-item');
const overlay = document.querySelector('.overlay');
const fullImage = document.querySelector('.full-image');
const closeBtn = document.querySelector('.close-btn');

// Abrir la imagen en pantalla completa
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageUrl = item.style.backgroundImage
            .replace('url("', '')
            .replace('")', '');
        fullImage.src = imageUrl;
        overlay.classList.add('active');
    });
});

// Cerrar la imagen en pantalla completa
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Cerrar al hacer clic fuera de la imagen
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});