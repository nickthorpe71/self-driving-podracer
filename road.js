const createRoad = (x, width, laneCount = 3) => {
    const infinity = 1000000000;

    const road = {
        x,
        width,
        laneCount,

        left: x - width / 2,
        right: x + width / 2,

        top: -infinity,
        bottom: infinity
    }

    const draw = (ctx) => {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#cac5ba";

        for (let i = 0; i <= road.laneCount; i++) {
            const x = lerp(
                road.left,
                road.right,
                i / road.laneCount
            );

            ctx.beginPath();
            ctx.moveTo(x, road.top);
            ctx.lineTo(x, road.bottom);
            ctx.stroke();
        }
    }

    road.draw = draw;

    return road;
}
