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
    

let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
  };
// and let’s access a property
$("#response").html(myBurritoObject["tortilla"]);


let userInput;
userInput = "samosa";
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
};

let myHabaneroSauceSquirts, myBurritoObject;
// First, define and assign variable for how
// spicy the burrito is.
myHabaneroSauceSquirts = 3; 
// Now assign the burrito object
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  // Make use of the variable above.
  habaneroSauceSquirts: myHabaneroSauceSquirts, 
  // Use the variable again in function 
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
}; 
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();


let arrayOfStrings, arrayofNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3,]:
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]]; 
