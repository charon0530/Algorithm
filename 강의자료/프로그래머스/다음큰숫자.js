function solution(n) {
    let bin_num = n.toString(2).split('');
    bin_num.unshift('0');
    let idx = -1;
    let count = 0;
    for(let i = bin_num.length-1; i >=0; i--){
        if (bin_num[i] === '1') count++;
        if (bin_num[i] === '1' && bin_num[i-1] ==='0'){
            idx = i;
            count--;
            break;
        }
    }
    bin_num[idx] = '0';
    bin_num[idx-1] = '1';
    
    
    for(let i = bin_num.length-1; i >idx; i--){
        if (count !== 0){
            bin_num[i] = '1'
            count--;
        }
        else{
            bin_num[i] = '0'
        }
    }
    return  parseInt(bin_num.join(''),2)
}

console.log(solution(78));