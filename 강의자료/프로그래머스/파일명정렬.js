function solution(files) {
    var answer = [];
    let list = [];
    files.forEach((file)=>{
        let match = file.match(/([^0-9]+)([0-9]+)(.*)/);
        list.push([match[1],match[2],match[3]])
    });

    list.sort((a,b)=>{
        if (a[0].toLowerCase() === b[0].toLowerCase()){
            return parseInt(a[1]) - parseInt(b[1]);
        }
        else return (a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
    })

    //console.log(list);
    list.forEach((x)=>{
        answer.push(x[0]+x[1]+x[2]);
    })
    return answer;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))