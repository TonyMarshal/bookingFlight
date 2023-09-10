let  navMenu = document.getElementById('nav');
let  menu1 = document.getElementById('menu-icon');


function togglemenu() {
    if (navMenu.className == "mList") {
        navMenu.className = "menu";


    }else{
        navMenu.className = "mList";
    }
}