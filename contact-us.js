function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["contactForm"]["fullName"].value = "";
    document.forms["contactForm"]["phoneNum"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submit-btn").innerText = "Send Request";
    document.forms["contactForm"]["fullName"].focus();
}

function validateRequired() {
    clearErrors();
    var fullName = document.forms["contactForm"]["fullName"].value;
    var phoneNum = document.forms["contactForm"]["fullName"].value;
    if (fullName == "") {
        alert("Please fill in your full name.");
        document.forms["contactForm"]["fullName"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["fullName"].focus();
        return false;
    }
    if (phoneNum == "" || isNaN(phoneNum)) {
        alert("Please fill in with phone number in digits only, no parentheses or hyphens.");
        document.forms["contactForm"].parentElement.className= "form-group has-error";
        document.forms["contactForm"]["phoneNum"].focus();
        return false;
    }
}