function solution(arr){
    let answer;
    let tmpArr =[];
    let sum9 = 0;
    arr.forEach(num => {
        sum9+=num;
    });
    for (let i=0; i < arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
                if( sum9-(arr[i]+arr[j])===100){
                    let num1=arr[i], num2=arr[j];
                    let idx = arr.indexOf(num1);
                    arr.splice(idx,1);

                    idx = arr.indexOf(num2);
                    console.log(arr.splice(idx,1));
            }
        }
    }
    answer=arr;
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));