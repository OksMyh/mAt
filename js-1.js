// let form = document.getElementsByTagName('form')[0];
//
// function validateForm() {
//     let firstName = document.forms["myForm"]["firstName"].value;
//     let lastName = document.forms["myForm"]["lastName"].value;
//     let div = document.createElement('div');
//     if (firstName == '' ) {
//         div.innerText='Поле не заповнене';
//         form.insertBefore(div,form.children[2]);
//         let inpu1= document.getElementById('firstName');
//         inpu1.setAttribute('title','blablabla')
//         console.log('111');
//     }
//     if (lastName == '') {
//         div.innerText='Поле не заповнене пппп';
//         form.insertBefore(div,form.children[8]);
//         console.log('222');
//     }
// }
let name = document.getElementById('firstName');
let surname = document.getElementById('lastName');
let birthday = document.getElementById('birthday');
let genderM = document.getElementsByName('gender')[0];
let genderF = document.getElementsByName('gender')[1];
let select = document.getElementById('select');
let email = document.getElementById('email');


function validate() {

    if (name.value === '') {
        validateNameIsEmpty();
        if (surname.value === '') {
            validateSurnameIsEmpty();
            if (genderF.checked == false &&
                genderM.checked == false) {
                genderChecked();
                if (select.selectedIndex == '') {
                    selectChecked();
                    if (email.value === '') {
                        validateEmailIsEmpty();
                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                    }
                } else if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            }
        } else if (
            surname.value == surname.value.match(/.*['"].*/)) {
            validateOnQuotesSurname();
            if (genderF.checked == false &&
                genderM.checked == false) {
                genderChecked();
                if (select.selectedIndex == '') {
                    selectChecked();
                    if (email.value === '') {
                        validateEmailIsEmpty();
                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                    }
                } else if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            }
        } else if (
            genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();
            if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            }
        } else if (select.selectedIndex == '') {
            selectChecked();
            if (email.value === '') {
                validateEmailIsEmpty();
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            }
        } else if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (name.value == name.value.match(/.*['"].*/)) {
        validateOnQuotesName();
        if (surname.value === '') {
            validateSurnameIsEmpty();
            if (genderF.checked == false &&
                genderM.checked == false) {
                genderChecked();
                if (select.selectedIndex == '') {
                    selectChecked();
                    if (email.value === '') {
                        validateEmailIsEmpty();
                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                    }
                } else if (email.value === '') {
                    validateEmailIsEmpty();
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                }
            } else if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            }
        } else if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (
        surname.value == surname.value.match(/.*['"].*/)) {
        validateOnQuotesSurname();
        if (genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();
            if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
            /////////
        } else if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (select.selectedIndex == '') {
        selectChecked();
        if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (email.value === '') {
        validateEmailIsEmpty();
    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
    }
}

else
if (
    genderF.checked == false &&
    genderM.checked == false) {
    genderChecked();
    if (select.selectedIndex == '') {
        selectChecked();
        if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (email.value === '') {
        validateEmailIsEmpty();
    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
    }
} else if (select.selectedIndex == '') {
    selectChecked();
    if (email.value === '') {
        validateEmailIsEmpty();
    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
    }
} else if (email.value === '') {
    validateEmailIsEmpty();
} else if (email.value != email.value.match(/^.+@.+$/)) {
    emailChecked();//
} else
if (
    genderF.checked == false &&
    genderM.checked == false) {
    genderChecked();
    if (select.selectedIndex == '') {
        selectChecked();
        if (email.value === '') {
            validateEmailIsEmpty();
        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
        }
    } else if (email.value === '') {
        validateEmailIsEmpty();
    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
    }
} else if (select.selectedIndex == '') {
    selectChecked();
    if (email.value === '') {
        validateEmailIsEmpty();
    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
    }
} else if (email.value === '') {
    validateEmailIsEmpty();
} else if (email.value != email.value.match(/^.+@.+$/)) {
    emailChecked();
}
else console.log('Everything ok');
}

function validateNameIsEmpty() {
    console.log('name');
    // let error = document.getElementsByClassName('errorName');
    document.querySelector('.errorName').style.display = 'block';
    // error.dataset.content;
}

function validateSurnameIsEmpty() {
    console.log('surname');
    document.querySelector('.errorSurname').style.display = 'block';
}

function validateOnQuotesName() {
    console.log('name-lapky');
    document.querySelector('.errorName').style.display = 'block';
    let errorSymbol = document.querySelector('.errorName');
    errorSymbol.setAttribute('data-content', 'Field not valid.( don\'t put \' or ")');
}

function validateOnQuotesSurname() {
    console.log('surname-lapky');
    document.querySelector('.errorSurname').style.display = 'block';
    let errorSymbol = document.querySelector('.errorSurname');
    errorSymbol.setAttribute('data-content', 'Field not valid.( don\'t put \' or ")');
}

function genderChecked() {
    console.log('gender');
    document.querySelector('.errorGender').style.display = 'block';
}

function selectChecked() {
    console.log('select choose');
    document.querySelector('.errorSelect').style.display = 'block';
}

function validateEmailIsEmpty() {
    console.log('email');
    document.querySelector('.errorEmail').style.display = 'block';
}

function emailChecked() {
    console.log('email-not correct');
    document.querySelector('.errorEmail').style.display = 'block';
    let errorSymbol = document.querySelector('.errorEmail');
    errorSymbol.setAttribute('data-content', 'Email address is not valid');
}


// email.value !== email.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
//                                  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/