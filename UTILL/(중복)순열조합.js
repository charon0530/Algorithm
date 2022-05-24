// 순열 1
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function permutation(items, listCopy) {
    if (items.length === pick) {
        result.push(items);
        return;
    }
    for (let i = 0; i < listCopy.length; i++) {
        permutation(
            `${items}${listCopy[i]}`,
            listCopy.filter((v, j) => j !== i)
        );
    }
}

permutation("", list);
/************************************************************************************/
// 순열 2
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function swap(i, j) {
    [list[i], list[j]] = [list[j], list[i]];
}

function permutation(i) {
    if (i === pick) {
        result.push(list.slice(0, i).join(""));
        return;
    }

    for (let j = i; j < list.length; j++) {
        swap(i, j);
        permutation(i + 1);
        swap(j, i);
    }
}

permutation(0);
/************************************************************************************/
// 조합
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function combination(items, index) {
    if (items.length === pick) {
        result.push(items);
        return;
    }
    for (let i = index; i < list.length; i++) {
        combination(`${items}${list[i]}`, i + 1);
    }
}

combination("", 0);

/************************************************************************************/
// 중복 순열
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function pwr(items) {
    if (items.length === pick) {
        result.push(items);
        return;
    }

    for (let i = 0; i < list.length; i++) {
        pwr(`${items}${list[i]}`);
    }
}

pwr("");
/************************************************************************************/
// 중복 조합
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function pwc(items, index) {
    if (items.length === pick) {
        result.push(items);
        return;
    }

    for (let i = index; i < list.length; i++) {
        pwc(`${items}${list[i]}`, i);
    }
}

pwc("", 0);
