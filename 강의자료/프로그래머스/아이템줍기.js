function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    let minY = Number.MAX_SAFE_INTEGER;
    let minX = Number.MAX_SAFE_INTEGER;
    let maxY = 0;
    let maxX = 0;

    const dotSet = new Set();
    const tempSet = new Set();
    for (let i = 0; i < rectangle.length; i++) {
        const curRect = rectangle[i];
        const [lx, ly, rx, ry] = curRect;
        for (let j = ly; j <= ry; j++) {
            minY = Math.min(minY, j);
            maxY = Math.max(maxY, j);
            const strLeft = [lx, j].join(",")
            const strRight = [rx, j].join(",");
            if (tempSet.has(strLeft)) {
                dotSet.add(strLeft)
            }
            if (tempSet.has(strRight)) {
                dotSet.add(strRight);
            }
            tempSet.add(strLeft);
            tempSet.add(strRight);
            // dotList.push([lx, j]);
            // dotList.push([rx, j]);
        }
        for (let j = lx; j <= rx; j++) {
            minX = Math.min(minX, j);
            maxX = Math.max(maxX, j);
            const strLeft = [j, ly].join(",");
            const strRight = [j, ry].join(",");

            tempSet.add(strLeft);
            tempSet.add(strRight);
            // dotList.push([j, ly]);
            // dotList.push([j, ry]);
        }
    }


    const dotList = [...tempSet].map(x => x.split(",").map(Number));

    dotList.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })


    for (let i = minY; i <= maxY; i++) {
        const filteredList = dotList.filter(x => x[1] === i)
        const left = filteredList[0];
        const right = filteredList[filteredList.length - 1];
        const strLeft = left.join(",");
        const strRight = right.join(",");
        dotSet.add(strLeft);
        dotSet.add(strRight);
    }
    dotList.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]
        return a[1] - b[1]
    })

    for (let i = minX; i <= maxX; i++) {
        const filteredList = dotList.filter(x => x[0] === i)
        const left = filteredList[0];
        const right = filteredList[filteredList.length - 1];
        const strLeft = left.join(",");
        const strRight = right.join(",");
        dotSet.add(strLeft);
        dotSet.add(strRight);
    }
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const queue = [];
    const checked = Array.from({ length: 51 }, () => new Array(51).fill(0));

    queue.push([characterX, characterY, 0]);
    checked[characterX][characterY] = 1

    while (queue.length) {
        const [curX, curY, dist] = queue.shift();
        if (curX === itemX && curY === itemY) return dist;

        for (let i = 0; i < 4; i++) {
            const nX = curX + dx[i];
            const nY = curY + dy[i];

            if (nX < minX || nX > maxX || nY < minY || nY > maxY) continue;
            if (!dotSet.has([nX, nY].join(","))) continue;
            if (checked[nX][nY] === 1) continue;

            checked[nX][nY] = 1;
            queue.push([nX, nY, dist + 1])
        }
    }

    //console.log([...dotSet].map(x => x.split(",").map(Number)).sort((a, b) => a[0] - b[0]))
    return answer;
}
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7))

//console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8))