// main.js
import { loadPangunahingImpormasyon } from "./form1.js";
import { loadMiyembroNgSambahayan } from "./form2.js";

export function loadForm() {
  const modal = document.createElement("div");
  modal.classList.add(
    "fixed",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "bg-black",
    "bg-opacity-50",
    "overflow-auto"
  );

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-auto",
    "max-h-[90vh]",
    "overflow-auto"
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

  const tabs = [
    { name: "Pangunahing Impormasyon", title: "I. Pangunahing Impormasyon" },
    { name: "Miyembro ng Sambahayan", title: "II. Miyembro ng Sambahayan" },
    { name: "Tungkol sa Tahanan", title: "III. Tungkol sa Tahanan" },
    { name: "Tubig System", title: "IV. Tubig System" },
    { name: "Ibang Impormasyon", title: "V. Ibang Impormasyon" },
  ];

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("flex", "border-b", "mb-4");

  const tabContents = {};
  const contentContainer = document.createElement("div");

  tabs.forEach((tab, index) => {
    const tabButton = document.createElement("button");
    tabButton.textContent = tab.name;
    tabButton.classList.add(
      "px-4",
      "py-2",
      "border",
      "border-gray-300",
      "bg-gray-200",
      "hover:bg-gray-300",
      "tab-button"
    );
    if (index === 0) {
      tabButton.classList.add("bg-white", "border-b-2", "border-blue-500");
    }

    const tabContent = document.createElement("div");
    tabContent.classList.add("hidden");
    if (index === 0) {
      tabContent.classList.remove("hidden");
    }
    tabContents[tab.name] = tabContent;

    tabButton.addEventListener("click", () => {
      modalTitle.textContent = tab.title;

      document
        .querySelectorAll(".tab-button")
        .forEach((btn) =>
          btn.classList.remove("bg-white", "border-b-2", "border-blue-500")
        );
      tabButton.classList.add("bg-white", "border-b-2", "border-blue-500");

      Object.values(tabContents).forEach((content) =>
        content.classList.add("hidden")
      );
      tabContent.classList.remove("hidden");
    });

    tabContainer.appendChild(tabButton);
    contentContainer.appendChild(tabContent);

    if (tab.name === "Pangunahing Impormasyon") {
      loadPangunahingImpormasyon(tabContent, tabButton, modal);
    } else if (tab.name === "Miyembro ng Sambahayan") {
      loadMiyembroNgSambahayan(tabContent, tabButton, modal);
    }
  });

  modalContent.append(tabContainer, modalHeader, contentContainer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}
