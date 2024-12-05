let gameSeq = [];
let userSeq = [];

let btns = ["red" , "green" , "orange" , "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        
    }
    levelup();
    
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
        btn.classList.remove("flash");
    }, 100);
};

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let RandColor  = btns[randIdx];
    let randbtn = document.querySelector(`.${RandColor}`);
    gameSeq.push(RandColor);
    console.log(gameSeq);
    btnflash(randbtn);
};

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup ,1000);
        }
    }else{
        h2.innerHTML = `<i>Game Over! Your Score was : <b>${level}</b><br> Press any Key to start..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 100)
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    btnflash(btn);

    UserColor = btn.getAttribute("id");
    userSeq.push(UserColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(button of allBtn){
    button.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq  =[];
    userSeq = [];
    level = 0;
}