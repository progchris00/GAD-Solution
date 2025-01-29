import Chart from "chart.js/auto";

export function loadGraphSection() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  const container = document.createElement("div");

  container.id = "graph-container";
  container.classList.add("flex", "items-center", "justify-center", "h-full");

  container.appendChild(createGraphContainer("graph-by-gender"));
  container.appendChild(createGraphContainer("graph-by-purok"));

  main.appendChild(container);

  createGraph("graph-by-gender", getGraphData("data-by-gender"));
  createGraph("graph-by-purok", getGraphData("data-by-purok"));
}

function createGraph(id, graphData) {
  const graph = document.getElementById(id);

  new Chart(graph, {
    type: graphData.type,
    data: {
      labels: graphData.labels,
      datasets: [
        {
          label: "# of Residents",
          data: graphData.data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      events: ["click"],
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getGraphData(id) {
  const graphData = {
    "data-by-purok": {
      type: "bar",
      labels: ["Purok 1", "Purok 2", "Purok 3"],
      data: [20, 10, 5],
    },
    "data-by-gender": {
      type: "pie",
      label: ["Male", "Female", "Others"],
      data: [20, 10, 5],
    },
  };

  return graphData[id];
}

function createGraphContainer(id) {
  const graphContainer = document.createElement("div");
  const graphCanvas = document.createElement("canvas");
  graphCanvas.id = id;

  graphContainer.appendChild(graphCanvas);

  return graphContainer;
}
