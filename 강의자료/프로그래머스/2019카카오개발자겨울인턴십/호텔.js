function solution(k, room_number) {
    const ch = new Map();

    function whereRoom(num) {
        if (!ch.has(num)) {
            //비어있으면
            ch.set(num, num + 1);
            return num;
        } else {
            const blank = whereRoom(ch.get(num));
            ch.set(num, blank + 1);
            return blank;
        }
    }
    return room_number.map((x) => whereRoom(x));
}
console.log(solution(10, [1, 3, 4, 1, 3, 1]));
