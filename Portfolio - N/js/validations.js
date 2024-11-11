const clearErrors = () => {
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
}

const validateForm = () => {
    let isValid = true;
    
    const firstName = document.getElementById("fname").value.trim();
    const lastName =  document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if(firstName === "") {
        firstNameError.textContent = "First name is required";
        isValid = false;
    } 
    if(lastName === "") {
        lastNameError.textContent = "Last name is required";
        isValid = false;
    } 
    if(email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } 
    if(subject === "") {
        subjectError.textContent = "Subject is required";
        isValid = false;
    } 
    if(message === "") { 
        messageError.textContent = "Message is required";
        isValid = false;
    }  
    else if(!isValidEmail(email)) {
        isValid = false;
        emailError.textContent = "Enter a valid email"
        isValid = false;
    }

    return isValid;
}

const isValidEmail = (email) =>  {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const clearForm = () => {
    const firstName = document.getElementById("fname");
    const lastName =  document.getElementById("lname");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}

const handleForm = (evt) => {
    evt.preventDefault();
    clearErrors();

    if(validateForm()) {
        alert("Message successfully send");
        clearForm();
    }
}


//Handle all the events
const handleEvents = () => {
    document.addEventListener("submit", handleForm);
}
handleEvents();