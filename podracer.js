const createPodracer = (x, y, width, height) => {
    const podracer = {
        x,
        y,
        width,
        height,

        speed: 0,
        acceleration: 0.2,
        maxSpeed: 3,
        friction: 0.05,
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
        if (podracer.controls.forward)
            podracer.speed += podracer.acceleration;
        if (podracer.controls.reverse)
            podracer.speed -= podracer.acceleration;

        // cap speed
        if (podracer.speed > podracer.maxSpeed)
            podracer.speed = podracer.maxSpeed;
        if (podracer.speed < -podracer.maxSpeed / 2)
            podracer.speed = -podracer.maxSpeed / 2;

        // apply friction
        if (podracer.speed > 0)
            podracer.speed -= podracer.friction;
        if (podracer.speed < 0)
            podracer.speed += podracer.friction;

        podracer.y -= podracer.speed;
    }

    podracer.draw = draw;
    podracer.controls = createControls();
    podracer.update = update;

    return podracer;
}