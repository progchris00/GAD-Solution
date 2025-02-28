export function loadTable() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  main.append(createTableSection());
  createMainTable();
}

function createTableSection() {
  const container = document.createElement("div");
  container.classList.add("p-4");
  container.id = "table-section";

  container.append(createHeadingSection());
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

  const exportImportButton = document.createElement("button");
  exportImportButton.classList.add(
    "bg-slate-300",
    "py-2",
    "px-4",
    "flex",
    "items-center",
    "gap-2",
    "rounded-md"
  );
  exportImportButton.innerHTML = `<svg
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
  exportImportButton.innerHTML += "Export / Import";

  const editColumnButton = document.createElement("button");
  editColumnButton.classList.add(
    "bg-slate-700",
    "py-2",
    "px-4",
    "flex",
    "items-center",
    "gap-2",
    "rounded-md",
    "text-white"
  );

  editColumnButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4"><path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" /><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" /></svg>`;
  editColumnButton.innerHTML += "Edit columns";
  editColumnButton.addEventListener("click", () => openEditColumnModal());
  createEditColumnModal();

  container.append(exportImportButton, editColumnButton);
  return container;
}

async function createEditColumnModal() {
  const { tableHeading } = await getTableHeading();
  const modal = document.createElement("dialog");
  modal.id = "edit-column-modal";
  modal.className = "p-6 w-1/3 shadow-lg rounded-md";

  modal.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Edit columns</h2>
    <div>
      <ul class="space-y-2">
        ${tableHeading
          .map(
            (heading) => `
            <li>
              <label for="${heading.id}" class="flex items-center gap-2">
                <input type="checkbox" data-id="${heading.id}" id="${heading.id}" name="columns" value="${heading.name}" ${heading.state === "ACTIVE" ? "checked" : ""}> ${heading.name} 
              </label>
            </li>
          `
          )
          .join("")}
      </ul>
    </div>
    <div class="flex gap-4 mt-4 justify-end">
      <button class="bg-slate-300 text-black rounded-md py-2 px-4 font-semibold" id="cancel-btn">Cancel</button>
      <button class="bg-slate-700 text-white rounded-md py-2 px-4 font-semibold" id="apply-btn">Apply</button>
    </div>
  `;

  document.body.appendChild(modal);
}

function openEditColumnModal() {
  document.getElementById("edit-column-modal").showModal();
}

document.addEventListener("click", (event) => {
  if (event.target.id === "cancel-btn") {
    document.getElementById("edit-column-modal").close();
  }
});

async function getTableHeading() {
  try {
    const response = await fetch(
      "http://localhost:9191/api/v1/table-heading/all"
    );
    const apiReponse = await response.json();
    return { tableHeading: apiReponse.data };
  } catch (error) {
    return { tableHeading: [] };
  }
}

function createMainTable() {
  function createTableStructure() {
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

    const thead = document.createElement("thead");
    thead.classList.add("bg-slate-300", "border-b-2", "border-slate-500");

    const tbody = document.createElement("tbody");

    table.append(thead, tbody);
    container.append(table);
    sectionContainer.append(container);

    document.getElementById("table-section").append(sectionContainer);
  }

  async function createThead() {
    const theadElement = document.querySelector("thead");
    theadElement.innerHTML = "";

    const { tableHeading } = await getTableHeading();

    const trElement = document.createElement("tr");

    tableHeading.forEach((heading) => {
      if (heading.state === "ACTIVE") {
        const thElement = document.createElement("th");
        thElement.classList.add("p-2", "font-semibold");
        thElement.setAttribute("scope", "col");
        thElement.textContent = heading.name;
        trElement.appendChild(thElement);
      }
    });

    theadElement.appendChild(trElement);
  }

  async function createTBody() {
    const tBody = document.querySelector("tbody");
    const { data } = await getData();

    Object.values(data).forEach((person) => {
      const trElement = document.createElement("tr");
      trElement.innerHTML = `
        <td class="p-2"> ${person.lastName} </td>
        <td class="p-2"> ${person.firstName} </td>
        ${isNull(person.suffix) ? person.suffix : createNullIndicator()}
        <td class="p-2"> ${person.age} </td>
        <td class="p-2"> ${person.sex} </td>
        <td class="p-2"> ${person.sector} </td>
        <td class="p-2"> ${person.civilStatus} </td>
        <td class="p-2"> ${person.educationalLevel.name} </td>
        <td class="p-2"> ${person.occupation.name} </td>
        <td class="p-2"> ${person.religion.name} </td>
        <td class="p-2"> ${person.voterStatus} </td>
      `;
      tBody.appendChild(trElement);
    });
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

  async function getData() {
    try {
      const response = await fetch(
        "http://localhost:9191/api/v1/residents/all"
      );

      const apiResponse = await response.json();

      return { data: apiResponse.data, length: apiResponse.data.length };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { data: [], length: 0 };
    }
  }

  function isNull(information) {
    return information === null;
  }

  function createNullIndicator() {
    return `<td class="text-gray-400 italic cursor-not-allowed">n/a</td>`;
  }

  document.addEventListener("click", async (event) => {
    if (event.target.id === "apply-btn") {
      const checkboxes = document.querySelectorAll('input[name="columns"]');
      const checkboxStates = [];

      checkboxes.forEach((checkbox) => {
        checkboxStates.push({
          id: checkbox.getAttribute("data-id"),
          state: checkbox.checked ? "ACTIVE" : "INACTIVE",
        });
      });

      try {
        const response = await fetch(
          "http://localhost:9191/api/v1/table-heading/update",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(checkboxStates),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
      } catch (error) {
        console.error("Error:", error);
      }

      document.getElementById("edit-column-modal").close();
      await createThead();
    }
  });

  // createTableFooter();

  createTableStructure();
  createThead();
  createTBody();
}
