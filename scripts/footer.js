const btn = document.getElementById("discord-modal-btn");
const modal = document.getElementById("discord-modal");

btn.addEventListener("click", () => {
  modal.className = "modal modalShow";
  navigator.clipboard.writeText("firemonster391");
  setTimeout(() => (modal.className = "modal"), 5000);
});
