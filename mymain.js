





//const name = document.getElementById("name").value
//const email = document.getElementById("email").value                      false
//const password = document.getElementById("password").value




function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text ="";

    error.style.display = "block";
    


    if(name.length < 6){
        text ="please enter valid user name !! "
        error.innerHTML = text;
        return false;
    }

    else if(email.indexOf("@") == -1 || email.length < 10) {   // wrong was in write    email.indexOf("@") == -1 ---- that's true not email.indexOf("@") = -1
        text ="please enter valid email !!"                                                                                          // double equal not one
        error.innerHTML = text;
        return false;
    }

    else if(isNaN(phone) || phone.length != 8 ){   // wrong was in write    isNaN(phone) ---- that's true not  phone.isNaN(phone)
        text ="please enter valid phone !!"        
        error.innerHTML = text;
        return false;
    }

    else 
    alert ("thanks for you ")
    return true;

}
























