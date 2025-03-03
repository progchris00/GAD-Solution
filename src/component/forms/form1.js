export function loadPangunahingImpormasyon(tabContent, tabButton, modal) {
  const rowContainers = Array.from({ length: 6 }, (_, index) => {
    const row = document.createElement("div");
    row.classList.add(
      "flex",
      "flex-row",
      "gap-7",
      "p-1",
      index === 4 ? "items-start" : "items-center"
    );
    return row;
  });

  const inputElements = {};
  const checkboxGroups = {};
  const requiredFields = ["lastName", "firstName", "age", "birthdate", "sex"];
  const requiredCheckboxGroups = ["voterStatus", "educationLevel", "sector"];

  function validateFields() {
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!inputElements[field].value.trim()) {
        isValid = false;
      }
    });

    requiredCheckboxGroups.forEach((group) => {
      const checkboxes = checkboxGroups[group];
      if (!checkboxes.some((checkbox) => checkbox.checked)) {
        isValid = false;
      }
    });

    const exclamationMark = tabButton.querySelector(".exclamation-mark");
    if (!isValid) {
      exclamationMark.classList.remove("hidden");
    } else {
      exclamationMark.classList.add("hidden");
    }
  }

  const exclamationMark = document.createElement("span");
  exclamationMark.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  `;
  exclamationMark.classList.add("exclamation-mark", "hidden");

  const tabContentWrapper = document.createElement("div");
  tabContentWrapper.classList.add("flex", "items-center", "gap-2");

  const tabName = document.createElement("span");
  tabName.textContent = "Pangunahing Impormasyon";
  tabContentWrapper.appendChild(tabName);
  tabContentWrapper.appendChild(exclamationMark);

  tabButton.textContent = "";
  tabButton.appendChild(tabContentWrapper);

  const fields = [
    {
      label: "Last Name",
      name: "lastName",
      row: rowContainers[0],
      type: "text",
      required: true,
    },
    {
      label: "First Name",
      name: "firstName",
      row: rowContainers[0],
      type: "text",
      required: true,
    },
    {
      label: "Middle Name",
      name: "middleName",
      row: rowContainers[0],
      type: "text",
    },
    { label: "Suffix", name: "suffix", row: rowContainers[0], type: "text" },
    {
      label: "Age",
      name: "age",
      row: rowContainers[1],
      type: "number",
      required: true,
    },
    {
      label: "Birthdate",
      name: "birthdate",
      row: rowContainers[1],
      type: "date",
      required: true,
    },
    {
      label: "Birthplace",
      name: "birthplace",
      row: rowContainers[1],
      type: "text",
    },
    {
      label: "Sex",
      name: "sex",
      row: rowContainers[1],
      type: "select",
      options: ["Male", "Female"],
      required: true,
    },
    {
      label: "House No.",
      name: "houseNo",
      row: rowContainers[2],
      type: "text",
    },
    { label: "Purok", name: "purok", row: rowContainers[2], type: "text" },
    {
      label: "Street Name",
      name: "streetName",
      row: rowContainers[2],
      type: "text",
    },
    {
      label: "Barangay",
      name: "barangay",
      row: rowContainers[2],
      type: "text",
      defaultValue: "Batong Malake",
    },
    {
      label: "Civil Status",
      name: "civilStatus",
      row: rowContainers[3],
      type: "select",
      options: ["Single", "Married", "Widowed", "Separated", "Divorced"],
    },
    {
      label: "Province of Origin",
      name: "provinceOrigin",
      row: rowContainers[3],
      type: "text",
    },
    {
      label: "Contact Number",
      name: "contactNumber",
      row: rowContainers[3],
      type: "tel",
    },
    {
      label: "Occupation",
      name: "occupation",
      row: rowContainers[4],
      type: "text",
    },
    {
      label: "Religion",
      name: "religion",
      row: rowContainers[4],
      type: "text",
    },
    { label: "Address", name: "address", row: rowContainers[4], type: "text" },
  ];

  fields.forEach((field) => {
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("flex", "flex-col", "gap-2");

    const label = document.createElement("h1");
    label.textContent = field.label;
    label.classList.add("text-sm", "font-semibold");

    let input;
    if (field.type === "select") {
      input = document.createElement("select");
      input.classList.add(
        "block",
        "w-64",
        "py-1.5",
        "px-3",
        "text-base",
        "border",
        "border-black",
        "rounded-md"
      );

      const blankOption = document.createElement("option");
      blankOption.value = "";
      blankOption.textContent = "";
      input.appendChild(blankOption);

      field.options.forEach((optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
      input.setAttribute("type", field.type);

      if (field.name === "address") {
        input.classList.add(
          "block",
          "w-96",
          "py-1.5",
          "px-3",
          "border",
          "border-black",
          "rounded-md"
        );
      } else {
        input.classList.add(
          "block",
          "w-64",
          "py-1.5",
          "px-3",
          "border",
          "border-black",
          "rounded-md"
        );
      }

      if (field.defaultValue) input.value = field.defaultValue;
    }

    if (field.required) {
      input.addEventListener("input", validateFields);
    }

    inputElements[field.name] = input;
    fieldContainer.append(label, input);
    field.row.appendChild(fieldContainer);
  });

  const voterStatuses = [
    { value: "Registered", label: "Registered" },
    { value: "Non-Registered", label: "Non-Registered" },
  ];

  const educationLevels = [
    { value: "Elem Graduate", label: "Elementary Graduate" },
    { value: "Junior High", label: "Junior High School" },
    { value: "Senior High", label: "Senior High School" },
    { value: "Bachelors", label: "Bachelor's Degree" },
    { value: "Masters", label: "Master's Degree" },
  ];

  const sector = [
    { value: "PWD", label: "PWD" },
    { value: "Wala", label: "Wala" },
    { value: "Solo Parent", label: "Solo Parent" },
    { value: "Senior", label: "Senior" },
    { value: "Iba pa", label: "Iba pa" },
  ];

  createCheckboxGroup(
    "Voter Status",
    "voterStatus",
    voterStatuses,
    rowContainers[3]
  );
  createCheckboxGroup(
    "Highest Educational Attainment",
    "educationLevel",
    educationLevels,
    rowContainers[5]
  );
  createCheckboxGroup("Sector", "sector", sector, rowContainers[5]);

  function createCheckboxGroup(title, name, options, container) {
    const groupContainer = document.createElement("div");
    groupContainer.classList.add("flex", "flex-col", "gap-2");

    const groupLabel = document.createElement("h1");
    groupLabel.textContent = title;
    groupLabel.classList.add("text-sm", "font-semibold");

    const optionsWrapper = document.createElement("div");
    optionsWrapper.classList.add("grid", "grid-cols-2", "gap-4");

    const checkboxes = [];
    options.forEach((option) => {
      const wrapper = document.createElement("label");
      wrapper.classList.add("flex", "items-center", "gap-2", "relative");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = name;
      checkbox.value = option.value;

      checkbox.addEventListener("change", () => {
        const checkboxes = optionsWrapper.querySelectorAll(
          `input[name="${name}"]`
        );
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
        validateFields();
      });

      const label = document.createElement("span");
      label.textContent = option.label;
      label.classList.add("text-sm", "font-semibold");

      if (option.value === "Iba pa") {
        label.classList.add("cursor-pointer");

        const customInput = document.createElement("input");
        customInput.type = "text";
        customInput.classList.add(
          "absolute",
          "left-20",
          "border-b",
          "border-black",
          "w-32",
          "outline-none",
          "bg-transparent",
          "text-sm",
          "hidden"
        );

        checkbox.addEventListener("change", () => {
          customInput.classList.toggle("hidden", !checkbox.checked);
          if (checkbox.checked) customInput.focus();
        });

        wrapper.append(checkbox, label, customInput);
      } else {
        wrapper.append(checkbox, label);
      }

      optionsWrapper.appendChild(wrapper);
      checkboxes.push(checkbox);
    });

    checkboxGroups[name] = checkboxes;
    groupContainer.append(groupLabel, optionsWrapper);
    container.appendChild(groupContainer);
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "justify-end", "gap-4", "mt-4");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.classList.add(
    "bg-slate-700",
    "text-white",
    "px-4",
    "py-2",
    "rounded-md",
    "hover:bg-slate-900"
  );

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add(
    "bg-slate-300",
    "text-black",
    "px-4",
    "py-2",
    "rounded-md",
    "hover:bg-slate-400"
  );
  cancelButton.addEventListener("click", () => modal.remove());

  buttonContainer.append(cancelButton, submitButton);

  tabContent.append(...rowContainers, buttonContainer);
}
