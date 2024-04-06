const display=document.querySelector('.message')
const compScore=document.querySelector('.computerScore')
const youScore=document.querySelector('.yourScore')
const remaining=document.querySelector('.remaining')
const newplay=document.querySelector('.newgame')
const declare=document.querySelector('.declare')
const stone=document.querySelector('.stone')
const paper=document.querySelector('.paper')
const scissor=document.querySelector('.scissor')
const gameOver=document.querySelector('.gameOver')
const logoBox=document.querySelector('.logo')
const messageDiv=document.querySelector('.message_div')
const tie=document.querySelector('.tie')
const imgYourMove=document.querySelector('.your_move')
const imgCompMove=document.querySelector('.computer_move')
console.log(imgCompMove);

const p=document.createElement('button');
const img=document.createElement('img')
let playnumber=0;
let playgame=true
let yourScore=0;
let computer=0;
let tieScore=0;

if(playgame){
    
    stone.addEventListener('click',function(e){
        userInput=1;
        validateInput(userInput)
    })
    paper.addEventListener('click',function(e){
        userInput=2;
        validateInput(userInput)
    })
    scissor.addEventListener('click',function(e){
        userInput=3;
        validateInput(userInput)
    })
   
}

function validateInput(userInput){
    if(isNaN(userInput)){
        alert('Enter a valid number')
    }else if(userInput<1 || userInput>3){
        alert('1. Stone   2.Paper   3.Scissor ')
    }else{
        checkWinner(userInput)
    }
}

function checkWinner(userInput){
   
    const random=parseInt(Math.random()*(3)+1)
    playnumber++;
    if(userInput===random){
        displayMessage('Tie')
        tieScore++;
        displayMove(userInput,random)
        displayTie(tieScore)
    }
    else if (userInput===1 && random===2){
        displayMessage('You: Stone - Computer: Paper. Computer Win')
        computer++;
        displayMove(userInput,random)
        displayComputerScore(computer)
    }
    else if (userInput===2 && random===3){
        displayMessage('You: Paper - Computer: Sessior. Computer Win')
        computer++;
        displayMove(userInput,random)
        displayComputerScore(computer)
    }
    else if (userInput===3 && random===1){
        displayMessage('You: Sessior - Computer: Stone. Computer Win')
        computer++;
        displayMove(userInput,random)
        displayComputerScore(computer)
    }
    else if (userInput===2 && random===1){
        displayMessage('You: Paper - Computer: Stone. You Win')
        yourScore++;
        displayMove(userInput,random)
        displayYourScore(yourScore)
    }
    else if (userInput===3 && random===2){
        displayMessage('You: Sessior - Computer: Paper. You Win')
        yourScore++;
        displayMove(userInput,random)
        displayYourScore(yourScore)
    }
    else if (userInput===1 && random===3){
        displayMessage('You: Stone - Computer: Sessior. You Win')
        yourScore++;
        displayMove(userInput,random)
        displayYourScore(yourScore)
    }
    if(playnumber===7){
        endGame();
    }
    
}

function displayMessage(message){
    remaining.innerHTML=`${7-playnumber}`
    display.innerHTML=`<h2>${message}</h2>`
}

function displayYourScore(yourScore){
    youScore.innerHTML=`${yourScore}`
}
function displayComputerScore(computer){
    compScore.innerHTML=`${computer}`
}
function displayTie(tieScore){
    tie.innerHTML=`${tieScore}`
}

function endGame(){
    declareWinner()
    logoBox.style.display='none';
    gameOver.innerHTML='Game Over'
    p.classList.add('new_game');
    newplay.appendChild(p);
    p.innerHTML="New Game"
    p.setAttribute("style"," height:40px;width:190px;font-size:25px;margin-top:10px;border-radius:15px;");
    imgYourMove.innerHTML=''
    imgCompMove.innerHTML=''

    playgame=false;
    newGame()
    
}

function newGame(){
    const startOver=document.querySelector('.new_game')
    startOver.addEventListener('click',function(){
        playnumber=0
        remaining.innerHTML='7'
        computer=0;
        yourScore=0
        tieScore=0
        displayTie(tieScore)
        displayComputerScore(computer)
        displayYourScore(yourScore)
        declare.innerHTML=''
        display.innerHTML=''
        newplay.removeChild(p);
        logoBox.style.display='';
        gameOver.innerHTML=''
        imgYourMove.innerHTML=''
        imgCompMove.innerHTML=''
        playgame=true;

    })
}
function declareWinner(){
    console.log(`Comp ${computer}`);
    console.log(`You ${yourScore}`);
    if(computer===yourScore){
        declare.innerHTML='Tie'
    }
    else if(computer>yourScore){
        declare.innerHTML='Opps! You Loose.'
    }else{
        declare.innerHTML='Wow! You Won.'
    }
}

function displayMove (yourMove,compMove){

    switch (yourMove) {
        case 1:imgYourMove.innerHTML=`<figure>
            <figcaption style="font-size: 35px; text-align: center;  margin-right: 50px;" >Your move</figcaption>
        <img src="Assets/stonedisplay.png" alt="stone">
    </figure>`
            
            break;
        case 2:imgYourMove.innerHTML=`<figure>
        <figcaption style="font-size: 35px; text-align: center;  margin-right: 50px;" >Your move</figcaption>
    <img src="Assets/paperdisplay.png" alt="paper">
</figure>`
       
            break;
        case 3:imgYourMove.innerHTML=`<figure>
        <figcaption style="font-size: 35px; text-align: center;  margin-right: 50px;" >Your move</figcaption>
       
    </figcaption>
    <img src="Assets/scissorsdisplay.png" alt="scissor">
</figure>`
        
            break;
    }
    switch (compMove) {
        case 1:imgCompMove.innerHTML=`<figure>
        <figcaption>
            <figcaption style="font-size: 35px; text-align: center; margin-left: 10px;">Computer's Move</figcaption>
        </figcaption>
        <img src="Assets/stonedisplay.png" alt="stone">
    </figure>`
            
            break;
        case 2:imgCompMove.innerHTML=`<figure>
        <figcaption>
            <figcaption style="font-size: 35px; text-align: center; margin-left: 10px;">Computer's Move</figcaption>
        </figcaption>
        <img src="Assets/paperdisplay.png" alt="paper">
    </figure>`
        
            break;
        case 3:imgCompMove.innerHTML=`<figure>
        <figcaption>
            <figcaption style="font-size: 35px; text-align: center; margin-left: 10px;">Computer's Move</figcaption>
        </figcaption>
        <img src="Assets/scissorsdisplay.png" alt="scissor">
    </figure>`
       
            break;
        
    
        
    }
}