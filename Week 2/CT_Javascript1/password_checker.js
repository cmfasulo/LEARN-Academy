// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"

function promptInput() {
  var userId = prompt('Enter Username (must contain 6 characters, cannot contain "!#$", and cannot be the same as password');

  var pass = prompt('Enter Password (must contain 6 characters, must contain of of the following characters "!#$", cannot be "password" and cannot be the same as username');

  alert("Your user name is accepted " + verifyId(userId, pass));
  alert("Your password is accepted " + verifyPass(userId, pass));
}

function verifyId(strId, strPass) {
  return strId.length >= 6 && !strId.includes("!") && !strId.includes("#") && !strId.includes("$") && strId != strPass;
}

function verifyPass(strId, strPass) {
  return strPass.length >= 6 && (strPass.includes("!") || strPass.includes("#") || strPass.includes("$")) && strPass != strId && strPass.toUpperCase() != "PASSWORD" && (strPass.match(/\d+/g) != null);
}

function testNumber (str) {
  return str.match(/\d+/g)
}
