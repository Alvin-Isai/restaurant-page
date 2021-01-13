import mainPage from './homePage';
import menu from './menu'
import photo from './photo'

function homeContent() {
    const container = document.getElementById('content');

    container.appendChild(mainPage().hero);
    container.appendChild(mainPage().aboutContainer);
    container.appendChild(mainPage().banner);
    container.appendChild(mainPage().contact);
    container.appendChild(mainPage().footer);

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
    const homeButton = document.getElementById('main');
    const menuButton = document.getElementById('menu');
    const photoButton = document.getElementById('photo');
    const container = document.getElementById('content');

    document.body.appendChild(photoContent());
    
    menuButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(menuContent());
    });
    homeButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(homeContent());
    });
    photoButton.addEventListener('click', ()=> {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        };

        document.body.appendChild(photoContent());
    });
})();