const cardArray = [
    { name: 'banana', img: 'img/banana.png' },
    { name: 'banana', img: 'img/banana.png' },
    { name: 'morango', img: 'img/morango.png' },
    { name: 'morango', img: 'img/morango.png' },
    { name: 'uvas', img: 'img/uvas.png' },
    { name: 'uvas', img: 'img/uvas.png' },
    { name: 'laranja', img: 'img/laranja.png' },
    { name: 'laranja', img: 'img/laranja.png' },
    { name: 'maca', img: 'img/maca.png' },
    { name: 'maca', img: 'img/maca.png' },
    { name: 'mamao', img: 'img/mamao.png' },
    { name: 'mamao', img: 'img/mamao.png' }
];

cardArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    cardArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        card.innerHTML = `
            <div class="cover">?</div>
            <img src="${item.img}" alt="${item.name}">
        `;
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.classList.add('flipped');

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
    }
    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === cardArray.length / 2) {
        alert('Parabéns! Você encontrou todos os pares!');
    }
}

function updateProgressBar() {
    const progress = (moves / (cards.length / 2)) * 100;
    progressBar.style.width = `${progress}%`;
}


createBoard();


