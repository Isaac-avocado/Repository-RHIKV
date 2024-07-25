export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('interior', 'assets/images/interior.png');
        this.load.image('plataforma', 'assets/images/plataforma.png');
        this.load.image('player', 'assets/images/player.png');
    }

    create() {
        // Añadir la imagen de fondo
        this.add.image(400, 250, 'interior');

        // Crear un grupo de plataformas estáticas
        const platforms = this.physics.add.staticGroup();

        // Añadir las plataformas al grupo
        platforms.create(300, 150, 'plataforma');
        platforms.create(380, 300, 'plataforma');
        platforms.create(420, 400, 'plataforma');

        platforms.create(250, 490, 'plataforma');
        platforms.create(300, 490, 'plataforma');

        // Crear un cuadrado que cae desde la parte superior de la pantalla
        const square = this.add.rectangle(this.cameras.main.centerX, 0, 50, 50, 0xff0000);
        this.physics.add.existing(square);

        // Ajustar las propiedades físicas del cuadrado
        square.body.setVelocityY(20); // Velocidad en píxeles por segundo
        square.body.setBounce(0.2); // Rebotar ligeramente al colisionar
        square.body.setCollideWorldBounds(true); // No salir de los límites del mundo

        
        this.physics.add.collider(square, platforms);

        const player = this.physics.add.image(250, 300, 'player');
        
        player.body.setVelocityY(1); 
        
        player.body.setCollideWorldBounds(true);
       this.physics.add.collider(player, platforms);

        cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
        if(cursors.left.isDown){
            player.setVelocityX(-160);
        }
    }
}





   
   