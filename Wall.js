class Wall {

    constructor(){
     this.wallsGroup = new Group();
    
    }

    createWalls(){
      this.outlineWall1 = createSprite(width/2, 5, width, 10);
      this.outlineWall2 = createSprite(width-10, height/2, 10, height);
      this.outlineWall3 = createSprite(width/2, height-10, width, 10);
      this.outlineWall4 = createSprite(10, height/2, 10, height);

      this.innerWall1 = createSprite(400, 60, 10, 250);
      this.innerWall2 = createSprite(215, 70, 50, 10);
      this.innerWall3 = createSprite(185, 125, 10, 120);
      this.innerWall4 = createSprite(365,180, 350, 10);
      this.innerWall5 = createSprite(545, 235, 10, 120);
      this.innerWall6 = createSprite(518, 290, 50, 10);
      this.innerWall7 = createSprite(250, 220, 10, 70);
      this.innerWall8 = createSprite(490, 345, 10, 120);
      this.innerWall9 = createSprite(345,400, 300, 10);
      this.innerWall10 = createSprite(55, 320, 100, 10);


      this.wallsGroup.add(this.outlineWall1);
      this.wallsGroup.add(this.outlineWall2);
      this.wallsGroup.add(this.outlineWall3);
      this.wallsGroup.add(this.outlineWall4);
      this.wallsGroup.add(this.innerWall1);
      this.wallsGroup.add(this.innerWall2);
      this.wallsGroup.add(this.innerWall3);
      this.wallsGroup.add(this.innerWall4);
      this.wallsGroup.add(this.innerWall5);
      this.wallsGroup.add(this.innerWall6);
      this.wallsGroup.add(this.innerWall7);
      this.wallsGroup.add(this.innerWall8);
      this.wallsGroup.add(this.innerWall9);
      this.wallsGroup.add(this.innerWall10);
    }

}
