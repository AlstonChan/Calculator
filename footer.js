const btn = document.getElementById("discord-modal-btn");
const modal = document.getElementById("discord-modal");

btn.addEventListener("click", () => {
  modal.className = "modal modalShow";
  navigator.clipboard.writeText("Firemonster391#1331");
  setTimeout(() => (modal.className = "modal"), 5000);
});
