const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const index = Array.from(cells).indexOf(cell);

  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  checkResult(currentPlayer);
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkResult(player) {
  const isWinner = winningConditions.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === player;
    });
  });

  if (isWinner) {
    gameActive = false;
    Swal.fire(`🎉${player} wins!🥳 `);
    return;
  }

  const isDraw = [...cells].every(cell => {
    return cell.textContent !== '';
  });

  if (isDraw) {
    gameActive = false;
    Swal.fire({
  title: "Oops!.. Thats a draw😿",
  text: "",
  icon: ""
});
  }
}

function NewGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  gameActive = true;
  currentPlayer = 'X';
}

resetButton.addEventListener('click', NewGame);
OnlineWebFonts_Com({
  'Id':'.div',
  'Data':__Animations['558510'],
}).Play();
