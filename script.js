const jokeP = document.getElementById('jokeP');
const button = document.getElementById('button');
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single';

let getJoke = () =>{
    fetch(apiUrl)
    .then(data => data.json())
    .then (item =>{
        jokeP.textContent = `${item.joke}`;
    });
}
button.addEventListener('click',getJoke);
getJoke();