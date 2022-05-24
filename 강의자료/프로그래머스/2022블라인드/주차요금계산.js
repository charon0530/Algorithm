function solution(fees, records) {
    var answer = [];
    const [std_time, std_fee, unit_time, unit_fee] = fees;
    const dict = {};
    records.forEach((record) => {
        const [time_str, car_num, type] = record.split(" ");
        const [h, m] = time_str.split(":").map((x) => Number(x));
        const time = 60 * h + m;
        if (dict[car_num]) {
            dict[car_num].push(time);
        } else {
            dict[car_num] = [time];
        }
    });
    let temp_list = [];
    for (let [car_num, value] of Object.entries(dict)) {
        if (value.length % 2 === 1) value.push(60 * 23 + 59);
        let time_diff = 0;
        for (let i = 1; i < value.length; i += 2) {
            time_diff += value[i] - value[i - 1];
        }

        if (time_diff <= std_time) temp_list.push([car_num, std_fee]);
        else {
            const addtional_fee =
                Math.ceil((time_diff - std_time) / unit_time) * unit_fee;
            temp_list.push([car_num, std_fee + addtional_fee]);
        }
    }
    temp_list.sort((a, b) => a[0] - b[0]);
    temp_list.forEach((x) => answer.push(x[1]));
    return answer;
}

console.log(
    solution(
        [180, 5000, 10, 600],
        [
            "05:34 5961 IN",
            "06:00 0000 IN",
            "06:34 0000 OUT",
            "07:59 5961 OUT",
            "07:59 0148 IN",
            "18:59 0000 IN",
            "19:09 0148 OUT",
            "22:59 5961 IN",
            "23:00 5961 OUT",
        ]
    )
);
