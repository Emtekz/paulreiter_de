// 
const menuIcon = document.querySelector('#menu');
const navBar = document.querySelector('#navigation');
const navLinks = document.querySelectorAll('#nav-link');

const background = document.querySelector('#background-image');

const slogan = document.querySelector('#slogan')

let open = false;

// comment

menuIcon.addEventListener('click', () => {
    
    if (!open) {
        menuIcon.src = "Images/menu_close.png";
        
        navBar.style.opacity = 1;

        navLinks.forEach(element => {
            element.style.pointerEvents = "all";
        });
        
        background.style.filter = "brightness(25%)"
        background.style.position = "fixed"
        
        slogan.style.opacity = "0";
        
        document.querySelector('body').style.overflow = "hidden";
        
        open = true;
    }else if (open) {
        menuIcon.src = "Images/menu_open.png";
        
        navBar.style.opacity = 0;

        navLinks.forEach(element => {
            element.style.pointerEvents = "none";
        });
        
        background.style.filter = "brightness(50%)"
        background.style.position = "";

        slogan.style.opacity = "1";
        
        document.querySelector('body').style.overflow = "visible";

        open = false;
    }
}) 