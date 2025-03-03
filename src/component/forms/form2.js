export function loadMiyembroNgSambahayan(tabContent, tabButton, modal) {
  const miyembroContent = document.createElement("div");
  miyembroContent.classList.add("space-y-4");

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
  tabName.textContent = "Miyembro ng Sambahayan";
  tabContentWrapper.appendChild(tabName);
  tabContentWrapper.appendChild(exclamationMark);

  tabButton.textContent = "";
  tabButton.appendChild(tabContentWrapper);

  const rowInputContainer = document.createElement("div");
  rowInputContainer.classList.add("flex", "items-center", "gap-4");

  const rowInputLabel = document.createElement("label");
  rowInputLabel.textContent = "Ilan ang Miyembro?:";
  rowInputLabel.classList.add("text-sm", "font-semibold");

  const rowInput = document.createElement("input");
  rowInput.setAttribute("type", "number");
  rowInput.classList.add(
    "w-24",
    "p-1",
    "border",
    "border-gray-300",
    "rounded-md"
  );

  const generateTableButton = document.createElement("button");
  generateTableButton.textContent = "Generate Table";
  generateTableButton.classList.add(
    "bg-slate-700",
    "text-white",
    "px-4",
    "py-2",
    "rounded-md",
    "hover:bg-slate-900"
  );

  rowInputContainer.append(rowInputLabel, rowInput, generateTableButton);
  miyembroContent.appendChild(rowInputContainer);

  function validateFields() {
    let isValid = true;

    const table = miyembroContent.querySelector("table");
    if (!table) {
      isValid = false;
    } else {
      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const inputs = row.querySelectorAll("input, select");
        inputs.forEach((input) => {
          if (input.type === "checkbox") {
            const groupName = input.name;
            const checkboxes = row.querySelectorAll(
              `input[name="${groupName}"]`
            );
            if (!Array.from(checkboxes).some((cb) => cb.checked)) {
              isValid = false;
            }
          } else if (!input.value.trim()) {
            isValid = false;
          }
        });
      });
    }

    if (!isValid) {
      exclamationMark.classList.remove("hidden");
    } else {
      exclamationMark.classList.add("hidden");
    }
  }

  generateTableButton.addEventListener("click", () => {
    const numRows = parseInt(rowInput.value);

    if (isNaN(numRows) || numRows <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }

    const existingTable = miyembroContent.querySelector("table");
    if (existingTable) existingTable.remove();

    const table = document.createElement("table");
    table.classList.add(
      "w-full",
      "border-collapse",
      "border",
      "border-gray-300",
      "overflow-x-auto"
    );

    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = [
      "Pangalan (Last, First, Middle Name)",
      "Relasyon sa Pangulo ng Sambahayan",
      "Kasarian",
      "Kaarawan",
      "Edad",
      "Sector",
      "Edukasyong Naabot",
      "Hanapbuhay",
      "Contact Number",
      "Relihiyon",
      "Lugar ng Kapanganakan",
      "Registered/Non-Registered Voter",
    ];

    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      th.classList.add(
        "border",
        "border-gray-300",
        "p-2",
        "bg-gray-100",
        "text-left"
      );
      headerRow.appendChild(th);
    });

    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    const tableBody = document.createElement("tbody");

    for (let i = 0; i < numRows; i++) {
      const row = document.createElement("tr");

      const pangalanCell = document.createElement("td");
      pangalanCell.classList.add("border", "border-gray-300", "p-2");

      const lastNameInput = document.createElement("input");
      lastNameInput.setAttribute("type", "text");
      lastNameInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      lastNameInput.addEventListener("input", validateFields);

      const firstNameInput = document.createElement("input");
      firstNameInput.setAttribute("type", "text");
      firstNameInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      firstNameInput.addEventListener("input", validateFields);

      const middleNameInput = document.createElement("input");
      middleNameInput.setAttribute("type", "text");
      middleNameInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      middleNameInput.addEventListener("input", validateFields);

      pangalanCell.append(lastNameInput, firstNameInput, middleNameInput);
      row.appendChild(pangalanCell);

      const relasyonCell = document.createElement("td");
      relasyonCell.classList.add("border", "border-gray-300", "p-2");

      const relasyonInput = document.createElement("input");
      relasyonInput.setAttribute("type", "text");
      relasyonInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      relasyonInput.addEventListener("input", validateFields);

      relasyonCell.appendChild(relasyonInput);
      row.appendChild(relasyonCell);

      const kasarianCell = document.createElement("td");
      kasarianCell.classList.add("border", "border-gray-300", "p-2");

      const kasarianSelect = document.createElement("select");
      kasarianSelect.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      kasarianSelect.addEventListener("change", validateFields);

      const kasarianOptions = ["Male", "Female"];
      kasarianOptions.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        kasarianSelect.appendChild(optionElement);
      });

      kasarianCell.appendChild(kasarianSelect);
      row.appendChild(kasarianCell);

      const kaarawanCell = document.createElement("td");
      kaarawanCell.classList.add("border", "border-gray-300", "p-2");

      const kaarawanInput = document.createElement("input");
      kaarawanInput.setAttribute("type", "date");
      kaarawanInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      kaarawanInput.addEventListener("input", validateFields);

      kaarawanCell.appendChild(kaarawanInput);
      row.appendChild(kaarawanCell);

      const edadCell = document.createElement("td");
      edadCell.classList.add("border", "border-gray-300", "p-2");

      const edadInput = document.createElement("input");
      edadInput.setAttribute("type", "number");
      edadInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      edadInput.addEventListener("input", validateFields);

      edadCell.appendChild(edadInput);
      row.appendChild(edadCell);

      const sectorCell = document.createElement("td");
      sectorCell.classList.add("border", "border-gray-300", "p-2");

      const sectorOptions = ["PWD", "Senior", "Solo Parent"];
      sectorOptions.forEach((option) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("flex", "items-center", "gap-2");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", `sector-${i}`);
        checkbox.value = option;

        checkbox.addEventListener("change", (e) => {
          const checkboxes = sectorCell.querySelectorAll(
            `input[name="sector-${i}"]`
          );
          checkboxes.forEach((cb) => {
            if (cb !== e.target) cb.checked = false;
          });
          validateFields();
        });

        const label = document.createElement("span");
        label.textContent = option;

        wrapper.append(checkbox, label);
        sectorCell.appendChild(wrapper);
      });

      row.appendChild(sectorCell);

      const edukasyonCell = document.createElement("td");
      edukasyonCell.classList.add("border", "border-gray-300", "p-2");

      const edukasyonOptions = [
        { value: "Elem Graduate", label: "Elementary Graduate" },
        { value: "Junior High", label: "Junior High School" },
        { value: "Senior High", label: "Senior High School" },
        { value: "Bachelors", label: "Bachelor's Degree" },
        { value: "Masters", label: "Master's Degree" },
      ];

      edukasyonOptions.forEach((option) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("flex", "items-center", "gap-2");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = `edukasyon-${i}`;
        checkbox.value = option.value;

        checkbox.addEventListener("change", (e) => {
          const checkboxes = edukasyonCell.querySelectorAll(
            `input[name="edukasyon-${i}"]`
          );
          checkboxes.forEach((cb) => {
            if (cb !== e.target) cb.checked = false;
          });
          validateFields();
        });

        const label = document.createElement("span");
        label.textContent = option.label;
        label.classList.add("text-sm");

        wrapper.append(checkbox, label);
        edukasyonCell.appendChild(wrapper);
      });

      row.appendChild(edukasyonCell);

      const hanapbuhayCell = document.createElement("td");
      hanapbuhayCell.classList.add("border", "border-gray-300", "p-2");

      const hanapbuhayInput = document.createElement("input");
      hanapbuhayInput.setAttribute("type", "text");
      hanapbuhayInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      hanapbuhayInput.addEventListener("input", validateFields);

      hanapbuhayCell.appendChild(hanapbuhayInput);
      row.appendChild(hanapbuhayCell);

      const contactCell = document.createElement("td");
      contactCell.classList.add("border", "border-gray-300", "p-2");

      const contactInput = document.createElement("input");
      contactInput.setAttribute("type", "tel");
      contactInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      contactInput.addEventListener("input", validateFields);

      contactCell.appendChild(contactInput);
      row.appendChild(contactCell);

      const relihiyonCell = document.createElement("td");
      relihiyonCell.classList.add("border", "border-gray-300", "p-2");

      const relihiyonInput = document.createElement("input");
      relihiyonInput.setAttribute("type", "text");
      relihiyonInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      relihiyonInput.addEventListener("input", validateFields);

      relihiyonCell.appendChild(relihiyonInput);
      row.appendChild(relihiyonCell);

      const kapanganakanCell = document.createElement("td");
      kapanganakanCell.classList.add("border", "border-gray-300", "p-2");

      const kapanganakanInput = document.createElement("input");
      kapanganakanInput.setAttribute("type", "text");
      kapanganakanInput.classList.add(
        "w-full",
        "p-1",
        "border",
        "border-gray-300",
        "rounded-md"
      );
      kapanganakanInput.addEventListener("input", validateFields);

      kapanganakanCell.appendChild(kapanganakanInput);
      row.appendChild(kapanganakanCell);

      const voterCell = document.createElement("td");
      voterCell.classList.add("border", "border-gray-300", "p-2");

      const voterOptions = ["Registered", "Non-Registered"];
      voterOptions.forEach((option) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("flex", "items-center", "gap-2");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", `voter-${i}`);
        checkbox.value = option;

        checkbox.addEventListener("change", (e) => {
          const checkboxes = voterCell.querySelectorAll(
            `input[name="voter-${i}"]`
          );
          checkboxes.forEach((cb) => {
            if (cb !== e.target) cb.checked = false;
          });
          validateFields();
        });

        const label = document.createElement("span");
        label.textContent = option;

        wrapper.append(checkbox, label);
        voterCell.appendChild(wrapper);
      });

      row.appendChild(voterCell);

      tableBody.appendChild(row);
    }

    table.appendChild(tableBody);

    miyembroContent.appendChild(table);
  });

  tabContent.appendChild(miyembroContent);
}
