// main.js

import { loadGraphSection } from "./component/graph.js";
import { loadTable } from "./component/table.js";
import { loadHeader } from "./component/header.js";
import { loadSidebar } from "./component/sidebar.js";
import { loadForm } from "./component/forms/formloader.js";

const loadPage = (function () {
  loadTable();
  loadHeader();
  loadSidebar();
  attachListener();
})();

function attachListener() {
  document.getElementById("view-table-btn").addEventListener("click", () => {
    loadTable();
  });

  document.getElementById("view-graph-btn").addEventListener("click", () => {
    loadGraphSection();
  });

  document.getElementById("view-add-btn").addEventListener("click", () => {
    loadForm();
  });
}
