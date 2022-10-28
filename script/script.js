let submenubutton = document.querySelector('.header-submenu-button');
let submenu = document.querySelector('.header-submenu');
submenubutton.onfocus = function () {
    submenubutton.classList.add('active')
    submenu.focus()
}
submenu.onblur = function () {
    submenubutton.classList.remove('active')
}