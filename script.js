const tanah=document.querySelectorAll('.tanah')
const Listtikus=document.querySelectorAll('.tikus')
const start=document.querySelector('.start')
const ScoreBoard=document.querySelector('#score')
const TimeBoard=document.querySelector('#time')
const popSound=document.querySelector('#popsound')
let RandomNumberBefore;
let score=0;
let time=20;
function timer() {
   const timerNumber= setInterval(() => {
        if (time<=0) {
            clearInterval(timerNumber)
        }
        TimeBoard.innerText=time;
        time-=1
    }, 1000);       
}

// Munculkan Tikus
function showTikus(tanah) {
    const RandomNumber=Math.floor(Math.random()*tanah.length)    
    if (RandomNumber===RandomNumberBefore) {
        showTikus(tanah)
    }else{
            tanah[RandomNumber].classList.add('muncul')
            setTimeout(() => {
                tanah[RandomNumber].classList.remove('muncul')
            }, 600);           
    } 
    RandomNumberBefore=RandomNumber
}

// Pukul Tikus
function pukulTikus(Listtikus) {
    Listtikus.forEach(tikus => {
        tikus.addEventListener('click',(e)=>{
            popSound.play()
            score++
            ScoreBoard.innerText=score;
            tikus.parentElement.classList.remove('muncul')
        })
    });
}

// start
start.addEventListener('click',()=>{ 
    time=20
    timer()
    score=0
    ScoreBoard.innerText=score;
   let loopingShowTikus= setInterval(() => {
        showTikus(tanah)     
    }, 600)
    start.disabled=true;
    setTimeout(() => {
        clearInterval(loopingShowTikus)
        start.disabled=false;
    }, 20000);
  
})


  

pukulTikus(Listtikus)  
