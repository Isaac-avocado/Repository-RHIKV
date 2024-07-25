export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });

        
    }

    preload() {
        this.load.image('interior', 'assets/images/interior.png');
        this.load.image('plataforma', 'assets/images/plataforma.png');
    }

    create() {
        this.add.image(400, 250, 'interior');
        //para gravedad pero no me funciono
       // platforms = this.physics.add.staticGroup();

        //platforms.create(300, 150, 'plataforma');
        this.add.image(300, 150, 'plataforma');
        this.add.image(380, 300, 'plataforma');
        this.add.image(420, 400, 'plataforma');


        
    }
}