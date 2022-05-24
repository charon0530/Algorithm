


function combination(source,target,n,r,count){
    
    if (r===0) {
        final.push([...target]);
        console.log("target",target, " r",r);
    }
    else if(n<r) return;
    else{
        target.push(source[count]); 
        combination(source, target, n - 1, r - 1, count + 1); 
        target.pop(); 
        combination(source, target, n - 1, r, count + 1);
    }
}
const source = [1, 2, 3,4];
const final = [];

 combination(source, [],4,2, 0);
  console.log('final', final);

