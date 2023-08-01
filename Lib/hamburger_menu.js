// 
const menuIcon = document.querySelector('#menu');
const navBar = document.querySelector('#navigation');
const Header = document.querySelector('#header');

let open = false;


menuIcon.addEventListener('click', () => {
    
    if (!open) {
        menuIcon.src = "Images/menu_close.png";
        Header.style.background = "white";
        navBar.style.display = "flex";
        
        open = true;
    }else if (open) {
        menuIcon.src = "Images/menu_open.png";
        Header.style.background = "none";
        navBar.style.display = "none";

        open = false;
    }

    // console.log('click');
}) 