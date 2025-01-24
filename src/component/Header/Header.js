import logoImg from "../../assets/images/logo.png";

export function loadHeader() {
  const headerContainer = document.getElementById("header");
  headerContainer.appendChild(createHeading());
  headerContainer.appendChild(createDropdowns());
}

function createHeading() {
  const container = document.createElement("div");
  container.classList = "flex items-center gap-2";

  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.classList.add("size-8");

  const title = document.createElement("h1");
  title.classList = "text-xl font-bold";
  title.textContent = "Gender and Development Dashboard";

  container.appendChild(logo);
  container.appendChild(title);

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
      choices: [],
    },
    {
      name: "Voter status",
      choices: [],
    },
    {
      name: "Civil status",
      choices: [],
    },
  ];

  const container = document.createElement("div");
  container.classList.add("flex", "justify-between");

  options.forEach((option) => {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("flex", "items-center", "gap-2");

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
    menu.textContent = "Choose";
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
    menu.addEventListener("click", () => openModal(option.choices));

    optionContainer.appendChild(label);
    optionContainer.appendChild(menu);
    container.appendChild(optionContainer);
  });

  const applyContainer = document.createElement("div");
  applyContainer.classList.add("self-end");
  const applyButton = document.createElement("button");
  applyButton.classList.add(
    "bg-gray-700",
    "text-white",
    "rounded-md",
    "py-2",
    "px-4",
    "font-semibold",
    "flex",
    "items-center",
    "gap-2",
  );
  applyButton.innerHTML = `<svg
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
  applyButton.innerHTML += "Apply filters";
  applyContainer.appendChild(applyButton);

  container.appendChild(applyContainer);

  return container;
}
