//preventing from window from refreshing.
function OnFormSubmit(e) {
  e.preventDefault();
  var outputElement = document.getElementById("resultText");
  outputElement.innerText = "Thankyou... Your appointment has been booked";
  document.getElementById("myForm").reset();
}
