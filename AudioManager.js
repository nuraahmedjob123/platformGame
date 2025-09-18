export default class AudioManager {
    constructor() {
        this.sounds = {};
    }

    loadSound(name, path) {
        const audio = new Audio(path);
        this.sounds[name] = audio;
    }

    playSound(name) {
        if (this.sounds[name]) {
            const sound = this.sounds[name].cloneNode();
            sound.play();
        }
    }

    playMusic(name) {
        if (this.sounds[name]) {
            const music = this.sounds[name];
            music.loop = true;
            music.play();
        }
    }

    stopSound(name) {
        if (this.sounds[name]) {
            this.sounds[name].pause();
            this.sounds[name].currentTime = 0;
        }
    }
}