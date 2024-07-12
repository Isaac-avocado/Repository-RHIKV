export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('logo', 'assets/images/logo.png');
    }

    create() {
        this.add.image(110, 110, 'logo');
    }
}