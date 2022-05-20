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

    const update = () => {
        if (podracer.controls.forward) {
            podracer.y -= 2;
        }
        if (podracer.controls.reverse) {
            podracer.y += 2;
        }
    }

    podracer.draw = draw;
    podracer.controls = createControls();
    podracer.update = update;

    return podracer;
}