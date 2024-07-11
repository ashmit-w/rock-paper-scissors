let score = [0,0];

let k = "";

while(score[0]<3 && score[1]<3){
    let d = Math.floor(Math.random()*3);
    let resp = prompt(`${k}Score ${score[0]} : ${score[1]}  
    Enter your response: (R/P/S)`);
    let comp = (resp == "R") ? (0) : ((resp == "P") ? (1) : ((resp == "S") ? (2) : (5)));
    if (comp == d+1 || comp == d-2)
        {
            k = "You won the last round.\n"
            score[0]+=1;
        }
    if (comp == d-1 || comp == d+2)
        {
            k = "You lost the last round.\n"
            score[1]+=1;
        }
    if (comp == d)
        {
            k = "The last round was tied\n"
        }
}
score[0] == 3 ? (k="You won.\n") : (k="You lost.\n");
alert(`${k}Score ${score[0]} : ${score[1]}`)
