const canvas = document.getElementById("mainCanvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.95);
const pod = new Pod(road.getLaneCenter(1), 100, 30, 50, "KEYS");
const traffic = [
    new Pod(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 9)
];

animate();

function animate() {
    traffic.forEach(pod => pod.update(road.borders));

    pod.update(road.borders, traffic);

    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -pod.y + canvas.height * 0.7);

    road.draw(ctx);
    traffic.forEach(pod => pod.draw(ctx));
    pod.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}