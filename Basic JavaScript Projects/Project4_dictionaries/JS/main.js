function my_Dictionary() {
    var Vehicle = { //created a variable with an object and unique KVP's
        Make:"Ford",
        Model:"Mustang",
        Color:"Black",
        Engine:"V-8",
        Year:2021,        
    };
    delete Vehicle.Year; //delete statement
    document.getElementById("Delete").innerHTML = Vehicle.Year;
}

