import Chart from "chart.js/auto";

import graphContainer from "./GraphContainer.html";

export function loadGraphSection() {
  loadGraphContainer();
  loadGraphByGender();
  loadGraphByPurok();
}

function loadGraphContainer() {
  const main = document.getElementById("main");
  main.innerHTML = graphContainer;
}

function loadGraphByGender() {
  const overallGraph = document.getElementById("by-gender-graph");
  new Chart(overallGraph, {
    type: "pie",
    data: {
      labels: ["Male", "Female", "Others"],
      datasets: [
        {
          label: "# of Votes",
          data: [20, 10, 5],
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

function loadGraphByPurok() {
  const overallGraph = document.getElementById("by-purok-graph");
  new Chart(overallGraph, {
    type: "bar",
    data: {
      labels: ["Purok 1", "Purok 2", "Purok 3"],
      datasets: [
        {
          label: "# of Votes",
          data: [20, 10, 5],
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
