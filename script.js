const images = document.querySelectorAll('.image-container');

function checkImages() {
    const triggerBottom = window.innerHeight * 0.85;

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        if(imgTop < triggerBottom) {
            img.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkImages);
window.addEventListener('load', checkImages);
