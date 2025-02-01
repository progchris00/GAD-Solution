import { loadGraphSection } from "./component/Graph.js";
import { loadTable } from "./component/Table.js";
import { loadHeader } from "./component/Header.js";
import { loadSidebar } from "./component/Sidebar.js";

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
}
