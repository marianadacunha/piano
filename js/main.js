const whiteKey = [a, s, d, f, g, h, j];
const blackKey = [w, e, t, y, u];

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
  }