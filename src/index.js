import {
  loadGraphContainer,
  loadByGenderGraph,
  loadByPurokGraph,
} from "./component/Graph/Graph.js";
import { loadTable } from "./component/Table/Table.js";
import { loadHeader } from "./component/Header/Header.js";

document.getElementById("view-table-btn").addEventListener("click", () => {
  loadTable();
});
document.getElementById("view-graph-btn").addEventListener("click", () => {
  loadGraphContainer();
  loadByPurokGraph();
  loadByGenderGraph();
});

loadTable();
loadHeader();
