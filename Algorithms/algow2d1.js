function d6(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var playerRoll = d6(1,6);
console.log("The player rolled: " + playerRoll);


//CONSULT THE ORACLE

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function consultOracle(){
    min = Math.ceil(lifesAnswers[0]);
    max = Math.floor(lifesAnswers.length-1);
    return Math.floor(Math.random()*(max-min)+min);
}
var response= lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];
console.log(response);
