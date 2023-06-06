console.log("hello!!");
let turn = "X";


// +++++++++++++++++++++++ functon to change turn+++++++++++++++
const changeTurn = ()=>{
    return turn === "X"?"0" : "X";
}

const checkWin = ()=>{

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    boxtext.addEventListener('click', ()=>{
        
    })
})