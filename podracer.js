const createPodracer = (x, y, width, height) => {
    const podracer = {
        x,
        y,
        width,
        height,

        speed: 0,
        acceleration: 0.2,
        maxSpeed: 3,
        turnSpeed: 0.015,
        friction: 0.05,
        angle: 0,
    }

    const draw = (ctx) => {
        ctx.save();
        ctx.translate(podracer.x, podracer.y);
        ctx.rotate(-podracer.angle);

        ctx.beginPath();
        ctx.rect(
            - podracer.width / 2,
            - podracer.height / 2,
            podracer.width,
            podracer.height
        );
        ctx.fill();

        ctx.restore();
    }

    const update = () => {
        move();
    }

    const move = () => {
        // forward/reverse
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
        if (Math.abs(podracer.speed) < podracer.friction)
            podracer.speed = 0;

        // left/right
        if (podracer.speed != 0) {
            const flip = podracer.speed > 0 ? 1 : -1;

            if (podracer.controls.left)
                podracer.angle += podracer.turnSpeed * flip;
            if (podracer.controls.right)
                podracer.angle -= podracer.turnSpeed * flip;
        }

        podracer.x -= Math.sin(podracer.angle) * podracer.speed;
        podracer.y -= Math.cos(podracer.angle) * podracer.speed;
    }

    podracer.draw = draw;
    podracer.controls = createControls();
    podracer.update = update;

    return podracer;
}