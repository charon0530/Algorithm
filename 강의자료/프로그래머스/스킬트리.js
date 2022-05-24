// 정규식에 관한 내용 => https://jess2.xyz/JavaScript/variable-regex/

function solution(skill, skill_trees) {
    var answer = skill_trees.length;
    skill_trees.forEach(skill_tree=>{
        let std_skill = skill.split("");
        let filtered_st = skill_tree.split("").filter(x=>std_skill.includes(x));

        var regex = new RegExp(`[^${skill}]`, 'g');
        let filtered_st2 = skill_tree.replace(regex,"");

        console.log("filtered_st :" ,filtered_st)

        console.log("filtered_st2 :" ,filtered_st2)

        while(filtered_st.length){
            if(filtered_st.shift() !== std_skill.shift()){
                answer--
                break;
            }
        }

    });
    return answer;
}

console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]));


aa="d"
"abc".replace(`/[123${aa}]/`)