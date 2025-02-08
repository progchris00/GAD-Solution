import logoImg from "../assets/images/logo.png";

export function loadHeader() {
  const headerContainer = document.getElementById("header");
  headerContainer.appendChild(createHeadingSection());
  headerContainer.appendChild(createFilterMenuSection());
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

function createFilterMenuSection() {
  const filterMenuContainer = document.createElement("div");
  filterMenuContainer.classList.add("flex", "gap-12");

  const sex = createFilterMenu("Sex", ["Male", "Female"]);
  const purok = createFilterMenu("Purok", ["1", "2", "3", "4", "5", "6"]);
  const ageRange = createFilterMenu("Age range", [
    "17 below",
    "18-27",
    "28-39",
    "40-49",
    "50-63",
    "64 above",
  ]);
  const sector = createFilterMenu("Sector", [
    "PWD",
    "Senior",
    "Solo Parent",
    "Iba Pa",
  ]);
  const voterStatus = createFilterMenu("Voter status", [
    "Registered",
    "Non-registered",
  ]);
  const civilStatus = createFilterMenu("Civil status", [
    "Single",
    "Married",
    "Separated",
    "Widowed",
    "Divorced",
  ]);

  filterMenuContainer.append(
    sex.container,
    purok.container,
    ageRange.container,
    sector.container,
    voterStatus.container,
    civilStatus.container,

    createFilterButton()
  );

  return filterMenuContainer;
}

function createFilterMenu(name, choices) {
  const selectedChoices = new Set();

  const container = document.createElement("div");
  container.classList.add("flex", "flex-col");

  const label = document.createElement("label");
  label.textContent = name;
  label.classList.add("font-semibold");

  const menu = document.createElement("button");
  menu.classList.add(
    "border",
    "border-gray-300",
    "rounded-md",
    "p-1",
    "flex",
    "items-center",
    "gap-2"
  );

  const menuLabel = `Select ${name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>`;
  menu.innerHTML = menuLabel;

  menu.addEventListener("click", () => openModal());

  container.append(label, menu);

  function openModal() {
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

      if (selectedChoices.has(choice)) {
        checkbox.checked = true;
      }

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedChoices.add(choice);
        } else {
          selectedChoices.delete(choice);
        }
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(choice));
      listItem.appendChild(label);
      list.appendChild(listItem);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("flex", "gap-4", "mt-4", "justify-end");

    buttonContainer.append(createCancelButton(), createApplyButton());

    modal.append(createCloseButton(), title, list, buttonContainer);

    overlay.appendChild(modal);

    document.body.appendChild(overlay);

    function createCancelButton() {
      const cancelButton = document.createElement("button");
      cancelButton.classList.add(
        "bg-slate-300",
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

      return cancelButton;
    }

    function createApplyButton() {
      const applyButton = document.createElement("button");
      applyButton.classList.add(
        "bg-slate-700",
        "text-white",
        "rounded-md",
        "py-2",
        "px-4",
        "font-semibold"
      );
      applyButton.textContent = "Apply";
      applyButton.addEventListener("click", () => {
        updateMenuLabel();
      });

      return applyButton;
    }

    function createCloseButton() {
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

      return closeButton;
    }

    function updateMenuLabel() {
      if (selectedChoices.size > 0) {
        menu.innerHTML = `${Array.from(selectedChoices).join(", ")} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>`;
        if (selectedChoices.size > 3) {
          const firstSelectedChoices = Array.from(selectedChoices)
            .slice(0, 3)
            .join(", ");
          menu.innerHTML = `${firstSelectedChoices}... <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>`;
        }
      } else {
        menu.innerHTML = menuLabel;
      }
      document.body.removeChild(overlay);
    }
  }

  return {
    container,
  };
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
    "self-end"
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
