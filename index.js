//to-do: 
// add scorekeeper and 5 win limit
// add single iteration functionality / disable buttons after click
const res = document.querySelector('#result');
let rock = document.querySelector('#btn1')
    rock.addEventListener('click', playRock)
    function playRock(){
        res.classList.add('.disable');
        console.log(res.classList)
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
        stateHandle();  
        playRound(playerSelection,computerSelection);
    }
    
let paper = document.querySelector('#btn2')
    paper.addEventListener('click', playPaper)
    function playPaper() {
        res.classList.add('.disable');
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
        stateHandle();
        playRound(playerSelection,computerSelection);
    }

let scissors = document.querySelector('#btn3')
    scissors.addEventListener('click', playScissors)
    function playScissors (){
        res.classList.add('.disable');
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
        stateHandle(); 
        playRound(playerSelection,computerSelection);
    }

//play again funtion, removes effects and result display
const playAgain = document.querySelector('#btn7')
    playAgain.addEventListener('click', () => {
        const buttonAll = document.querySelectorAll('.button');
        buttonAll.forEach(button => {
            button.classList.remove('selected');
        });
        const dispClear = document.querySelector('#result')
        dispClear.textContent=''
    });

//logic for RPS game
function playRound(playerSelection, computerSelection) {  
    if (playerSelection == computerSelection){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        const disp = document.createTextNode('TIE!')
        res.appendChild(disp);
        res.classList.add('display')
        console.log("It's a TIE!");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        const disp = document.createTextNode('Player Wins!')
        res.appendChild(disp);
        res.classList.add('display')
        console.log("Player Wins!")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        const disp = document.createTextNode('Player Wins!')
        res.appendChild(disp);
        res.classList.add('display')
        console.log("Player Wins!");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        const disp = document.createTextNode('Player Wins!')
        res.appendChild(disp);
        res.classList.add('display')
        console.log("Player Wins!");
    } else {
        console.log("Player Chose " + playerSelection);
        console.log("Computer Chose " + computerSelection);
        const disp = document.createTextNode('Computer Wins!')
        res.appendChild(disp);
        res.classList.add('display')
        console.log("Computer Wins!")
    }
}

// allow only one selection
function stateHandle(){
    if (res.classList.contains('.disable')){
        let x = document.querySelectorAll('.button')
        x.forEach(button => {button.disabled = true})
        };
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
