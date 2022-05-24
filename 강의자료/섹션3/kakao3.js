function solution(orders, course){
    let answer=[];
    let combinations = [];
    let menuSet = new Set(); // menuSet= n // cource = r
    function combination(source,temp,n,r,idx){
        if ( r===0) combinations.push(temp.join(""));
        else if ( n<r) return;
        else{
            //n-1Cr-1 포함 후 생각
            temp.push(source[idx]);
            combination(source, Object.assign([],temp),n-1,r-1,idx+1);
            //n-1Cr 배제 후 생각
            temp.pop();
            combination(source, Object.assign([],temp),n-1,r,idx+1);
        }
    }

    for (let i = 0; i < orders.length; i++){
        orders[i] = orders[i].split("").sort().join("");
    }
 

    for(let i = 0; i< orders.length; i ++){
        for ( x of course){
            combination(orders[i],[],orders[i].length, x ,0);
        }
    }
/////////////////////////////////////////////////////////////////////////////////////
    let dict = combinations.sort().reduce((obj,x)=>{
        obj[x]=(obj[x] || 0) +1
        return obj;
    },{})

    const result = []
    for (let i = 0; i < course.length; i++) {
        const cos = {}
        for (let [k, v] of Object.entries(dict)) {
            if (k.length === course[i] && v >= 2) {
                cos[k] = v
            }
        }
        //console.log(cos)
        const max = Math.max(...Object.values(cos))
        //console.log(max)
        
        for (let [k, v] of Object.entries(cos)) {
            if (max === v) {
                result.push(k)
            }
        }
    }
    return result.sort();
}

console.log(solution(["XYZ", "XWY", "WXA"],[2,3,4]))