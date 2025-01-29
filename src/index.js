import { loadGraphSection } from "./component/Graph.js";
import { loadTable } from "./component/Table/Table.js";
import { loadHeader } from "./component/Header.js";

const loadPage = (function () {
  loadTable();
  loadHeader();
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
