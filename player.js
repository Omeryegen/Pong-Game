
export class Player {
    constructor(position){
        this.posX = 225;
        this.thing = document.createElement('div');
        this.thing.className = "player";
        if(position === "top"){
            this.thing.style.top = "10px"
        }else{
            this.thing.style.bottom = "10px"
        };
        this.thing.style.left = `${this.posX}px`
    }

    move(direction) {
        switch(direction){
            case "right":
                if(this.posX !== 445){
                    this.posX = this.posX + 10
                    this.thing.style.left = `${this.posX}px`
                    break;
                }else {
                    break;
                }
            case "left":
                if(this.posX > 10){
                    this.posX = this.posX - 10
                    this.thing.style.left = `${this.posX}px`;
                    break;
                }else {
                    break;
                }
            default:
                console.log("Nothing")
        }
    }
}

