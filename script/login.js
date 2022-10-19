let form = document.getElementById('form2');
form.addEventListener('submit', function (event) {
event.preventDefault();
signIn();
});

function signIn(e) {
  let email = document.getElementById('email2').value;
  let pwd = document.getElementById('pword2').value;
  let role = document.getElementById('role').value;
  let formData = JSON.parse(localStorage.getItem('ACCOUNTS')) || [];
  let exist = formData.length && JSON.parse(localStorage.getItem('ACCOUNTS'))
  let obj = exist.find(o => o.role === 'admin')
  if(role == obj.role){
      let cekData = exist.some(data => 
      data.email == email && 
      data.password == pwd &&
      data.role == role);
      if(cekData){
        location.href="dashboard-admin.html"
      }
      else{
        alert("Incorrect Login Credentials")
      }
  }
  else{
    let cekData = exist.some(data => 
      data.email == email && 
      data.password == pwd &&
      data.role == role);
      if(cekData){
        location.href="home.html"
      }
      else{
        alert("Incorrect Login Credentials")
      }
  }
 
  e.preventDefault();
}

// 