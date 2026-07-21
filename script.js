// Selecting Elements
const playButton = document.querySelector(
    ".player-controls img:nth-child(3)"
);

const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".volume-bar");

const songTitle = document.querySelector(".title");
const artist = document.querySelector(".para");
const albumImage = document.querySelector(".album-img");

let isPlaying = false;

// Play/Pause Button
playButton.addEventListener("click", () => {

    if (isPlaying) {
        playButton.src = "assets/player_icon3.png";
        console.log("Paused");
    } else {
        playButton.src = "assets/pause.png"; // Add pause icon
        console.log("Playing");
    }

    isPlaying = !isPlaying;
});

// Progress Bar
progressBar.addEventListener("input", () => {
    console.log("Song Progress :", progressBar.value + "%");
});

// Volume
volumeBar.addEventListener("input", () => {
    console.log("Volume :", volumeBar.value);
});