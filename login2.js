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
    data.isUser == "true");
  if(!roleData){
      let cekData = exist.some(data => 
      data.email == email && 
      data.password == pwd);
      if(cekData){
        location.href="home.html"
      }
      else{
        alert("Salah gengs")
      }
  }
  else{
    let cekData = exist.some(data => 
      data.email == email && 
      data.password == pwd);
      if(cekData){
        location.href="dashobard-admin.html"
      }
      else{
        alert("Salah gengs")
      }
  }
  e.preventDefault();
}

// 