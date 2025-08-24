/** Creates a input field with visible placeholder text.
    The placholder text colors red if the input differs
    from the exercise text. */
export function createTypingInputField(text, onUpdate) {
  const container = document.createElement("div");
  container.classList.add("typing-input-field");

  const placeholder = document.createElement("div");
  placeholder.classList.add("typing-placeholder");

  // Span elements are used to change the color
  // of the cahrs.
  const spans = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    placeholder.appendChild(span);
    return span;
  });

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("typing-input");
  input.setAttribute("maxlength", text.length);

  input.addEventListener("input", () => {
    const value = input.value.split("");
    let correctCount = 0;

    spans.forEach((span, index) => {
      const char = value[index];

      if (char == null) {
        span.classList.remove("correct", "incorrect");
      } else if (char === text[index]) {
        span.classList.add("correct");
        correctCount++;
      } else {
        span.classList.add("incorrect");
        span.classList.add("correct");
      }
    });

    // Call callback "onUpdate" with progress info
    if (onUpdate) {
      onUpdate({
        value,
        correctCount,
        total: text.length,
        finished: value.length === text.length,
      });
    }
  });

  container.appendChild(placeholder);
  container.appendChild(input);

  return container;
}
