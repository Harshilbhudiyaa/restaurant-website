function contact() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value; // Corrected variable name
    var err1 = document.getElementById("email_err");
    var err2 = document.getElementById("subject_err");
    var err3 = document.getElementById("message_err"); // Corrected variable name   

    var var_email, var_subject, var_message; // Declare these variables

    if (email == "") {
        err1.innerHTML = "Email must be required";
        err1.style.color = "red";
        document.getElementById("email").style.border = "1px solid red";

        var_email = false;
    } else {
        var pattern = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
        var check = pattern.test(email);

        if (check) {
            err1.innerHTML = "";
            document.getElementById("email").style.border = "2px solid green";

            var_email = true;
        } else {
            err1.innerHTML = "Email cannot contain special symbols";
            err1.style.color = "red";
            document.getElementById("email").style.border = "1px solid red";

            var_email = false;
        }
    }

    if (subject == "") {
        err2.innerHTML = "Subject must be required";
        err2.style.color = "red";
        document.getElementById("subject").style.border = "1px solid red";

        var_subject = false;
    } else {
        err2.innerHTML = "";
        document.getElementById("subject").style.border = "2px solid green";

        var_subject = true;
    }

    if (message == "") {
        err3.innerHTML = "Please fill your message here";
        err3.style.color = "red";
        document.getElementById("message").style.border = "1px solid red";

        var_message = false;
    } else {
        err3.innerHTML = "";
        document.getElementById("message").style.border = "2px solid green";

        var_message = true;
    }

    if (var_email == true && var_subject == true && var_message == true) {
        alert("Message sent successfully");
    }

    if (var_email == true && var_subject == true && var_message == true) {
        return true;
    } else {
        return false;
    }
}

function validateform() {

    var user = document.getElementById("user1");
    var err1 = document.getElementById("err0");

    var email = document.getElementById("email2");
    var err1 = document.getElementById("err1");


    var pass = document.getElementById("pass3");
    var err2 = document.getElementById("err2");

    if (user.value == "") {
        err0.innerHTML = "User name must be required";
        err0.style.color = "red";
        user.style.border = "2px solid red"

        var_user = false;
    }
    else {
        var pattern = /^A-Za-z{2,15}$/;
        var match = pattern.test(user.value);

        if (match) {
            err0.innerHTML = "";
            user.style.border = "";

            var_user = true;
        }
        else {
            err0.innerHTML = "username condition is not matching";
            err0.style.color = "red";
            user.style.border = "2px solid red"

            var_user = false;

        }
    }


    if (email.value == "") {
        err1.innerHTML = "Email must be required";
        err1.style.color = "red";
        email.style.border = "2px solid red"

        var_email = false;
    }
    else {
        var pattern = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
        var match = pattern.test(email.value);

        if (match) {
            err1.innerHTML = "";
            email.style.border = "";

            var_email = true;
        }
        else {
            err1.innerHTML = "Email is not matching";
            err1.style.color = "red";
            email.style.border = "2px solid red"

            var_email = false;

        }
    }


    if (pass.value == "") {
        err2.innerHTML = "password must be required";
        err2.style.color = "red";
        pass.style.border = "2px solid red"

        var_pass = false;
    }
    else {
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        var match = pattern.test(pass.value);

        if (match) {
            err2.innerHTML = "";
            pass.style.border = "";
            var_pass = true;
        }
        else {
            err2.innerHTML = "password can only 8 digit and it contain special symbol";
            err2.style.color = "red";
            pass.style.border = "2px solid red"

            var_pass = false;

        }
    }

    if (var_email == true && var_pass == true) {
        alert("form submited");
        return true;

    }
    else {
        return false;
    }
}


function register() {
    var user = document.getElementById("user12");
    var err1 = document.getElementById("err0");

    var email = document.getElementById("email3");
    var err1 = document.getElementById("err1");


    var pass = document.getElementById("pass4");
    var err2 = document.getElementById("err2");

    var cpass = document.getElementById("cpass");
    var err3 = document.getElementById("err3");

    if (user.value == "") {
        err0.innerHTML = "User name must be required";
        err0.style.color = "red";
        user.style.border = "2px solid red"

        var_user = false;
    }
    // else {
    //     // var pattern = /^A-Za-z{2,15}$/;
    //     // var match = pattern.test(user.value);

    //     // if (match) {
    //     //     err0.innerHTML = "";
    //     //     user.style.border = "";

    //     //     var_user = true;
    //     // }
    //     // else {
    //     //     err0.innerHTML = "username condition is not matching";
    //     //     err0.style.color = "red";
    //     //     user.style.border = "2px solid red"

    //     //     var_user = false;

    //     // }
    //     var_user = true;
    // }


    if (email.value == "") {
        err1.innerHTML = "Email must be required";
        err1.style.color = "red";
        email.style.border = "2px solid red"

        var_email = false;
    }
    else {
        var pattern = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
        var match = pattern.test(email.value);

        if (match) {
            err1.innerHTML = "";
            email.style.border = "";

            var_email = true;
        }
        else {
            err1.innerHTML = "Email is not matching";
            err1.style.color = "red";
            email.style.border = "2px solid red"

            var_email = false;

        }
    }


    if (pass.value == "") {
        err2.innerHTML = "password must be required";
        err2.style.color = "red";
        pass.style.border = "2px solid red"

        var_pass = false;
    }
    else {
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        var match = pattern.test(pass.value);

        if (match) {
            err2.innerHTML = "";
            pass.style.border = "";
            var_pass = true;
        }
        else {
            err2.innerHTML = "password can only 8 digit and it contain special symbol";
            err2.style.color = "red";
            pass.style.border = "2px solid red"

            var_pass = false;

        }
    }
    if(pass === cpass)
    {
        err3.innerHTML = "password matched";
        err3.style.color = "green";
        var_cpass = true;
    }
    else{
        err3.innerHTML = "password not matched";
        err3.style.color = "red";
        var_cpass = false;
    }

    if (var_email == true && var_pass == true && var_cpass == true)  {
        alert("form submited");
        return true;

    }
    else {
        return false;
    }
}


