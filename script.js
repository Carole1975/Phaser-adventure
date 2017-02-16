var game = new Phaser.Game (1000, 600, Phaser.auto, "content",{preload: preload, create: create, update: update});

function preload(){
	game.load.image ("Pyramide", "asset/Pyramide.jpg")
	console.log("Salut");
	game.load.image ("Isis", "asset/Isis.png");
	console.log("Coucou");
	game.load.spritesheet ("Isis", "asset/Isis.png",30, 48);
}

function create(){
	this.background = game.add.sprite(0, 0, "Pyramide");
    this.background.width = game.width;
    this.background.height = game.height;


	game.physics.startSystem(Phaser.Physics.ARCADE);
	monSprite = game.add.sprite(500.5, 300.5, "Isis");  
	monSprite.anchor.setTo (0.5, 0.5);
	monSprite.angle=0;
	monSprite.x=60;
	monSprite.y=500;
	game.physics.enable(monSprite, Phaser.Physics.ARCADE);
	monSprite.body.velocity.x=20;
     //monSprite.animations.add ("marche", [0, 1, 2, 3, 4, 5], 10, true);
    // monSprite.play ("marche");
    //monSprite.boby.collideWorldBounds = true;
    //monSprite.body.bounce.x=0.5;
    //monSprite.body.bounce.y=0.7:

    
}

function update(){
	monSprite.x=monSprite.x+1;
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)==true){
		monSprite.angle=monSprite.angle+5
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)==true){
		monSprite.angle=monSprite.angle-5
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.UP)==true){
		monSprite.angle=monSprite.angle+5
	}	
	if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)==true){
		monSprite.angle=monSprite.angle-5
	}

}