let userid = document.querySelector('.form-id');
let useridrecover = document.querySelector('.form-id-recover');
let formpw = document.querySelector('.form-pw');
let formnewpw = document.querySelector('.form-new-pw');
let formnewpwconfirm = document.querySelector('.form-new-pw-confirm');
let xid = document.querySelector('.error-x-id')
let xidrecover = document.querySelector('.error-x-id-recover');
let xpw = document.querySelector('.error-x-pw');
let xnewpw = document.querySelector('.error-x-new-pw');
let xnewpwconfirm = document.querySelector('.error-x-new-pw-confirm');
let eyes = document.querySelector('.error-eyes');
let loginbutton = document.querySelector('.form-button-login');
let fomrbuttonrecovercancel = document.querySelector('.form-button-recover-cancel');
let forgot = document.querySelector('.forgot');
let newpwsubmit = document.querySelector('.form-button-new-pw-submit');
let errorid = document.querySelector('.error-message-id')
let erroridrecover = document.querySelector('.error-message-id-recover')
let errorpw = document.querySelector('.error-message-pw')
let errornewpw = document.querySelector('.error-message-new-pw')
let errornewpwconfirm = document.querySelector('.error-message-new-pw-confirm')
let formcontainer = document.querySelector('.form-container');
userid.onclick = function () {
    userid.onkeyup = function () {
        userid.classList.remove('shake')
        xid.classList.add('opacity-0')
        errorid.classList.add('opacity-0')
        eyes.classList.remove('error-visible')
        if (isNaN(userid.value)) {
            userid.classList.add('shake')
            xid.classList.remove('opacity-0')
            errorid.classList.remove('opacity-0')
            eyes.classList.add('error-visible')
        }
    }
}
useridrecover.onclick = function () {
    useridrecover.onkeyup = function () {
        useridrecover.classList.remove('shake')
        xidrecover.classList.add('opacity-0')
        erroridrecover.classList.add('opacity-0')
        eyes.classList.remove('error-visible')
        if (isNaN(useridrecover.value)) {
            useridrecover.classList.add('shake')
            xidrecover.classList.remove('opacity-0')
            erroridrecover.classList.remove('opacity-0')
            eyes.classList.add('error-visible')
        }
    }
}
formpw.onclick = function () {
    formpw.onkeyup = function () {
        formpw.classList.remove('shake')
        xpw.classList.add('opacity-0')
        errorpw.classList.add('opacity-0')
        eyes.classList.remove('error-visible')
    }
    formpw.onblur = function () {
        if (formpw.validity.valid==false) {
            if (formpw.value==""){

            }
            else{
            formpw.classList.add('shake')
            xpw.classList.remove('opacity-0')
            errorpw.classList.remove('opacity-0')
            eyes.classList.add('error-visible')
            }
        }
    }
}
formnewpw.onclick = function () {
    formnewpw.onkeyup = function () {
        formnewpw.classList.remove('shake')
        xnewpw.classList.add('opacity-0')
        errornewpw.classList.add('opacity-0')
        eyes.classList.remove('error-visible')
    }
    formnewpw.onblur = function () {
        if (formnewpw.validity.valid==false) {
            if (formnewpw.value==""){

            }
            else{
            formnewpw.classList.add('shake')
            xnewpw.classList.remove('opacity-0')
            errornewpw.classList.remove('opacity-0')
            eyes.classList.add('error-visible')
            }
        }
    }
}

formnewpwconfirm.onclick = function () {
    formnewpwconfirm.onkeyup = function () {
        formnewpwconfirm.classList.remove('shake')
        xnewpwconfirm.classList.add('opacity-0')
        errornewpwconfirm.classList.add('opacity-0')
        eyes.classList.remove('error-visible')
    }
    formnewpwconfirm.onblur = function () {
        if (formnewpwconfirm.validity.valid==false) {
            if (formnewpwconfirm.value==""){

            }
            else{
            formnewpwconfirm.classList.add('shake')
            xnewpwconfirm.classList.remove('opacity-0')
            errornewpwconfirm.classList.remove('opacity-0')
            eyes.classList.add('error-visible')
            }
        }
    }
}


loginbutton.onclick = function() {
    if(userid.value==""){
        userid.classList.add('shake')
        xid.classList.remove('opacity-0')
        eyes.classList.add('error-visible')
    }
    if(formpw.value==""){
        formpw.classList.add('shake')
        xpw.classList.remove('opacity-0')
        eyes.classList.add('error-visible')
    }
}
forgot.onclick = function () {
    formcontainer.classList.add('recover')
}
newpwsubmit.onclick = function () {
    if (formnewpw.value!=formnewpwconfirm.value){
        formnewpwconfirm.classList.add('shake')
        xnewpwconfirm.classList.remove('opacity-0')
        errornewpwconfirm.classList.remove('opacity-0')
        eyes.classList.add('error-visible')
        alert("Las contraseñas no son iguales");
    }
}