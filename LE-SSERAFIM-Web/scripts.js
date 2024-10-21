function showContent(contentId) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Mostrar el contenido seleccionado
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Mostrar el contenido original al cargar la página
document.getElementById('originalContent').style.display = 'block';

function scrollIcons(direction) {
    const container = document.querySelector('.icon-container');
    const scrollAmount = container.clientWidth / 2; // Desplazar la mitad del ancho del contenedor

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}