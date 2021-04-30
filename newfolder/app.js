const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

const mouse = {
    x: null,
    y: null,
    radius: 150
};

window.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    mouse.radius = 250;
});

// ctx.fillStyle = 'white';
// ctx.font = '30px verdana';
// ctx.fillText('A', 0, 40);
// // ctx.strokeStyle = 'white';
// // ctx.strokeRect(0, 0, 100, 100);
// const data = ctx.getImageData(0, 0, 100, 100);

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy); 
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance; 
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius){
            this.x += directionX;
            this.y += directionY;
        } else {
            this.size = 3;
        }
    }
}

function init(){
    particleArray = [];
    for (let i = 0; i < 90; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y)); 
    }
}
init();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate);
}
animate();