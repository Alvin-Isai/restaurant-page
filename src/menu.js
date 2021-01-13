const menu = () => {

    // Section Title
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.innerHTML = 'The Menu';
    header.appendChild(title);

    const section = document.createElement('section');
    section.classList.add('menu');
    
    // Appetizer section
    const appetizer = document.createElement('div');
    appetizer.classList.add('app');
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = 'Appetizers';
    appetizer.appendChild(appTitle);

    const appList = document.createElement('ul');
    appetizer.appendChild(appList)
    
    const applist1 = document.createElement('li');
    applist1.innerHTML = 'Garlic Bread 5';
    const applist2 = document.createElement('li');
    applist2.innerHTML = 'Carpaccio 7';
    const applist3 = document.createElement('li');
    applist3.innerHTML = 'Antipasto 12';


    appList.appendChild(applist1);
    appList.appendChild(applist2);
    appList.appendChild(applist3);

    // Pasta section

    const pasta = document.createElement('div');
    pasta.classList.add('pasta');
    const pastaTitle = document.createElement('h2');
    pastaTitle.innerHTML = 'Pasta';
    pasta.appendChild(pastaTitle);

    const pastaList = document.createElement('ul');
    pasta.appendChild(pastaList);

    const pastalist1 = document.createElement('li');
    pastalist1.innerHTML = 'Ziti Bolonese 16';
    const pastalist2 = document.createElement('li');
    pastalist2.innerHTML = 'Butternut Ravioli 17';
    const pastalist3 = document.createElement('li');
    pastalist3.innerHTML = 'Spaghetti Carbonara 15';
    const pastalist4 = document.createElement('li');
    pastalist4.innerHTML = 'Lasagna 20';

    pastaList.appendChild(pastalist1);
    pastaList.appendChild(pastalist2);
    pastaList.appendChild(pastalist3);
    pastaList.appendChild(pastalist4);

    // Hours section

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursTitle = document.createElement('h1');
    hoursTitle.innerHTML = 'HOURS';
    hours.appendChild(hoursTitle);

    const hoursOpen = document.createElement('p');
    hoursOpen.classList.add('hoursOpen');
    hoursOpen.innerHTML = '5pm - 11pm';
    const daysOpen = document.createElement('p');
    daysOpen.classList.add('daysOpen');
    daysOpen.innerHTML = 'Tuesday - Sunday';

    hours.appendChild(hoursOpen);
    hours.appendChild(daysOpen);

    // WTC

    const wtc = document.createElement('div');
    wtc.classList.add('wtc');
    const wtcTitle = document.createElement('h2');
    wtcTitle.innerHTML = 'What The Chef Is Eating';
    wtc.appendChild(wtcTitle);

    const wtcList = document.createElement('ul');
    wtc.appendChild(wtcList);

    const wtclist1 = document.createElement('li');
    wtclist1.innerHTML = 'Steak Minute 25';
    const wtclist2 = document.createElement('li');
    wtclist2.innerHTML = 'Crispy Chicken 23';
    const wtclist3 = document.createElement('li');
    wtclist3.innerHTML = 'Grilled King Salmon 24';
    const wtclist4 = document.createElement('li');
    wtclist4.innerHTML = 'Wagyu Steak 35';
    const wtclist5 = document.createElement('li');
    wtclist5.innerHTML = 'Tofu Chicken 55';

    wtcList.appendChild(wtclist1);
    wtcList.appendChild(wtclist2);
    wtcList.appendChild(wtclist3);
    wtcList.appendChild(wtclist4);
    wtcList.appendChild(wtclist5);

    // Filler square
    const filler = document.createElement('div')
    filler.classList.add('filler')
    const fillerTitle = document.createElement('h1')
    fillerTitle.innerHTML = 'BEST <br> TASTE'
    filler.appendChild(fillerTitle)
    

    // Pizza section

    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
    const pizzaTitle = document.createElement('h2');
    pizzaTitle.innerHTML = 'Pizza';
    pizza.appendChild(pizzaTitle);

    const pizzaList = document.createElement('ul');
    pizza.appendChild(pizzaList);

    const pizzalist1 = document.createElement('li');
    pizzalist1.innerHTML = 'Margherita 14';
    const pizzalist2 = document.createElement('li');
    pizzalist2.innerHTML = 'Pepperoni 15';
    const pizzalist3 = document.createElement('li');
    pizzalist3.innerHTML = 'Prosciutto E Funghi 17';
    const pizzalist4 = document.createElement('li');
    pizzalist4.innerHTML = 'Salsicca E Cipolla 14';
    const pizzalist5 = document.createElement('li');
    pizzalist5.innerHTML = 'Vegeterian Pizza 25';

    pizzaList.appendChild(pizzalist1);
    pizzaList.appendChild(pizzalist2);
    pizzaList.appendChild(pizzalist3);
    pizzaList.appendChild(pizzalist4);
    pizzaList.appendChild(pizzalist5);

    // Burger section

    const burger = document.createElement('div');
    burger.classList.add('burger');
    const burgerTitle = document.createElement('h2');
    burgerTitle.innerHTML = 'Burger';
    burger.appendChild(burgerTitle);

    const burgerList = document.createElement('ul');
    burger.appendChild(burgerList);

    const burgerlist1 = document.createElement('li');
    burgerlist1.innerHTML = 'Cheese Burger 14';
    const burgerlist2 = document.createElement('li');
    burgerlist2.innerHTML = 'Double Bacon Burger 15';
    const burgerlist3 = document.createElement('li');
    burgerlist3.innerHTML = 'Veggie Burger 30';

    burgerList.appendChild(burgerlist1);
    burgerList.appendChild(burgerlist2);
    burgerList.appendChild(burgerlist3);

    // Ice cream section


    const ice = document.createElement('div');
    ice.classList.add('icecream');
    const iceTitle = document.createElement('h2');
    iceTitle.innerHTML = 'Ice Cream';
    ice.appendChild(iceTitle);

    const iceList = document.createElement('ul');
    ice.appendChild(iceList);

    const icelist1 = document.createElement('li');
    icelist1.innerHTML = 'Bourban Vanilla 10';
    const icelist2 = document.createElement('li');
    icelist2.innerHTML = 'Chocolate Cookie 10';
    const icelist3 = document.createElement('li');
    icelist3.innerHTML = 'Mango Sorbet 10';

    iceList.appendChild(icelist1);
    iceList.appendChild(icelist2);
    iceList.appendChild(icelist3);

    // drinks section

    const drink = document.createElement('div');
    drink.classList.add('drink');
    const drinkTitle = document.createElement('h2');
    drinkTitle.innerHTML = 'Drinks';
    drink.appendChild(drinkTitle);

    const drinkList = document.createElement('ul');
    drink.appendChild(drinkList);

    const drinklist1 = document.createElement('li');
    drinklist1.innerHTML = 'Very Berry 4';
    const drinklist2 = document.createElement('li');
    drinklist2.innerHTML = 'Citrus Peach 4';
    const drinklist3 = document.createElement('li');
    drinklist3.innerHTML = 'Passion Juice 4';
    const drinklist4 = document.createElement('li');
    drinklist4.innerHTML = 'Ginger Fizz 4';
    const drinklist5 = document.createElement('li');
    drinklist5.innerHTML = 'Coffee Shake 5';
    const drinklist6 = document.createElement('li');
    drinklist6.innerHTML = 'Pineapple Paradise 3';

    drinkList.appendChild(drinklist1);
    drinkList.appendChild(drinklist2);
    drinkList.appendChild(drinklist3);
    drinkList.appendChild(drinklist4);
    drinkList.appendChild(drinklist5);
    drinkList.appendChild(drinklist6);

    // adding all sections to main
    section.appendChild(appetizer);
    section.appendChild(pasta);
    section.appendChild(hours);
    section.appendChild(wtc);
    section.appendChild(filler);
    section.appendChild(pizza);
    section.appendChild(burger);
    section.appendChild(ice);
    section.appendChild(drink);

    return { header, section }
};

export default menu