const menu = document.querySelector('#menu');

const lists = [
    {
        name: 'strawberry',
        img: 'strawberry01.jpg',
        price: '4900',
    },
    {
        name: 'apple',
        img: 'apple01.jpg',
        price: '4500',
    },
    {
        name: 'fig',
        img: 'fig01.jpg',
        price: '4600',
    },
    {
        name: 'lemon',
        img: 'lemon01.jpg',
        price: '4700',
    },
    {
        name: 'lime',
        img: 'lime01.jpg',
        price: '4200',
    },
    {
        name: 'mango',
        img: 'mango01.jpg',
        price: '5000',
    },
];
for(let i=0; i<lists.length; i++) {
    const name=lists[i].name;
    const img=lists[i].img;
    const price=lists[i].price;
    //= const {name, img, price}=list[i];
    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p></div>`; 
    menu.insertAdjacentHTML('beforeend', content);
}