var firstIndex = 0;
function automaticslide() {

    setTimeout(automaticslide, 1500);
    var pics = 0;
    const img = document.querySelectorAll('#i2');

    for (pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
    }
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block";


}
automaticslide();




function check() {
    var fname = document.getElementById("fname");
    var email = document.getElementById("email20");
    var pnumber = document.getElementById("pnumber");
    var state = document.getElementById("state");
    var city = document.getElementById("city");
    var zipcode = document.getElementById("zipcode");

    var err1 = document.getElementById("err1");
   
    var err3 = document.getElementById("err3");
    var err4 = document.getElementById("err4");
    var err5 = document.getElementById("err5");
    var err6 = document.getElementById("err6");

    //first name
    if (fname.value == "") {
        err1.innerHTML = "First name must be required";
        err1.style.color = "red";
        fname.style.border = "1px solid red";

        var fname_value = false;
    }
    else {
        var pattern = /^[a-zA-Z]{2,15}$/;
        var check = pattern.test(fname.value);

        if (check) {
            fname.style.border = "";
            err1.innerHTML = "";

            var fname_value = true;
        }
        else {
            err1.innerHTML = "First only contain alphabet";
            err1.style.color = "red";
            fname.style.border = "1px solid red";


            var fname_value = false;
        }
    }

    //Email
    if (email.value == "") {
        err2.innerHTML = "Email must be required";
        err2.style.color = "red";
        email.style.border = "1px solid red";

        var email_value = false;
    }
    else {
        var pattern = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
        var check = pattern.test(email.value);

        if (check) {
            email.style.border = "";
            err2.innerHTML = "";

            var email_value = true;
        }
        else {
            err2.innerHTML = "email only contain alphabet";
            err2.style.color = "red";
            email.style.border = "1px solid red";


            var email_value = false;
        }
    }

    //phone number
    if (pnumber.value == "") {
        err3.innerHTML = "Phone Number must be required";
        err3.style.color = "red";
        pnumber.style.border = "1px solid red";

        var pnumber_value = false;
    }
    else {
        var pattern = /^\d[0-9]{10}$/;
        var check = pattern.test(pnumber.value);

        if (check) {
            pnumber.style.border = "";
            err3.innerHTML = "";

            var pnumber_value = true;
        }
        else {
            err3.innerHTML = "phone number contain 10 digit only";
            err3.style.color = "red";
            pnumber.style.border = "1px solid red";


            var pnumber_value = false;
        }
    }

    //state
    if (state.value == "") {
        err4.innerHTML = "State must be required";
        err4.style.color = "red";
        state.style.border = "1px solid red";

        var state_value = false;
    }
    else {
        var pattern = /^[a-zA-Z]{3,8}$/;
        var check = pattern.test(state.value);

        if (check) {
            state.style.border = "";
            err4.innerHTML = "";

            var state_value = true;
        }
        else {
            err4.innerHTML = "state only contain alphabet";
            err4.style.color = "red";
            state.style.border = "1px solid red";


            var state_value = false;
        }
    }

    //city
    if (city.value == "") {
        err5.innerHTML = "city must be required";
        err5.style.color = "red";
        city.style.border = "1px solid red";

        var city_value = false;
    }
    else {
        var pattern = /^[a-zA-Z]{3,8}$/;
        var check = pattern.test(city.value);

        if (check) {
            city.style.border = "";
            err5.innerHTML = "";

            var city_value = true;
        }
        else {
            err5.innerHTML = "city only contain alphabet";
            err5.style.color = "red";
            city.style.border = "1px solid red";


            var city_value = false;
        }
    }


    //Zip code
    if (zipcode.value == "") {
        err6.innerHTML = "zip code must be required";
        err6.style.color = "red";
        zipcode.style.border = "1px solid red";

        var zipcode_value = false;
    }
    else {
        var pattern = /^[0-9]{6}$/;
        var check = pattern.test(zipcode.value);

        if (check) {
            zipcode.style.border = "";
            err6.innerHTML = "";

            var zipcode_value = true;
        }
        else {
            err6.innerHTML = "zip code only contain numbers & size";
            err6.style.color = "red";
            zipcode.style.border = "1px solid red";


            var zipcode_value = false;
        }
    }


    if (fname_value == true  && email_value == true && pnumber_value == true && state_value == true && city_value == true && zipcode_value == true) {
        return true;
    }
    else {
        return false;
    }

}
