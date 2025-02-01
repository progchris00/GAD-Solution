import dropdownLogo from "../assets/images/dropdown-icon.png";

export function loadSidebar() {
  const sidebarContainer = document.getElementById("aside");
  sidebarContainer.appendChild(createSidebar());
  sidebarContainer.appendChild(createMenuSection());
}

function createSidebar() {
  const container = document.createElement("div");
  container.classList.add("flex", "items-center", "justify-between", "p-2");

  const titleContainer = document.createElement("div");
  const title = document.createElement("p");
  title.classList.add("text-xl", "font-semibold");
  title.textContent = "Filters";
  titleContainer.appendChild(title);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("flex", "justify-center", "items-center", "gap-4", "text-md");

  const clearFilterButton = document.createElement("button");
  clearFilterButton.id = "clearFilter";
  const clearFilterText = document.createElement("p");
  clearFilterText.textContent = "Clear All";
  clearFilterButton.appendChild(clearFilterText);

  const dotSeparator = document.createElement("div");
  dotSeparator.classList.add("flex", "w-2", "h-2", "rounded-full", "bg-gray-200");

  const saveFilterButton = document.createElement("button");
  saveFilterButton.id = "saveFilter";
  const saveFilterText = document.createElement("p");
  saveFilterText.classList.add("text-blue-700");
  saveFilterText.textContent = "Save Filters";
  saveFilterButton.appendChild(saveFilterText);

  buttonsContainer.appendChild(clearFilterButton);
  buttonsContainer.appendChild(dotSeparator);
  buttonsContainer.appendChild(saveFilterButton);

  container.appendChild(titleContainer);
  container.appendChild(buttonsContainer);

  return container;
}

const selectedChoices = {};

