const canvas = document.getElementById("mainCanvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = createRoad(canvas.width / 2, canvas.width * 0.9);
const podracer = createPodracer(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
    podracer.update();

    // when you resize the canvas it also clears the canvas
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -podracer.y + canvas.height * 0.7);

    road.draw(ctx);
    podracer.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}