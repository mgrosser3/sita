import { I18n } from "./i18n.js";

async function init() {
  const i18n = new I18n(/* ... */);
  await i18n.load();

  const listEl = document.getElementById("lesson-list");

  const res = await fetch("../../data/lessons/metadata.json");
  const lessons = await res.json();

  lessons.forEach((lesson) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="lesson-view.html?lesson=${lesson.id}">${i18n.t(lesson.titleKey)}</a>`;
    listEl.appendChild(li);
  });
}

init();
