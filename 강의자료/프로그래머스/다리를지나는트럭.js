function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let arrived = [];
    let bridge = []; //[truck,dur_time]
    let waited = truck_weights.slice();

    while (!(bridge.length === 0 && waited.length === 0)) {
        time++;
        bridge = bridge.map((x) => [x[0], x[1] + 1]);

        if (bridge.length > 0 && bridge[0][1] > bridge_length) {
            arrived.push(bridge.shift());
        }

        let cur_truck = waited[0];

        let onbridge_weight = bridge.reduce((acc, x) => acc + x[0], 0);

        if (onbridge_weight + cur_truck <= weight) {
            bridge.push([waited.shift(), 1]);
        }
        console.log(time, arrived, bridge, waited);
    }
    return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
