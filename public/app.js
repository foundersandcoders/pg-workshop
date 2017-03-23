function request (url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      cb("error");
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function updateDom (err, data) {
  if (err) {
    console.log(err);
  } else {
    var parent = document.getElementById("users-table");
    var users = JSON.parse(data);
    users.forEach(function(user) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      name.innerHTML = user.name;
      var location = document.createElement("td");
      row.appendChild(name);
      location.innerHTML = user.location;
      row.appendChild(location);
      parent.appendChild(row);
    });
  }
}

request('/users', updateDom);
