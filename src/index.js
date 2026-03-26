import './style.css'
import { homePage } from './landingPage.js';
import { menuPage } from './menuPage.js';
import { aboutPage } from './aboutPage.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

function renderContent(htmlContent) {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(htmlContent)
};

//initial homepage render
renderContent(homePage);

//event listeners for menu buttons
homeBtn.addEventListener("click", function() {
    renderContent(homePage)
});

menuBtn.addEventListener("click", function() {
    renderContent(menuPage);
})

aboutBtn.addEventListener("click", function() {
    renderContent(aboutPage);
})



