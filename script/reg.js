let regbutton = document.querySelector('.reg-button');
let reg = document.querySelector('.reg');
let regbg = document.querySelector('.reg-bg');
let cancelregbutton = document.querySelector('.cancel-reg-button');
let listselectall = document.querySelector('.list-select-all');
let editbutton = document.querySelector('.edit-button');
let exportbutton = document.querySelector('.export-button');
let exportformats = document.querySelector('.export-formats');
let mostusedcontainer = document.querySelector('.most-used-container');

let checks = document.querySelectorAll(".listcheck");

regbutton.onclick = function () {
    reg.classList.toggle('active')
    regbg.classList.toggle('active')
}
regbg.onclick = function () {
    reg.classList.toggle('active')
    regbg.classList.toggle('active')
}
cancelregbutton.onclick = function () {
    reg.classList.toggle('active')
    regbg.classList.toggle('active')
}
listselectall.onclick = function () {
var uncheck=0;
    for (var i=0; i < checks.length; i++) {
        if (checks[i].checked == false) {
            for (var i=0; i < checks.length; i++) {
            checks[i].checked = true;
        }
        }else{
            uncheck++
        }
    }
    if (uncheck==checks.length){
        for (var i=0; i < checks.length; i++) {
            checks[i].checked = false;
            listselectall.classList.remove('rotating')
            listselectall.classList.add('no-rotating')
        }
    }else{
        listselectall.classList.add('rotating')
        listselectall.classList.remove('no-rotating')
    }
    
}
function checkchecks(){
    var uncheck=0;
    for (var i=0; i < checks.length; i++) {
        if (checks[i].checked != false) {
            uncheck++
        }
    }
    if (uncheck==checks.length){
        listselectall.classList.add('rotating')
        listselectall.classList.remove('no-rotating')
    }else{
        listselectall.classList.remove('rotating')
        listselectall.classList.add('no-rotating')
    }
}

exportbutton.onclick = function () {
    exportformats.classList.toggle('active')
    mostusedcontainer.classList.toggle('active')
}

