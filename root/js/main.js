import { MenuScene } from '../scenes/MenuScene.js';
import { GameScene } from '../scenes/GameScene.js';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    scene: [MenuScene, GameScene]
};

const game = new Phaser.Game(config);