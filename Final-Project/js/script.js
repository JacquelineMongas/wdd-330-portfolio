const hpcharacters = document.getElementById(".charactersList");
let hpCharacters = [];
const requestURL = "https://hp-api.onrender.com/api/characters"

const loadCharacters = async () => {
  try {
    const res = await fetch(requestURL);
    hpCharacters = await res.json();
    console.log(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};
loadCharacters().then();

//select output location

hpCharacters.forEach((hpCharacters) => {
  let hpCharactersUl = document.createElement("ul");
  let p = document.createElement("p");

  //use templet Literals
  p.innerHTML = `<a href=${hpCharacters.name}><img src="${hpCharacters.image}" alt ="${hpCharacters.patronus} "></a>`;
  hpCharactersUl.append(p);
  hpCharacters.append(hpCharactersUl);
});

//filter based on characters name
function searchCharactersName() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = ("searchInputName");
  searchCharactersName();
}
function searchCharactersName() {
  const searchterm = document.querySelector("#searchInputName").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters = jsonObject["characters"];

      //select output location
      let searchCharacters = document.querySelector(".charactersList");
      //filter the characters - if they match the search term
      const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});
      searchCharacters.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${hpCharacters.name}><img src="${characters.image}" alt ="${hpCharacters.patronus}"></a>`;
        charactersdiv.prepend(p);
        searchCharacters.prepend(charactersdiv);
      });
    }


//filter based on house
function searchCharactersHouse() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = ("searchCharactersHouse");
  filterCharactersHouse();
}
function filterCharactersHouse() {
  const searchterm = document.querySelector("#searchInputHouse").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters = jsonObject["hpCharacters"];

      //select output location
      let searchedcharacters = document.querySelector(".charactersList");
      //filter the charactersList - if they match the search term
      const searchcharactersListfilter = characters.filter((x) =>
        x.genre.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchcharactersListfilter.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${hpCharacters.name}><img src="${hpCharacters.image}" alt ="${hpCharacters.patronus}"></a>`;
        charactersdiv.prepend(p);
        searchedcharacters.prepend(charactersdiv);
      });
    });
}

//filter based on Patronus
function searchCharacters() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = "";
  charactersList();
}
function filtercharactersPatronus() {
  const searchterm = document.querySelector("#searchInputPatronus").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters = jsonObject["hpCharacters"];
      
      //select output location
      let searchedcharacters = document.querySelector(".charactersList");
      //filter the characters - if they match the search term
      const searchcharactersfilter = characters.filter((x) =>
        x.title.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchcharactersfilter.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${hpCharacters.name}><img src="${hpCharacters.image}" alt ="${hpCharacters.patronus} "></a>`;
        charactersdiv.prepend(p)
        searchedcharacters.prepend(charactersdiv);
      });
    });
}


