export const levels = [
    {
        // المستوى الأول
        platforms: [
            { x: 0, y: 580, width: 2000, height: 20, color: 'green' },
            { x: 250, y: 450, width: 200, height: 20, color: 'green' },
            { x: 500, y: 350, width: 150, height: 20, color: 'green' },
            { x: 700, y: 250, width: 100, height: 20, color: 'green' },
        ],
        enemies: [
            { x: 200, y: 420, width: 30, height: 30, color: 'blue', speed: 2 },
            { x: 750, y: 220, width: 30, height: 30, color: 'blue', speed: 1 },
        ],
        collectibles: [
            { x: 300, y: 400, width: 20, height: 20, color: 'yellow' },
            { x: 550, y: 300, width: 20, height: 20, color: 'yellow' },
            { x: 800, y: 200, width: 20, height: 20, color: 'yellow' },
        ],
        goal: { x: 900, y: 200, width: 50, height: 50, color: 'gold' }
    },
    {
        // المستوى الثاني
        platforms: [
            { x: 0, y: 580, width: 1500, height: 20, color: 'green' },
            { x: 250, y: 450, width: 100, height: 20, color: 'green' },
            { x: 500, y: 350, width: 200, height: 20, color: 'green' },
            { x: 800, y: 250, width: 150, height: 20, color: 'green' },
            { x: 1200, y: 150, width: 100, height: 20, color: 'green' },
        ],
        enemies: [
            { x: 300, y: 420, width: 30, height: 30, color: 'blue', speed: 3 },
            { x: 900, y: 220, width: 30, height: 30, color: 'blue', speed: 2 },
            { x: 1100, y: 120, width: 30, height: 30, color: 'blue', speed: 1 },
        ],
        collectibles: [
            { x: 320, y: 420, width: 20, height: 20, color: 'yellow' },
            { x: 550, y: 320, width: 20, height: 20, color: 'yellow' },
            { x: 950, y: 220, width: 20, height: 20, color: 'yellow' },
            { x: 1220, y: 120, width: 20, height: 20, color: 'yellow' },
        ],
        goal: { x: 1400, y: 100, width: 50, height: 50, color: 'gold' }
    },
    {
        // المستوى الثالث: منصات متقطعة
        platforms: [
            { x: 0, y: 580, width: 100, height: 20, color: 'green' },
            { x: 200, y: 520, width: 100, height: 20, color: 'green' },
            { x: 400, y: 460, width: 100, height: 20, color: 'green' },
            { x: 600, y: 400, width: 100, height: 20, color: 'green' },
            { x: 800, y: 340, width: 100, height: 20, color: 'green' },
            { x: 1000, y: 280, width: 100, height: 20, color: 'green' },
            { x: 1200, y: 220, width: 100, height: 20, color: 'green' },
            { x: 1400, y: 160, width: 100, height: 20, color: 'green' },
            { x: 1600, y: 100, width: 100, height: 20, color: 'green' },
        ],
        enemies: [
            { x: 250, y: 490, width: 30, height: 30, color: 'blue', speed: 2 },
            { x: 650, y: 370, width: 30, height: 30, color: 'blue', speed: 2 },
            { x: 1150, y: 250, width: 30, height: 30, color: 'blue', speed: 2 },
        ],
        collectibles: [
            { x: 450, y: 430, width: 20, height: 20, color: 'yellow' },
            { x: 850, y: 310, width: 20, height: 20, color: 'yellow' },
            { x: 1450, y: 130, width: 20, height: 20, color: 'yellow' },
        ],
        goal: { x: 1800, y: 50, width: 50, height: 50, color: 'gold' }
    },
    {
        // المستوى الرابع: منصات متفرقة وأعداء سريعة
        platforms: [
            { x: 0, y: 580, width: 300, height: 20, color: 'green' },
            { x: 400, y: 500, width: 150, height: 20, color: 'green' },
            { x: 700, y: 420, width: 100, height: 20, color: 'green' },
            { x: 950, y: 350, width: 250, height: 20, color: 'green' },
            { x: 1300, y: 250, width: 200, height: 20, color: 'green' },
            { x: 1600, y: 180, width: 150, height: 20, color: 'green' },
        ],
        enemies: [
            { x: 450, y: 470, width: 30, height: 30, color: 'blue', speed: 4 },
            { x: 1050, y: 320, width: 30, height: 30, color: 'blue', speed: 5 },
            { x: 1650, y: 150, width: 30, height: 30, color: 'blue', speed: 4 },
        ],
        collectibles: [
            { x: 480, y: 470, width: 20, height: 20, color: 'yellow' },
            { x: 750, y: 390, width: 20, height: 20, color: 'yellow' },
            { x: 1400, y: 220, width: 20, height: 20, color: 'yellow' },
        ],
        goal: { x: 1800, y: 130, width: 50, height: 50, color: 'gold' }
    }
];