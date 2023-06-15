const container = document.querySelector('.container');

const unsplash_URL = 'https://source.unsplash.com/random/';

const row = 5;

for (let i = 0; i < row * 3; i++) {
    const Image = document.createElement('img');
    Image.src = `${unsplash_URL}${getRandomSize()}`;
    container.appendChild(Image);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
