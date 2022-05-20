const createPodracer = (x, y, width, height) => {
    const podracer = {
        x,
        y,
        width,
        height
    }

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.rect(
            podracer.x - podracer.width / 2,
            podracer.y - podracer.height / 2,
            podracer.width,
            podracer.height
        );
        ctx.fill();
    }

    podracer.draw = draw;

    return podracer;
}