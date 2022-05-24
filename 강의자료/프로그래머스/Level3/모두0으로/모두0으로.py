#https://yechoi.tistory.com/52
#board = [[0] * 4] * 4
#대괄호 하나 벗기고 그 참조 값을 복사 ex )처음엔 0의 참조값을 복사 / 다음엔 배열([0,0,0,0])의 참조값을 복사

#2차원 배열은 Rvalue Lvalue 순으로 접근함
#ex) arr[2][3] 로 접근할 때 arr[2](r-value)[3](l-value)로 접근 => 즉, arr[2]의 [3]
#여기서 r-value라는 것은 "한번 접근하고"라는 뜻
def solution(a, edges):
    answer = 0
    ch = [0] * len(a)
    graph = [[] for _ in range(len(a))]
    if sum(a) != 0:
        return -1 

    for s,e in edges:
        graph[s].append(e)
        graph[e].append(s)

    def DFS(node):
        nonlocal answer
        for next in graph[node]:
            if ch[next] == 1:
                continue
            
            ch[next] = 1
            DFS(next)
            answer = answer + abs(a[next]) 
            print(a[node])
            a[node] = a[node] + a[next]
    
    ch[0] = 1
    DFS(0)

    return answer

        

    

print(solution([-5,0,2,1,2],[[0,1],[3,4],[2,3],[0,3]]))