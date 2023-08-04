const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const cocktailName = document.getElementById("cocktail-name");
const cocktailImage = document.getElementById("cockatil-image");
const instructions = document.getElementById("instructions");
const imageContainer = document.getElementById("container");
const ingridients = document.getElementById("ingredients");




const apiKey = "uZhrMc3NNe79A1cbQY6xkARsHLJlqfvykH3cYY9Y";
const apiUrl = "https://api.api-ninjas.com/v1/cocktail?name=vodka";


const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey,
 },
}


 btnEl.addEventListener("click", async () =>{
    
    const response = await fetch(apiUrl,options);
    const data = await response.json()
    cocktailName.innerHTML = data[0].name
    instructions.innerHTML= data[0].instructions
    ingridients.innerHTML = data[0].ingredients


    




    
    
    
    console.log(data);
    
    

    

    



})
