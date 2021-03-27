function mySubtraction(a, b) { //subtracting function
    return a - b;
}
document.getElementById("Sub").innerHTML = mySubtraction(8, 4); 

function myAddition(a, b) { //addition function
    return a + b;
}
document.getElementById("Add").innerHTML = myAddition(6, 7);

function myDivision(a, b) { //divison function
    return a / b;
}
document.getElementById("Divide").innerHTML = myDivision(6, 3);

function myMultiplication(a, b) { //multiplication function
    return a * b;
}
document.getElementById("Multiply").innerHTML =myMultiplication(9, 9);

function myMulti(a, b, c, d) { //multiple equations
    return (a + b) * c / b - d;
}
document.getElementById("Multi").innerHTML = myMulti(15, 5, 10, 3);

function myRemainder(a, b) { //gives back the remainder
    return a % b
}
document.getElementById("Remain").innerHTML = myRemainder (25, 6);

function myIncrement(a) { //applied increment function
    return ++a
}
document.getElementById("Inc").innerHTML = myIncrement(6);

function myDecrement(a) { //applied decrement function
    return --a
}
document.getElementById("Dec").innerHTML = myDecrement(7.55);

window.alert(Math.random() * 10); //random math, gives a random pop up showing random numbers 1-10

document.getElementById("round").innerHTML = Math.round(4.5); //math rounding