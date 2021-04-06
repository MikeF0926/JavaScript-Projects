//switch function
function aniFunction() {
    var Animal_Out;
    var Animals = document.getElementById("animal").value;
    var Animal_String = " is an amazing animal!";
    switch (Animals) {
        case "Lion":
            Animal_Out = "Lion" + Animal_String;
        break;
        case "Tiger":
            Animal_Out = "Tiger" + Animal_String;
        break;
        case "Bear":
            Animal_Out = "Bear" + Animal_String;
        break;
        case "Giraffe":
            Animal_Out = "Giraffe" + Animal_String;
        break;
        case "Rhino":
            Animal_Out = "Rhino" + Animal_String;
        break;
        case "Elephant":
            Animal_Out = "Elephant" + Animal_String;
        break;
        default:
        Animal_Out = "Enter a animal exactly as written from list above."
    }
    document.getElementById("Output").innerHTML = Animal_Out;
}

//class instead of id
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//canvas graphic
var C = document.getElementById("ID_Name");
var I = C.getContext("2d");
I.beginPath();
I.arc(95, 50, 40, 0, 2 * Math.PI);
I.stroke();

//canvas gradiant
var c = document.getElementById("live");
var o = c.getContext("2d");

var grd = o.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

o.fillStyle = grd;
o.fillRect(20, 20, 150, 100);