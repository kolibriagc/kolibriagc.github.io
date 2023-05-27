/*--- nav code - start ---*/
const navBar = document.getElementById("nav");
let navScrolled = false;
const navMenu = document.getElementById("nav_menu");
const navButton = document.getElementById("nav_btn");
let navMenuOn = false;

window.addEventListener("scroll", () =>{
    if(window.scrollY > 50 && !navMenuOn){
        navBar.classList.add("scrolled_nav");
    }
    else{
        navBar.classList.remove("scrolled_nav");
    }
})

navButton.addEventListener("click", () =>{
    if(navMenuOn){
        navMenuOn = false;
        navMenu.style.pointerEvents = "none";
        navMenu.style.opacity = "0";
        navMenu.style.transform = "translateY(50px)";

        if(window.scrollY > 50){
            navBar.classList.add("scrolled_nav");
        }
    }
    else{
        navMenuOn = true;
        navMenu.style.pointerEvents = "auto";
        navMenu.style.opacity = "1";
        navMenu.style.transform = "translateY(0px)";
        navBar.classList.remove("scrolled_nav");
    }
});
/*--- nav code - end ---*/

/*--- scroll up code - start ---*/
const scrollUpBtn = document.getElementById("scroll_up_btn_holder");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 250 && document.body.clientHeight > 2000){
        scrollUpBtn.classList.add("visible");
    }
    else{
        scrollUpBtn.classList.remove("visible");
    }
});

scrollUpBtn.addEventListener("click", () =>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
})
/*--- scroll up code - end ---*/