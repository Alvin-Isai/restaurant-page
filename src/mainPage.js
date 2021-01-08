const mainPage = () => {
    const title = document.createElement('h1');
    title.innerHTML = 'Alvins Diner';

    const figure = document.createElement('figure');

    const image = document.createElement('img');
    image.src = "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const imageCaption = document.createElement('caption');
    imageCaption.innerHTML = 'Alvins Diner';

    figure.appendChild(image);
    figure.appendChild(imageCaption);

    const section = document.createElement('section');
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.innerHTML = 'About Alvins Diner';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    section.appendChild(sectionTitle);
    section.appendChild(paragraph);

    return {title, figure, section};

};

export default mainPage

