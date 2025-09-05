export function createModalWindow(content: HTMLElement, options = {}): void {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("button");
  closeButton.textContent = "x";
  closeButton.addEventListener("click", () => {
    modalWindow.remove();
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(content);
  modalWindow.appendChild(modalContent);

  document.body.appendChild(modalWindow);
}
