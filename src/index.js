// TO-DO: Implement game below

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

const playerActive = (currentPlayer) => {
    let player = document.querySelector(`#${currentPlayer}`)
    player.classList.add('active')
}

let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

let currentPlayer = 1; 


const winConditions = [
 
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]             
];

const squareWinConditions = [

  [0, 1, 4, 5], [1, 2, 5, 6], [2, 3, 6, 7], 
  [4, 5, 8, 9], [5, 6, 9, 10], [6, 7, 10, 11], 
  [8, 9, 12, 13], [9, 10, 13, 14], [10, 11, 14, 15],
  [1, 4, 8, 12], [2, 5, 9, 13], [3, 6, 10, 14], 
  [0, 5, 10, 15], [3, 6, 9, 12] 
];

const tiles = document.getElementsByClassName('tile');

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', () => clickedTile(i));
}

function clickedTile(index) {
  if (board[index] === '') {



    if (tiles[index].classList.contains('marked')) {
      board[index] = '';
      tiles[index].innerHTML = '';
      tiles[index].classList.remove('marked');
    } else {

      board[index] = currentPlayer === 1 ? 'X' : 'O';
      tiles[index].innerHTML = board[index];
      tiles[index].classList.add('marked');

   
      if (checkWinConditions(winConditions) || checkWinConditions(squareWinConditions)) {
        announceWinner(currentPlayer);
        return;
      }


      currentPlayer = currentPlayer === 1 ? 2 : 1;
      playerActive(currentPlayer)
    }
  }
}

function checkWinConditions(conditions) {
  for (const condition of conditions) {
    const [a, b, c, d] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
      return true;
    }
  }
  return false;
}

function announceWinner(player) {
  let status = document.querySelector('#status');
  status.innerHTML = `Player ${player} wins!`;

}
