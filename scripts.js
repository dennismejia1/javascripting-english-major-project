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

let makeAburrito;
makeAburrito = function(beansVariable){
    let beansResponse; 
    prepareTortilla();
    addBeans();
    addOnionsAndCilantro();
    beansResponse = "You Ordered " + beansVariable + "beans. Good choice!"; 
    $("#response").html(beansResponse);
    rollUpTortilla();
}
    


let userInput;
userInput = "samosa";
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
