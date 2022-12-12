const addBtn = document.querySelector("#add-button");
const textArea = document.querySelector("textarea");
const toastContainer = document.querySelector("#toasts");
const duration = document.querySelector("#duration");
const clear = document.querySelector("#clear-button");
addBtn.addEventListener("click", () => {
  const check = document.querySelector('input[name="type"]:checked');
  let toast = document.createElement("div");
  toast.classList.add(`${check.value}-toast`);
  toast.classList.add("toast");

  if (textArea.value === "") {
    toast.innerHTML = `<p class="message">${check.value}</p>
    <button class="cancel-button">X</button>`;
    toastContainer.appendChild(toast);
  } else {
    toast.innerHTML = `<p class="message">${textArea.value}</p>
    <button class="cancel-button">X</button>`;
    toastContainer.prepend(toast);
  }

  const cancelBtn = document.querySelectorAll(".cancel-button");
  cancelBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.path[1].remove();
    });
  });
  setTimeout(() => {
    const toastDiv = document.querySelector(".toast");
    toastDiv.remove();
  }, duration.value);
});
clear.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
