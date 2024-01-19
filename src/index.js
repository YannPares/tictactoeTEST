// TO-DO: Implement game below

// DIDN'T HAVE ANY TIME TO RESOLVE IT. TOO JUNIOR MAYBE. THANKS FOR THE OPORTUNITY. I'LL KEEP TRYING :)

let board = ['', '', '', '', '', '', '', '','', '', '', '','', '', '', '']

for (let i = 0; i < board.length; i++) {
    console.log(i)
}
const clickedBoxTest = () => {
    let box = document.querySelector('.box')
}

window.onload = () => {
    welcomeMessage()
    hiddeRestartBtn()
    player1Active()
}

const welcomeMessage = () => {
    let status = document.querySelector('#status')
    return status.innerHTML = "Game in progress..."
}

const hiddeRestartBtn = () => {
    let button = document.querySelector('.restart')
    return button.style.display = 'none'
}

const player1Active = () => {
    let player = document.querySelector('#player1')
    player.classList.add('active')
}

const player1Inactive = () => {
    let player = document.querySelector('#player1')
    player.classList.remove('active')
}

const player2Active = () => {
    let player = document.querySelector('#player2')
    player.classList.add('active')
}

const player2Inactive = () => {
    let player = document.querySelector('#player2')
    player.classList.remove('active')
}

const clickedTileByPlayer1 = () => {
    let tile = querySelectorAll('.tile')
    tile.innerHTML = "X"
    
    player2Active()
    player1Inactive()
}

const clickedTileByPlayer2 = () => {
    let tile = querySelectorAll('.tile')
    tile.innerHTML = "O"

    player1Active()
    player2Inactive()
}


function getTiles(){
    return document.getElementsByClassName('tile')
}
const tiles = getTiles()

function getPlayers(){  
    return document.getElementsByClassName('player')
}
const players = getPlayers()

