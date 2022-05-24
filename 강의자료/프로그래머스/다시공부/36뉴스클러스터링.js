function solution(str1, str2) {
    const A = {};
    const B = {};

    for (let i = 1; i < str1.length; i++) {
        const el = (str1[i - 1] + str1[i]).toLowerCase();

        const checkReg = /[a-z][a-z]/;
        if (checkReg.test(el)) A[el] = (A[el] || 0) + 1;
    }

    for (let i = 1; i < str2.length; i++) {
        const el = (str2[i - 1] + str2[i]).toLowerCase();

        const checkReg = /[a-z][a-z]/;
        if (checkReg.test(el)) B[el] = (B[el] || 0) + 1;
    }

    const intersection = Object.keys(A).filter((x) =>
        Object.keys(B).includes(x)
    );

    const union_dict = { ...A, ...B };
    const intersection_dict = {};

    for (let key of intersection) {
        union_dict[key] = Math.max(A[key], B[key]);
        intersection_dict[key] = Math.min(A[key], B[key]);
    }

    if (Object.keys(A).length === 0 && Object.keys(B).length === 0)
        return 65536;
    return parseInt(
        (Object.values(intersection_dict).reduce((a, b) => a + b, 0) /
            Object.values(union_dict).reduce((a, b) => a + b, 0)) *
            65536
    );
}

console.log(solution("E=M*C^2", "e=m*c^2"));
