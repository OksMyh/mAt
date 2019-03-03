let name = document.getElementById('firstName');
let surname = document.getElementById('lastName');
let birthday = document.getElementById('birthday');
let genderM = document.getElementsByName('gender')[0];
let genderF = document.getElementsByName('gender')[1];
let select = document.getElementById('select');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let address = document.getElementById('address');


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
                        if (pass.value === '') {
                            passCheck();
                        }

                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                        if (pass.value === '') {
                            passCheck();
                        }
                    } else if (pass.value === '') {
                        passCheck();
                    }
                } else if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                    }
                } else if (pass.value === '') {
                    passCheck();
                }
            } else if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
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
                        if (pass.value === '') {
                            passCheck();
                        }

                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                        if (pass.value === '') {
                            passCheck();
                        }
                    } else if (pass.value === '') {
                        passCheck();
                    }
                } else if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck()
                    }
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    passCheck();

                } else if (pass.value === '') {
                    passCheck();
                }

            } else if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (
            genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();

            if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (select.selectedIndex == '') {
            selectChecked();
            if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
            }

        } else if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === ''){
                addressChecked();
            }
        }else if (address.value === ''){
            addressChecked();
        }
    }

    //name symbol check
    else if (name.value == name.value.match(/.*['"].*/)) {
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
                        if (pass.value === '') {
                            passCheck();
                            if (address.value === '') {
                                addressChecked();
                            }
                        } else if (address.value === '') {
                            addressChecked();
                        }
                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                        if (pass.value === '') {
                            passCheck();
                            if (address.value === ''){
                                addressChecked();
                            }
                        }else if (address.value === ''){
                            addressChecked();
                        }
                    } else if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (select.selectedIndex == '') {
                selectChecked();
                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            }
            else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === '') {
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }

        else if (
            surname.value == surname.value.match(/.*['"].*/)) {
            validateOnQuotesSurname();
            if (genderF.checked == false &&
                genderM.checked == false) {
                genderChecked();

                if (select.selectedIndex == '') {
                    selectChecked();

                    if (email.value === '') {
                        validateEmailIsEmpty();
                        if (pass.value === '') {
                            passCheck();
                            if (address.value === ''){
                                addressChecked();
                            }
                        }else if (address.value === ''){
                            addressChecked();
                        }

                    } else if (email.value != email.value.match(/^.+@.+$/)) {
                        emailChecked();
                        if (pass.value === '') {
                            passCheck();
                            if (address.value === ''){
                                addressChecked();
                            }
                        }else if (address.value === ''){
                            addressChecked();
                        }
                    } else if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            }
            else if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            }
            else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (
            genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();

            if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (select.selectedIndex == '') {
            selectChecked();

            if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === ''){
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }
    }
    //surname
    else if (surname.value === '') {
        validateSurnameIsEmpty();

        if (
            genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();

            if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            }
            else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (select.selectedIndex == '') {
            selectChecked();
            if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === ''){
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }
    }
    // surname symbol check
    else if (surname.value == surname.value.match(/.*['"].*/)) {
        validateOnQuotesSurname();

        if (
            genderF.checked == false &&
            genderM.checked == false) {
            genderChecked();

            if (select.selectedIndex == '') {
                selectChecked();

                if (email.value === '') {
                    validateEmailIsEmpty();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }

                } else if (email.value != email.value.match(/^.+@.+$/)) {
                    emailChecked();
                    if (pass.value === '') {
                        passCheck();
                        if (address.value === ''){
                            addressChecked();
                        }
                    }else if (address.value === ''){
                        addressChecked();
                    }
                } else if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            }
            else if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (select.selectedIndex == '') {
            selectChecked();
            if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === ''){
                addressChecked();
            }
        }else if (address.value === ''){
            addressChecked();
        }
    }
//gender
    else if (
        genderF.checked == false &&
        genderM.checked == false) {
        genderChecked();

        if (select.selectedIndex == '') {
            selectChecked();
            if (email.value === '') {
                validateEmailIsEmpty();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }

            } else if (email.value != email.value.match(/^.+@.+$/)) {
                emailChecked();
                if (pass.value === '') {
                    passCheck();
                    if (address.value === ''){
                        addressChecked();
                    }
                }else if (address.value === ''){
                    addressChecked();
                }
            } else if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        }
        else if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === ''){
                    addressChecked();
                }
            }else if (address.value === ''){
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === ''){
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }
    }
    //select
    else if (select.selectedIndex == '') {
        selectChecked();

        if (email.value === '') {
            validateEmailIsEmpty();
            if (pass.value === '') {
                passCheck();
                if (address.value === '') {
                    addressChecked();
                }
            } else if (address.value === '') {
                addressChecked();
            }

        } else if (email.value != email.value.match(/^.+@.+$/)) {
            emailChecked();
            if (pass.value === '') {
                passCheck();
                if (address.value === '') {
                    addressChecked();
                }
            } else if (address.value === '') {
                addressChecked();
            }
        } else if (pass.value === '') {
            passCheck();
            if (address.value === '') {
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }
    }
    //email
    else if (email.value === '') {
        validateEmailIsEmpty();
        if (pass.value === '') {
            passCheck();
            if (address.value === '') {
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }

    } else if (email.value != email.value.match(/^.+@.+$/)) {
        emailChecked();
        if (pass.value === '') {
            passCheck();
            if (address.value === '') {
                addressChecked();
            }
        } else if (address.value === '') {
            addressChecked();
        }
    }
    //pass
    else if (pass.value === '') {
        passCheck();
        if (address.value === '') {
            addressChecked();
        }
    }
    //address
    else if (address.value === '') {
        addressChecked();
    }
    else {
        console.log('Everything ok');
        alert('Validation passed')
    }
}

function validateNameIsEmpty() {
    console.log('name');
    // let error = document.getElementsByClassName('errorName');
    document.querySelector('.errorName').style.display = 'block';
    // error.dataset.content;
    name.style.border = '1px solid red';
}

function validateSurnameIsEmpty() {
    console.log('surname');
    document.querySelector('.errorSurname').style.display = 'block';
    surname.style.border = '1px solid red';
}

function validateOnQuotesName() {
    console.log('name-lapky');
    document.querySelector('.errorName').style.display = 'block';
    let errorSymbol = document.querySelector('.errorName');
    errorSymbol.setAttribute('data-content', 'Field not valid.( don\'t put \' or ")');
    name.style.border = '1px solid red';
}

function validateOnQuotesSurname() {
    console.log('surname-lapky');
    document.querySelector('.errorSurname').style.display = 'block';
    let errorSymbol = document.querySelector('.errorSurname');
    errorSymbol.setAttribute('data-content', 'Field not valid.( don\'t put \' or ")');
    surname.style.border = '1px solid red';
}

function genderChecked() {
    console.log('gender');
    document.querySelector('.errorGender').style.display = 'block';
}

function selectChecked() {
    console.log('select choose');
    document.querySelector('.errorSelect').style.display = 'block';
    select.style.border = '1px solid red';
}

function validateEmailIsEmpty() {
    console.log('email');
    document.querySelector('.errorEmail').style.display = 'block';
    email.style.border = '1px solid red';
}

function emailChecked() {
    console.log('email-not correct');
    document.querySelector('.errorEmail').style.display = 'block';
    let errorSymbol = document.querySelector('.errorEmail');
    errorSymbol.setAttribute('data-content', 'Email address is not valid');
    email.style.border = '1px solid red';
}

function passCheck() {
    console.log('PASS');
    document.querySelector('.errorPass').style.display = 'block';
    pass.style.border = '1px solid red';
}

function addressChecked() {
    console.log('address');
    document.querySelector('.errorAddress').style.display = 'block';
    address.style.border = '1px solid red';
}

function validateAddress() {
    console.log('address-lapky');
    document.querySelector('.errorAddress').style.display = 'block';
    let errorSymbol = document.querySelector('.errorAddress');
    errorSymbol.setAttribute('data-content', 'Field not valid.( don\'t put \' or ")');
    name.style.border = '1px solid red';
}

