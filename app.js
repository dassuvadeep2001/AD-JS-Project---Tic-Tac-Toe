let boxes = document.querySelectorAll(".box")
let resetButton = document.querySelector("#reset-btn")
let newgameButton = document.querySelector("#new-btn")
let messageContainer = document.querySelector(".msg-container")
let message= document.querySelector("#msg")

let turnO = true; //playerO, playerX
let count=0 //to Track draw

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

// part of reset game/new game function
const game=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    messageContainer.classList.add("hide")
};

//part of box value
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

       if(turnO){
            //playerO
             box.innerText ="O";
             turnO=false;
        }
        else{
            //playerX
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true; //when all boxes is fill with value then it will not clickable
        count++;
        checkWinner()
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

//part of Draw Game
const gameDraw = () => {
    message.innerText = `Game was a Draw.`;
    messageContainer.classList.remove("hide");
    disableBoxes();
};

//disable box function
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

//enable box function 
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

//part of winner message
const showWinner =(winner)=>{
    message.innerText=`Congratulation, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();//if winner found box will diabled
    };
    
    //part of check winner
    const checkWinner=()=>{
        for(let i of winPatterns){
            // check the value of the position depend on the array index
            let position1Value=boxes[i[0]].innerText;
            let position2Value=boxes[i[1]].innerText;
            let position3Value=boxes[i[2]].innerText;
    
            if(position1Value != "" && position2Value != "" && position3Value != ""){
                if(position1Value===position2Value && position2Value===position3Value){
                    showWinner(position1Value);
                    return true;
                }
            }
        }
    };

//part og button when its clicked
newgameButton.addEventListener("click",game);
resetButton.addEventListener("click",game)


  
