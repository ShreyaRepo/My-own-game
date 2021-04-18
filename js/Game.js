class Game {
 
    constructor(){
        this.heart1 = createSprite(115,350); 
        this.heart1.addImage("heart1", heartImg);
        this.heart1.scale = 0.2;
        this.heart1.visible = false;  

        this.heart2 = createSprite(200,350);
        this.heart2.addImage("heart2", heartImg);
        this.heart2.scale = 0.2;
        this.heart2.visible = false;  

        this.heart3 = createSprite(285,350);
        this.heart3.addImage("heart3", heartImg);
        this.heart3.scale = 0.2;
        this.heart3.visible = false;  

        this.heartsGroups = new Group();
        

   }

   displayHearts(){

    if(lives == 3){
        this.heart1.visible = true; 
        this.heart2.visible = true; 
        this.heart3.visible = true; 
     }

     if(lives == 2){
        this.heart1.visible = false; 
     }

     if(lives == 1){  
        this.heart2.visible = false;  
    }

    if(lives == 0){
        this.heart3.visible = false;  
    }
 
    

   }

}