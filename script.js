document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');

    // Play the audio automatically
    audio.play();

    // Create a toggle button for the music
    var musicToggle = document.createElement('button');
    musicToggle.textContent = "Mute Music";
    musicToggle.style.position = "fixed";
    musicToggle.style.bottom = "20px";
    musicToggle.style.right = "20px";
    musicToggle.style.padding = "10px";
    musicToggle.style.backgroundColor = "#ff7e5f";
    musicToggle.style.color = "#fff";
    musicToggle.style.border = "none";
    musicToggle.style.borderRadius = "5px";
    musicToggle.style.cursor = "pointer";
    document.body.appendChild(musicToggle);

    musicToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicToggle.textContent = "Mute Music";
        } else {
            audio.pause();
            musicToggle.textContent = "Play Music";
        }
    });

    // Scroll button to navigate to the gallery section
    document.querySelector('.scroll-button').addEventListener('click', () => {
        document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
    });

    // Flip photos on click (for both desktop and mobile)
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flip');
        });
    });
});
