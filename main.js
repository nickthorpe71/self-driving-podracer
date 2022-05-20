const canvas = document.getElementById("mainCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const podracer = createPodracer(100, 100, 30, 50);
podracer.draw(ctx);
