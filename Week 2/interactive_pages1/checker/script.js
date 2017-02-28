function createChecker(id, pw) {

  function checkChar(x) {
    return (x.includes("#") || x.includes("!") || x.includes("$"));
  }

  function notSame() {
    return (id !== pw);
  }

  function length() {
    return (id.length >= 6 && pw.length >= 6);
  }

  function chars() {
    return (!checkChar(id) && checkChar(pw));
  }

  function passNotSame() {
    return (pw !== "password");
  }

  function digit() {
    for (var i = 0; i < pw.length; i++) {
      if (!isNaN(pw[i])) {
        return true;
      }
    }
    return false;
  }

  function checkCase() {
    if (pw.toUpperCase() === pw || pw.toLowerCase() === pw) {
      return false;
    } else {
      return true;
    }
  }
  return {
    main: function() {
      var state = true;
      if (notSame()) {
        document.getElementById("notSame").innerHTML = "";
      } else {
        state = false;
      }
      if (length()) {
        document.getElementById("length").innerHTML = "";
      } else {
        state = false;
      }

      if (chars()) {
        document.getElementById("chars").innerHTML = "";
      } else {
        state = false;
      }

      if (passNotSame()) {
        document.getElementById("passNotSame").innerHTML = "";
      } else {
        state = false;
      }

      if (digit()) {
        document.getElementById("digit").innerHTML = "";
      } else {
        state = false;
      }

      if (checkCase()) {
        document.getElementById("case").innerHTML = "";
      } else {
        state = false;
      }

      if (state) {
        document.getElementById("all-true").innerHTML = "Credentials accepted";
      }
    }
  };
}

function submit() {
  var username = document.getElementById('user-text').value;
  var password = document.getElementById('pass-text').value;
  var newUser =  createChecker(username, password);
  newUser.main();
}
