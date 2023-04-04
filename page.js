function showAlert(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  alert("Nom: " + name + "\nEmail: " + email + "\nMessage: " + message);
}

function checkMessageLength(textarea, maxLength) {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength);
  }
}