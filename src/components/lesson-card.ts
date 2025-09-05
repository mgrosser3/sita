import { createModalWindow } from "../components/modal-window.js";
import { createTypingExcercise } from "./typing-exercise.js";
import type { Lesson } from "../models/lesson.js";

export function createLessonCard(lesson: Lesson): HTMLElement {
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

function startLesson(lesson: Lesson): void {
  createModalWindow(createTypingExcercise("Das ist nur ein Test"));
}
