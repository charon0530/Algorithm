function solution(arr1, arr2){
    let answer;
    let idx1=0;
    let idx2=0;
    let newArr=[]
    while(idx1<arr1.length && idx2<arr2.length){
        if (arr1[idx1] <arr2[idx2]){
            newArr.push(arr1[idx1]);
            idx1++;
        }
        else{
            newArr.push(arr2[idx2]);
            idx2++;
        }
    }

    if(idx1==arr1.length) {
        for(let i=idx2; i<arr2.length;i++) newArr.push(arr2[i])
    }
    else{
        for(let i=idx1; i<arr1.length;i++) newArr.push(arr1[i])
    }
    return newArr;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));