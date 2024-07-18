let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissor");
let numberC=document.querySelector("#numberC");
let numberY=document.querySelector("#numberY");
let display=document.querySelector("#display");
let stats=document.querySelector("#stats");
let userScore=0;
let compScore=0;
const genComputerChoice=()=>{
    let comp=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return comp[randomIndex];
};


const draw=(userchoice,compChoice)=>{
    console.log("draw game");
    display.innerText= "game is draw!";
    stats.innerText = `Computer choice = ${compChoice} \n Your choice = ${userchoice}`;
};
const userWon=(userchoice,compChoice)=>{
    console.log("user won!");
    userScore++;
    numberY.innerText = userScore;
    display.innerText = "User won!";
    stats.innerText = `Computer choice = ${compChoice} \n Your choice = ${userchoice}`;
};
const compWon=(userchoice,compChoice)=>{
    console.log("computer won!");
    compScore++;
    numberC.innerText=compScore;
    display.innerText = "Computer won!";
    stats.innerText = `Computer choice = ${compChoice} \n Your choice = ${userchoice}`;
};

const playgame = (userchoice)=>{
    console.log("userchoice= ",userchoice);
    const compChoice=genComputerChoice();
    console.log("computer choice = ",compChoice);
    if(userchoice === compChoice){
        draw(userchoice,compChoice);
    }
    else if((userchoice=="rock" && compChoice=="scissor") || (userchoice=="paper" && compChoice=="rock") || (userchoice=="scissor" && compChoice=="paper")){
        userWon(userchoice,compChoice);
    }
    else{
        compWon(userchoice,compChoice);
    }


};
rock.addEventListener("click",()=>{
    console.log("rock was clicked");
    playgame(rock.getAttribute("id"));
});
paper.addEventListener("click",()=>{
    console.log("paper was clicked");
    playgame(paper.getAttribute("id"));
});
scissors.addEventListener("click",()=>{
    console.log("scissors was clicked");
    playgame(scissors.getAttribute("id"));
});

