export class TypingExercise {
  constructor({ container, text, hint, onComplete }) {
    this.container = container;
    this.text = text;
    this.hint = hint;
    this.onComplete = onComplete;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="target-text">${this.text}</div>
      <input type="text" class="user-input" autofocus/>
      <div class="hint">${this.hint}</div>
    `;
    const input = this.container.querySelector(".user-input");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value === this.text) {
        this.onComplete();
      }
    });
  }
}
