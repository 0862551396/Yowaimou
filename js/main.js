// SCRIPT Part of Skill
$(document).ready(function() {
    // Thanh cuộn ngang
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1, // number of elements
                nav: false
            } ,
            600: {
                items:2, // number of elements
                nav:false
            },
            1000: {
                items: 3, // number of elements
                nav: false
            }
        }
    });
 
    $('.nav-menu__btn').click(function(){
        $('.navbar .nav-menu').toggleClass("active");
        $('nav-menu__btn i').toggleClass("active");
        $('.nav-menu__btn-menu').toggleClass("none");
        $('.nav-menu__btn-times').toggleClass("active");
        $('.nav-menu__btn').toggleClass("whiteColor");
    });

    $('.navbar .nav-menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");

        // Stupid but don't know how to fix
        if ($(document).width() <= 969) {
            $('.navbar .nav-menu').removeClass("active");
            $('.nav-menu__btn-times').removeClass("active");
            $('.nav-menu__btn-menu').removeClass("none");
            $('.nav-menu__btn').toggleClass("whiteColor");    
        }
    });
});

// Scroll behaviour
window.addEventListener("scroll", function() {
    var navFather = document.querySelector("#nav")
    var contact = document.querySelector(".contact");
    navFather.classList.toggle("sticky", window.scrollY > 0);
    contact.classList.toggle('no-contact', window.scrollY > 0 && $(document).width() > 991);

    //Scroll-up button show/hide script
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.classList.toggle('show', window.scrollY > 500);

    // A little bit stupid but fine
    var navSon1 = document.querySelector(".nav-1")
    var navSon2 = document.querySelector(".nav-2")
    var navSon4 = document.querySelector(".nav-4")
    var navSon5 = document.querySelector(".nav-5")
    var navSon3 = document.querySelector(".nav-contact")
    navSon1.classList.toggle("nav-1_changeColor", window.scrollY > 0 && $(document).width() > 991);
    navSon2.classList.toggle("nav-2_changeColor", window.scrollY > 0 && $(document).width() > 991);
    navSon4.classList.toggle("nav-4_changeColor", window.scrollY > 0 && $(document).width() > 991);
    navSon5.classList.toggle("nav-5_changeColor", window.scrollY > 0 && $(document).width() > 991);
    navSon3.classList.toggle("nav-3", window.scrollY > 0);
    // ============================
});
//Scroll-up button show/hide script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

// Alert number "get in touch"
var btnContact = document.querySelector(".btn-contact");
btnContact.onclick = function() {
    alert('My phone number is 0862551296 ❤❤❤')
};






// Skill car  < Responsive some how =)) >
// Not nice !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
window.onscroll = function () {
    var windowWidth = $(document).width();
    var circleValue = document.getElementsByTagName('circle');
    if ( windowWidth <= 618 ) {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 70);
            circleValue[i].setAttribute('cy', 70);
            circleValue[i].setAttribute('r', 70);
                // console.log(a[0].getAttribute('cx'))
        }
    } else {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 120);
            circleValue[i].setAttribute('cy', 120);
            circleValue[i].setAttribute('r', 120);
                // console.log(a[0].getAttribute('cx'))
        }
    } 
}
window.onresize = function () {
    var windowWidth = $(document).width();
    var circleValue = document.getElementsByTagName('circle');
    if ( windowWidth <= 618 ) {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 70);
            circleValue[i].setAttribute('cy', 70);
            circleValue[i].setAttribute('r', 70);
                // console.log(a[0].getAttribute('cx'))
        }
    } else {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 120);
            circleValue[i].setAttribute('cy', 120);
            circleValue[i].setAttribute('r', 120);
                // console.log(a[0].getAttribute('cx'))
        }
    } 
}
var father = document.querySelector('#father');
father.onclick = function() {
    var windowWidth = $(document).width();
    var circleValue = document.getElementsByTagName('circle');
    if ( windowWidth <= 618 ) {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 70);
            circleValue[i].setAttribute('cy', 70);
            circleValue[i].setAttribute('r', 70);
                // console.log(a[0].getAttribute('cx'))
        }
    } else {
        for ( var i = 0; i < circleValue.length;i++) {
            circleValue[i].setAttribute('cx', 120);
            circleValue[i].setAttribute('cy', 120);
            circleValue[i].setAttribute('r', 120);
                // console.log(a[0].getAttribute('cx'))
        }
    } 
};

//==================== Confirm to change Website ===================
/* Footer */ 
var a = document.querySelector(".confirm");
a.onclick = function(e) {
    var check = confirm('Do you want to leave this website? ');
    if ( !(check == true) ) {
        e.preventDefault();
    }
};

/* Team */ 
var b = document.querySelectorAll(".contact-item");
for(var i = 0; i < b.length; i++) {
    b[i].onclick = function(e) {
        var check = confirm('Do you want to leave this website? ');
        if ( !(check == true) ) {
            e.preventDefault();
        }
    }
}