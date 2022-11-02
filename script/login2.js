min = Math.ceil(111111);
max = Math.floor(999999);
let randomnumber = Math.floor(Math.random() * (max - min) + min);

document.querySelector('.form-button-send-email').onclick = function () {

    document.querySelector('.verification').value = randomnumber;

    const buttonsendemail = document.querySelector('.form-button-send-email');
    email = document.querySelector('.form-email-recover');


    Email.send({
        SecureToken: "f3a8a96c-3832-407b-8cf8-36a1f545d044",
        To: email.value,
        From: "megadatakit@gmail.com",
        Subject: "Recuperar contraseña MDK",
        Body: randomnumber
    }).then(
        message => alert("Codigo enviado"),
        console.log(randomnumber)
    );
}

let checknumber = document.querySelector('.check-randomnumber');
let inputchecknumber = document.querySelector('.input-check-randomnumber');

document.querySelector('.check-randomnumber').onclick = function () {

    if (inputchecknumber.value == randomnumber) {
        alert("zi")
    } else {
        alert("no")
    }
}
