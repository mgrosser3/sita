import { createLessonCard } from "../components/lesson-card.js";
import { getAllLessons } from "../config/lessons.js";

function loadStyle(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

loadStyle("./styles/dashboard.css");
loadStyle("./styles/modal-window.css");

// TODO: remove side effect -> is there a functional way?
export function renderDashboard(container) {
  container.innerHTML = "";
  const lessons = getAllLessons();
  lessons.forEach((lesson) => {
    const card = createLessonCard(lesson);
    container.appendChild(card);
  });
}
