//concatenate
function whole_Sentence() {
    var part_1 = "Welcome to ";
    var part_2 = "making a sentence ";
    var part_3 = "concatenate by ";
    var part_4 = "string them all together.";
    var entire_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = entire_sentence
}

//slice method
function cut_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Cut").innerHTML = Section
}


//topUpper method
function upper_Sen() {
    var str = "Test this out!";
    document.getElementById("upper").innerHTML = str.toUpperCase();
}

//search method
function mySearch() {
    var str = "Testing this out!";
    var n = str.search("this");
    document.getElementById("find").innerHTML = str.search("this");
}

//tostring numbers method
function stringTogether() {
    var X = 96;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//precision method
function myPercision() {
    var X = 16789.65876212234;
    document.getElementById("precise").innerHTML = X.toPrecision(8);
}

//tofixed method
function myFix() {
    var X = 15.56678;
    document.getElementById("fix").innerHTML = X.toFixed(2);
}

//valueof method
function myValue() {
    var car = "Car is blue";
    document.getElementById("valueme").innerHTML = car.valueOf();
}