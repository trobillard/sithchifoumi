//CHIFOUMI PROJECT
//VAR DECLARE

var choices = ["ROCK", "PAPER", "SCISSORS"];
var skip = ["yes", "no"];
var winPairs = ["Feuille/Pierre", "Pierre/Cisceaux", "Cisceaux/Pierre"]
var scores = {"player" : 0, "computer" : 0};

// Introduction
alert("If you are reading this it's too late"); 

var name = prompt ("What's your name challenger ?");

alert("Wonderbar " + name +"!!!" + " Are you ready to play your life ?"); // SHows player name

//Just for fun some random info
alert("Let me remind you what is THE CHIFOUMI GAME");
alert("The first known mention of the game was in the book Wuzazu [zh] by the Chinese Ming-dynasty writer Xie Zhaozhi [zh] (fl. c. 1600), who wrote that the game dated back to the time of the Chinese... ")

var next = prompt ("WHAAAAAAAT are you skipping????");
if (skip[0]=== true){
    alert("You dumb!! Let's play");
}
else{
    alert("Got ya!! we are not here to talk let's play"); //Doesn t work yet
}

//Game start
alert("Well then make your choice"); // Player s choice
var playerChoice = prompt (choices)

alert ("My turn it is young Padawan") //Computer s choice call by function
function cpuChoice() {
    var randomIndex = Math.floor(Math.random() * Math.floor(choices.length)); // using Mat.floor and Math.random in the var choices table
    return choices[randomIndex];
    }

var computerChoice = cpuChoice();           //We call the function
alert("I've chosen " + computerChoice);

//END Of the game
var game = (playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        alert("Damn we are even!!! Stop cheating on me");
    }
    else if ((computerChoice === "PAPER" && playerChoice === "SCISSORS") || (computerChoice === "ROCK" && playerChoice === "PAPER") || (computerChoice === "SCISSORS" && playerChoice === "ROCK")){
        alert("DAMN, you won  " + name + "! You are a cheater");
        scores["player"] += 1;
    }
    else {
        alert("NOOB, you LOST!!!!! " + name + ", you are such a loser!!!!");
        scores["computer"] += 1;
    }
     
//Showing reslut
    alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);