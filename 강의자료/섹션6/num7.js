function solution(std, str){
    let re = new RegExp(`[^${std}]`,'g');
    let newStr = str.replace(re,"");
    if (newStr === std) return 'YES';
    return 'No';
}
let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));