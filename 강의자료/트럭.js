function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let time = 0;
    //[트럭무게,진입경과시간]
    let bridgeArr =[];
    
    while(truck_weights.length || bridgeArr.length){
        time++;
        for(let i = 0; i<bridgeArr.length; i++){
            bridgeArr[i][1] += 1;
        }
        if(bridgeArr.length>=1 && bridgeArr[0][1] > bridge_length){
                bridgeArr.shift();
        }
        if (bridgeArr.reduce((a,b)=>[a[0]+b[0],0],[0,0])[0] + truck_weights[0] <= weight){
            bridgeArr.push([truck_weights.shift(),1]);
        }
    }
    return time;
}
console.log(solution(100,100,[10]));