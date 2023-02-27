
import {Player} from "./player.js"
import {Ball} from "./ball.js"

const canvas = document.querySelector('.canvas');

const newPlayer = new Player("top");
const bottomPlayer = new Player("bottom");
const ball = new Ball();
const topScore = document.querySelector('.top');
const bottomScore = document.querySelector('.bottom');
canvas.appendChild(newPlayer.thing);
canvas.appendChild(bottomPlayer.thing);
canvas.appendChild(ball.ball);


setInterval(()=>{
    ball.checkConclusion()
    ball.move(ball.currentDirection)
    ball.conclusionPlayer(newPlayer,bottomPlayer);
    bottomScore.textContent = `Bottom: ${ball.score.bottom}`
    topScore.textContent = `Top: ${ball.score.top}`
}, 40)

document.addEventListener('keypress', (e)=>{
    if(e.keyCode === 49){
        newPlayer.move('left');
    }else if(e.keyCode === 51){
        newPlayer.move('right');
    }else if(e.keyCode === 97){
        bottomPlayer.move('left');
    }else if(e.keyCode === 100){
        bottomPlayer.move('right');
    }
})




