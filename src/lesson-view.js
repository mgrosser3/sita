import { I18n } from "./i18n.js";
import { LessonController } from "./controllers/lesson-controller.js";
import { TypingExercise } from "./components/typing-exercise.js";

const lang = navigator.language.startsWith("de") ? "de" : "en";
const i18n = new I18n(lang);
await i18n.load();

// URLSearchParams extracts params from URL, e.g. ?lesson=lesson-01
const params = new URLSearchParams(window.location.search);
const lessonId = params.get("lesson") || "lesson-01";

const controller = new LessonController({
  lessonId: `${lessonId}.${lang}`, // load lesson-01.de.json
  dataPath: "../../data/lessons/",
  rootSelector: "#exercise-root",
});

// load lesson titel and description
document.getElementById("lesson-title").textContent = controller.title;
//document.getElementById("page-title").textContent =
//  "SiTA · " + controller.title;
document.getElementById("lesson-description").textContent =
  controller.description;

// render first exercise
controller.onExerciseChange((exercise) => {
  // remove previous exercise
  const root = document.querySelector(controller.rootSelector);
  root.innerHTML = "";
  // render TypingExercise component
  new TypingExercise({
    container: root,
    text: exercise.text,
    hint: exercise.hint,
    onComplete: () => controller.nextExercise(),
  });
});

// Next button
document.getElementById("next-btn").textContent = i18n.t("button.next");
document
  .getElementById("next-btn")
  .addEventListener("click", () => controller.nextExercise());

// Start the lesson
controller.loadLesson();
