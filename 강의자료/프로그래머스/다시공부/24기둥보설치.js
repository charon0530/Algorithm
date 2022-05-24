function CanCreatePillar(x, y, map = [[[]]]) {
    if (y === 0) {
        return true;
    } else if (map[x][y - 1][0] === 1) {
        return true;
    } else if (x - 1 >= 0 && map[x - 1][y][1] === 1) {
        return true;
    } else if (map[x][y][1] === 1) {
        return true;
    }
    return false;
}

function CanCreateDam(x, y, map = [[[]]]) {
    if (y - 1 >= 0 && map[x][y - 1][0] === 1) {
        return true;
    } else if (y - 1 >= 0 && x + 1 < map.length && map[x + 1][y - 1][0] === 1) {
        return true;
    } else if (
        x - 1 >= 0 &&
        x + 1 < map.length &&
        map[x - 1][y][1] === 1 &&
        map[x + 1][y][1] === 1
    ) {
        return true;
    }
    return false;
}

function CanDeletePillar(x, y, map = [[[]]]) {
    const copy_map = map.map((arr2d) => arr2d.map((line) => line.slice()));
    copy_map[x][y][0] = 0;
    if (
        x - 1 >= 0 &&
        y + 1 < map.length &&
        copy_map[x - 1][y + 1][1] === 1 &&
        CanCreateDam(x - 1, y + 1, copy_map) === false
    ) {
        return false;
    }
    if (
        y + 1 < map.length &&
        copy_map[x][y + 1][1] === 1 &&
        CanCreateDam(x, y + 1, copy_map) === false
    ) {
        return false;
    }
    if (
        y + 1 < map.length &&
        copy_map[x][y + 1][0] === 1 &&
        CanCreatePillar(x, y + 1, copy_map) === false
    ) {
        return false;
    }
    return true;
}

function CanDeleteDam(x, y, map) {
    const copy_map = map.map((arr2d) => arr2d.map((line) => line.slice()));
    copy_map[x][y][1] = 0;

    if (
        x - 1 >= 0 &&
        copy_map[x - 1][y][1] === 1 &&
        CanCreateDam(x - 1, y, copy_map) === false
    ) {
        return false;
    }
    if (
        x + 1 < copy_map.length &&
        copy_map[x + 1][y][1] === 1 &&
        CanCreateDam(x + 1, y, copy_map) === false
    ) {
        return false;
    }
    if (copy_map[x][y][0] === 1 && CanCreatePillar(x, y, copy_map) === false) {
        return false;
    }
    if (
        x + 1 < copy_map.length &&
        copy_map[x + 1][y][0] === 1 &&
        CanCreatePillar(x + 1, y, copy_map) === false
    ) {
        return false;
    }
    return true;
}

function solution(n, build_frame) {
    const map = Array.from({ length: n + 1 }, () =>
        Array.from({ length: n + 1 }, () => [0, 0])
    );

    build_frame.forEach((log) => {
        const [x, y, type, do_type] = log;
        if (type === 0) {
            //기둥
            if (do_type === 0) {
                //삭제
                if (CanDeletePillar(x, y, map)) {
                    map[x][y][0] = 0;
                }
            } else {
                //설치
                if (CanCreatePillar(x, y, map)) {
                    map[x][y][0] = 1;
                }
            }
        } else {
            //보
            if (do_type === 0) {
                //삭제
                if (CanDeleteDam(x, y, map)) {
                    map[x][y][1] = 0;
                }
            } else {
                //설치
                if (CanCreateDam(x, y, map)) {
                    map[x][y][1] = 1;
                }
            }
        }
    });
    //console.table(map);
    let result = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j][0] === 1) result.push([i, j, 0]);
            if (map[i][j][1] === 1) result.push([i, j, 1]);
        }
    }
    return result;
}

console.log(
    solution(5, [
        [0, 0, 0, 1],
        [2, 0, 0, 1],
        [4, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [2, 0, 0, 0],
        [1, 1, 1, 0],
        [2, 2, 0, 1],
    ])
);
