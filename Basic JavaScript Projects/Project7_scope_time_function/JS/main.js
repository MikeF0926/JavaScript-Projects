//Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");    
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//Local variable //wont display the second part incorrectly because of the top code.
//but i deleted and tried and did console log, then added back
function Add_numbers_3() {
    var X = 10;
    document.write(20 + X);
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();

//if statment for time before 6:00
function what_Date() {
    if (new Date().getHours() < 15) {
        document.getElementById("Hello").innerHTML = "What are you up to?";
    }
}

//Else statment
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Alcohol = "You are old enough to purchase Alcohol!";
    }
    else {
        Alcohol = "You are not old enough to purchase Alcohol!";
    }
    document.getElementById("Are_you_old_en?").innerHTML = Alcohol;
   }

   //Else If
   function Time_function() {
       var Time = new Date().getHours();
       var Reply;
       if (Time < 12 == Time > 0) {
           Reply = "It is morning time!";
       }
       else if (Time >= 12 == Time < 18) {
           Reply = "It is afternoon.";
       }
       else {
           Reply = "It is evening.";
       }
       document.getElementById("Time_of_day").innerHTML = Reply
   }
   