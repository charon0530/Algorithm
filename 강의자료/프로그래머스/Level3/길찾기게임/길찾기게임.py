class Node:
    def __init__(self,x,y,node_num):
        self.x = x
        self.y = y
        self.node_num = node_num

def solution(nodeinfo):
    answer = [[]]
    for i in range(len(nodeinfo)):
        nodeinfo[i] = nodeinfo[i] + [i+1]
    
    print(nodeinfo)
    return answer

print(solution([
        [5, 3],
        [11, 5],
        [13, 3],
        [3, 5],
        [6, 1],
        [1, 3],
        [8, 6],
        [7, 2],
        [2, 2],
    ]))