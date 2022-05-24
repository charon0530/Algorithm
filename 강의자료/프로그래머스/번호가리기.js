function solution(phone_number) {
    var answer = '';
    let change_num = phone_number.length - 4;
    let star = '*'.repeat(change_num);
    phone_number = phone_number.split('');
    phone_number.splice(0, change_num, star);
    return phone_number;
}

console.log(solution("01033334444"))
