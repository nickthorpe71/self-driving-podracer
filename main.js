const mainCanvas = document.getElementById("mainCanvas");
mainCanvas.width = 400;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 600;

const mainCtx = mainCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");


const road = new Road(mainCanvas.width / 2, mainCanvas.width * 0.95);
const pod = generatePods(100);
const traffic = [
    new Pod(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 11.5)
];

animate();

function generatePods(N) {
    const pods = [];
    for (let i = 1; i <= N; i++) {
        pods.push(new Pod(road.getLaneCenter(1), 100, 30, 50, "AI"));
    }
    return pods;
}

function animate(time) {
    traffic.forEach(pod => pod.update(road.borders, []));

    pod.update(road.borders, traffic);

    mainCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    mainCtx.save();
    mainCtx.translate(0, -pod.y + mainCanvas.height * 0.7);

    road.draw(mainCtx);
    traffic.forEach(pod => pod.draw(mainCtx, "#5c5c5c"));
    pod.draw(mainCtx, "#78c1e2");

    mainCtx.restore();

    networkCtx.lineDashOffset = -time / 50;
    Visualizer.drawNetwork(networkCtx, pod.brain);
    requestAnimationFrame(animate);
}