document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    addAccount();
    alert("ACCOUNT BERHASIL DIBUAT")
    location.href = "index.html";
  });
    if (isStorageExist()) {
      loadDataFromStorage();
    }
  });

function addAccount() {
    let uname = document.getElementById('uname').value;
    let pass = document.getElementById('pword').value;
    let surel = document.getElementById('email').value;
    const generatedID = generateId();
    const accObject = generateAccObject(generatedID, uname, pass, surel, true);
    accounts.push(accObject);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function generateId() {
    return +new Date();
  }

  function generateAccObject(id, username, password, email, isUser) {
    return {
      id,
      username,
      password,
      email,
      isUser 
    }
  }

  const accounts = [];
  const RENDER_EVENT = 'render-acc';

  function saveData(){
    if (isStorageExist()) {
      const parsed = JSON.stringify(accounts);
      localStorage.setItem(STORAGE_KEY, parsed);
    }
  }

  const SAVED_EVENT = 'saved-acc';
  const STORAGE_KEY = 'ACCOUNTS';

  function isStorageExist() {
    if (typeof (Storage) === undefined) {
      alert('Browser kamu tidak mendukung local storage');
      return false;
    }
    return true;
  }

  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
   
    if (data !== null) {
      for (const acc of data) {
        accounts.push(acc);
      }
    }
   
    document.dispatchEvent(new Event(RENDER_EVENT));
  }