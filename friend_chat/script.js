const grid = document.getElementById("tetris-grid");
const scoreElement = document.getElementById("score");

// Dimensiones del tablero
const ROWS = 20;
const COLS = 10;

// Crear la matriz del tablero
let board = [];
for (let row = 0; row < ROWS; row++) {
  board[row] = [];
  for (let col = 0; col < COLS; col++) {
    board[row][col] = 0;
  }
}

// Matriz de las piezas del Tetris
const pieces = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]], // Z
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 1], [0, 0, 1]], // L
  [[1, 1, 1], [1, 0, 0]] // J
];

const pieces_name = [
  'piece-I',
  'piece-O',
  'piece-S',
  'piece-Z',
  'piece-T',
  'piece-L',
  'piece-J'
];

const COLORS = [
  '#00bcd4', // I (Cian)
  '#ffeb3b', // O (Amarillo)
  '#e91e63', // S (Rosa)
  '#673ab7', // Z (Púrpura)
  '#03a9f4', // T (Azul claro)
  '#ff9800', // L (Naranja)
  '#ff5722' // J (Rojo)
];

// Coordenadas de la pieza actual
let currentPiece;
let currentX;
let currentY;

// Puntuación
let score = 0;

// Función para crear una nueva pieza
function createPiece() {
  const pieceType = Math.floor(Math.random() * pieces.length);
  const piece = pieces[pieceType];
  const color = COLORS[pieceType];
  currentPiece = piece;
  currentX = Math.floor(COLS / 2) - Math.floor(piece[0].length / 2);
  currentY = 0;
  drawPiece(color);
}

// Función para dibujar una pieza
function drawPiece(color) {
  for (let row = 0; row < currentPiece.length; row++) {
    for (let col = 0; col < currentPiece[row].length; col++) {
      if (currentPiece[row][col]) {
        const cell = document.createElement('div');
        const pieceIndex = pieces.findIndex(piece => JSON.stringify(piece) === JSON.stringify(currentPiece));
        const pieceClass = pieces_name[pieceIndex];
        cell.className = `tetris-piece ${pieceClass} ${color}`;
        grid.appendChild(cell);
      }
    }
  }
}

// Función para dibujar el tablero
function drawBoard() {
  let html = "";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === 1 || (currentPiece && currentPiece[row - currentY] && currentPiece[row - currentY][col - currentX] === 1)) {
        const pieceIndex = pieces.findIndex(piece => JSON.stringify(piece) === JSON.stringify(currentPiece));
        const pieceClass = pieces_name[pieceIndex];
        const pieceColor = COLORS[pieceIndex];
        html += `<div class="tetris-piece ${pieceClass} ${pieceColor}"></div>`;
      } else {
        html += '<div class="empty"></div>';
      }
    }
  }
  grid.innerHTML = html;
}

// Función para verificar si la pieza choca con los bordes o con otras piezas
function checkCollision() {
  for (let row = 0; row < currentPiece.length; row++) {
    for (let col = 0; col < currentPiece[row].length; col++) {
      if (currentPiece[row][col] === 1) {
        const newX = currentX + col;
        const newY = currentY + row;
        if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && board[newY][newX] === 1)) {
          return true;
        }
      }
    }
  }
  return false;
}

// Función para fijar la pieza actual en el tablero
function placePiece() {
  for (let row = 0; row < currentPiece.length; row++) {
    for (let col = 0; col < currentPiece[row].length; col++) {
      if (currentPiece[row][col] === 1) {
        const x = currentX + col;
        const y = currentY + row;
        if (y >= 0) {
          board[y][x] = 1;
        }
      }
    }
  }
}

// Función para eliminar líneas completas y otorgar puntos
function clearLines() {
  let linesCleared = 0;

  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row].every(cell => cell === 1)) {
      board.splice(row, 1);
      board.unshift(new Array(COLS).fill(0));
      linesCleared++;
    }
  }

  // Otorgar puntos adicionales por cada línea eliminada en un solo movimiento
  if (linesCleared > 0) {
    score += 10 * Math.pow(2, linesCleared - 1);
  }

  updateScore();
}

// Función para mover la pieza hacia abajo
function moveDown() {
  currentY++;
  if (checkCollision()) {
    currentY--;
    placePiece();
    clearLines();
    createPiece();
    if (checkCollision()) {
      // Fin del juego
      alert("¡Fin del juego!");
      resetGame();
    }
  }
  updateBoard();
}

// Función para mover la pieza hacia la izquierda
function moveLeft() {
  currentX--;
  if (checkCollision()) {
    currentX++;
  }
  updateBoard();
}

// Función para mover la pieza hacia la derecha
function moveRight() {
  currentX++;
  if (checkCollision()) {
    currentX--;
  }
  updateBoard();
}

// Función para rotar la pieza
function rotatePiece() {
  const rotatedPiece = currentPiece[0].map((_, index) => currentPiece.map(row => row[index])).reverse();
  const previousPiece = currentPiece;
  currentPiece = rotatedPiece;
  if (checkCollision()) {
    currentPiece = previousPiece;
  }
  updateBoard();
}

// Función para reiniciar el juego
function resetGame() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      board[row][col] = 0;
    }
  }
  createPiece();
  updateBoard();
}

// Función para actualizar la puntuación
function updateScore() {
  scoreElement.textContent = score;
}

// Iniciar el juego
function startGame() {
  createPiece();
  updateBoard();
  updateScore();
  setInterval(moveDown, 1000); // Mover hacia abajo cada segundo
}

// Función para actualizar el tablero
function updateBoard() {
  drawBoard();
}

// Manejo de eventos de teclado
document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 37: // Flecha izquierda
      moveLeft();
      break;
    case 38: // Flecha arriba
      rotatePiece();
      break;
    case 39: // Flecha derecha
      moveRight();
      break;
    case 40: // Flecha abajo
      moveDown();
      break;
  }
});

// Iniciar el juego al cargar la página
startGame();
