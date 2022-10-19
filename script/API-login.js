//API_URL
const API_URL = 'https://63496bd50b382d796c86192b.mockapi.io/';

//DOM

//FUNCTION
getData(API_URL)
function getData(url){

    fetch(url).then(res => res.json()).then(data =>{
        renderData(data.results);
    })

    console.log(renderData)
}

let form = document.getElementById('form2');
form.addEventListener('submit', function (event) {
event.preventDefault();
getData();
});