//ternary
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//ternary again
function vote_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "Not old enough to":"Awesome you can";
    document.getElementById("Vote").innerHTML = can_Vote + " vote!";
}

//object constructor function using "this" and "new"
function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2000, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//test function
function newFunction() {
document.getElementById("New_and_This").innerHTML = "Testing this out!"
}

// nested function for subtraction
function sub_Function() {
    document.getElementById("Nested_Function").innerHTML = Sub();
    function Sub() {
        var Starting_num = 15;
        function Sub_three() {Starting_num -= 3;}
        Sub_three();
        return Starting_num;
    }
}


