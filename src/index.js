import './style.css'

const renderPage = (page) => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = "";
    contentDiv.appendChild(page);
}