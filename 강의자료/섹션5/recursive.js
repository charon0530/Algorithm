let myArr = []
function combination(arr,start){  // arr = [a,b,c,d]
    if (start === arr.length){
        myArr.push(arr);
        return;
    }
    //변경 없을 때
    combination(arr,start+1)
    //변경 있을 때
    let temp = arr.slice();
    temp[start]="-";
    combination(temp,start+1)
}

combination(["a","b","c","d"],0)
console.log(myArr)