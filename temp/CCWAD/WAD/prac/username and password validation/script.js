document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validate username
    if (!isValidUsername(username)) {
      document.getElementById('usernameError').textContent = 'Username is invalid';
      return;
    }
  
    // Validate password
    if (!isValidPassword(password)) {
      document.getElementById('passwordError').textContent = 'Password is invalid';
      return;
    }
  
    // Validation passed, submit the form
    console.log('Login successful!');
  });
  
  function isValidUsername(username) {
    // Perform username validation here
    // Return true if valid, false otherwise
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(username);
  }
  
  function isValidPassword(password) {
    // Perform password validation here
    // Return true if valid, false otherwise
    var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  }
  