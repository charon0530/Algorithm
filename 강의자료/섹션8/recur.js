function solution(source, count) {
    let result = [];

    function DFS(arr, start){
        if (start === source.length){
            if (arr.length === count){
                result.push([...arr]);
            }
        }
        else{
            arr.push(source[start]);
            DFS(arr, start+1);
            arr.pop();
            DFS(arr, start+1);
        }
    }

    DFS([],0);
    return result;
}

console.log(solution([1,2,3],2));