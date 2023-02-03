function getUserSelection(){
let rock = document.querySelector('#btn1')
    let rockSelection = () => {
        let a = 'rock'
        console.log(a);
    }
    rock.addEventListener('click', rockSelection)
    

let paper = document.querySelector('#btn2')
    function paperSelection() {
        let b = 'paper'
        console.log(b);
    }
    paper.addEventListener('click', paperSelection)


let scissors = document.querySelector('#btn3')
    scissors.addEventListener('click', scissorSelection)
    function scissorSelection() {
        let c = 'scissors'
        console.log(c)
    }  
    scissors.addEventListener('click', scissorSelection)
}

let playerSelection = getUserSelection();

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
let computerSelection=Math.random()
    if (computerSelection <= 0.34){
        computerSelection="rock";
    } else if (computerSelection <= 0.67){
        computerSelection="paper";
    } else {
        computerSelection="scissors";
    }
    
playRound(playerSelection, computerSelection);