window.onload = function () {
  var checkMeBox = document.getElementById("check-me")
  var disableMeBtn = document.getElementById("disable-me")

  function checkBoxHandler() {
	if(checkMeBox.checked) {
        disableMeBtn.removeAttribute("disabled")
      } else {
	  disableMeBtn.setAttribute("disabled", "true")
	}
  }

  checkBoxHandler()
  checkMeBox.onclick = checkBoxHandler
}
