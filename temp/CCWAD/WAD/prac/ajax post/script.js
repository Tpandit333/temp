document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create user object
    var user = {
      name: name,
      email: email,
      password: password
    };

    // Save user object to local storage
    var users = localStorage.getItem('users');
    if (users) {
      users = JSON.parse(users);
      users.push(user);
    } else {
      users = [user];
    }
    localStorage.setItem('users', JSON.stringify(users));

    // Send user data to server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Registration successful!');
      }
    };
    xhr.send(JSON.stringify(user));

    // Redirect to data list page
    window.location.href = 'data-list.html';
  });
});
