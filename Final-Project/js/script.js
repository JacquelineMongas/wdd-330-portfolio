//set the json source URL

  const requestURL = "https://hp-api.herokuapp.com/api/characters";
  fetch(requestURL)
    .then((res) => res.json())
    .then((jsonData) => console.log(jsonData));
      // It brings all data at the API and it shows it at the console

      
    

