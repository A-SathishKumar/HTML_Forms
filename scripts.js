// let form = document.getElementById("myForm")
// let name = document.createElement("label")
// name.innertext = "Name:"

var title = document.getElementById("title")
title.innerText = "DOM Manipulation with Forms";
var description = document.getElementById("description")
description.innerText = "This was a From created by using DOM manipulation "

function appendtotable() {
    var firstName  = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var textarea = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var genderInputs = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
            break;
        }
    }
    var email = document.getElementById("email").value;

    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var selectedFood = [];
    var checkboxes = document.getElementsByName("food");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedFood.push(checkboxes[i].value);
        }
    }
    if (selectedFood.length !== 2) {
        alert("Please choose exactly 2 foods.");
        return;
    }
    var food = selectedFood.join(", ");

    var table = document.querySelector('#table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = textarea;
    cell5.innerHTML = pincode;
    cell6.innerHTML = gender;
    cell7.innerHTML = food;
    cell8.innerHTML = state;
    cell9.innerHTML = country;


    // Clear the form fields after adding to the table
    document.getElementById("form").reset();
}


function testfun(){
    alert("this test")
}
