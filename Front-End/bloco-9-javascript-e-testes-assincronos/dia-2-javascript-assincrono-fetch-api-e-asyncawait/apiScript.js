// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {

  const container = document.getElementById('jokeContainer')

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject);
  const data = await response.json()
  console.log(data);
  container.innerHTML = data.joke
};

window.onload = () => fetchJoke();