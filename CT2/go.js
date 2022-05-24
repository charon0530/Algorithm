import fetch from "node-fetch";
const X_AUTH_TOKEN = "5e682a7f8993c0c572bfad8a5f891772";
const BASE_URL =
    "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";

const MAP_LENGTH = 5;
function Move(start_id, end_id) {
    let command = [];
    let start_id_col = parseInt(start_id / MAP_LENGTH);
    let start_id_row = MAP_LENGTH - 1 - (start_id % MAP_LENGTH);
    let end_id_col = parseInt(end_id / MAP_LENGTH);
    let end_id_row = MAP_LENGTH - 1 - (end_id % MAP_LENGTH);

    if (start_id_col < end_id_col) {
        for (let i = 0; i < end_id_col - start_id_col; i++) command.push(2);
    } else {
        for (let i = 0; i < start_id_col - end_id_col; i++) command.push(4);
    }

    if (start_id_row < end_id_row) {
        for (let i = 0; i < end_id_row - start_id_row; i++) command.push(3);
    } else {
        for (let i = 0; i < start_id_row - end_id_row; i++) command.push(1);
    }
    return command;
}

function Drop(start_id, end_id) {
    let command = [];
    command.push(5);
    command.push(...Move(start_id, end_id));
    command.push(6);
    command.push(...Move(end_id, start_id));
    return command;
}

function Load(start_id, end_id) {
    let command = [];
    command.push(...Move(start_id, end_id));
    command.push(5);
    command.push(...Move(end_id, start_id));
    command.push(6);
    return command;
}
async function main() {
    /*START API*/
    let start_res = await fetch(`${BASE_URL}/start`, {
        body: '{\n         "problem": 1\n     }',
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": `${X_AUTH_TOKEN}`,
        },
        method: "POST",
    });
    //console.log(start_res);
    let start_json = await start_res.json();
    const AUTH_KEY = start_json.auth_key;
    //console.log(auth_key);

    let init_flag = false;

    for (let sim_counts = 0; sim_counts < 50; sim_counts++) {
        const command_list = [];
        const map = Array.from({ length: MAP_LENGTH }, () =>
            new Array(MAP_LENGTH).fill(-1)
        );
        /*Locations API*/
        let location_res = await fetch(`${BASE_URL}/locations`, {
            headers: {
                Authorization: `${AUTH_KEY}`,
                "Content-Type": "application/json",
            },
        });
        let location_json = await location_res.json();
        //console.log(location_json);
        location_json.locations.forEach((loc_info) => {
            let l_id = loc_info.id;
            let l_count = loc_info.located_bikes_count;
            let col = parseInt(l_id / MAP_LENGTH);
            let row = MAP_LENGTH - 1 - (l_id % MAP_LENGTH);
            map[row][col] = l_count;
        });
        console.table(map);

        /*Trucks API*/
        let truck_res = await fetch(`${BASE_URL}/trucks`, {
            headers: {
                Authorization: `${AUTH_KEY}`,
                "Content-Type": "application/json",
            },
        });
        let truck_json = await truck_res.json();
        //console.log(truck_json);

        /* Implement */
        if (init_flag === false) {
            truck_json.trucks.forEach((truck_info) => {
                command_list.push({
                    truck_id: truck_info.id,
                    command: Move(truck_info.location_id, 12),
                });
            });
            init_flag = true;
        } else {
            let drop_list = [];
            let load_list = [];
            location_json.locations.forEach((loc_info) => {
                let loc_id = loc_info.id;
                let loc_count = loc_info.located_bikes_count;
                if (loc_count < 2) drop_list.push(loc_id);
                if (loc_count > 2) load_list.push(loc_id);
            });

            truck_json.trucks.forEach((truck_info) => {
                let t_id = truck_info.id;
                let t_loc_id = truck_info.location_id;

                const drop_id = drop_list.pop();
                if (drop_id && map[2][2] > 2) {
                    command_list.push({
                        truck_id: t_id,
                        command: [...Drop(t_loc_id, drop_id)],
                    });
                    map[2][2]--;
                } else {
                    const load_id = load_list.pop();
                    if (load_id) {
                        command_list.push({
                            truck_id: t_id,
                            command: [...Load(t_loc_id, load_id)],
                        });
                        map[2][2]++;
                    }
                }
            });
        }

        /*Simulate API*/
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
        let simul_json = await simul_res.json();
        console.log(simul_json);
    }

    /*Score API*/
    let score_res = await fetch(`${BASE_URL}/score`, {
        headers: {
            Authorization: `${AUTH_KEY}`,
            "Content-Type": "application/json",
        },
    });
    let score_json = await score_res.json();

    console.log(score_json);
}

main();
