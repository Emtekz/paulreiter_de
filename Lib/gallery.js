// 
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelector('.popup').style.display = 'none';  
    }
};