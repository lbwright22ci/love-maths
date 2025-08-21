//Wait for page to finish loading
// listen for button click

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type')==='submit') {
                checkAnswer();
            }else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    runGame('addition');
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    //creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType ==='addition'){
        displayAdditionQuestion(num1, num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} Aborting!`;
    }
}

/**
 * checks the answer against the first element in the 
 * returned calculatedCorrectAnswerarray
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert('Hey! You got it right :D!');
        incrementScore();
    }else{
        alert(`Awww... you answered ${userAnswer}.  The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
/**
 * gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator ==='+'){
        return [operand1 + operand2, 'addition'];
    }else{
        alert(`Unimplementedoperator ${operator}`);
        throw `Unimplementedoperator ${operator}. Aborting! `;
    }
}
/**
 * gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let score = parseInt(document.getElementById('score').innerText);
    let newscore = ++score;
    document.getElementById('score').innerText = newscore;
}
/**
 * gets the current incorrect answer count from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let incorrect = parseInt(document.getElementById('incorrect').innerText);
    let newincorrect = ++incorrect;
    document.getElementById('incorrect').innerText = newincorrect;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}