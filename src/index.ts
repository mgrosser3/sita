import { renderDashboard } from "./pages/dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  if (container) {
    container.innerHTML = "";
    container.appendChild(renderDashboard());
  }
});
