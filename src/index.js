import { renderDashboard } from "./pages/dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Test");
  const container = document.getElementById("app");
  renderDashboard(container);
});
