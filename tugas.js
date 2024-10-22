const panels = document.querySelectorAll(".panel");
let currentAudio = null;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    playSound(panel);
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function playSound(panel) {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = panel.querySelector("audio");
  if (audio) {
    currentAudio = audio;
    currentAudio.play();
  }
}