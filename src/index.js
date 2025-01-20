import {
  loadGraphContainer,
  loadByGenderGraph,
  loadByPurokGraph,
} from "./graph/Graph.js";
import { loadTable } from "./component/Table.js";

document.getElementById("view-table-btn").addEventListener("click", () => {
  loadTable();
});
document.getElementById("view-graph-btn").addEventListener("click", () => {
  loadGraphContainer();
  loadByPurokGraph();
  loadByGenderGraph();
});

loadTable();
