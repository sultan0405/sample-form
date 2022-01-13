// * Validations
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// * Function for Error
function ShowError(input, sms){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small')
    small.innerText = sms;
}

// * Function for Success
function ShowSuccess(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
    
}

// * isAvalidEmail
// function isValid(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(String(email).toLowerCase());
// }

function checkEmail(input) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value==='') {
        ShowError(input, `${getFieldNAme(input)} is Required`)
    } else if(!re.test(input.value.trim())){

        ShowError(input, `${getFieldNAme(input)} is not Valid` )
    } 
    else {
        ShowSuccess(input)
    }
}

// * Check Required
function checkRequired(inputArr){
    inputArr.forEach(input => {
        // console.log(input.value);
        if (input.value.trim()==='') {
            // ShowError(input, `${input.id}  is Required`)
            ShowError(input, `${getFieldNAme(input)}  is Required`)
        } else {
            ShowSuccess(input)
        }
    });
}

//* Get Field Name
function getFieldNAme(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// * Check Lenght
function checkLenght(input, min, max){
    if (input.value.length < min) {
        ShowError(input, `${getFieldNAme(input)} is must be grater than ${min} characters `)
    } else if(input.value.length > max){
        ShowError(input, `${getFieldNAme(input)} is must be less than ${max} characters `)
    } 
    else {
        ShowSuccess(input)
    }
}

// * Check Match
function checkMatchInputs(input1, input2){
    if (input1.value!==input2.value) {
        ShowError(input2, 'Passwords do not match')
    }
}

// * Events
form.addEventListener('submit', (e)=>{
    e.preventDefault();
   checkRequired([username, email, password, password2]);
   checkLenght(username, 3, 15)
   checkLenght(password, 6, 25)
   checkEmail(email);
    checkMatchInputs(password, password2);
   
   
 
})