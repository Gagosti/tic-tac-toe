document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

function handleClick(event) {

  let square = event.target;
  let position = square.id;

  if(handleMove(position)) {

    setTimeout(() => {alert(`O jogo acabou - O Vencedor foi o jogoador ${playerTime}`);}, 10);
  };
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })
}

// function resetGame() {
//   let squares = document.querySelectorAll(".square");
//   let button = document.getElementById("reset");


//   button.addEventListener("click", resetALL)
// }

// function resetALL(event) {
//   let squares = document.querySelectorAll(".square");
//   event.innerHTML = `<div></div>`
// }
