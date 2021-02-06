const mainPage = () => {
    // Hero section 
    const hero = document.createElement('section');
    hero.classList.add('hero');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    hero.appendChild(titleContainer);
    const heroTitle = document.createElement('h2');
    heroTitle.classList.add('heroTitle')
    heroTitle.innerHTML = 'Welcome to';
    const heroParagraph = document.createElement('p');
    heroParagraph.classList.add('heroParagraph');
    heroParagraph.innerHTML = 'Alvins Diner';
    titleContainer.appendChild(heroTitle);
    titleContainer.appendChild(heroParagraph);

    // About us section
    const aboutContainer = document.createElement('section');
    aboutContainer.classList.add('aboutContainer');
    const about = document.createElement('div');
    about.classList.add('about');
    aboutContainer.appendChild(about);
    
    const info = document.createElement('div');
    info.classList.add('info');
    const sectionTitle = document.createElement('h2');
    sectionTitle.innerHTML = 'About us';
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    info.appendChild(sectionTitle);
    info.appendChild(paragraph);

    const image = document.createElement('img');
    image.src = './photo8.jpg';

    about.appendChild(info);
    about.appendChild(image);
    aboutContainer.appendChild(about);

    // Banner section
    const banner = document.createElement('section');
    banner.classList.add('banner');
    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('bannerContainer');
    banner.appendChild(bannerContainer);
    const bannerTitle = document.createElement('h2');
    bannerTitle.classList.add('bannerTitle');
    bannerTitle.innerHTML = 'Visit';
    const bannerParagraph = document.createElement('p');
    bannerParagraph.classList.add('bannerParagraph');
    bannerParagraph.innerHTML = 'Alvins Diner'
    bannerContainer.appendChild(bannerTitle);
    bannerContainer.appendChild(bannerParagraph);

    // Contact us section
    const contact = document.createElement('section');
    contact.classList.add('contact');
    const location = document.createElement('div');
    location.classList.add('location');
    const locationTitle = document.createElement('h2');
    locationTitle.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i> Location';
    const locationParagraph = document.createElement('p');
    locationParagraph.innerHTML = '113 SW Naito Pkwy, Portland, OR 97024';
    
    location.appendChild(locationTitle);
    location.appendChild(locationParagraph);

    const call = document.createElement('div');
    call.classList.add('call');
    const callTitle = document.createElement('h2');
    callTitle.innerHTML = '<i class="fa fa-phone" aria-hidden="true"></i> CALL US';
    const callParagraph = document.createElement('p');
    callParagraph.innerHTML = '(555)555-5555';
    
    call.appendChild(callTitle);
    call.appendChild(callParagraph);
 
    
    const open = document.createElement('div');
    open.classList.add('open');
    const openTitle = document.createElement('h2');
    openTitle.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i> OPENING HOURS';
    const openParagraph = document.createElement('p');
    openParagraph.innerHTML = '5pm - 11pm<br>Tuesday - Sunday';
    
    open.appendChild(openTitle);
    open.appendChild(openParagraph);

    contact.appendChild(location);
    contact.appendChild(call);
    contact.appendChild(open);

    // Footer

    const footer = document.createElement('footer');
    footer.classList.add('footer')
    const socials = document.createElement('div')
    socials.classList.add('socials');
    footer.appendChild(socials);

    const twitter = document.createElement('i');
    twitter.classList.add('fa');
    twitter.classList.add('fa-twitter');
    
    const facebook = document.createElement('i');
    facebook.classList.add('fa');
    facebook.classList.add('fa-facebook')

    const youtube = document.createElement('i');
    youtube.classList.add('fa');
    youtube.classList.add('fa-youtube');

    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(youtube);

    const footerParagraph = document.createElement('p');
    footerParagraph.classList.add('footerParagraph');
    footerParagraph.innerHTML = '2021 | Created with <i class="fa fa-heart" aria-hidden="true"></i> by Alvin Lopez';
    footer.appendChild(footerParagraph);
    
    return {hero, aboutContainer, banner, contact, footer};

};

export default mainPage

