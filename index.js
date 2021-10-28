var readLineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readLineSync.question(chalk.magenta.italic("What is your name? "));
console.log("\nWelcome " + chalk.yellow(userName) + ", Are you ready to start the ICC Men's T20 World Cup 2021 quiz challenge?");
console.log(chalk.bgYellow.italic("\n+++++++++++++++++++++++ Level 1 is on... +++++++++++++++++++++++\n"));
console.log(chalk.magenta("---------") + "Note: Answer 5 right to go to level 2" + chalk.magenta("----------\n "))
var score = 0;
var level = 1;
var wrong = 0;
var tag;
var tag1;
var counts = 0;
//questions to be asked
var questions1 = [{
    question: chalk.cyanBright.italic("\nIndia played its inaugural T20 World Cup 2021 match against which country? \n A.	Afghanistan \n B.	Pakistan \n C. Scotland \n D.	New Zealand\n"),
    answer: "b",
}, {
    question: chalk.yellow.italic("The ICC Men’s T20 World Cup 2021 is played in ______.  \n A. India \n B. UAE \n C. Oman \n D.	Australia \n Choose the correct code: \n A. Only (A) \n B. Only (D) C. Both (B) and (C) D. Both (A) and (D)\n"),
    answer: "c"
}, {
    question: chalk.cyan.italic("The ICC Men’s T20 World Cup 2021 final is played on_____. \n A.	12 November 2021 \n B.	10 November 2021 \n C.	14 November 2021 \n D. 13 November 2021 \n"),
    answer: "c"
}, {
    question: chalk.green.italic("How much prize money the ICC Men’s T20 World Cup 2021 Champion took home? \n A.	1,600,000 USD \n B.	800,000 USD \n C.	400,000 USD \n D.	40,000 USD \n"),
    answer: "a"
}, {
    question: chalk.blueBright.italic("Which of the following teams won the inaugural edition of ICC Men’s T20 World Cup?\n A.	West Indies \n B. India \n C. Pakistan \n D. England \n"),
    answer: "b",
}]

var questions2 = [{
    question: chalk.cyanBright.italic("\nWho is the defending champion of ICC Men’s T20 World Cup? \n A. Sri Lanka \n B.	Australia \n C.	West Indies \n D.	Afghanistan \n"),
    answer: "c"
}, {
    question: chalk.yellow.italic("\nWhat is the best result by a host team in the ICC Men's T20 World Cup? \n A. Runner-up \n B.	Winner \n C. Semifinalist \n D. None of them \n"),
    answer: "a"
}, {
    question: chalk.cyan.italic("\nHow many teams competed against each other in ICC Men’s T20 World Cup 2021? \n A.	20 \n B. 16 \n C.	14 \n D. 18 \n"),
    answer: "b"
}, {
    question: chalk.green.italic("\nICC Men’s T20 World Cup 2021 is played at which of the following stadium(s)? \n A.	Oman Cricket Academy Ground, Al Amerat \n B.	Zayed Cricket Stadium, Abu Dhabi \n C.	Sharjah Cricket Stadium, Sharjah \n D.	Dubai International Stadium, Dubai \n Choose the correct code: \n A. Only (i) \n B. Only (iv) \n C. Both (ii) and (iii) \n D. All of the above \n"),
    answer: "d"
}, {
    question: chalk.blueBright.italic("\nThe inaugural match of ICC Men’s T20 World Cup 2021 was won by_____.  \n A. Oman  \n B.	Papua New Guinea \n C. Bangladesh \n D.	Scotland \n"),
    answer: "a"
}]

