import { createLessonCard } from "../components/lesson-card.js";
import { getAllLessons } from "../config/lessons.js";
import type { Lesson } from "../models/lesson.js";

function loadStyle(href: string): void {
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
export function renderDashboard(): HTMLElement {
  const dashboard = document.createElement("section");
  dashboard.classList.add("dashboard");

  const lessons = getAllLessons();
  lessons.forEach((lesson) => {
    const card = createLessonCard(lesson);
    dashboard.appendChild(card);
  });

  return dashboard;
}
