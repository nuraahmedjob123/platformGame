import { checkCollision } from './utils.js';

export default class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 7;
        this.gravity = 0.5;
        this.jumpStrength = -15;
        this.onGround = false;
        this.isJumping = false;
    }

    update(keys, platforms) {
        this.velocityX = 0;
        if (keys['ArrowLeft']) this.velocityX = -this.speed;
        if (keys['ArrowRight']) this.velocityX = this.speed;

        if (keys[' ' || 'ArrowUp'] && this.onGround) {
            this.velocityY = this.jumpStrength;
            this.onGround = false;
        }

        this.velocityY += this.gravity;
        
        this.x += this.velocityX;
        this.y += this.velocityY;

        this.onGround = false;
        platforms.forEach(platform => {
            if (checkCollision(this, platform)) {
                if (this.y + this.height <= platform.y + this.velocityY) {
                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                    this.onGround = true;
                }
            }
        });
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    checkEnemyCollision(enemy) {
        return checkCollision(this, enemy);
    }
}