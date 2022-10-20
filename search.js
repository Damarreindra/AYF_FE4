const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("submit", e => {
    const searchString = e.target.value;
    e.preventDefault();
  });

 //create search function
    const search = async (searchString) => {
        const response = await fetch(`http://localhost:3000/search/${searchString}`);
        const data = await response.json();
        console.log(data);
    }