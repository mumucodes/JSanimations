const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
};
canvas.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;

});
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});

function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.stroke();
}
class Particle {
    conststructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 5 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.stroke();
    }
}
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}
animate();