class Virus{

   constructor(){

        this.virus1 = createSprite(49,50);
        this.virus1.addImage("virus1", coronavirusImg);
        this.virus1.scale = 0.2;
        this.virus1.velocityY = 5;
        this.virus1.visible = false;

        this.virus2 = createSprite(135,43);
        this.virus2.addImage("virus2", coronavirusImg);
        this.virus2.scale = 0.2;
        this.virus2.velocityY = 5;
        this.virus2.visible = false;

        this.virus3 = createSprite(77,73);
        this.virus3.addImage("virus3", coronavirusImg);
        this.virus3.scale = 0.2;
        this.virus3.velocityY = 5;
        this.virus3.visible = false;

        this.virus4 = createSprite(320,193);
        this.virus4.addImage("virus4", coronavirusImg);
        this.virus4.scale = 0.2;
        this.virus4.velocityY = 5;
        this.virus4.visible = false;

    }

        virusControls(){
            this.virus1.visible = true;
            this.virus2.visible = true;
            this.virus3.visible = true;
            this.virus4.visible = true;

        }

}