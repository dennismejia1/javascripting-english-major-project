alert("scripts.js has loaded!");
> let userInput;
> userInput = "samosa";
> if ( userInput === "burrito" ) {
    console.log("Brilliant choice!");
  } else {
    console.log("Don’t you want a burrito?");
  }
//--> Don’t you want a burrito?
let userInput; 
userInput = prompt("What is your favorite color?", "Type Answer Here.");
if (userInput === "blue" ) {
    $("#response").html("Good choice.");
)else ( 
    $("#response").html("Are you sure?");
    }

let makeABurrito;
makeABurrito = function(burritoVariable, onionsVariable, cilantroVariable){
    let burritoResponse; 
    burritoResponse = "You Ordered " + burritoVariable + "beans." + onionsVariable + "Good choice!"; 
    $("#response").html(burritoResponse);
}; 
let blackBeans;
blackBeans = "black"; 
makeABurrito(blackBeans);
let whiteonion;
whiteonion = "no onion";
makeABurrito(whiteonion); 
    


let userInput;
userInput = "samosa";
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
