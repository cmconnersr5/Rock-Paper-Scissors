//to-do: 
// add result display
// add single iteration functionality / disable buttons after click

let rock = document.querySelector('#btn1')
    rock.addEventListener('click', playRock)
    function playRock(){
        const but = document.querySelector('#btn1');
        but.classList.add('selected');
        let playerSelection="rock";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            const but = document.querySelector('#btn4');
            but.classList.add('selected');
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            const but = document.querySelector('#btn5');
            but.classList.add('selected');
            } else {
            computerSelection="scissors";
            const but = document.querySelector('#btn6');
            but.classList.add('selected');
            }  
        playRound(playerSelection,computerSelection);
    }
    
let paper = document.querySelector('#btn2')
    paper.addEventListener('click', playPaper)
    function playPaper() {
        const but = document.querySelector('#btn2');
        but.classList.add('selected');
        let playerSelection="paper";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            const but = document.querySelector('#btn4');
            but.classList.add('selected');
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            const but = document.querySelector('#btn5');
            but.classList.add('selected');
            } else {
            computerSelection="scissors";
            const but = document.querySelector('#btn6');
            but.classList.add('selected');
            }
        playRound(playerSelection,computerSelection);
    }

let scissors = document.querySelector('#btn3')
    scissors.addEventListener('click', playScissors)
    function playScissors (){
        const but = document.querySelector('#btn3');
        but.classList.add('selected');
        let playerSelection="scissors";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            const but = document.querySelector('#btn4');
            but.classList.add('selected');
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            const but = document.querySelector('#btn5');
            but.classList.add('selected');
            } else {
            computerSelection="scissors";
            const but = document.querySelector('#btn6');
            but.classList.add('selected');
            } 
        playRound(playerSelection,computerSelection);
    }

const playAgain = document.querySelector('#btn7')
    playAgain.addEventListener('click', () => {
        const buttonAll = document.querySelectorAll('.button');
        buttonAll.forEach(button => {
            button.classList.remove('selected');
        });
        
    });

function playRound(playerSelection, computerSelection) {  
    if (playerSelection == computerSelection){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        console.log("It's a TIE!");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        console.log("Player Wins!")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        console.log("Player Wins!");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        console.log("Player Wins!");
    } else {
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        console.log("Computer Wins!")
    }
}

 

//generate computer selection randomly
// let computerSelection=Math.random()
//     if (computerSelection <= 0.34){
//         computerSelection="rock";
//     } else if (computerSelection <= 0.67){
//         computerSelection="paper";
//     } else {
//         computerSelection="scissors";
//     }
