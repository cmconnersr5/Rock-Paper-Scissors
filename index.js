//to-do: 
// fix the computer choice string display
// add result display
// add button effects and styles
// stye computer choice display

let rock = document.querySelector('#btn1')
    rock.addEventListener('click', playRock)
    function playRock(){
        let playerSelection="rock";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            } else {
            computerSelection="scissors";
            }
        const container = document.getElementById('compChoice');
        const text = document.createTextNode(computerSelection);
        container.appendChild(text);    
        playRound(playerSelection,computerSelection);
    }
    
let paper = document.querySelector('#btn2')
    paper.addEventListener('click', playPaper)
    function playPaper() {
        let playerSelection="paper";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            } else {
            computerSelection="scissors";
            }
        const container = document.getElementById('compChoice');
        const text = document.createTextNode(computerSelection);
        container.appendChild(text);
        playRound(playerSelection,computerSelection);
    }

let scissors = document.querySelector('#btn3')
    scissors.addEventListener('click', playScissors)
    function playScissors (){
        let playerSelection="scissors";
        let computerSelection=Math.random()
            if (computerSelection <= 0.34){
            computerSelection="rock";
            } else if (computerSelection <= 0.67){
            computerSelection="paper";
            } else {
            computerSelection="scissors";
            }
        const container = document.getElementById('compChoice');
        const text = document.createTextNode(computerSelection);
        container.appendChild(text);    
        playRound(playerSelection,computerSelection);
    }

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
