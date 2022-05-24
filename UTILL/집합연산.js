let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

// 차집합
let difference1 = arr1.filter((x) => !arr2.includes(x)); // 결과 1

// 교집합
let difference2 = arr1.filter((x) => arr2.includes(x)); // 결과 2, 3

// 베타적 논리합
let difference3 = arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x))); // 결과 1, 4, 5

//출처: https://88240.tistory.com/519 [shaking blog]

// 합집합

let difference4 = [...arr1, ...arr2];
