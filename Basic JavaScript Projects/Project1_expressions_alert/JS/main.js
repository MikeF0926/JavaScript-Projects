var orange = "I would one day like to become an astronaut" //created a concatenate
+ " so I can get in a rocket ship and go"
+ " to the moon."

document.write(orange);

window.alert("Hello, New User!"); //window alert



var Dad = "Mark", Mom ="Linda", Family = "The Swords", Son ="Harry", Daughter="Bella"; //font colors
var Dad = Dad.fontcolor("red")
var Mom = Mom.fontcolor("green")
var Family= Family.fontcolor("black")
var Son = Son.fontcolor("blue")
var Daughter = Daughter.fontcolor("orange")

document.write(Dad);

function My_First_Function() {             //Defining a function and naming it
    var str = "This text is green!";         //Defining a variable and giving it a string value
    var result = str.fontcolor("green");    //Using the color method on str variable    
    document.getElementById("Green_Text").innerHTML = "result";  //Putting the value of result HTML element with "Green_Text" id
}

document.write(9*9) //expression 