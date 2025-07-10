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

/**
 * Creates a dashbaord element with all lesson cards.
 * @returns {HTMLElement} dashboard HTML element
 */
export function renderDashboard() {
  const dashboard = document.createElement("section");
  dashboard.classList.add("dashboard");

  const lessons = getAllLessons();
  lessons.forEach((lesson) => {
    const card = createLessonCard(lesson);
    dashboard.appendChild(card);
  });

  return dashboard;
}
