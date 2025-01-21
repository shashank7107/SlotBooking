const openDialogueBox = document.getElementById("DB");
const closeDialogueBox = document.getElementById("close-button");
const confirmDialogueBox = document.getElementById("confirmButton");
const dialoguebox = document.getElementById("dialogueBox");

openDialogueBox.addEventListener("click", () => {
  dialoguebox.classList.remove("hidden");
});
closeDialogueBox.addEventListener("click", () => {
  dialoguebox.classList.add("hidden");
});
confirmDialogueBox.addEventListener("click", () => {
  dialoguebox.classList.add("hidden");
});
