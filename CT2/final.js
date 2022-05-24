import fetch from "node-fetch";
const BASE_URL =
    "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";
const X_AUTH_TOKEN = "6f2ae18b266d0ddf83f427db38f575e1";
let AUTH_KEY = "";

function Move(s_row, s_col, e_row, e_col) {
    // right/left -> down/up
    const result = [];
    if (e_col > s_col) {
        for (let i = 0; i < e_col - s_col; i++) result.push(2);
    } else {
        for (let i = 0; i < s_col - e_col; i++) result.push(4);
    }
    if (e_row > s_row) {
        for (let i = 0; i < e_row - s_row; i++) result.push(3);
    } else {
        for (let i = 0; i < s_row - e_row; i++) result.push(1);
    }
    return result;
}

function Drop(s_row, s_col, e_row, e_col) {
    const result = [];
    result.push(5);
    result.push(...Move(s_row, s_col, e_row, e_col));
    result.push(6);
    result.push(...Move(e_row, e_col, s_row, s_col));
    return result;
}
function Load(s_row, s_col, e_row, e_col) {
    const result = [];
    result.push(...Move(s_row, s_col, e_row, e_col));
    result.push(5);
    result.push(...Move(e_row, e_col, s_row, s_col));
    result.push(6);
    return result;
}

function Init(truck_list, map_length) {
    let result = [];
    truck_list.forEach((truck) => {
        const id = truck.id;
        const location_id = truck.location_id;
        const row = map_length - 1 - (location_id % map_length);
        const col = parseInt(location_id / map_length);

        const temp_command = Move(
            row,
            col,
            parseInt(map_length / 2),
            parseInt(map_length / 2)
        );
        result.push({ truck_id: id, command: [...temp_command] });
    });
    return result;
}
async function main() {
    const MAP_LENGTH = 5;
    const TRUCK_NUM = 5;

    //SET auth_key
    const start_res = await fetch(`${BASE_URL}/start`, {
        method: "POST",
        headers: {
            "X-Auth-Token": `${X_AUTH_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ problem: 1 }),
    });
    const start_data = await start_res.json();
    AUTH_KEY = start_data.auth_key;
    const map = Array.from({ length: 5 }, () => new Array(5).fill(-1));

    let count = 0;
    let init_flag = false;
    while (true) {
        let command_list = []; //{ "truck_id": 0, "command": [2, 5, 4, 1, 6] }
        //GET Locations
        const location_res = await fetch(`${BASE_URL}/locations`, {
            headers: {
                Authorization: `${AUTH_KEY}`,
                "Content-Type": "application/json",
            },
        });
        const location_data = await location_res.json();
        //console.log(location_data);

        location_data.locations.forEach((x) => {
            let id = x.id;
            let count = x.located_bikes_count;
            const row = MAP_LENGTH - 1 - (id % MAP_LENGTH);
            const col = parseInt(id / MAP_LENGTH);
            map[row][col] = count;
        });

        console.table(map);
        //GET Trucks
        const truck_res = await fetch(`${BASE_URL}/trucks`, {
            headers: {
                Authorization: `${AUTH_KEY}`,
                "Content-Type": "application/json",
            },
        });
        const truck_data = await truck_res.json();
        //console.log(truck_data);

        //implements

        if (init_flag === false) {
            command_list = Init(truck_data.trucks, MAP_LENGTH);

            init_flag = true;
        } else {
            //todo
            let drop_list = [];
            let load_list = [];
            //drop list
            location_data.locations.forEach((loc) => {
                const id = loc.id;
                const count = loc.located_bikes_count;

                if (count < 2) drop_list.push(id);
                if (count > 2) load_list.push(id);
            });

            for (let i = 0; i < TRUCK_NUM; i++) {
                let truck = truck_data.trucks[i];
                const t_id = truck.id;
                const t_location = truck.location_id;
                const t_row = MAP_LENGTH - 1 - (t_location % MAP_LENGTH);
                const t_col = parseInt(t_location / MAP_LENGTH);

                const drop_id = drop_list.pop();
                if (drop_id && map[2][2] > 2) {
                    const d_row = MAP_LENGTH - 1 - (drop_id % MAP_LENGTH);
                    const d_col = parseInt(drop_id / MAP_LENGTH);
                    command_list.push({
                        truck_id: t_id,
                        command: [...Drop(t_row, t_col, d_row, d_col)],
                    });
                    map[2][2]--;
                } else {
                    const load_id = load_list.pop();
                    if (load_id) {
                        const l_row = MAP_LENGTH - 1 - (load_id % MAP_LENGTH);
                        const l_col = parseInt(load_id / MAP_LENGTH);
                        command_list.push({
                            truck_id: t_id,
                            command: [...Load(t_row, t_col, l_row, l_col)],
                        });
                        map[2][2]++;
                    }
                }
            }
        }

        //SIMULATE
        let simul_res = await fetch(`${BASE_URL}/simulate`, {
            method: "PUT",
            headers: {
                Authorization: `${AUTH_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                commands: command_list,
            }),
        });
        let simul_data = await simul_res.json();
        console.log(simul_data);
        count++;
        if (count === 720) break;
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
