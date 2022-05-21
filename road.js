const createRoad = (x, width, laneCount = 6) => {
    const infinity = 1000000000;

    const left = x - width / 2;
    const right = x + width / 2;
    const top = -infinity;
    const bottom = infinity;

    const topLeft = { x: left, y: top };
    const topRight = { x: right, y: top };
    const bottomLeft = { x: left, y: bottom };
    const bottomRight = { x: right, y: bottom };

    const borders = [
        [topLeft, bottomLeft],
        [topRight, bottomRight]
    ];

    const road = {
        x,
        width,
        laneCount,

        left,
        right,
        top,
        bottom,

        borders,
    }

    const getLaneCenter = (laneIndex) => {
        const laneWidth = road.width / road.laneCount;
        return road.left + laneWidth / 2 + Math.min(laneIndex, road.laneCount - 1) * laneWidth;
    }

    const draw = (ctx) => {
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#ece7dc";

        for (let i = 1; i <= road.laneCount - 1; i++) {
            const x = lerp(
                road.left,
                road.right,
                i / road.laneCount
            );

            ctx.beginPath();
            ctx.setLineDash([20, 20]);
            ctx.moveTo(x, road.top);
            ctx.lineTo(x, road.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        road.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }

    road.draw = draw;
    road.getLaneCenter = getLaneCenter;

    return road;
}
