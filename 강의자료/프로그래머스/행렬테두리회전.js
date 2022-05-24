function solution(rows, columns, queries){
    let answer=[];
    let matrix = new Array(rows);
    for (let i = 0; i<matrix.length; i ++){
        matrix[i] = new Array(columns).fill(0);
    }
    let count = 1;
    for(let r = 0; r<matrix.length; r++){
        for(let c = 0; c< matrix[r].length; c++){
            matrix[r][c] = count++;
        }
    }
    queries.forEach((query)=>{
        let start_row = query[0]-1;
        let start_col = query[1]-1;
        let end_row = query[2]-1;
        let end_col = query[3]-1;
        let temp = [];

        let cur_row = start_row;
        let cur_col = start_col;

        while(cur_col<=end_col){
            if(cur_col===end_col){}
            else{temp.push([cur_row, cur_col, matrix[cur_row][cur_col]]);}
            cur_col++;
        }
        cur_col--;
        while(cur_row <= end_row){
            if(cur_row === end_row) {}
            else{temp.push([cur_row,cur_col,matrix[cur_row][cur_col]])}
            cur_row++;
        }
        cur_row--;
        while(cur_col>=start_col){
            if (cur_col===start_col) {}
            else{temp.push([cur_row, cur_col, matrix[cur_row][cur_col]])};
            cur_col--;
        }
        cur_col++;
        while(cur_row >= start_row){
            if(cur_row===start_row) {}
            else {temp.push([cur_row, cur_col, matrix[cur_row][cur_col]])};
            cur_row--;
        }
        cur_row++;
        //console.log(temp)
        let next_val = temp[temp.length-1][2];
        for(let i = 0; i < temp.length; i++){
            let temp_val = temp[i][2];
            temp[i][2] = next_val;
            next_val = temp_val;
        }
        //console.log("temp changed",temp)
        let tempval_list = [];
        temp.forEach((x)=>{
            tempval_list.push(x[2]);
        })
        answer.push(Math.min(...tempval_list));
        temp.forEach((item)=>{
            matrix[item[0]][item[1]] = item[2]
        });
        //console.log(matrix)
    });
    return answer
}

console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]))