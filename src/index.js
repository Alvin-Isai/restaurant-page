import mainPage from './mainPage';
import menu from './menu'
import photo from './photo'

function mainContent() {
    const container = document.getElementById('content');

    container.appendChild(mainPage().title);
    container.appendChild(mainPage().figure);
    container.appendChild(mainPage().section);

    return container;
}


function menuContent() {
    const container = document.getElementById('content');

    container.appendChild(menu().header);
    container.appendChild(menu().section);

    return container;
}

function photoContent() {
    const container = document.getElementById('content');

    container.appendChild(photo().header);
    container.appendChild(photo().rowDiv);

    return container;
}


// document.body.appendChild(mainContent());
// document.body.appendChild(menuContent());
document.body.appendChild(photoContent())