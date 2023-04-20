const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');

navButton.onclick = () => {
    console.log('click')
    if (nav.classList.toggle('nav--open')) {
        navButtonImg.src = "./images/icons/nav-close.svg";
    } else {
        navButtonImg.src = "./images/icons/nav-open.svg";
    }
}

AOS.init({
    // disable: 'phone'
    // once:true,
});