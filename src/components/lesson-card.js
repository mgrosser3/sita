import { createModalWindow } from "../components/modal-window.js";

export function createLessonCard(lesson) {
  const card = document.createElement("div");
  card.classList.add("lesson-card");
  card.dataset.lessonId = lesson.id;

  const title = document.createElement("h2");
  title.textContent = lesson.name;

  const description = document.createElement("p");
  description.textContent = lesson.description;

  card.addEventListener("click", () => {
    startLesson(lesson);
  });

  card.appendChild(title);
  card.appendChild(description);

  return card;
}

function startLesson(lesson) {
  const lessonDiv = document.createElement("div");
  lessonDiv.innerHTML = `
    <h2>${lesson.name}</h2>
    <p>${lesson.description}</p>
    <button id="close-btn">Beenden</button>
  `;

  createModalWindow(lessonDiv);
}
