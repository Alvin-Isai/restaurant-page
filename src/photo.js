const photo = () => {
    
    // title
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.innerHTML = 'Photos'
    header.appendChild(title);

    // Images
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    
    // Image columns
    const columnDiv1 = document.createElement('div');
    columnDiv1.classList.add('column')
    const img1 = document.createElement('img');
    img1.src = '/pics/photo1.jpg';
    const img2 = document.createElement('img');
    img2.src = '/pics/photo2.jpg';
    const img3 = document.createElement('img');
    img3.src = '/pics/photo3.jpg';
    const img4 = document.createElement('img');
    img4.src = '/pics/photo4.jpg';
    columnDiv1.appendChild(img1);
    columnDiv1.appendChild(img2);
    columnDiv1.appendChild(img3);
    columnDiv1.appendChild(img4);

    const columnDiv2 = document.createElement('div');
    columnDiv2.classList.add('column')
    const img5 = document.createElement('img');
    img5.src = '/pics/photo8.jpg';
    const img6 = document.createElement('img');
    img6.src = '/pics/photo3.jpg';
    const img7 = document.createElement('img');
    img7.src = '/pics/photo2.jpg';
    const img8 = document.createElement('img');
    img8.src = '/pics/photo1.jpg';
    columnDiv2.appendChild(img5);
    columnDiv2.appendChild(img6);
    columnDiv2.appendChild(img7);
    columnDiv2.appendChild(img8);

    const columnDiv3 = document.createElement('div');
    columnDiv3.classList.add('column')
    const img9 = document.createElement('img');
    img9.src = '/pics/photo6.jpg';
    const img10 = document.createElement('img');
    img10.src = '/pics/photo9.jpg';
    const img11 = document.createElement('img');
    img11.src = '/pics/photo8.jpg';
    const img12 = document.createElement('img');
    img12.src = '/pics/photo7.jpg';
    columnDiv3.appendChild(img9);
    columnDiv3.appendChild(img10);
    columnDiv3.appendChild(img11);
    columnDiv3.appendChild(img12);

    const columnDiv4 = document.createElement('div');
    columnDiv4.classList.add('column')
    const img13 = document.createElement('img');
    img13.src = '/pics/photo7.jpg';
    const img14 = document.createElement('img');
    img14.src = '/pics/photo2.jpg';
    const img15 = document.createElement('img');
    img15.src = '/pics/photo10.jpg';
    const img16 = document.createElement('img');
    img16.src = '/pics/photo8.jpg';
    columnDiv4.appendChild(img13);
    columnDiv4.appendChild(img14);
    columnDiv4.appendChild(img15);
    columnDiv4.appendChild(img16);

    // Appending to main
    rowDiv.appendChild(columnDiv1);
    rowDiv.appendChild(columnDiv2);
    rowDiv.appendChild(columnDiv3);
    rowDiv.appendChild(columnDiv4);
    
    return {header, rowDiv}
};

export default photo;