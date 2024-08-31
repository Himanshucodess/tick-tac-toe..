let boxes = document.querySelectorAll(".box");
let resB = document.querySelector(".resB");
let newGameBtn = document.querySelector(".new-btn");
let msgCo = document.querySelector(".msgCon");
let msg = document.querySelector(".msg");

let turn0= true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const logic =  (event) =>{
    let box = event.target;
if (turn0) {
box.innerText="0";
turn0= false;
} else {
    box.innerText="X";
    turn0=true;
}
};


  boxes.forEach (box =>  {
    box.addEventListner("click",logic)
  });
  box.disable= true;
  count++;
  let isWinner= checkWinner();
  

  if (count === 9 && !isWinner){
    msg.innerText="Game Is Draw";
    msgCo.classList.remove("hide"); //explainnnnnnn
    boxes.disable=true;
}

const enableboxes =() =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
    };

const showWinner =(winner) =>{
    msg.innerText=`Congo ${winner} JEET CHUKE H`;
msgCo.classList.remove("hide")// explainnnnnnnnnnnnn
boxes.disabled=true;
}  ;
 
const checkWinner = () => {
    for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
    return false;
  };

  const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgCo.classList.add("hide"); // Hide the message container
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetB.addEventListener("click", resetGame);
