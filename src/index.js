import { renderDashboard } from "./pages/dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  container.innerHTML = "";
  container.appendChild(renderDashboard());
});