function createMenuSection() {
  const container = document.createElement("div");
  container.classList.add("flex", "flex-col", "overflow-y-auto", "max-h-screen");

  container.appendChild(createSection("lupa", "Impormasyon Tungkol sa Lupa", [
      { 
        name: "Pag-aari ng Lupa", 
        choices: ["De Titulo", "OHA/CELA", "Rights", "Naninirahan (Tenant)", "Lupa ng Gobyerno", "Wala"] 
      },
      { name: "Uri ng Paninirahan", 
        choices: ["May-ari", "Nakikitira", "Nangungupahan"] 
      },
      { name: "Uri ng Bahay", 
        choices: ["Kongkreto", "Gawa sa Kahoy", "Kongkreto at Kahoy"] 
      },
      { name: "Bilang ng Palapag ng Bahay", 
        choices: ["Isang Palapag", "Dalawang Palapag", "Tatlong Palapag", "Higit pa sa Tatlong Palapag"] 
      },
      { name: "Pinagkukuhanan ng Enerhiya", 
        choices: ["MERALCO", "Solar Panel", "De Baterya", "Gumagamit ng Kerosene"] 
      },
  ]));

  container.appendChild(createSection("tubig", "Impormasyon Tungkol sa Tubig System", [
      { name: "Inuming Tubig", 
        choices: ["De Gripo", "Mineral Water", "Poso"] 
      },
      { name: "Uri ng Palikuran", 
        choices: ["De Buhos", "De Flush", "Wala"] 
      },
      { name: "Lugar ng Palikuran", 
        choices: ["Nasa Loob ng Bahay", "Nasa Labas ng Bahay", "Pansarili", "May nakikigamit", "Wala"] 
      },
      { name: "Poso Negro", 
        choices: ["Meron", "Wala"] 
      },
  ]));

  container.appendChild(createSection("impormasyon", "Ibang Impormasyon", [
      { name: "Uri ng Alagang Hayop", 
        choices: ["Aso", "Pusa", "Manok"] 
      },
      { name: "Uri ng Transportasyon na Pag-Aari Ninyo", 
        choices: ["Motorcycle", "Car", "Tricycle", "Jeep", "Pick up/SUV"] 
      },
  ]));

  return container;
}
function createSection(sectionId, sectionTitle, options) {
  const section = document.createElement("div");
  section.classList.add("border-gray-200", "border-t-2", "border-b-2");

  const button = document.createElement("button");
  button.classList.add("w-full", "p-2");
  button.addEventListener("click", () => toggleDropdown(`${sectionId}-content`));

  const buttonContent = document.createElement("div");
  buttonContent.classList.add("flex", "flex-row", "items-center", "justify-between");

  const icon = document.createElement("div");
  icon.classList.add("flex", "items-center", "justify-between", "gap-3");

  if (sectionId === "lupa") {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>`;
  } else if (sectionId === "tubig") {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
      <path d="M12 2l-0.343 0.343c-2.209 2.209-5.657 5.657-5.657 8.485 0 2.828 2.209 5.657 5.657 5.657s5.657-2.829 5.657-5.657c0-2.828-3.448-6.276-5.657-8.485l-0.343-0.343zM12 16c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4z"/>
    </svg>`;
  } else {
    icon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
    </svg>`;
  }

  const title = document.createElement("p");
  title.classList.add("text-start", "text-md");
  title.textContent = sectionTitle;

  icon.appendChild(title);
  buttonContent.appendChild(icon);

  const dropdownIcon = document.createElement("img");
  dropdownIcon.src = dropdownLogo; // Use the imported image
  dropdownIcon.classList.add("w-10");
  dropdownIcon.alt = "Dropdown Icon";
  buttonContent.appendChild(dropdownIcon);

  button.appendChild(buttonContent);
  section.appendChild(button);

  const content = document.createElement("div");
  content.id = `${sectionId}-content`;
  content.classList.add("hidden", "p-4");

  options.forEach((option) => {
      const optionContainer = document.createElement("div");
      optionContainer.classList.add("flex", "flex-col", "items-start");

      const optionButton = document.createElement("button");
      optionButton.classList.add("flex", "flex-row", "items-center");
      optionButton.id = `${option.name.replace(/\s+/g, '').toLowerCase()}ModalBtn`;

      const optionText = document.createElement("p");
      optionText.textContent = option.name;

      const optionIcon = document.createElement("img");
      optionIcon.src = dropdownLogo; // Use the imported image
      optionIcon.classList.add("w-6");
      optionIcon.alt = "Dropdown Icon";

      optionButton.appendChild(optionText);
      optionButton.appendChild(optionIcon);

      const selectedValues = document.createElement("div");
      selectedValues.id = `selected${option.name.replace(/\s+/g, '')}Values`;
      selectedValues.classList.add("hidden");

      const selectedList = document.createElement("div");
      selectedList.id = `selected${option.name.replace(/\s+/g, '')}List`;
      selectedList.classList.add("flex", "flex-wrap");

      selectedValues.appendChild(selectedList);
      optionContainer.appendChild(optionButton);
      optionContainer.appendChild(selectedValues);
      content.appendChild(optionContainer);

      optionButton.addEventListener("click", () => openModal(option.choices, optionButton, option.name, selectedList));
  });

  section.appendChild(content);
  return section;
}

function toggleDropdown(id) {
  const content = document.getElementById(id);
  if (content) {
      content.classList.toggle("hidden");
  }
}

function openModal(choices, button, optionName, selectedList) {
  const overlay = document.createElement("div");
  overlay.classList.add(
      "fixed",
      "inset-0",
      "bg-black",
      "bg-opacity-50",
      "flex",
      "justify-center",
      "items-center",
      "z-50"
  );

  const modal = document.createElement("div");
  modal.classList.add(
      "bg-white",
      "rounded-md",
      "shadow-lg",
      "p-6",
      "w-1/3",
      "max-w-md",
      "relative"
  );

  const title = document.createElement("h2");
  title.classList.add("text-xl", "font-bold", "mb-4");
  title.textContent = "Select Options";

  const list = document.createElement("ul");
  list.classList.add("space-y-2");
  choices.forEach((choice) => {
      const listItem = document.createElement("li");
      const label = document.createElement("label");
      label.classList.add("flex", "items-center", "gap-2");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = choice;
      checkbox.classList.add("modal-option");

      if (selectedChoices[optionName]?.includes(choice)) {
          checkbox.checked = true;
      }

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(choice));
      listItem.appendChild(label);
      list.appendChild(listItem);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "gap-4", "mt-4", "justify-end");

  const applyButton = document.createElement("button");
  applyButton.classList.add(
      "bg-blue-600",
      "text-white",
      "rounded-md",
      "py-2",
      "px-4",
      "font-semibold"
  );
  applyButton.textContent = "Apply";
  applyButton.addEventListener("click", () => {
      const selectedOptions = Array.from(
          document.querySelectorAll(".modal-option:checked")
      ).map((option) => option.value);

      selectedChoices[optionName] = selectedOptions;

      updateSelectedList(selectedList, selectedOptions, optionName);

      document.body.removeChild(overlay);
  });

  const cancelButton = document.createElement("button");
  cancelButton.classList.add(
      "bg-gray-300",
      "text-black",
      "rounded-md",
      "py-2",
      "px-4",
      "font-semibold"
  );
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
  });

  const closeButton = document.createElement("button");
  closeButton.classList.add(
      "absolute",
      "top-2",
      "right-2",
      "text-gray-500",
      "hover:text-black"
  );
  closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>`;
  closeButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
  });

  buttonContainer.appendChild(applyButton);
  buttonContainer.appendChild(cancelButton);

  modal.appendChild(closeButton);
  modal.appendChild(title);
  modal.appendChild(list);
  modal.appendChild(buttonContainer);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

function updateSelectedList(selectedList, selectedOptions, optionName) {
  selectedList.innerHTML = '';

  selectedOptions.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add(
          "bg-gray-200",
          "p-2",
          "rounded",
          "flex",
          "items-center",
          "mr-2",
          "mt-2"
      );
      optionDiv.textContent = option;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "x";
      removeBtn.classList.add("ml-2", "text-black-500", "cursor-pointer");
      removeBtn.addEventListener("click", () => {
          selectedChoices[optionName] = selectedChoices[optionName].filter(
              (item) => item !== option
          );

          optionDiv.remove();

          if (selectedChoices[optionName].length === 0) {
              const selectedValuesContainer = document.getElementById(`selected${optionName.replace(/\s+/g, '')}Values`);
              if (selectedValuesContainer) {
                  selectedValuesContainer.classList.add("hidden");
              }
          }
      });

      optionDiv.appendChild(removeBtn);
      selectedList.appendChild(optionDiv);
  });

  if (selectedOptions.length > 0) {
      const selectedValuesContainer = document.getElementById(`selected${optionName.replace(/\s+/g, '')}Values`);
      if (selectedValuesContainer) {
          selectedValuesContainer.classList.remove("hidden");
      }
  }
}