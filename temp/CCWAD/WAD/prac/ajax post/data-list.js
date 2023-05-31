// Retrieve user data from local storage
var users = localStorage.getItem('users');
if (users) {
  users = JSON.parse(users);
  var userList = document.getElementById('userList');
  users.forEach(function(user) {
    var listItem = document.createElement('li');
    listItem.textContent = user.name + ' - ' + user.email;
    userList.appendChild(listItem);
  });
}
