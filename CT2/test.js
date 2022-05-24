import fetch from "node-fetch";

const BASE_URL =
    "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";
const x_auth_token = "025a2cfb109b4a92261db896ecfc4e47";

const AUTH_KEY = "c8394c9c-c541-40b7-bb8a-0f69c2e081e8";

async function start_api() {
    let res = await fetch(`${BASE_URL}/start?problem=1`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": `${x_auth_token}`,
        },
    });
    let data = await res.json();
    console.log(data);
}

async function location_api() {
    let res = await fetch(`${BASE_URL}/locations`, {
        method: "GET",
        headers: {
            Authorization: AUTH_KEY,
        },
    });
    let data = await res.json();
    console.log(data);
}
async function trucks_api() {
    let res = await fetch(`${BASE_URL}/trucks`, {
        method: "GET",
        headers: {
            Authorization: AUTH_KEY,
        },
    });
    let data = await res.json();
    console.log(data);
}

async function simulate_api() {
    let res = await fetch(`${BASE_URL}/simulate`, {
        method: "PUT",
        headers: {
            Authorization: AUTH_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            commands: [{ truck_id: 0, command: [0] }],
        }),
    });
    let data = await res.json();
    console.log(data);
}

async function many_times() {
    for (let i = 0; i < 717; i++) {
        let res = await fetch(`${BASE_URL}/simulate`, {
            method: "PUT",
            headers: {
                Authorization: AUTH_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                commands: [{ truck_id: 0, command: [6] }],
            }),
        });
        let data = await res.json();
        //console.log(data);
    }
}

async function getScore() {
    let res = await fetch(`${BASE_URL}/score`, {
        headers: {
            Authorization: `${AUTH_KEY}`,
            "Content-Type": "application/json",
        },
    });
    let data = await res.json();
    console.log(data);
}
//start_api();
//location_api();
//trucks_api();
simulate_api();
//many_times();
//getScore();
