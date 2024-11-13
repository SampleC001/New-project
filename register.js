function validateForm() {
    fname= document.forms["myForm"]["fname"].value;
    if (fname == "") {
      alert("First Name cannot be Null");
      return false;
    }
    sname= document.forms["myForm"]["sname"].value;
    if (sname == "") {
      alert("Surname cannot be Null");
      return false;
    }
    DoB= document.forms["myForm"]["DoB"].value;
    if (DoB == "") {
      alert("Date of Birth cannot be Empty");
      return false;
    }
    Email= document.forms["myForm"]["Email"].value;
    if (Email == "") {
      alert("Email cannot be Null");
      return false;
    }
    sAddress1= document.forms["myForm"]["sAddress1"].value;
    if (sAddress1 == "") {
      alert("Street Address cannot be Null");
      return false;
    }
    city= document.forms["myForm"]["city"].value;
    if (city == "") {
      alert("City cannot be Null");
      return false;
    }
    state= document.forms["myForm"]["state"].value;
    if (state == "") {
      alert("State cannot be Null");
      return false;
    }
    password= document.forms["myForm"]["password"].value;
    if (password == "") {
      alert("Please input a password");
      return false;
    }

  }
  
