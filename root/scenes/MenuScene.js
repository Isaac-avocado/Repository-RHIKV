export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('playButton', 'assets/images/playButton.png');
        this.load.image('exitButton', 'assets/images/exitButton.png');
    }

    create() {

        const frame = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main.width, this.cameras.main.height, 0x000000);
        frame.setOrigin(0.5);

        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');
        background.setDisplaySize(this.cameras.main.width * 0.8, this.cameras.main.height * 0.8); // Ajustar tamaño del background


        const playButton = this.add.image(this.cameras.main.centerX+6, this.cameras.main.centerY +20, 'playButton').setInteractive();
        const exitButton = this.add.image(this.cameras.main.centerX+6, this.cameras.main.centerY + 100, 'exitButton').setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        exitButton.on('pointerdown', () => {
            this.game.destroy(true); // Cierra el juego
        });
    }
}
