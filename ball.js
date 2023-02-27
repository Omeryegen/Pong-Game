export class Ball {
    constructor() {
        this.posY = 290;
        this.posX = 240;
        this.ball = document.createElement('div');
        this.ball.className = "ball";
        this.ball.style.left = `${this.posX}px`
        this.ball.style.top = `${this.posY}px`
        this.currentDirection = "";
        this.directions = ["topRight", "topLeft", "bottomRight", "bottomLeft"]
        this.amount = 5
        this.score = {bottom: 0, top: 0}
    }

    move(direction){
        switch(direction){
            case "topLeft":
                this.posY -= this.amount;
                this.posX -= this.amount;
                this.ball.style.left = `${this.posX}px`
                this.ball.style.top = `${this.posY}px`
                break;
             case "topRight":
                this.posY -= this.amount;
                this.posX += this.amount;
                this.ball.style.left = `${this.posX}px`
                this.ball.style.top = `${this.posY}px`
                break;
             case "bottomLeft":
                this.posY += this.amount;
                this.posX -= this.amount;
                this.ball.style.left = `${this.posX}px`
                this.ball.style.top = `${this.posY}px`
                break;
             case "bottomRight":
                this.posY += this.amount;
                this.posX += this.amount;
                this.ball.style.left = `${this.posX}px`
                this.ball.style.top = `${this.posY}px`
                break;
            default:
                console.log('helelo')
        }
    };
    checkConclusion(){  
        if(this.currentDirection === ""){
            this.currentDirection = this.directions[Math.floor(Math.random() * this.directions.length)]
        }else if(this.posX < 5 && this.currentDirection ==="topLeft"){
            this.currentDirection = "topRight"
        }else if(this.posX < 5 && this.currentDirection ==="bottomLeft"){
            this.currentDirection = "bottomRight"
        }else if(this.posX > 470 && this.currentDirection ==="topRight"){
            this.currentDirection = "topLeft"
        }else if(this.posX > 470 && this.currentDirection ==="bottomRight"){
            this.currentDirection = "bottomLeft"
        }else if(this.posY < 1){
            this.posY = 290;
            this.posX = 240;
            this.score = {...this.score, bottom: this.score.bottom + 1}
            this.currentDirection =""
        }else if(this.posY >580){
            this.posY = 290;
            this.posX = 240;
            this.score = {...this.score, top: this.score.top + 1}
            this.currentDirection =""
        }
    };
    conclusionPlayer(topPlayer,bottomPlayer){
        if((topPlayer.posX - this.posX ) > -40 && (topPlayer.posX - this.posX) < 40 && this.posY <= 15){
           if(this.currentDirection === "topLeft"){
            this.currentDirection = "bottomLeft";
           }else if(this.currentDirection === "topRight"){
            this.currentDirection = "bottomRight";
           };
        }else if((this.posX - bottomPlayer.posX) > -50 && (this.posX - bottomPlayer.posX ) < 50 && this.posY > 560){
            if(this.currentDirection === "bottomLeft"){
                this.currentDirection = "topLeft";
               }else if(this.currentDirection === "bottomRight"){
                this.currentDirection = "topRight";
               };
        }
    };

    restart(){
        this.currentDirection ="";
        this.score = {top:0, bottom:0}
    }
};