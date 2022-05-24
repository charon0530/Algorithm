function count(magu_arr, term){
    // 마구간을 돌면서 term 만큼 보다 크면 ++
    let ep = magu_arr[0];
    let cnt = 1;
    for (let i = 1; i < magu_arr.length; i++){
        if(magu_arr[i] >= ep+term){
            cnt++;
            ep = magu_arr[i];
        }
    }
    return cnt;
}

function solution(magu_arr,h_count){
    let answer = 0;
    magu_arr.sort((a,b)=>a-b);
    let lv = 1;
    let rv = magu_arr[magu_arr.length-1] - magu_arr[0];

    while (lv <= rv){
        let midv = Math.floor((lv+rv)/2);
        if (count(magu_arr,midv) >= h_count){
            answer = midv;
            lv = midv+1;
        }
        else{
            rv = midv-1;
        }
    }
    return answer;
}

let arr=[5,6,8,12,14];
console.log(solution(arr,3));