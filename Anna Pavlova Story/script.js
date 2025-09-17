let dancer = document.querySelector('.dancer');
let background = document.querySelector('.background'); 

dancer.style.left = '0px';
background.style.left = '0px'; // Set initial position, else it will be undefined
let dancerLeftPos = parseFloat(dancer.style.left);
let backgroundLeftPos = parseFloat(background.style.left);


function displayContent(i) {
    let content = document.querySelectorAll('.content_container div');

    for (let j = 0; j < content.length; j++) {
        content[j].setAttribute('class', 'hidden');
    }

    content[i].setAttribute('class', 'visible');
}

window.addEventListener('scroll', function(){
    dancerLeftPos = window.scrollY;
    backgroundLeftPos = window.scrollY;

    // Check if dancer is out of bounds
    if (dancerLeftPos > window.innerWidth - dancer.offsetWidth) {
        dancerLeftPos = window.innerWidth - dancer.offsetWidth;
    }

    // Switch content based on dancer's position
    if (dancerLeftPos > 1000) {
        displayContent(4);
    } else if (dancerLeftPos > 750) {
        displayContent(3);
    } else if (dancerLeftPos > 500) {
        displayContent(2);
    } else if (dancerLeftPos > 250) {
        displayContent(1);
    } else {
        displayContent(0);
    }

    dancer.style.left = `${dancerLeftPos}px`;
    background.style.left = `-${backgroundLeftPos}px`;

});



