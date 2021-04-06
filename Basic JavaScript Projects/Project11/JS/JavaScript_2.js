function validateForm() {
    var x = document.forms["myForm"]["country"].value;
    if (x == "") {
      alert("Must Add Country");  
      return false;
    }
  }
