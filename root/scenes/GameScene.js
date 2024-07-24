export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('interior', 'assets/images/interior.png');
    }

    create() {
        this.add.image(400, 250, 'interior');
    }
}