//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//When you click the button again, you will get another example of your drink search, if there is more than one kind. 
//Works with a space in the search parameter ex. moscow mule
//Works with uppercase or lowercase input
document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    let input = document.querySelector('input').value 
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let random = Math.floor(Math.random() * data.drinks.length)
        console.log(data)
        console.log(data.drinks[random])
        document.querySelector('h2').innerText = data.drinks[random].strDrink
        document.querySelector('img').src = data.drinks[random].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[random].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


// document.querySelector('button').addEventListener('click', getDrink)


// function getDrink(){
//     let input = document.querySelector('input').value 
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=moscow mule")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data.drinks)
//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }



  