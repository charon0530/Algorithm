function rotateImage(a) {
    let N = a.length;
    let rotated = new Array(N).fill(0);
    for(let i =0; i<N; i++){
        rotated[i] = new Array(N).fill(0);
    }
    for (let i =0; i<N; i++){
        for(let j =0; j<N; j++){
            rotated[j][N-1-i] = a[i][j]
        }
    }
    return rotated
}


function Wrap(widekey,M,widelock,N){ // key, lock은 array point는 좌표(행렬) widemap은 락을 패딩한것
    for (let i=0; i<widelock.length; i++){
        for(let j =0; j < widelock.length; j++){
            if (widekey[i][j]!==widelock[i][j]) widelock[i][j] = 1;
            else widelock[i][j] = 0;
        }
    }
    //console.log(widelock);
    let isSolved = true;
    for (let i=M; i<M+N; i++){
        for(let j=M; j<M+N; j++){
            //console.log(i,j)
            if(widelock[i][j]===0){
                isSolved = false;
                break;
            }
        }
        if (isSolved===false) break;
    }
    return isSolved
}

function MakePaddingLock(key, lock){
    let M= key.length;
    let N = lock.length;
    let paddingLock = [];
    for (let i = 0; i< M; i++){
        paddingLock.push([...new Array(M+N+N).fill(0)]);
    }
    for (let i=M;i<M+N;i++){
        paddingLock.push([...new Array(M).fill(0),...lock[i-M],...new Array(M).fill(0)])
    }
    for (let i = M+N; i< M+N+M; i++){
        paddingLock.push([...new Array(M+N+N).fill(0)]);
    }
    //console.log (paddingLock);
  return paddingLock;
}

function MakePaddingKey(key,lock,point){
    let M = key.length;
    let N = lock.length;
    let paddingKey = new Array(M+N+M).fill(0);
    for (let i=0; i<paddingKey.length;i++){
        paddingKey[i] = new Array(M+N+M).fill(0);
    }
    for (let row = point[0]; row<point[0]+M; row++){
        for(let col=point[1]; col<point[1]+M; col++){
            paddingKey[row][col] = key[row-point[0]][col-point[1]];
        }
    }
    //console.log(paddingKey);
   return paddingKey;
}
function solution(key, lock){
    answer = false;
    let M = key.length;
    let N = lock.length;
    let _paddingLock = MakePaddingLock(key,lock);
    //let _paddingKey = MakePaddingKey(key,lock,[0,0]);
    //Wrap(_paddingKey,M,_paddingLock,N);
    //상하좌우 4번
    for(let i = 0; i<=M+N;i++){
        for(let j =0; j<=M+N; j++){
            _paddingKey = MakePaddingKey(key,lock,[i,j]);
            for(let count=0; count<4;count++){
                if(Wrap(_paddingKey,M,_paddingLock,N)) return true;
                 key = rotateImage(key)
                 _paddingLock = MakePaddingLock(key,lock);
                _paddingKey= MakePaddingKey(key,lock,[i,j]);
            }
        }
    }
    return false;
}
// let key2=[[0, 0, 0], [1, 0, 0], [0, 1, 1]];
// key2= rotateImage(key2)
// let lock =[[1, 1, 1], [1, 1, 0], [1, 0, 1]]
// let pdl = MakePaddingLock(key2,[[1, 1, 1], [1, 1, 0], [1, 0, 1]])
// let pdk = MakePaddingKey(key2,[[1, 1, 1], [1, 1, 0], [1, 0, 1]],[4,4])
//  Wrap(pdk,key2.length,pdl,lock.length);



console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]))