//preventing from window from refreshing.
function OnFormSubmit(e) {
  e.preventDefault();
  var checkBoxes = document.getElementsByName("services");
  //assuming that theres already an error
  var error = true;
  var count = 0;
  //looping through all checkboxes
  for (var cb of checkBoxes) {
    //checkbox->checked, no error.
    if (cb.checked) {
      error = false;
      count++;
    }
  }
  //if error, the following code.
  if (error) {
    alert("Select atleast one service");
  } else {
    var result = confirm(
      "You have selected " +
        count +
        " service(s), click 'ok' to book your appointment."
    );
    if (result) {
      var mainElement = document.getElementById("mainKaId");
      var newElement = document.getElementById("resultText");
      if (newElement === null) {
        var newEle = document.createElement("div");
        newEle.id = "resultText";
        newEle.textContent =
          "Thankyou, you have succesfully booked your appointment!";
        mainElement.appendChild(newEle);

        document.getElementById("myForm").reset();
      }
    }
  }
}
