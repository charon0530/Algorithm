if (!Array.prototype.flat)
{
    Object.defineProperty(Array.prototype, 'flat',
    {
        value: function(depth = 1, stack = [])
        {
            for (let item of this)
            {
                if (item instanceof Array && depth > 0)
                {
                    item.flat(depth - 1, stack);
                }
                else {
                    stack.push(item);
                }
            }
            
            return stack;
        }
    });
}
const combination = (arr, num) => {
    let result = [];
    if(num == 1) return arr.map(e => [e]);
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(i+1)
        let combinations = combination(rest, num-1)
        let combiArr = combinations.map(x => [arr[i], ...x])
        result.push(...combiArr)
    }
    return result;
}

const solution = (orders, course) => {
    let cRes = []
    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < course.length; j++) {
            const comb = combination(orders[i].split(''), course[j])
            cRes.push(comb.map(x => x.sort().join('')))
        }
    }

    const dict = cRes.flat().reduce((obj, x) => {
        console.log(x)
        obj[x] = (obj[x] || 0) + 1
        return obj
    }, {})
    
}

console.log(solution(["XYZ", "XWY", "WXA"],[2,3,4]))