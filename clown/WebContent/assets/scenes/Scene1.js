
// You can write more code here

/* START OF COMPILED CODE */
const speed = 3;
var score = 0;
class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var clown = this.add.image(266.9695, 165.8513, "textures", "clown");
		
		var coin = this.add.image(412.5183, 173.51173, "textures", "diamond");
		this.fCoin = coin;
		this.fClown = clown;
		
	}
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fClown);
		this.physics.add.existing(this.fCoin);
		this.physics.add.overlap(this.fClown,this.fCoin,this.hits.bind(this));
	this.createScore();
	}
	createScore = ()=>{
		this.score = 0;
		var style = {
		font:'20px sans-serif',
		fill:'#fff'
		}
		
		this.scoreText = this.add.text(20,20,`score: ${this.score}`,style);
		
	}
	hits(){
		this.fCoin.x = Phaser.Math.Between(100,600);
		this.fCoin.y  = Phaser.Math.Between(100,300);
		console.log("tutdum");
		this.score+=10;
		this.scoreText.setText(`score: ${this.score}`);
	
	}
	update() {
		if(this.arrows.right.isDown){
		this.fClown.x+=speed;
		}
		if(this.arrows.left.isDown){
		this.fClown.x-=speed;
		}
		if(this.arrows.up.isDown){
		this.fClown.y-=speed;
		}
		if(this.arrows.down.isDown){
		this.fClown.y+=speed;
		}
		console.log(this.fClown.x,this.fClown.y);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
