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
    const response = await fetch(apiUrl + encodeURIComponent(cocktailNameValue), options);
    const data = await response.json();

    if (data.length > 0) {
      const firstCocktail = data[0];
      cocktailName.innerHTML = firstCocktail.name;
      instructions.innerHTML = firstCocktail.instructions;
      ingredients.innerHTML = "Ingredients: " + firstCocktail.ingredients.join(", ");
      
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
