const solution = (gems) => {
    const quantityOfGemTypes = new Set(gems).size;
    const map = new Map();

    const answer = [];
    gems.forEach((gem, i) => {
        map.set(gem, i + 1);

        if (map.size === quantityOfGemTypes) {
            const arr = [];

            map.forEach((value, key) => {
                arr.push({ key, value });
            });
            console.log(arr);
            arr.sort((a, b) => a.value - b.value);
            const start = arr[0].value;
            const end = arr[arr.length - 1].value;
            answer.push([start, end]);

            map.delete(arr[0].key);
        }
    });

    answer.sort((a, b) => sortByRangeLengthAndIndex(a, b));

    return answer[0];
};

const sortByRangeLengthAndIndex = (a, b) => {
    const aLength = a[1] - a[0];
    const bLength = b[1] - b[0];

    if (aLength !== bLength) {
        return aLength - bLength;
    }

    return a[0] - b[0];
};

console.log(
    solution([
        "DIA",
        "RUBY",
        "RUBY",
        "DIA",
        "DIA",
        "EMERALD",
        "SAPPHIRE",
        "DIA",
    ])
);
