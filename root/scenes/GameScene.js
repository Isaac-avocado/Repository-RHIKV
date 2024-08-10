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
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'interior');

        // Crear un grupo de plataformas estáticas
        const platforms = this.physics.add.staticGroup();

        // Añadir las plataformas al grupo
        platforms.create(800, 300, 'plataforma');
        platforms.create(1200, 600, 'plataforma');
        platforms.create(1100, 400, 'plataforma');
        platforms.create(950, 700, 'plataforma');
        platforms.create(800, 500, 'plataforma');

        // Crear un cuadrado que cae desde la parte superior de la pantalla
        const square = this.add.rectangle(this.cameras.main.centerX, 0, 50, 50, 0xff0000);
        this.physics.add.existing(square);

        // Ajustar las propiedades físicas del cuadrado
        square.body.setVelocityY(20); // Velocidad en píxeles por segundo
        square.body.setBounce(0.2); // Rebotar ligeramente al colisionar
        square.body.setCollideWorldBounds(true); // No salir de los límites del mundo

        this.physics.add.collider(square, platforms);

        // Crear el jugador y hacerlo accesible en toda la clase
        this.player = this.physics.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'player');
        this.player.body.setVelocityY(200); 
        this.player.body.setBounce(0.2);
        this.player.body.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, platforms);

        // Crear las teclas de cursor y hacerlas accesibles en toda la clase
        this.cursors = this.input.keyboard.createCursorKeys();

        // Agregar control para la barra espaciadora
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        // Restablecer la velocidad del jugador a 0 cada frame para evitar movimiento continuo
        // this.player.setVelocity(0); ERROR esta parte del codigo evitaba que la velocidad de la gravedad fuera en aumento al caer o al moverse en X

        // Verificar si el jugador está tocando el suelo o una plataforma
        if (this.player.body.touching.down) {
            // Permitir el movimiento a la izquierda
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-160);
            } 
            // Permitir el movimiento a la derecha
            else if (this.cursors.right.isDown) {
                this.player.setVelocityX(160);
            }
        }

        // Movimiento hacia arriba (salto)
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-300); // Ajustar la fuerza del salto
        }

        // Detener al jugador si se presiona la barra espaciadora FRENAR
        if (this.spaceKey.isDown) {
        this.player.setVelocityX(0);
         }
    }
}
