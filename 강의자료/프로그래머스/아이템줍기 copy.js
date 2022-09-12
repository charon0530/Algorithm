//좌표 2배처리

function solution(rectangle, characterX, characterY, itemX, itemY) {
    rectangle = rectangle.map(x => [x[0] * 2, x[1] * 2, x[2] * 2, x[3] * 2])
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    var answer = 0;
    let minY = Number.MAX_SAFE_INTEGER;
    let minX = Number.MAX_SAFE_INTEGER;
    let maxY = 1;
    let maxX = 1;


    const edgeSet = new Set();
    const innderSet = new Set();
    for (let i = 0; i < rectangle.length; i++) {
        const curRect = rectangle[i];
        const [lx, ly, rx, ry] = curRect;
        for (let j = ly; j <= ry; j++) {
            for (let k = lx; k <= rx; k++) {
                minY = Math.min(minY, j);
                maxY = Math.max(maxY, j);
                minX = Math.min(minX, k);
                maxX = Math.max(maxX, k);
                if (j === ly || j === ry || k === lx || k === rx) {
                    edgeSet.add([k, j].join(","))
                }
                else {
                    innderSet.add([k, j].join(","))
                }
            }
        }
    }

    const canDot = new Set([...edgeSet].filter(x => !innderSet.has(x)));


    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const queue = [];
    const checked = Array.from({ length: maxX + 1 }, () => new Array(maxY + 1).fill(0));

    queue.push([characterX, characterY, 0]);
    checked[characterX][characterY] = 1

    while (queue.length) {
        const [curX, curY, dist] = queue.shift();
        if (curX === itemX && curY === itemY) return dist / 2;

        for (let i = 0; i < 4; i++) {
            const nX = curX + dx[i];
            const nY = curY + dy[i];

            if (nX < minX || nX > maxX || nY < minY || nY > maxY) continue;
            if (!canDot.has([nX, nY].join(","))) continue;
            if (checked[nX][nY] === 1) continue;

            checked[nX][nY] = 1;
            queue.push([nX, nY, dist + 1])
        }
    }

    //console.log([...dotSet].map(x => x.split(",").map(Number)).sort((a, b) => a[0] - b[0]))
    return answer;
}
//console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7))

console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8))