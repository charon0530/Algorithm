function solution(arr) {
    var answer = [];
    let zero_count=0;
    let one_count=0;

    function recursion(map,start_row,start_col,map_size){
        let minimap_size = map_size/2;
        
        function Wrapped(start_r,start_c){
            let minimap_sum = 0;
            for (let i = start_r; i < start_r+minimap_size; i++){
                for (let j = start_c; j<start_c+minimap_size; j++){
                    minimap_sum += map[i][j];
                }
            }
            if (minimap_sum === 0){
                console.log("0 :",start_r,start_c,minimap_size,map_size);
                zero_count++;
                return;
            }
            else if(minimap_sum === (minimap_size * minimap_size)){
                console.log("1 :",start_r,start_c,minimap_size,map_size);
                one_count++;
                return
            }
            else{
                recursion(map,start_r, start_c,map_size/2)
            }
        }

        Wrapped(start_row, start_col);
        Wrapped(start_row+minimap_size, start_col);
        Wrapped(start_row, start_col+minimap_size);
        Wrapped(start_row+minimap_size, start_col+minimap_size);
    }
    
    
    let arr_sum = arr.reduce((acc, val) => acc.concat(val), []).reduce((a,b)=>a+b,0);
    if (arr_sum === 0){
        return [1,0];
    }
    else if(arr_sum === (arr.length * arr.length)){
        return [0,1]
    }
    recursion(arr,0,0,arr.length);
    console.log("zero Count :" ,zero_count);
    console.log("one Count :" ,one_count);
    return answer;
}

console.log(solution([0,0],[0,0]))