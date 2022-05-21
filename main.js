const canvas = document.getElementById("mainCanvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const pod = new Pod(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
    pod.update(road.borders);

    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -pod.y + canvas.height * 0.7);

    road.draw(ctx);
    pod.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}