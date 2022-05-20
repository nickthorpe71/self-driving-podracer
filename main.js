const canvas = document.getElementById("mainCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const podracer = createPodracer(100, 100, 30, 50);

animate();

function animate() {
    podracer.update();

    // when you resize the canvas it also clears the canvas
    canvas.height = window.innerHeight;

    podracer.draw(ctx);
    requestAnimationFrame(animate);
}