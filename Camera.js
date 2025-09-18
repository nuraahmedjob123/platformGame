export default class Camera {
    constructor(x, y, viewportWidth, viewportHeight, worldWidth, worldHeight) {
        this.x = x;
        this.y = y;
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
        this.followed = null;
    }

    follow(gameObject) {
        this.followed = gameObject;
    }

    update() {
        if (this.followed != null) {
            this.x = this.followed.x - this.viewportWidth / 2;
            this.y = this.followed.y - this.viewportHeight / 2;
        }

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x + this.viewportWidth > this.worldWidth) {
            this.x = this.worldWidth - this.viewportWidth;
        }
        if (this.y + this.viewportHeight > this.worldHeight) {
            this.y = this.worldHeight - this.viewportHeight;
        }
    }
}