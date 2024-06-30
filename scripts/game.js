// Arrays for patterns of clicks
let player_clicks = [];
let required_clicks = [];

// boolean for serves as an indicator for startig the game
let gameStarted = false;

// To keep track of button clicks and which level we're on
let click_count = 0;
let level_count = 1;

// Vars for DOM elements
const document_body = document.getElementsByTagName("body")[0];
const level_title = document.getElementById("level-title");
const game_buttons = document.querySelectorAll(".btn");

// Audio function
const playAudio = (selectedButton) => {
  let audio;

  if (selectedButton.classList.contains("green")) {
    audio = new Audio("./sounds/green.mp3");
  } else if (selectedButton.classList.contains("red")) {
    audio = new Audio("./sounds/red.mp3");
  } else if (selectedButton.classList.contains("yellow")) {
    audio = new Audio("./sounds/yellow.mp3");
  } else if (selectedButton.classList.contains("blue")) {
    audio = new Audio("./sounds/blue.mp3");
  }
  return audio;
};

//Pressed Toggles
const togglePress = (toToggle) => {
  const button_toggle = () => toToggle.classList.toggle("pressed");

  button_toggle();

  setTimeout(button_toggle, 100);
};

// flashed button is clicked and stored
const generateSequence = () => {
  const random_index = Math.floor(Math.random() * game_buttons.length);
  const selected_button = game_buttons[random_index];

  togglePress(selected_button);
  playAudio(selected_button).play();

  required_clicks.push(selected_button.id);
};