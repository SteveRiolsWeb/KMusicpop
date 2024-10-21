function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}


const musicBtn = document.getElementById('music-btn');
const videoBtn = document.getElementById('video-btn');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const video = document.getElementById('video');

let isPlaying = false;  // Variable para almacenar el estado de reproducción

musicBtn.addEventListener('click', () => {
    // Iluminar el botón de música y desactivar el botón de video
    musicBtn.classList.add('active');
    videoBtn.classList.remove('active');

    // Pausar el video y ocultarlo
    video.pause();
    video.style.display = 'none';

    // Sincronizar el audio con el tiempo del video y reproducir el audio
    audio.currentTime = video.currentTime;
    image.style.display = 'block';
    audio.play();
    isPlaying = true;
});

videoBtn.addEventListener('click', () => {
    // Iluminar el botón de video y desactivar el botón de música
    videoBtn.classList.add('active');
    musicBtn.classList.remove('active');

    // Pausar el audio y ocultar la imagen
    audio.pause();
    image.style.display = 'none';

    // Sincronizar el video con el tiempo del audio y reproducir el video
    video.currentTime = audio.currentTime;
    video.style.display = 'block';
    if (isPlaying) {
        video.play();
    }
});