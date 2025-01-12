//preventing from window from refreshing.
function OnFormSubmit(e) {
  e.preventDefault();
  var mainElement = document.getElementById("mainKaId");
  var newElement = document.getElementById("resultText");
  if (newElement === null) {
    var newEle = document.createElement("div");
    newEle.id = "resultText";
    newEle.textContent = "FOrm subitted!";
    mainElement.appendChild(newEle);
  }

  document.getElementById("myForm").reset();
}
