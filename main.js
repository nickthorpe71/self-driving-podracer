const mainCanvas = document.getElementById("mainCanvas");
mainCanvas.width = 400;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 600;

const mainCtx = mainCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(mainCanvas.width / 2, mainCanvas.width * 0.95);

const pods = generatePods(500);
let bestPod = pods[0];
if (localStorage.getItem("bestBrain")) {
    bestPod.brain = JSON.parse(localStorage.getItem("bestBrain"));
}

const traffic = [
    new Pod(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 11.5)
];

animate();

function save() {
    localStorage.setItem("bestBrain",
        JSON.stringify(bestPod.brain)
    );
}

function discard() {
    localStorage.removeItem("bestBrain");
}

function generatePods(N) {
    const pods = [];
    for (let i = 1; i <= N; i++) {
        pods.push(new Pod(road.getLaneCenter(1), 100, 30, 50, "AI"));
    }
    return pods;
}

function animate(time) {
    traffic.forEach(pod => pod.update(road.borders, []));
    pods.forEach(pod => pod.update(road.borders, traffic));

    bestPod = pods.find(
        pod => pod.y == Math.min(...pods.map(pod => pod.y))
    );

    mainCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    mainCtx.save();
    mainCtx.translate(0, -bestPod.y + mainCanvas.height * 0.7);

    road.draw(mainCtx);
    traffic.forEach(pod => pod.draw(mainCtx, "#5c5c5c"));
    mainCtx.globalAlpha = 0.2;
    pods.forEach(pod => pod.draw(mainCtx, "#78c1e2"));
    mainCtx.globalAlpha = 1;
    bestPod.draw(mainCtx, "#78c1e2", true);

    mainCtx.restore();

    networkCtx.lineDashOffset = -time / 50;
    Visualizer.drawNetwork(networkCtx, bestPod.brain);
    requestAnimationFrame(animate);
}