import logo from './logo.png'

//create divs
const homePage = document.createElement('div');
    homePage.classList.add('hero');

const heroContentDiv = document.createElement('div');
    heroContentDiv.classList.add('hero-content');

//content elements
const heroImg = document.createElement('img');
    heroImg.src = logo;
    // heroImg.width = "100px"

const logoTextBig = document.createElement('h1');
    logoTextBig.textContent = "The Corner."

const logoTextTagline = document.createElement('h2');
    logoTextTagline.textContent = "Where culinary artistry meets timeless elegance"

//append to hero-content div
heroContentDiv.appendChild(heroImg);
heroContentDiv.appendChild(logoTextBig);
heroContentDiv.appendChild(logoTextTagline);

//append hero-content div to hero div
homePage.appendChild(heroContentDiv);

export { homePage }
