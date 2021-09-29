 let playerSelection = prompt("Stone...Paper...Scissor").toLowerCase();
 let playerpoints = 0;
 let computerpoints = 0;
 if (playerSelection == "stone") 
 {
     console.log("You choose Stone");
 }
else if (playerSelection == "paper")
{
    console.log("You choose Paper");
}
else if (playerSelection == "scissor")
{
    console.log("You choose Scissor");
}
else 
{
    console.log("Invalid Input try again enter stone, paper or scissor");
}

const randomSelect = ["stone", "paper", "scissor"];
let randomSelction = Math.floor(Math.random()*randomSelect.length);
let computerSelection = ("Computer Choose"+" "+randomSelect[randomSelction]);
console.log(computerSelection);
    if(playerSelection === randomSelect[randomSelction])
    {
        console.log("Its a tie");
    }
    if(
    (playerSelection === "stone" && randomSelect[randomSelction] === "scissor") ||
    (playerSelection === "paper" && randomSelect[randomSelction] === "stone") ||
    (playerSelection === "scissor" && randomSelect[randomSelction] === "paper")
    )
    {
        playerpoints ++;
        console.log("You Won!");
    }
    if(
    (randomSelect[randomSelction] === "stone" && playerSelection === "scissor") ||
    (randomSelect[randomSelction] === "paper" && playerSelection === "stone") ||
    (randomSelect[randomSelction] === "scissor" && playerSelection === "paper")
    )
    {
        computerpoints ++;
        console.log("Computer Won!")
    }