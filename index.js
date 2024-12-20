function validateSignup() {
  let errorMessages = document.getElementsByClassName('error');
  while (errorMessages.length > 0) {
      errorMessages[0].remove();
  }

  let isValid = true; 
  let username = document.getElementById("username");
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let confirmPassword = document.getElementById('confirmpassword');

  if (username.value.trim() === "") {
      displayError(username, "Username is required");
      isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value.trim() === "") {
      displayError(email, "Email is required");
      isValid = false;
  } else if (!emailPattern.test(email.value)) {
      displayError(email, "Please enter a valid email address");
      isValid = false;
  }

  if (password.value.trim() === "") {
      displayError(password, "Password is required");
      isValid = false;
  } else if (password.value.length < 6) {
      displayError(password, "Password must be at least 6 characters");
      isValid = false;
  }

  if (confirmPassword.value.trim() === "") {
      displayError(confirmPassword, "Confirm password is required");
      isValid = false;
  } else if (confirmPassword.value !== password.value) {
      displayError(confirmPassword, "Passwords do not match");
      isValid = false;
  }

  return isValid; 

  function displayError(field, message) {
      field.value = "";
      field.placeholder = message;
      field.style.borderColor = "red";
  }
}