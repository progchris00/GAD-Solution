export function loadModal() {
  const modal = document.createElement("div");
  modal.classList.add(
    "fixed",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "bg-black",
    "bg-opacity-50"
  );

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-auto"
  );

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("flex", "justify-between", "items-center", "mb-4");

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "I. Pangunahing Impormasyon";
  modalTitle.classList.add("text-lg", "font-semibold");

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("text-xl", "font-bold", "cursor-pointer");
  closeButton.addEventListener("click", () => modal.remove());

  modalHeader.append(modalTitle, closeButton);

  // Adjust rowContainers array (6 rows instead of 7)
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

  const inputElements = {}; // Store references to inputs

  const fields = [
    {
      label: "Last Name",
      name: "lastName",
      row: rowContainers[0],
      type: "text",
    },
    {
      label: "First Name",
      name: "firstName",
      row: rowContainers[0],
      type: "text",
    },
    {
      label: "Middle Name",
      name: "middleName",
      row: rowContainers[0],
      type: "text",
    },
    { label: "Suffix", name: "suffix", row: rowContainers[0], type: "text" },
    { label: "Age", name: "age", row: rowContainers[1], type: "number" },
    {
      label: "Birthdate",
      name: "birthdate",
      row: rowContainers[1],
      type: "date",
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

    inputElements[field.name] = input;
    fieldContainer.append(label, input);
    field.row.appendChild(fieldContainer);
  });

  function updateAddress() {
    const houseNo = inputElements.houseNo.value.trim();
    const purok = inputElements.purok.value.trim();
    const streetName = inputElements.streetName.value.trim();
    const barangay = inputElements.barangay.value.trim();

    inputElements.address.value = `${houseNo ? houseNo + ", " : ""}${purok ? "Purok " + purok + ", " : ""}${streetName ? streetName + ", " : ""}${barangay}`;
  }

  ["houseNo", "purok", "streetName", "barangay"].forEach((name) => {
    inputElements[name].addEventListener("input", updateAddress);
  });

  function createCheckboxGroup(title, name, options, container) {
    const groupContainer = document.createElement("div");
    groupContainer.classList.add("flex", "flex-col", "gap-2");

    const groupLabel = document.createElement("h1");
    groupLabel.textContent = title;
    groupLabel.classList.add("text-sm", "font-semibold");

    const optionsWrapper = document.createElement("div");
    optionsWrapper.classList.add("grid", "grid-cols-2", "gap-4");

    options.forEach((option) => {
      const wrapper = document.createElement("label");
      wrapper.classList.add("flex", "items-center", "gap-2", "relative");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = name;
      checkbox.value = option.value;

      // Add event listener to enforce single selection
      checkbox.addEventListener("change", () => {
        const checkboxes = optionsWrapper.querySelectorAll(
          `input[name="${name}"]`
        );
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false; // Uncheck all other checkboxes
          }
        });
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
    });

    groupContainer.append(groupLabel, optionsWrapper);
    container.appendChild(groupContainer);
  }

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

  // Tab creation
  const tabsContainer = document.createElement("div");
  tabsContainer.classList.add("flex", "border-b", "border-gray-300");

  const tabs = [
    "Pangunahing Impormasyon",
    "Miyembro ng Sambahayan",
    "Tungkol sa Tahanan",
    "Tubig System",
    "Ibang Impormasyon",
  ];
  const tabContents = [];

  tabs.forEach((tab, index) => {
    const tabButton = document.createElement("button");
    tabButton.textContent = tab;
    tabButton.classList.add(
      "py-2",
      "px-4",
      "cursor-pointer",
      "focus:outline-none",
      "hover:bg-gray-200"
    );
    tabButton.addEventListener("click", () => switchTab(index));
    tabsContainer.appendChild(tabButton);

    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-content", "hidden");
    tabContents.push(tabContent);
  });

  const tabContainers = [
    createPersonalInfoSection(),
    createHouseholdMemberSection(),
    createHouseholdInfoSection(),
    createWaterSystemSection(),
    createAdditionalInfoSection(),
  ];

  function switchTab(index) {
    tabContents.forEach((content) => content.classList.add("hidden"));
    tabContents[index].classList.remove("hidden");

    // Optional: Highlight the active tab
    tabsContainer.querySelectorAll("button").forEach((btn, i) => {
      btn.classList.toggle("bg-gray-300", i === index);
    });

    // Update modal title based on tab
    modalTitle.textContent = tabs[index];
  }

  // Helper function for each section
  function createPersonalInfoSection() {
    const section = document.createElement("div");
    section.classList.add("tab-content", "hidden");
    section.textContent = "Personal Info Content Here";
    return section;
  }

  function createHouseholdMemberSection() {
    const section = document.createElement("div");
    section.classList.add("tab-content", "hidden");
    section.textContent = "Household Members Info Here";
    return section;
  }

  function createHouseholdInfoSection() {
    const section = document.createElement("div");
    section.classList.add("tab-content", "hidden");
    section.textContent = "Household Info Here";
    return section;
  }

  function createWaterSystemSection() {
    const section = document.createElement("div");
    section.classList.add("tab-content", "hidden");
    section.textContent = "Water System Info Here";
    return section;
  }

  function createAdditionalInfoSection() {
    const section = document.createElement("div");
    section.classList.add("tab-content", "hidden");
    section.textContent = "Additional Info Here";
    return section;
  }

  // Set initial tab
  switchTab(0);

  modalContent.append(
    tabsContainer,
    modalHeader,
    ...rowContainers,
    buttonContainer,
    ...tabContainers
  );
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}
