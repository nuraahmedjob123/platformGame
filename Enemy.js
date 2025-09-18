import { checkCollision } from './utils.js';

export default class Enemy {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.direction = 1;
        this.velocityY = 0;
        this.gravity = 0.5;
    }

    update(platforms) {
        this.velocityY += this.gravity;
        this.y += this.velocityY;

        platforms.forEach(platform => {
            if (checkCollision(this, platform)) {
                if (this.y + this.height > platform.y && this.y < platform.y) {
                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                }
            }
        });

        this.x += this.speed * this.direction;

        if (this.x <= 0 || this.x + this.width >= 1000) {
            this.direction *= -1;
            this.x += this.speed * this.direction;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}