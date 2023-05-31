function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form field values
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
  
    // Validate fields
    var isValid = true;
    
    // Name validation: Check for at least one uppercase, one lowercase, one special character, one number, and minimum length of 8 characters
    var nameRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!name.match(nameRegex)) {
      isValid = false;
      document.getElementById('name').classList.add('error');
    } else {
      document.getElementById('name').classList.remove('error');
    }
    
    // Password validation: Check for at least one uppercase, one special character, and minimum length of 8 characters
    var passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      isValid = false;
      document.getElementById('password').classList.add('error');
    } else {
      document.getElementById('password').classList.remove('error');
    }
    
    // Email validation: Use HTML5 email input validation
    
    // Phone number validation: Check for 10 digits
    var phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumber.match(phoneNumberRegex)) {
      isValid = false;
      document.getElementById('phoneNumber').classList.add('error');
    } else {
      document.getElementById('phoneNumber').classList.remove('error');
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      document.getElementById('registrationForm').submit();
    }
  }
  