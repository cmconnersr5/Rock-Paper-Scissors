function getUserSelection(){
let rock = document.querySelector('#btn1')
    let rockSelection = () => {
        let a = 'rock'
        return(a);}
    rock.addEventListener('click', rockSelection)
    

let paper = document.querySelector('#btn2')
    function paperSelection() {
        let b = 'paper'
        return(b);}
    paper.addEventListener('click', paperSelection)


let scissors = document.querySelector('#btn3')
    function scissorSelection() {
        let c = 'scissors'
        return(c)}  
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