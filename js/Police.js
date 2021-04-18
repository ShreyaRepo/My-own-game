class Police {
    constructor(){
        this.police = createSprite(20,122);
        this.police.addAnimation("walking", personAnimation );
        this.police.scale = 0.5;
         this.police.debug = true;
       this.police.visible = false;  
    }  

    createPlayer(){
        this.police.visible = true;  
        this.police.velocityX= 0;

        if(keyWentDown("right")){
            this.police.x += 10;
            this.police.velocityY = 0;
         }

        if(keyWentDown("left")){
            this.police.velocityX= -10;
            this.police.velocityY = 0;
         }

        if(keyWentDown("up")){
            this.police.velocityX= 0;
            this.police.velocityY = -8;
         }

        if(keyWentDown("down")){
            this.police.velocityX= 0;
            this.police.velocityY = 8;
         }
    }
}