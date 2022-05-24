let dict = {};

function calPassNum(n, passenger, train, start, sum){ //start 는 번호
    //해당 역에서 승객태움
    sum+=passenger[start-1];
    for(let i=1; i<=n; i++){
        for (let j=0;j<train.length;j++){
            //갈수있으면

            if (start === train[j][0] && i===train[j][1] && i>start){
                //console.log("go")
                calPassNum(n,passenger,train,i,sum);
            }
            //못가면
            else{
                dict[start] = sum;
            }
        }
    }
}

function solution(n, passenger, train) {
    let answer = [];
    calPassNum(n,passenger,train,1,0);
    let result = [];
    let maxValue=0;
    for (let [k,v] of Object.entries(dict)){
        if (maxValue < v) maxValue=v;
    }

    for (let [k,v] of Object.entries(dict)){
        if(v===maxValue) result.push(k);
    }
    //console.log(result);
    let lastNum =Number(result.pop());

    return answer = [lastNum,dict[lastNum]]
}

console.log(solution(6,[1,1,1,1,1,1],[[1,2],[1,3],[1,4],[3,5],[3,6]]));