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
      "w-96"
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
  
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter item name";
    inputField.classList.add(
      "w-full",
      "p-20",
      "border",
      "border-gray-300",
      "rounded-md",
      "mb-4"
    );
  
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add(
      "bg-slate-700",
      "text-white",
      "px-4",
      "py-2",
      "rounded-md",
      "w-full"
    );
  
    modalContent.append(modalHeader, inputField, submitButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }
  