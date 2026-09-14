const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');

let particlesArray = [];
let w, h;

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particlesArray = [];
    const numParticles = window.innerWidth < 768 ? 40 : 100;
    
    for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * w;
        const y = Math.random() * h;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        particlesArray.push(new Particle(x, y, speedX, speedY, size));
    }
}

class Particle {
    constructor(x, y, speedX, speedY, size) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
        this.baseColor = document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,' : 'rgba(0,0,0,';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > w) this.x = 0;
        if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        if (this.y < 0) this.y = h;
    }
    draw() {
        this.baseColor = document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,' : 'rgba(0,0,0,';
        ctx.fillStyle = this.baseColor + '0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();
