export function loadTable() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  main.append(createTableSection());
}

function createTableSection() {
  const container = document.createElement("div");
  container.classList.add("p-4");

  container.append(createHeadingSection(), tableSection);
  return container;
}

function createHeadingSection() {
  const container = document.createElement("div");
  container.classList.add("flex", "gap-6", "items-center");

  container.append(createTextSection(), createSearchBar(), createButtons());

  return container;
}

function createTextSection() {
  const container = document.createElement("div");

  const textHeading = document.createElement("h1");
  textHeading.textContent = "Residents";
  textHeading.classList.add("text-xl", "font-semibold");

  const subHeading = document.createElement("p");
  subHeading.textContent = "View all resident's information";

  container.append(textHeading, subHeading);
  return container;
}

function createSearchBar() {
  const container = document.createElement("div");
  container.classList.add("relative", "flex-auto");

  container.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-4 absolute top-3 left-2 text-gray-500"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>`;

  const label = document.createElement("label");
  label.classList.add("sr-only");

  const input = document.createElement("input");
  input.setAttribute("type", "search");
  input.setAttribute("placeholder", "Search a resident...");
  input.classList.add(
    "border",
    "border-slate-400",
    "border-1",
    "p-2",
    "w-full",
    "pl-8",
    "rounded-lg",
    "outline-none",
    "placeholder-gray-500"
  );

  container.append(label, input);
  return container;
}

function createButtons() {
  const container = document.createElement("div");
  container.classList.add("flex", "gap-2", "font-semibold");

  const exportButton = document.createElement("button");
  exportButton.classList.add(
    "bg-slate-300",
    "py-2",
    "px-4",
    "flex",
    "items-center",
    "gap-2",
    "rounded-md"
  );
  exportButton.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
            clip-rule="evenodd"
          />
          <path
            d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
          />
        </svg>`;
  exportButton.innerHTML += "Export";

  const addButton = document.createElement("button");
  addButton.classList.add(
    "bg-slate-700",
    "py-2",
    "px-4",
    "flex",
    "items-center",
    "gap-2",
    "rounded-md",
    "text-white"
  );

  addButton.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>`;
  addButton.innerHTML += "Add";

  container.append(exportButton, addButton);
  return container;
}

const tableSection = (() => {
  const sectionContainer = document.createElement("div");
  sectionContainer.classList.add("mt-4");

  const container = document.createElement("div");
  container.classList.add(
    "rounded-lg",
    "border-2",
    "border-slate-500",
    "overflow-hidden"
  );

  const table = document.createElement("table");
  table.classList.add("w-full", "text-center");

  function createThead() {
    const defaultHeading = [
      "Last Name",
      "First Name",
      "Suffix",
      "Age",
      "Sex",
      "Sector",
      "Civil Status",
      "Education Level",
      "Occupation",
      "Relihiyon",
      "Voter Status",
    ];

    const thead = document.createElement("thead");
    thead.classList.add("bg-slate-300", "border-b-2", "border-slate-500");
    const trElement = document.createElement("tr");

    defaultHeading.forEach((text) => {
      const thElement = document.createElement("th");
      thElement.classList.add("p-2", "font-semibold");
      thElement.setAttribute("scope", "col");
      thElement.textContent = text;
      trElement.appendChild(thElement);
    });

    thead.appendChild(trElement);
    table.appendChild(thead);
  }

  function createTableFooter() {
    const container = document.createElement("div");
    container.classList.add("flex", "justify-between", "mt-2");

    const dataSummary = document.createElement("p");
    dataSummary.textContent = `Showing 10 out of 19,000 residents`;
    dataSummary.classList.add("italic", "font-semibold", "text-sm");

    container.append(dataSummary, createNavButtons());

    sectionContainer.appendChild(container);
  }

  async function createTBody() {
    const { data } = await getData();

    const tbody = document.createElement("tbody");

    Object.values(data).forEach((person) => {
      const trElement = document.createElement("tr");

      Object.values(person).forEach((information) => {
        const tdElement = document.createElement("td");
        tdElement.classList.add("p-2");

        if (isNull(information)) {
          createNullIndicator(tdElement);
        } else {
          tdElement.textContent = information;
        }

        trElement.appendChild(tdElement);
      });
      tbody.appendChild(trElement);
    });

    table.appendChild(tbody);
  }

  async function getData() {
    try {
      const response = await fetch("http://localhost:9191/api/v1/residents/all");

      const apiResponse = await response.json();

      return { data: apiResponse.data, length: apiResponse.data.length };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { data: [], length: 0 } ;
    }
  }

  function isNull(information) {
    return information === "";
  }

  function createNullIndicator(tdElement) {
    tdElement.textContent = "n/a";
    tdElement.classList.add("text-gray-400", "italic", "cursor-not-allowed");
  }

  function createNavButtons() {
    const container = document.createElement("div");

    for (let index = 0; index < 3; index++) {
      const button = document.createElement("button");

      if (index == 0) {
        button.classList.add("py-1", "px-3", "text-white", "bg-slate-700");
      } else {
        button.classList.add("py-1", "px-3");
      }

      button.textContent = index;
      button.id = index;
      container.append(button);
    }

    return container;
  }

  sectionContainer.appendChild(container);

  createThead();
  createTBody();
  createTableFooter();

  container.appendChild(table);
  return sectionContainer;
})();
