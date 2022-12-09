
 //const requestURL = 'https://hp-api.onrender.com/api/characters'

const charactersList = document.getElementById('charactersList');
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        console.log (hpCharacters);
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
  p.innerHTML = `<a href=${hpCharacters.name}><img src="${hpCharacters.image}" alt ="${hpCharacters.patronus } "></a>`;
  hpCharactersUl.append(p);
  charactersList.append(hpCharactersUl);
});



//filter based on characters name
function searchCharactersName() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = "";
  filterCharactersName();
}
function filterCharactersName() {
  const searchterm = document.querySelector("#searchInputName").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters= jsonObject["characters"];

      //select output location
      let searchCharacters= document.querySelector(".charactersList");
      //filter the characters - if they match the search term
      const searchcharactersfilter = characters.filter((x) =>
        x.actorfirstname.toUpperCase().includes(searchterm.toUpperCase()) || x.actorlastname.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchcharactersfilter.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${characters.sitelink}><img src="${characters.image}" alt ="${characters.patronus}"></a>`;
        charactersdiv.prepend(p);
        searchedcharacters.prepend(charactersdiv);
      });
    });
}

//filter based on house
function searchCharactersHouse() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = "";
  filterCharactersHouse();
}
function filterCharactersHouse() {
  const searchterm = document.querySelector("#searchInputHouse").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters= jsonObject["hpCharacters"];

      //select output location
      let searchedcharacters = document.querySelector(".charactersList");
      //filter the charactersList - if they match the search term
      const searchcharactersListfilter = charactersList.filter((x) =>
        x.genre.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchcharactersfilter.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${characters.sitelink}><img src="${characters.image}" alt ="${characters.patronus}"></a>`;
        charactersdiv.prepend(p);
        searchedcharacters.prepend(charactersdiv);
      });
    });
}

//filter based on Patronus
function searchCharacters() {
  let emptydiv = document.querySelector(".charactersList");
  emptydiv.innerHTML = "";
  filtercharactersList();
}
function filtercharactersPatronus() {
  const searchterm = document.querySelector("#searchInputPatronus").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const characters= jsonObject["hpCharacters"];
      //select output location
      let searchedcharacters= document.querySelector(".charactersList");
      //filter the characters - if they match the search term
      const searchcharactersfilter = characters.filter((x) =>
        x.title.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchcharactersfilter.forEach((characters) => {
        let charactersdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<a href=${characters.sitelink}><img src="${characters.image}" alt ="${characters.patronus} - characters cover"></a>`;
        charactersdiv.prepend(p);
        searchedcharacterss.prepend(charactersdiv);
      });
    });
}