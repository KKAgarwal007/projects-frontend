let boxes = document.querySelectorAll('.boxes');
let turn1 = document.querySelector('.turn1');
let turn2 = document.querySelector('.turn2');
let msg= document.querySelector('.msg');
let span = document.querySelector('.winner');
let reset = document.getElementById('reset');
let game = document.getElementById('ng');
let turn = true;
let clicksound = new Audio("click.mp3");
let winsound = new Audio("winner.mp3");
let winner = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
reset.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover")
        msg.classList.add("hide")
        box.classList.remove("b-s")
    })
})
game.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover")
        msg.classList.add("hide")
        box.classList.remove("b-s")
    })
})
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
    clicksound.play();
        if(turn){
            box.innerText = "X";
            box.style.color = 'rgb(255, 60, 60)';
            turn2.classList.add("b-s")
            turn1.classList.remove("b-s")
            turn = false;
        }else{
            box.innerText = "O";
            box.style.color = 'rgb(60, 60, 255)';
            turn1.classList.add("b-s")
            turn2.classList.remove("b-s")
            turn = true;
        }
        checkWinner();
    })
})

function checkWinner(){
    for(let condition of winner){
        let box1 = boxes[condition[0]-1].innerText;
        let box2 = boxes[condition[1]-1].innerText;
        let box3 = boxes[condition[2]-1].innerText;

        if(box1!=="" && box2!=="" && box3!==""){
            if(box1===box2 && box2===box3){
                showresult(box1);
                winsound.play();
                boxes.forEach(box=>{
                    box.classList.add("b-s")

                })
                boxes[condition[0]-1].classList.remove("b-s")
                boxes[condition[1]-1].classList.remove("b-s")
                boxes[condition[2]-1].classList.remove("b-s")

            }
        }
    }
}

function showresult(result){
    boxes.forEach(box=>{
        box.disabled = true;
        box.classList.remove("hover")
    })
    msg.classList.remove("hide")
    span.innerText = result;
    if(result === "X"){
        span.style.color = 'rgb(255, 60, 60)';
    }
    else{
        span.style.color = 'rgb(60, 60, 255)';
    }
}