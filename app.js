//example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//example two
const playerOne = {
  name: "tim",
  Marker: "x",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player("steve", "x");
console.log(player.name); // 'steve'
