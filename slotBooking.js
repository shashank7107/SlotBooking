function OnFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  // Check if at least one service is selected
  var checkBoxes = document.getElementsByName("services");
  var error = true;
  var count = 0;

  for (var cb of checkBoxes) {
    if (cb.checked) {
      error = false;
      count++;
    }
  }

  if (error) {
    alert("Select at least one service");
  } else {
    // Show confirmation modal
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "flex";

    // Update modal content dynamically if needed
    const modalMessage = `You have selected ${count} service(s). Click 'Close' to proceed.`;
    const modalContent = modal.querySelector(".modal-content p");
    if (modalContent) {
      modalContent.textContent = modalMessage;
    }
  }
}

function closeModal() {
  // Hide the modal
  const modal = document.getElementById("confirmationModal");
  modal.style.display = "none";

  // Optionally reset the form after closing
  document.getElementById("myForm").reset();

  // Append a confirmation message
  const mainElement = document.getElementById("mainKaId");
  const newElement = document.getElementById("resultText");
  if (!newElement) {
    const newEle = document.createElement("div");
    newEle.id = "resultText";
    newEle.textContent =
      "Thank you, you have successfully booked your appointment!";
    mainElement.appendChild(newEle);
  }
}
