const playerScore = document.querySelector("#score");
const opponentScore = document.querySelector("#opp-score");
const moveEl = document.querySelector("#move-el");
const button = document.querySelectorAll("#option");
const greet = document.querySelector("#greeting");
const wrapper = document.querySelector("#wrapper");
const startBtn = document.querySelector("#start");

let values = ["rock", "paper", "scissors"];
let player = 0;
let opponent = 0;
let move = 10;
let i;

function random(){
    i = Math.floor(Math.random() * 3);
};
// start game
if (move == 10){
    random();
    console.log(values[i])
};
// add an event listener that listens for when each button is clicked
button.forEach(function(btn){
    btn.addEventListener("click", function(){
        // store each buttons inner html in a variable
        const button1 = btn.innerHTML;
        // condition to check if the entry is correct
        if(values[i] == "paper" && button1 == "scissors"){
            render();
        } else if(values[i] == "rock" && button1 == "paper"){
            render();
        } else if(values[i] == "scissors" && button1 == "rock"){
            render();
        }else{
            opponent += 1;
            opponentScore.innerHTML = opponent;
            move -= 1;
            random();
            console.log(values[i])
            moveEl.innerHTML = `move left: ${move}`;
        };
        // condition to check winner and end game
        if (move < 1 && player < opponent){
            greet.innerHTML = "sorry, you lost!";
            gameOver();
        }else if (move < 1 && player > opponent){
            greet.innerHTML = "congrats, you won!";
            gameOver();
        } else if (move < 1 && player == opponent){
            greet.innerHTML = "tie, try again!";
            gameOver()
        }
    });
});
// function for when player wins
function render(){
    player += 1;
    playerScore.innerHTML = player;
    move -= 1;
    random();
    console.log(values[i])
    moveEl.innerHTML = `move left: ${move}`;
};
// function for when game is over
function gameOver(){
    wrapper.innerHTML = `
        game over!
        <p id="greeting">
            ${greet.innerHTML}
        </p>
    `
    startBtn.style.display = 'block';
};
startBtn.style.display = 'none';
startBtn.addEventListener("click", function(){
    window.location.reload();
});