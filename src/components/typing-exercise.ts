import { createTypingInputField } from "./typing-input-field.js";
import type { TypingProcess } from "../models/typing-progress.js";

export function createTypingExcercise(text: string): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("typing-exercise");

  const title = document.createElement("h2");
  title.textContent = "Typing Exercise";

  // Input Field
  const inputField = createTypingInputField(text, (progress: TypingProcess) => {
    if (progress.finished) {
      console.log("Ecercise completed!", progress);
    }
  });

  container.appendChild(title);
  container.appendChild(inputField);

  return container;
}
