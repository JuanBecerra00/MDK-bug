min = Math.ceil(111111);
max = Math.floor(999999);
let randomnumber = Math.floor(Math.random() * (max - min) + min);


let checknumber = document.querySelector('.check-randomnumber');
let checkrn = document.querySelector('.checkrn');


let cards = document.querySelector('.cards');
let recoverlink = document.querySelector('.recover-link');
let recovercancel = document.querySelector('.recover-cancel');
let recovercontinue = document.querySelector('.recover-continue');
let recoveronline = document.querySelector('.recover-button-online');
let recoverlocal = document.querySelector('.recover-button-local');
let recovermethodcancel = document.querySelector('.recover-method-cancel');
let recoverlocalcancel = document.querySelector('.recover-local-cancel');
let recoverlocalcontinue = document.querySelector('.recover-local-continue');
let recoveronlinecancel = document.querySelector('.recover-online-cancel');
let recoveronlinecontinue = document.querySelector('.recover-online-continue');
let recovercodecancel = document.querySelector('.recover-code-cancel');
let recovercodecontinue = document.querySelector('.recover-code-continue');
let recovernewpasswordcancel = document.querySelector('.recover-new-password-cancel');
let recovernewpasswordcontinue = document.querySelector('.recover-new-password-continue');
let resendemail = document.querySelector('.resend-email');

recoverlink.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.add('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recovercancel.onclick = function () {
    cards.classList.add('step-1')
    cards.classList.remove('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recovercontinue.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.add('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recoveronline.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.add('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recoverlocal.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.remove('step-3')
    cards.classList.add('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recovermethodcancel.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.add('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}
recoverlocalcancel.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.add('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recoverlocalcontinue.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.add('step-7')
}
recoveronlinecancel.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.add('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recoveronlinecontinue.onclick = function () {
    email = document.querySelector('.form-email-recover');
    if (email.value == 7) {
        console.log("test")
        cards.classList.remove('step-1'),
        cards.classList.remove('step-2'),
        cards.classList.remove('step-3'),
        cards.classList.remove('step-4'),
        cards.classList.remove('step-5'),
        cards.classList.add('step-6'),
        cards.classList.remove('step-7')
    }else{
        document.querySelector('.verification').value = randomnumber;

    const buttonsendemail = document.querySelector('.form-button-send-email');


    Email.send({
        SecureToken: "b91fe74e-b4b0-4f88-b2e8-64667525c353",
        To: email.value,
        From: "megadatakit@gmail.com",
        Subject: "Codigo de recuperacion cuenta MDK",
        Body: randomnumber
    }).then(
        message => alert("Codigo enviado"),
        cards.classList.remove('step-1'),
        cards.classList.remove('step-2'),
        cards.classList.remove('step-3'),
        cards.classList.remove('step-4'),
        cards.classList.remove('step-5'),
        cards.classList.add('step-6'),
        cards.classList.remove('step-7'),
        console.log(randomnumber)
    );
    }
}

resendemail.onclick = function () {


    document.querySelector('.verification').value = randomnumber;

    const buttonsendemail = document.querySelector('.form-button-send-email');
    email = document.querySelector('.form-email-recover');


    Email.send({
        SecureToken: "b91fe74e-b4b0-4f88-b2e8-64667525c353",
        To: email.value,
        From: "megadatakit@gmail.com",
        Subject: "reenvio de codigo de recuperacion cuenta MDK",
        Body: randomnumber
    }).then(
        message => alert("Codigo enviado"),
        console.log(randomnumber)
    );
}

recovercodecancel.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.remove('step-3')
    cards.classList.remove('step-4')
    cards.classList.add('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recovercodecontinue.onclick = function () {
    if (checkrn.value == randomnumber) {
        cards.classList.remove('step-1')
        cards.classList.remove('step-2')
        cards.classList.remove('step-3')
        cards.classList.remove('step-4')
        cards.classList.remove('step-5')
        cards.classList.remove('step-6')
        cards.classList.add('step-7')
    } else {
        console.log("no")
        console.log(checkrn.value)
        console.log(randomnumber)
    }

}
recovernewpasswordcancel.onclick = function () {
    cards.classList.remove('step-1')
    cards.classList.remove('step-2')
    cards.classList.add('step-3')
    cards.classList.remove('step-4')
    cards.classList.remove('step-5')
    cards.classList.remove('step-6')
    cards.classList.remove('step-7')
}

recovernewpasswordcontinue.onclick = function () {
    if (checkrn.value == randomnumber) {
        cards.classList.add('step-1')
        cards.classList.remove('step-2')
        cards.classList.remove('step-3')
        cards.classList.remove('step-4')
        cards.classList.remove('step-5')
        cards.classList.remove('step-6')
        cards.classList.remove('step-7')
    } else {
        console.log("no")
        console.log(checkrn.value)
        console.log(randomnumber)
    }

}
