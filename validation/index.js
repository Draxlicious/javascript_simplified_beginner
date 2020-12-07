// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form")
const nameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const passwordConfirmationInput = document.querySelector("#password-confirmation")
const terms = document.getElementById("terms")
const errorList = document.querySelector(".errors-list")
let errorsDiv = document.querySelector(".errors")
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", function(e){
    let errorMessages = []
    clearErrors()
    //    TODO: Create an array to store all error messages and clear any old error messages
    //    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
        if(nameInput.value.length < 6){
            errorMessages.push("Name must be atleast 6 chars long")
            
        }
//      2. Ensure the password is at least 10 characters long
        if(passwordInput.value.length < 10){
            errorMessages.push("password has to contain at least 10 characters")
            
        }
//      3. Ensure the password and confirmation password match
        if(passwordInput.value != passwordConfirmationInput.value){
            errorMessages.push("passwords must match")
        }
//      4. Ensure the terms checkbox is checked
        if(!terms.checked){
            errorMessages.push("Must accept the terms")
        }
        console.log(errorMessages)

        if(errorMessages.length > 0 ){
            e.preventDefault()
            showErrors(errorMessages)
        }
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

})
// TODO: Define this function
function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
    while(errorList.children[0] != null){
        errorList.removeChild(errorList.children[0])
    }
    // errorList.innerHTML = ""
    errorsDiv.classList.remove("show")
}

// TODO: Define this function
function showErrors(errorMessages) {
    // Add each error to the error-list element
    errorMessages.forEach(err =>{
        let liElement = document.createElement("LI")
        liElement.innerHTML = err
        errorList.appendChild(liElement)
    })
    // liElement.appendChild(errorMessages)
    // errorList.appendChild(liElement)
    errorsDiv.classList.add("show")
    // Make sure to use an li as the element for each error
    // Also, make sure you add the show class to the errors container
}