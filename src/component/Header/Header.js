import logoImg from "../../assets/images/logo.png";

export function loadHeader() {
  const headerContainer = document.getElementById("header");
  headerContainer.appendChild(createHeadingSection());
  headerContainer.appendChild(createDropdownSection());
}

function createHeadingSection() {
  const container = document.createElement("div");
  container.classList.add("flex", "items-center", "gap-2");

  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.classList.add("size-8");

  const title = document.createElement("h1");
  title.classList.add("text-xl", "font-bold");
  title.textContent = "Gender and Development Dashboard";

  container.appendChild(logo);
  container.appendChild(title);

  return container;
}

function createDropdownSection() {
  const container = document.createElement("div");
  container.classList.add("flex", "gap-12");

  container.appendChild(createDropdowns());

  container.appendChild(createFilterButton());

  return container;
}

function createDropdowns() {
  const options = [
    {
      name: "Purok",
      choices: ["1", "2", "3", "4", "5", "6"],
    },
    {
      name: "Age range",
      choices: ["17 below", "18-27", "28-39", "40-49", "50-63", "64 above"],
    },
    {
      name: "Sector",
      choices: ["PWD", "Senior", "Solo Parent", "Iba Pa"],
    },
    {
      name: "Voter status",
      choices: ["Registered", "Non-registered"],
    },
    {
      name: "Civil status",
      choices: ["Single", "Married", "Separated", "Widowed", "Divorced"],
    },
  ];
  const container = document.createElement("div");

  container.classList.add("flex", "gap-6");

  options.forEach((option) => {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("flex", "flex-col");

    const label = document.createElement("p");
    label.classList.add("font-semibold");
    label.textContent = option.name;

    const menu = document.createElement("button");
    menu.classList.add(
      "border",
      "border-gray-300",
      "rounded-md",
      "p-1",
      "flex",
      "items-center",
      "gap-2",
    );
    menu.textContent = `Select ${option.name}`;
    menu.innerHTML += `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>`;
    menu.addEventListener("click", () => openModal(option.choices, menu));

    optionContainer.appendChild(label);
    optionContainer.appendChild(menu);
    container.appendChild(optionContainer);
  });

  return container;
}

function createFilterButton() {
  const button = document.createElement("button");
  button.classList.add(
    "bg-gray-700",
    "text-white",
    "rounded-md",
    "py-2",
    "px-4",
    "font-semibold",
    "flex",
    "items-center",
    "gap-2",
    "self-end",
  );

  button.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-3"
            >
              <path
                fill-rule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                clip-rule="evenodd"
              />
            </svg>`;
  button.innerHTML += "Apply filters";

  return button;
}

function openModal(choices, button) {
  const overlay = document.createElement("div");
  overlay.classList.add(
    "fixed",
    "inset-0",
    "bg-black",
    "bg-opacity-50",
    "flex",
    "justify-center",
    "items-center",
    "z-50",
  );

  const modal = document.createElement("div");
  modal.classList.add(
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "p-6",
    "w-1/3",
    "max-w-md",
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

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(choice));
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  const applyButton = document.createElement("button");
  applyButton.classList.add(
    "bg-blue-600",
    "text-white",
    "rounded-md",
    "py-2",
    "px-4",
    "font-semibold",
    "mt-4",
    "w-full",
  );
  applyButton.textContent = "Apply";
  applyButton.addEventListener("click", () => {
    const selectedOptions = Array.from(
      document.querySelectorAll(".modal-option:checked"),
    ).map((option) => option.value);

    button.textContent = selectedOptions.length
      ? selectedOptions.join(", ")
      : "Choose";

    document.body.removeChild(overlay);
  });

  const closeButton = document.createElement("button");
  closeButton.classList.add(
    "absolute",
    "top-2",
    "right-2",
    "text-gray-500",
    "hover:text-black",
  );
  closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>`;
  closeButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  modal.appendChild(closeButton);
  modal.appendChild(title);
  modal.appendChild(list);
  modal.appendChild(applyButton);

  overlay.appendChild(modal);

  document.body.appendChild(overlay);
}
