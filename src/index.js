import mainPage from './mainPage';

function content() {
    const container = document.getElementById('content');
    
    container.appendChild(mainPage().title);
    container.appendChild(mainPage().figure);
    container.appendChild(mainPage().section);

    return container;
}


document.body.appendChild(content());