function hIndex(c, val){
    let count=0;
    for(let x of c){
        if (x>=val) count++;
    }
    if(count >= val) return true;
    else return false;
}
function solution(citations) {
    var answer = 0;
    let lt = 0;
    let rt = 10001;
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        if(hIndex(citations,mid) === true){
            answer = mid;
            lt = mid+1
        }
        else{
            rt = mid-1
        }
    }
    return answer;
}

console.log(solution([4, 4, 4, 5, 0, 1, 2, 3] ));
console.log(hIndex([4, 4, 4, 5, 0, 1, 2, 3],4));