let form = document.getElementById('form2');
form.addEventListener('submit', function (event) {
event.preventDefault();
signIn();
});

function signIn(e) {
  let email = document.getElementById('email2').value
  let pwd = document.getElementById('pword2').value;
  let formData = JSON.parse(localStorage.getItem('ACCOUNTS')) || [];
  let exist = formData.length && JSON.parse(localStorage.getItem('ACCOUNTS'))
  let roleData = exist.some(data => 
    data.email.toLowerCase() == email && 
    data.password.toLowerCase() == pwd &&
    data.role == "user");
  if(!someData){
      alert("Incorrect login credentials");
  }
  else{
     location.href = "home.html";
  }
  e.preventDefault();
}

// let roleData = exist.some(data => 
//   data.email.toLowerCase() == email && 
//   data.password.toLowerCase() == pwd &&
//   data.role == "user");