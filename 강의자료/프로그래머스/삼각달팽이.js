function solution(n) {
    var answer = [];
    let count = 1;
    let tri = Array.from({length:n});
    for (let i =0; i<n; i++){
        tri[i]= new Array(i+1).fill(0);
    }

    
    function recursive(start_row,start_col,times){
        if (times <=0) return;
        if (tri[start_row][start_col] !== 0) return;
        let i = 0;
        for(i = 0; i <times; i++){
            if(tri[start_row+i][start_col]!==0) return;
            tri[start_row+i][start_col] = count++;
        }
        i--;

        let j = 0
        for(j = 1; j < times; j++){
            if(tri[start_row+i][start_col+j]!==0) return;
            tri[start_row+i][start_col+j] = count++;
        }
        j--;

        let k =0
        for (k = 1; k< times-1; k++){
            if(tri[start_row+i-k][start_col+j-k]!==0) return;
            tri[start_row+i-k][start_col+j-k] = count++;
        }
        k--;
        recursive(start_row+i-k+1,start_col+j-k,times-3);
    }
    recursive(0,0,n);
    answer = tri.reduce((acc,val)=>[...acc,...val],[]);
    return answer;
}

console.log(solution(6));