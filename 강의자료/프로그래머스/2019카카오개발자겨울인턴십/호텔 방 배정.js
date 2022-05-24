//선형 재귀 (TailRecursion 비슷하나 세팅 부분(13번째 줄)이 있어 조금 다름)
//직선으로 갔다가 직선으로 되돌아온다.
//이 문제는 유니온 파인드 문제다. => 해당되는 것들을 모두 같은 부모 밑으로 넣는다.

function solution(k, room_number) {
    let ch = new Map();
    function Recursion(room_num) {
        if (!ch.has(room_num)) {
            ch.set(room_num, room_num + 1);
            return room_num;
        } else {
            let parent_num = Recursion(ch.get(room_num));
            ch.set(room_num, parent_num);
            return parent_num;
        }
    }

    return room_number.map((x) => Recursion(x));
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));
