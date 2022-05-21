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

        ctx.beginPath();
        ctx.moveTo(road.left, road.top);
        ctx.lineTo(road.left, road.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(road.right, road.top);
        ctx.lineTo(road.right, road.bottom);
        ctx.stroke();
    }

    road.draw = draw;

    return road;
}