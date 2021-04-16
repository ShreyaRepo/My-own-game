class Police {
    constructor(){
        this.police = createSprite(20,122);
        
       this.police.visible = false;  
    }  

    createPlayer(){
        this.police.visible = true;  
        this.police.velocityX= 0;

        if(keyWentDown("right")){
            this.police.velocityX= 4;
            this.police.velocityY = 0;
         }

        if(keyWentDown("left")){
            this.police.velocityX= -4;
            this.police.velocityY = 0;
         }

        if(keyWentDown("up")){
            this.police.velocityX= 0;
            this.police.velocityY = -4;
         }

        if(keyWentDown("down")){
            this.police.velocityX= 0;
            this.police.velocityY = 4;
         }
    }
}