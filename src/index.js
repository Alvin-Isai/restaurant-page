import mainPage from './mainPage';
import menu from './menu'
import photo from './photo'

function mainContent() {
    const container = document.getElementById('content');

    container.appendChild(mainPage().title);
    container.appendChild(mainPage().figure);
    container.appendChild(mainPage().section);

    return container;
};

function menuContent() {
    const container = document.getElementById('content');

    container.appendChild(menu().header);
    container.appendChild(menu().section);

    return container;
};

function photoContent() {
    const container = document.getElementById('content');

    container.appendChild(photo().header);
    container.appendChild(photo().rowDiv);

    return container;
};

const switchTabs = (() => {
    const mainButton = document.getElementById('main');
    const menuButton = document.getElementById('menu');
    const photoButton = document.getElementById('photo');
    const container = document.getElementById('content');

    document.body.appendChild(mainContent().container);
    
    menuButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(menuContent());
    });
    mainButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(mainContent());
    });
    photoButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(photoContent());
    });
})();