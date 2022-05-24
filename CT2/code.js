import fetch from "node-fetch";

const TRUCK_NUM = 5;
async function main() {
    let fail_count = 0;
    let command_list = [];
    const map = Array.from({ length: 5 }, () => new Array(5).fill(-1));
    const BASE_URL =
        "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";
    const x_auth_token = "025a2cfb109b4a92261db896ecfc4e47";

    //START API
    const start_res = await fetch(`${BASE_URL}/start?problem=1`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": `${x_auth_token}`,
        },
    });
    const start_data = await start_res.json();
    const AUTH_KEY = start_data.auth_key;
    //console.log(AUTH_KEY);

    let count = 0;
    while (true) {
        command_list = [];
        //GET Location
        const location_res = await fetch(`${BASE_URL}/locations`, {
            method: "GET",
            headers: {
                Authorization: AUTH_KEY,
            },
        });
        const location_data = await location_res.json();
        //console.log(location_data.locations);

        let small = Number.MAX_SAFE_INTEGER;
        location_data.locations.forEach((loc) => {
            const id = loc.id;
            const located_bikes_count = loc.located_bikes_count;
            const col = parseInt(id / 5);
            const row = 4 - (id % 5);
            map[row][col] = located_bikes_count;

            if (small > located_bikes_count) small = located_bikes_count;
        });
        //console.table(map);

        //GET TRUCKS
        const trucks_res = await fetch(`${BASE_URL}/trucks`, {
            method: "GET",
            headers: {
                Authorization: AUTH_KEY,
            },
        });
        const trucks_data = await trucks_res.json();
        //console.log(trucks_data);

        //search big small

        const truck_info = [];
        for (let i = 0; i < TRUCK_NUM; i++) {
            let truck = trucks_data.trucks[i];
            let t_id = truck.id;
            let t_location = truck.location_id;
            const t_col = parseInt(t_location / 5);
            const t_row = 4 - (t_location % 5);
            truck_info.push([t_id, map[t_row][t_col], t_location]);
        }

        let small_list = [];

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map.length; j++) {
                if (map[i][j] === small) small_list.push([i, j]);
            }
        }

        let idx = truck_info.length - 1;
        small_list.forEach((pos) => {
            let sorted_truck_info = truck_info.sort((a, b) => {
                return a[1] - b[1];
            });

            if (idx >= 0) {
                let [biggest_id, biggest_count, biggest_location] =
                    sorted_truck_info[idx--];

                if (biggest_count - 1 > small) {
                    let row_dist;
                    let col_dist;
                    let row = pos[0];
                    let col = pos[1];

                    const t_col = parseInt(biggest_location / 5);
                    const t_row = 4 - (biggest_location % 5);

                    row_dist = row - t_row;
                    col_dist = col - t_col;

                    let temp_command = [];

                    temp_command.push(5);
                    if (row_dist >= 0) {
                        for (let i = 0; i < row_dist; i++) temp_command.push(3);
                    } else {
                        for (let i = 0; i < Math.abs(row_dist); i++)
                            temp_command.push(1);
                    }
                    if (col_dist >= 0) {
                        for (let i = 0; i < col_dist; i++) temp_command.push(2);
                    } else {
                        for (let i = 0; i < Math.abs(col_dist); i++)
                            temp_command.push(4);
                    }
                    temp_command.push(6);
                    command_list.push({
                        truck_id: biggest_id,
                        command: temp_command,
                    });
                }
            }
        });

        //console.log(command_list);

        const simul_res = await fetch(`${BASE_URL}/simulate`, {
            method: "PUT",
            headers: {
                Authorization: AUTH_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                commands: command_list,
            }),
        });
        const simul_data = await simul_res.json();
        console.log(simul_data);
        count++;
        //if (command_list.length === 2) break;

        if (fail_count < Number(simul_data.failed_requests_count)) {
            fail_count = Number(simul_data.failed_requests_count);
            if (command_list.length === 0) {
                for (let i = 0; i < TRUCK_NUM; i++) {
                    if (parseInt(i / 5) < map.length - 1)
                        command_list.push({ truck_id: i, command: [2] });
                    else command_list.push({ truck_id: i, command: [4] });
                }
                const simul_res = await fetch(`${BASE_URL}/simulate`, {
                    method: "PUT",
                    headers: {
                        Authorization: AUTH_KEY,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        commands: command_list,
                    }),
                });
                const simul_data = await simul_res.json();
                console.log(simul_data);
                count++;
            }
        }
        if (simul_data.time === 720) break;
    }

    const score_res = await fetch(`${BASE_URL}/score`, {
        headers: {
            Authorization: `${AUTH_KEY}`,
            "Content-Type": "application/json",
        },
    });
    const score_data = await score_res.json();
    console.log(score_data);
}

main();
