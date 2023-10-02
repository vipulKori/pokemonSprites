const container = document.querySelector('#container');


const base = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/';

for (let index = 1; index < 150; index++) {

    const pokeDiv = document.createElement('div');
    pokeDiv.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${index}`;


    const newImg = document.createElement('img');
    newImg.src = `${base}${index}.png`;

    pokeDiv.appendChild(newImg);
    pokeDiv.appendChild(label);
    container.appendChild(pokeDiv);
}
