let time = document.getElementById("current-time");

var typed = new Typed("#in", {
    strings: ["Travel with us."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});


setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);

let  navMenu = document.getElementById('nav');
let  menu1 = document.getElementById('menu-icon');


function togglemenu() {
    if (navMenu.className == "mList") {
        navMenu.className = "menu";


    }else{
        navMenu.className = "mList";
    }
}



let place = document.querySelectorAll('.places');

document.onscroll = ()=>{
    place.forEach((rev)=>{
    let j = rev.getBoundingClientRect().top;
    // console.log(rev);
    if (j < 350) {
        rev.classList.add(rev.dataset.name);
    }else {
        rev.classList.remove(rev.dataset.name);
    }
    })
}

