// Footer date
document.getElementById("year").textContent = new Date().getFullYear();

// MY search functionalities for the documents grid
function searchGrid() {
  const input = document.getElementById("docSearch");
  const items = Array.from(document.querySelectorAll(".document-item"));
  if (!input) return;
  input.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();
    items.forEach((col) => {
      const text = col.innerText.toLowerCase();
      col.style.display = text.includes(q) ? "" : "none";
    });
  });
}

searchGrid();
