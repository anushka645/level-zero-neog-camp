const chalk = require('chalk');
const readlineSync=require('readline-sync');
console.log(chalk.magentaBright.bold("Welcome to Harry Potter quiz"));
var username=readlineSync.question(chalk.greenBright("Enter Username: "));
console.log(chalk.yellow("Hi "+username+", Lets begin the quiz!"));

let questions=[{question:"In what house did the Sorting Hat almost put Harry?\na:Gryfindor b:Slytherin c:Hufflepuff\n",answer:"b"},{question:"Who were Harry's parents?\na:William and Elizabeth Potter b:James and Lily Potter\n",answer:"b",},{question:"What is Tom Riddle's middle name?\na:Lucius b:Salazar c:Marvolo\n",answer:"c"},{question:"How did Harry and Ron get to Hogwarts their second year?\na:flying car b:broomsticks\n",answer:"a"}];
let score=0;
let highscore=[{name:"aashi",score:"0"}];
for(let i=0;i<questions.length;i++){
    let answer=readlineSync.question(chalk.blue(questions[i].question));
    if(answer===questions[i].answer){
        console.log(chalk.green("correct answer"))
        score++;
    }
    else{
        console.log(chalk.red("wrong answer"))
    }

}
console.log("final score:"+score+"/"+questions.length);
if(score>parseInt(highscore[0].score)){
    highscore[0].name=username
    highscore[0].score=score
    console.log("Hurray! you made a highscore.")
}
console.log(highscore);
