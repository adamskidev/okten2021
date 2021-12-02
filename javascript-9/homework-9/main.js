// Все робити за допомоги js.
// - створити блок,

let div = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.height = '100px';
div.style.width = '100px';
div.style.margin = '100px';
div.style.border = 'solid orange';
div.style.borderRadius = '50%';

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let div2 = div.cloneNode();
document.body.appendChild(div2);

// - Є масив:

let arr = ['Main','Products','About us','Contacts'];

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = document.getElementsByClassName('menu')[0];

for (let item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}

// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${item.title} - ${item.monthDuration} months`;
    document.body.appendChild(div);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `duration: ${item.monthDuration} months`;
    document.body.appendChild(div);
    div.append(h1, p);
}