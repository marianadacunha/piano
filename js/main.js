const whiteKey = [a, s, d, f, g, h, j];
const blackKey = [w, e, t, y, u];
const selectKeys = document.querySelectorAll('div.key');
const selectWhiteKeys = document.querySelectorAll('div.white');
const selectBlackKeys = document.querySelectorAll('div.black');

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
  }