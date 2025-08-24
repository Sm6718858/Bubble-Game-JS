function makeBubble(){
    let clutter = "";
for(let i = 1;i<=120;i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="panelbottom">${rn}</div>`
}
document.querySelector(".bubble").innerHTML = clutter;
}
 
let timer = 60;
function setTimer(){
    let timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else{
            document.querySelector(".bubble").innerHTML = `<h1 >Game Over Babu</h1>`;
            clearInterval(timerint);
        }
        
    }, 1000);
} 
let rv;
function newHit(){
    rv = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent = rv;
}

let score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector(".bubble").addEventListener("click",(dets)=>{
    let clickableVal = Number(dets.target.textContent);
    if(clickableVal === rv){
        increaseScore();
        makeBubble();
        newHit();
    }
})





makeBubble();
setTimer();
newHit();