function quiz(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        score = score + 1;
        console.log(chalk.bgMagenta.italic("correct, your score is " + score));
        if (score === 4 && level === 1) {
            console.log(chalk.bgYellow("\n******* Only one score away to Level 2 *******\n"))
        }
        else if (score === 4 && level === 2) {
            console.log(chalk.bgYellow("\n******* Only one score away to win the quiz challenge *******\n"))
        }
        else if (score === 5 && level === 1) {
            console.log(chalk.green.bgWhite("\n Yayyyyy Congratulations " + chalk.blackBright.bold(userName) + " your total score is: " + score + " and you go to " + chalk.bgYellow.white.italic("level 2 \n")));
            level = level + 1;
        }
        else if (score === 10 && level === 2) {
            console.log(chalk.green.bgWhite.italic("\n Yayyyyy Congratulations " + userName + " you won the quiz challenge with a total score of: ") + chalk.white(score));
        }
    }
    else {
        console.log(chalk.red.strikethrough("wrong"));
        wrong = wrong + 1;
    }
    console.log("--------------------------------------------------");
}
var high_scores = [{
    name: "sushma",
    score: "7",
}, {
    name: "sush",
    score: "4",
}]
//var arr_of_questions = [question1, question2, question3, question4,question5];
if (level === 1) {
    if (readLineSync.keyInYN(chalk.bgWhite.green.italic("Key in y to continue or N to end the game"))) {
        for (var i = 0; i < questions1.length; i++) {
            quiz(questions1[i].question, questions1[i].answer);
            if (wrong === 1) {
                console.log(chalk.bgRed("\n Oops! You lost the level 1 quiz challenge\n"));
                console.log(chalk.yellow.italic("Hey " + userName + ", your total score is: " + score));
                console.log(chalk.bgYellow.italic("\nThe top two highest scores so far:\n"));
                for (var i = 0; i < high_scores.length; i++) {
                    console.log(chalk.cyan.italic(high_scores[i].name) + " : " + high_scores[i].score);
                }
                wrong = 0;
                break;
            }
        }
    }
    else {
        console.log(chalk.yellow("\nThanks for participating in the Quiz challenge!"))
    }
}
//console.clear();
if (level === 2) {
    console.log(chalk.bgYellow.italic("\n+++++++++++++++++++++++ Level 2 is on... +++++++++++++++++++++++++\n"));
    console.log(chalk.bgMagenta("\n Welcome to level 2 quiz challenge!\n") + chalk.magenta.italic("\nAnswer all 5 correct to win the challenge or score higher than the top scorers to be on the top scorers list!!!!!!\n"));
    console.log(chalk.bgYellow.italic("The top two highest scores so far:\n"));
    for (var i = 0; i < high_scores.length; i++) {
        console.log(chalk.cyan.italic(high_scores[i].name) + " : " + high_scores[i].score);
    }
    if (readLineSync.keyInYN(chalk.bgWhite.green.italic("\nKey in y to continue or N to end the game"))) {
        for (var i = 0; i < questions2.length; i++) {
            quiz(questions2[i].question, questions2[i].answer);
            if (wrong === 1) {
                console.log(chalk.bgRed("\n Oops! You lost the level 2 quiz challenge\n"));
                console.log(chalk.yellow.italic("Hey " + userName + ", your total score is: " + score));
                break;
            }
        }
    }
    else {
        console.log(chalk.yellow("\nThanks for participating in the Quiz challenge!"))
    }
}

var highest = high_scores.sort((c1, c2) =>
    (c1.score < c2.score) ? 1 :
        (c1.score > c2.score) ? -1 : 0
);
for (var i = 0; i < high_scores.length; i++) {
    if (i === 0 || i === 1) {
        if (highest[i].score < score) {
            counts = counts + 1;
            //counts=1
        }
        else {
            counts = 0;
        }
    }
}
if (counts === 1 || counts === 2) {
    console.log(chalk.cyan.italic("\nYou have scored the highest, send me the screenshot with that score! I will update the top score list"));
}
if (counts === 0) {
    console.log(chalk.cyan.italic("\nYou haven't scored the highest..! All the best for your next turn"));
}

//feedback time
console.log(chalk.magenta.italic("\n$$$$$$$$$$$$$$$$$$$$$ Feedback time $$$$$$$$$$$$$$$$$$$$$"));
if (readLineSync.keyInYN(chalk.italic('\nDo you Like to share your feedback?'))) {
    console.log(chalk.italic("\nLet us know your feedback on this Quiz challenge CLI!"))
    var selection = ['Excellent', 'Best', 'Good', 'Bad'];
    index = readLineSync.keyInSelect(selection, chalk.magenta.italic('Select the options below?'));
    if (index > -1) {
        console.log(chalk.italic("\nThanks for your feedback!"));
    }
}
else {
    console.log("Thank you!");
}

