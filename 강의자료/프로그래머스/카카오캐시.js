function solution(cacheSize, cities) {
    var answer = 0;
    let queue = [];
    if (cacheSize===0){
        return cities.length*5;
    }
    cities.forEach((city)=>{
        city = city.toLowerCase();
        let city_idx = queue.indexOf(city);
        if (city_idx !== -1){
            queue.splice(city_idx,1);
            queue.push(city);
            answer+=1;
        }
        else{
            answer+=5;
            if (queue.length<cacheSize){
                queue.push(city);
            }
            else{
                queue.shift();
                queue.push(city);
            }
        }
    });

    return answer;
}

console.lo