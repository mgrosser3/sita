const targetTextEl = document.getElementById("targetText");
const inputEl = document.getElementById("userInput");
const feedbackEl = document.getElementById("feedback");

const homeRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö"];

function getRandomSequence(length = 8) {
  let sequence = "";
  for (let i = 0; i < length; i++) {
    if (i === 4) sequence += " "; // fügt eine kleine Lücke ein
    sequence +=
      homeRowLetters[Math.floor(Math.random() * homeRowLetters.length)];
  }
  return sequence;
}

function generateNewText() {
  const newText = getRandomSequence();
  targetTextEl.textContent = newText;
  inputEl.value = "";
  feedbackEl.textContent = "";
  inputEl.focus();
}

inputEl.addEventListener("input", () => {
  const target = targetTextEl.textContent;
  const input = inputEl.value;

  if (input.length >= target.length) {
    if (input === target) {
      feedbackEl.textContent = "✅ Super gemacht!";
      feedbackEl.className = "feedback correct";
    } else {
      feedbackEl.textContent = "❌ Leider falsch – versuch’s nochmal!";
      feedbackEl.className = "feedback incorrect";
    }
  } else {
    feedbackEl.textContent = "";
  }
});

// Erste Aufgabe generieren
generateNewText();
