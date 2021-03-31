//While loop
function Call_Loop() {
    var Digit = "";
    var X = 1
    while (X < 15) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//length property
function myLength() {
    var str = "Hey, my name is Mike.";
    var X = str.length
    document.getElementById("characters").innerHTML = X;
}

//for loops
var Makes = ["Ford", "Cheverolet", "Dodge", "Jeep", "Tesla"];
var Content = "";
var Y;
function for_Loop() {
    for(Y = 0; Y < Makes.length; Y++) {
        Content += Makes[Y] + "<br>";
    }
    document.getElementById("carMakes").innerHTML = Content;
}

//arrays and objects
function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "awake";
    Dog_Picture[1] = "eating";
    Dog_Picture[2] = "playing";
    Dog_Picture[3] = "sleeping";
    document.getElementById("dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[3] + ".";
}

//constant
function conFunction() {
    const My_PC = {type:"Laptop", brand:"Microsoft", color:"Silver"};
    My_PC.color = "black";
    My_PC.cost = "$2000";
    document.getElementById("Constant").innerHTML = "The color of the " +
        My_PC.type + " is " + My_PC.color;
}

//let function
var X = "Mike";
document.write(X);
{
    let X = "John";
    document.write("<br>" + X);
}
document.write("<br>" + X);

//let object
let car = {
    make: "Ford ",
    model: "Mustang ",
    year: "2021 ",
    color: "red ",
    description : function() {
       return "The car is a " + this.year + this.color + this.make + this.model;
       }
};
document.getElementById("Car_Object").innerHTML = car.description();