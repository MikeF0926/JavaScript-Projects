document.write(typeof 5); //using a type of

document.write("six" + 8); //making a coercion

function my_Function() {
    document.getElementById("pos").innerHTML = 2E410;
} // positive infinity

function my_negFunction() {
    document.getElementById("neg").innerHTML = -3E440;
} //negative infinity

document.write(8 > 3); //true

document.write(8<3); //false

console.log(4*4); //number console.log

console.log(8>16); //fale statement console.log

document.write(13==13); //using double equals to create a true statment

document.write((8+5)==14); //using double equals to create a false statement

x = 8
y = 8
document.write(x===y); //comparisons on both sides

x = 9
y = 10
document.write(x===y); //comparisons but false statement

x = 9
y = "9"
document.write(x===y); //same numbers, but one is a "number" the other is a "string", so false

x = 7
x1 = 6
document.write(x===x1); //same data type different values making it false.

document.write(6>4 && 7>3); //boolean Operator using, "AND"

document.write(7>6 || 5>9); //boolean operator using, "OR"

function not_Function() {
    document.getElementById("Not").innerHTML = !(15>5); //using a not "(!)"
}

function not_Not() {
    document.getElementById("nono").innerHTML = !(7>10); //double negative turning into true
}