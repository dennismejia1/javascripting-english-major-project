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
userInput = "samosa";
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
