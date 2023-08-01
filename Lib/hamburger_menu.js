// 
const menuIcon = document.querySelector('#menu');
const navBar = document.querySelector('#navigation');

let open = false;


menuIcon.addEventListener('click', () => {
    
    if (!open) {
        menuIcon.src = "Images/menu_close.png";

        navBar.style.display = "flex";
        
        open = true;
    }else if (open) {
        menuIcon.src = "Images/menu_open.png";
        
        navBar.style.display = "none";

        open = false;
    }

    // console.log('click');
}) 