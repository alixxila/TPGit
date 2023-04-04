function showAlert(event) {
          event.preventDefault();
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var message = document.getElementById("message").value;
          alert("Nom: " + name + "\nEmail: " + email + "\nMessage: " + message);
        };