// 
const menuIcon = document.querySelector('#menu');
const navBar = document.querySelector('#navigation');
const background = document.querySelector('#background-image');

let open = false;


menuIcon.addEventListener('click', () => {
    
    if (!open) {
        menuIcon.src = "Images/menu_close.png";
        
        navBar.style.display = "flex";
        // navBar.children.style.opacity = "1";
        
        background.style.filter = "brightness(35%)"
        background.style.position = "fixed"
        
        document.querySelector('body').style.overflow = "hidden";
        
        open = true;
    }else if (open) {
        menuIcon.src = "Images/menu_open.png";
        
        navBar.style.display = "none";
        // navBar.style.opacity = "0";
        
        background.style.filter = "brightness(65%)"
        background.style.position = "";
        
        document.querySelector('body').style.overflow = "visible";

        open = false;
    }
}) 