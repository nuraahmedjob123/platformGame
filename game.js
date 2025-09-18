import Player from './Player.js';
import Platform from './Platform.js';
import InputHandler from './InputHandler.js';
import Camera from './Camera.js';
import Enemy from './Enemy.js';
import Collectible from './Collectible.js';
import { levels } from './levels.js';
import AudioManager from './AudioManager.js';

// إعداد اللوحة
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// إنشاء مدير الصوتيات وتحميل الملفات
const audioManager = new AudioManager();
audioManager.loadSound('win', './win.mp3');
audioManager.loadSound('gameOver', './gameOver.mp3');
audioManager.loadSound('bgMusic', './music.mp3');
audioManager.loadSound('coin', './coin.mp3');
audioManager.loadSound('stomp', './stomp.mp3');


// كائنات اللعبة (سيتم إنشاؤها لاحقًا)
let player, platforms, enemies, collectibles, camera, goal;

// حالات اللعبة
const GAME_STATE = {
    MENU: 'MENU',
    PLAYING: 'PLAYING',
    GAME_OVER: 'GAME_OVER',
    LEVEL_COMPLETE: 'LEVEL_COMPLETE'
};
let gameState = GAME_STATE.MENU;
let score = 0;
let currentLevelIndex = 0;

const inputHandler = new InputHandler();

function initializeGame() {
    const currentLevel = levels[currentLevelIndex];

    player = new Player(50, 50, 30, 30, 'red');
    platforms = currentLevel.platforms.map(p => new Platform(p.x, p.y, p.width, p.height, p.color));
    enemies = currentLevel.enemies.map(e => new Enemy(e.x, e.y, e.width, e.height, e.color, e.speed));
    collectibles = currentLevel.collectibles.map(c => new Collectible(c.x, c.y, c.width, c.height, c.color));
    goal = new Collectible(currentLevel.goal.x, currentLevel.goal.y, currentLevel.goal.width, currentLevel.goal.height, currentLevel.goal.color);

    const platformsWidth = Math.max(...currentLevel.platforms.map(p => p.x + p.width));
    const goalX = currentLevel.goal.x + currentLevel.goal.width;
    const worldWidth = Math.max(platformsWidth, goalX);
    
    camera = new Camera(0, 0, canvas.width, canvas.height, worldWidth, 600);
    camera.follow(player);
    score = 0;
}

function handleInput() {
    if (gameState === GAME_STATE.MENU || gameState === GAME_STATE.GAME_OVER) {
        if (inputHandler.keys['Enter']) {
            currentLevelIndex = 0;
            initializeGame();
            gameState = GAME_STATE.PLAYING;
            audioManager.playMusic('bgMusic'); 
        }
    } else if (gameState === GAME_STATE.LEVEL_COMPLETE) {
        if (inputHandler.keys['Enter']) {
            currentLevelIndex++;
            if (currentLevelIndex < levels.length) {
                initializeGame();
                gameState = GAME_STATE.PLAYING;
                audioManager.playMusic('bgMusic');
            } else {
                gameState = GAME_STATE.GAME_OVER;
                audioManager.stopSound('bgMusic');
                audioManager.playSound('gameOver');
            }
        }
    }
}

function gameLoop() {
    handleInput();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameState === GAME_STATE.PLAYING) {
        player.update(inputHandler.keys, platforms);
        
        enemies.forEach(enemy => enemy.update(platforms));
        camera.update();

        for (let i = enemies.length - 1; i >= 0; i--) {
            const enemy = enemies[i];
            if (player.checkEnemyCollision(enemy)) {
                if (player.velocityY > 0 && player.y + player.height <= enemy.y + enemy.height / 2) {
                    score += 100;
                    enemies.splice(i, 1);
                    player.velocityY = player.jumpStrength * 0.7;
                    audioManager.playSound('stomp');
                } else {
                    gameState = GAME_STATE.GAME_OVER;
                    audioManager.stopSound('bgMusic');
                    audioManager.playSound('gameOver');
                }
            }
        }

        for (let i = collectibles.length - 1; i >= 0; i--) {
            const collectible = collectibles[i];
            if (player.checkEnemyCollision(collectible)) {
                score += 50;
                collectibles.splice(i, 1);
                audioManager.playSound('coin');
            }
        }

        if (player.checkEnemyCollision(goal)) {
            gameState = GAME_STATE.LEVEL_COMPLETE;
            audioManager.stopSound('bgMusic');
            audioManager.playSound('win');
        }

        ctx.save();
        ctx.translate(-camera.x, -camera.y);
        player.draw(ctx);
        platforms.forEach(p => p.draw(ctx));
        enemies.forEach(e => e.draw(ctx));
        collectibles.forEach(c => c.draw(ctx));
        goal.draw(ctx);
        ctx.restore();

        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'left';
        ctx.fillText(`النقاط: ${score}`, 10, 30);
        ctx.fillText(`المستوى: ${currentLevelIndex + 1}`, 10, 60);
    } else if (gameState === GAME_STATE.MENU) {
        ctx.font = '50px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('لعبة المنصة', canvas.width / 2, canvas.height / 2 - 50);
        ctx.font = '24px Arial';
        ctx.fillText('اضغط Enter للبدء', canvas.width / 2, canvas.height / 2);
    } else if (gameState === GAME_STATE.GAME_OVER) {
        ctx.font = '50px Arial';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText('انتهت اللعبة!', canvas.width / 2, canvas.height / 2 - 50);
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(`نقاطك النهائية: ${score}`, canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Arial';
        ctx.fillText('اضغط Enter للعب مرة أخرى', canvas.width / 2, canvas.height / 2 + 50);
    } else if (gameState === GAME_STATE.LEVEL_COMPLETE) {
        ctx.font = '50px Arial';
        ctx.fillStyle = 'green';
        ctx.textAlign = 'center';
        ctx.fillText('المستوى مكتمل!', canvas.width / 2, canvas.height / 2 - 50);
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(`النقاط: ${score}`, canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Arial';
        ctx.fillText('اضغط Enter للمتابعة', canvas.width / 2, canvas.height / 2 + 50);
    }
    requestAnimationFrame(gameLoop);
}

initializeGame();
gameLoop();