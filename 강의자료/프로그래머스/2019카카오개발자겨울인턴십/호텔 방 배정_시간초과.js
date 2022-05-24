function solution(k, room_number) {
    let answer = [];
    let ch = {};

    function myFunc(cur_room) {
        answer.push(cur_room);
        if (ch[cur_room + 1] === undefined && cur_room + 1 <= k) {
            const next_blank_room = cur_room + 1;
            ch[cur_room] = next_blank_room;

            let cursor = cur_room - 1;
            while (ch[cursor] !== undefined && cursor !== 0) {
                ch[cursor] = next_blank_room;
                cursor--;
            }
        } else {
            //다음 방이 차있으면
            const next_blank_room = ch[cur_room + 1];
            ch[cur_room] = next_blank_room;

            let cursor = cur_room - 1;
            while (ch[cursor] !== undefined && cursor !== 0) {
                ch[cursor] = next_blank_room;
                cursor--;
            }
        }
    }

    for (let i = 0; i < room_number.length; i++) {
        const cur_room = room_number[i];
        //해당 방이 비어있고
        if (ch[cur_room] === undefined) {
            //다음 방이 비어있으면
            myFunc(cur_room);
        } else {
            //해당 방이 비어있지 않으면
            let next_blank_room = ch[cur_room];
            myFunc(next_blank_room);
        }
    }
    return answer;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));
