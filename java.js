const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const cocktailName = document.getElementById("cocktail-name");
const cocktailImage = document.getElementById("cocktail-image");
const instructions = document.getElementById("instructions");
const imageContainer = document.getElementById("container");
const ingredients = document.getElementById("ingredients");

const apiKey = "uZhrMc3NNe79A1cbQY6xkARsHLJlqfvykH3cYY9Y";
const apiUrl = "https://api.api-ninjas.com/v1/cocktail?name=";

const options = {
  method: 'GET',
  headers: { 'X-Api-Key': apiKey },
}

btnEl.addEventListener("click", async () => {
  const cocktailNameValue = inputEl.value.trim();
  if (cocktailNameValue === '') {
    alert('Please enter a cocktail name');
    return;
  }

  try {
    const response = await fetch(apiUrl + encodeURIComponent(cocktailNameValue), options); /*
    This line is making a network request using the fetch() function. It sends a request to the specified apiUrl, and it appends the cocktailNameValue to the URL by using encodeURIComponent() to properly handle any special characters in the cocktail name.
    const response = await fetch(apiUrl + encodeURIComponent(cocktailNameValue), options);
    The fetch() function returns a Promise that resolves to the response object containing the result of the network request. By using the await keyword, the code is waiting for the Promise to be resolved, and the response object will be assigned to the response variable.
    const data = await response.json();
    The json() method is used to parse the response body as JSON. Again, the await keyword is used to wait for the JSON parsing to be completed, and the parsed data will be assigned to the data variable.
    In summary, the code fetches data from an API using a URL constructed with apiUrl and cocktailNameValue. It then parses the response as JSON and stores the resulting data in the data variable. Note that the code snippet you provided must be inside an async function since it uses await.*/
    
    const data = await response.json();

    console.log(data);

    if (data.length > 0) { //This condition checks if the data array has at least one element, meaning there is a valid response with at least one cocktail.//
      const firstCocktail = data[0]; //If there is data available, the first cocktail object from the data array is assigned to the variable firstCocktail.//
      cocktailName.innerHTML = firstCocktail.name;
      instructions.innerHTML = firstCocktail.instructions;
      ingredients.innerHTML = "Ingredients: " + firstCocktail.ingredients.join(", ");//The join() method concatenates the elements of the ingredients array with commas, creating a formatted list of ingredients.
      
    } else {
      cocktailName.innerHTML = "Cocktail not found";
      instructions.innerHTML = "";
      ingredients.innerHTML = "";
      cocktailImage.innerHTML = "";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
