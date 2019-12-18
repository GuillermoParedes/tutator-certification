const axios = require('axios');

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

async function Main () {

    const id = numeroAleatorio(1, 20);
    console.log('ID', id);
    const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${id}`);

    const [ person ] = data;

    // console.log('the response', person);
    console.log('The Name is: ', person.name);
    console.log('The Nickname is: ', person.nickname);
    console.log('The Status is: ', person.status);
    console.log('The Ocupattion is: ', person.occupation);

}

// Call Main
Main();