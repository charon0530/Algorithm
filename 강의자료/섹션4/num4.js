function solution(money, product){
    let answer=0;
    const productNum = product.length;
    
    
    for ( let i=0; i<productNum;i++){
        let tempProduct=product.slice();
        let tempMoney=money;
        tempProduct[i]=[((product[i][0])/2),(product[i][1])]; // 선물 하나 할인
        //console.log(tempProduct)
        let costArr = []
        tempProduct.forEach((set,idx)=>{
            costArr[idx]=set[0]+set[1];
        })
        //console.log(costArr)
        costArr = costArr.sort((a,b)=>a-b)

        let count=0;
        for (let j =0; j<tempProduct.length; j++){
           //console.log(tempMoney,costArr[j])
            if(tempMoney>=costArr[j]){
                tempMoney-=costArr[j];
                count++
            }
            
        }
        if (count>answer) answer=count;
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));