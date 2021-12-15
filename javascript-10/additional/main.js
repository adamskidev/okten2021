// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = e => {
    console.log('Tag:', e.target.tagName,
        'Class:', e.target.className,
        'Id:', e.target.id,
        'Size:', e.target.offsetHeight, '*', e.target.offsetWidth);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.addEventListener('click', function (e) {
    alert('Tag: ' + e.target.tagName + ' Class: ' + e.target.className +
        ' Id: ' + e.target.id + ' Size: ' + e.target.offsetHeight + '*' + e.target.offsetWidth);
})

// відступ в документі

document.write('<br>');
document.write('<br>');
document.write('<br>');

// -- взять массив пользователей

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let checkStatus = document.createElement('input');
checkStatus.type = 'checkbox';
checkStatus.id = 'status';
let statusLabel = document.createElement('label');
statusLabel.htmlFor = 'status';
statusLabel.innerText = 'STATUS: FALSE';
let checkAge = document.createElement('input');
checkAge.type = 'checkbox';
checkAge.id = 'age';
let ageLabel = document.createElement('label');
ageLabel.htmlFor = 'age';
ageLabel.innerText = 'AGE: UNDER 29';
let checkCity = document.createElement('input');
checkCity.type = 'checkbox';
checkCity.id = 'city';
let cityLabel = document.createElement('label');
cityLabel.htmlFor = 'city';
cityLabel.innerText = 'CITY: KYIV';
let usersList = document.createElement('div');
document.body.append(checkStatus, statusLabel, checkAge, ageLabel, checkCity, cityLabel, usersList);

let style = document.createElement('style');
style.innerText = '.hide {display: none}';
document.head.append(style);

for (let user of usersWithAddress) {
    let item = document.createElement('p');
    item.className = 'user';
    item.innerText = 'Name: ' + user.name + ' Status: ' + user.status + ' Age: ' + user.age + ' City: ' + user.address.city;
    usersList.append(item);
}

let users = document.getElementsByClassName('user');

console.log(users[0].textContent)

checkStatus.onclick = function () {
    if (checkStatus.checked) {
        for (let user of users) {
            if (user.textContent.split(' ')[3] !== 'false') {
                user.classList.add('hide');
            }
        }
    } else {
        for (let user of users) {
            if (user.textContent.split(' ')[3] !== 'false') {
                user.classList.remove('hide');
            }
        }
    }
}

checkAge.onclick = function () {
    if (checkAge.checked) {
        for (let user of users) {
            if (user.textContent.split(' ')[5] < 29) {
                user.classList.add('hide');
            }
        }
    } else {
        for (let user of users) {
            if (user.textContent.split(' ')[5] < 29) {
                user.classList.remove('hide');
            }
        }
    }
}

checkCity.onclick = function () {
    if (checkCity.checked) {
        for (let user of users) {
            if (user.textContent.split(' ')[7] !== 'Kyiv') {
                user.classList.add('hide');
            }
        }
    } else {
        for (let user of users) {
            if (user.textContent.split(' ')[7] !== 'Kyiv') {
                user.classList.remove('hide');
            }
        }
    }
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let findElement = (element) => {
    let buttons = document.createElement('div');
    buttons.style.position = 'fixed';
    buttons.style.top = '8px';
    let prev = document.createElement('button');
    prev.innerText = 'Prev';
    let next = document.createElement('button');
    next.innerText = 'Next';
    buttons.append(prev, next);
    document.body.append(buttons);

    next.onclick = () => {
        if (element.children.length) {
            console.log(element.children[0]);
            return findElement(element.children[0]);
        } else {
            if (element.nextElementSibling) {
                console.log(element.nextElementSibling);
                return findElement(element.nextElementSibling);
            } else {
                console.log(element.parentElement.nextElementSibling);
                return findElement(element.parentElement.nextElementSibling);
            }
        }
    }

    prev.onclick = () => {
        if (element.previousElementSibling) {
            if (element.previousElementSibling.children.length) {
                console.log(element.previousElementSibling.children[element.previousElementSibling.children.length - 1]);
                return findElement(element.previousElementSibling.children[element.previousElementSibling.children.length - 1]);
            } else {
                console.log(element.previousElementSibling);
                return findElement(element.previousElementSibling);
            }
        } else {
            console.log(element.parentElement);
            return findElement(element.parentElement);
        }
    }
}

findElement(document.body);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let frame = document.createElement('div');
frame.style.height = '500px';
frame.style.width = '800px';
frame.style.border = 'solid black 1px';
frame.style.position = 'relative';
let prevBtn = document.createElement('div');
prevBtn.style.height = '50px';
prevBtn.style.width = '50px';
prevBtn.style.borderRadius = '50%';
prevBtn.style.backgroundColor = 'white';
prevBtn.style.position = 'absolute';
prevBtn.style.zIndex = '9';
prevBtn.style.left = '50px';
prevBtn.style.top = '45%';
prevBtn.style.cursor = 'pointer';
let nextBtn = prevBtn.cloneNode();
nextBtn.style.left = '700px';
let img1 = document.createElement('img');
img1.className = 'image';
img1.style.height = '100%';
img1.style.width = '100%';
img1.style.objectFit = 'cover';
img1.style.position = 'absolute';
img1.style.zIndex = '5';
img1.src = 'https://free-images.com/md/b827/landscape_mountains_hills_valleys.jpg';
let img2 = img1.cloneNode();
img2.style.zIndex = '1';
img2.src = 'https://free-images.com/md/f85e/landscape_mountains_hills_valleys_9.jpg';
let img3 = img1.cloneNode();
img3.style.zIndex = '1';
img3.src = 'https://free-images.com/md/22bf/landscape_mountains_hills_valleys_1.jpg';
let img4 = img1.cloneNode();
img4.style.zIndex = '1';
img4.src = 'https://free-images.com/md/5c85/landscape_mountains_hills_valleys_0.jpg';
let img5 = img1.cloneNode();
img5.style.zIndex = '1';
img5.src = 'https://free-images.com/md/9367/landscape_mountains_valleys_fields.jpg';

document.body.append(frame);
frame.append(img1, img2, img3, img4, img5, prevBtn, nextBtn);

let carousel = (img) => {
    let image = document.getElementsByClassName('image');
    console.log(img.nextElementSibling)
    prevBtn.onclick = () => {
        if (img.previousElementSibling) {
            img.style.zIndex = '1';
            img.previousElementSibling.style.zIndex = '5';
            carousel(img.previousElementSibling);
        } else {
            img.style.zIndex = '1';
            image[image.length - 1].style.zIndex = '5';
            carousel(image[image.length - 1]);
        }
    }
    nextBtn.onclick = () => {
        if (img.nextElementSibling.className === 'image') {
            img.style.zIndex = '1';
            img.nextElementSibling.style.zIndex = '5';
            carousel(img.nextElementSibling);
        } else {
            img.style.zIndex = '1';
            image[0].style.zIndex = '5';
            carousel(image[0]);
        }
    }
}

carousel(img1);

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.addEventListener('click', () => {
    let newText = document.createElement('span');
    newText.style.fontWeight = '900';
    newText.style.color = 'red';
    newText.innerText = document.getSelection().toString();
    document.getSelection().getRangeAt(0).deleteContents();
    document.getSelection().getRangeAt(0).insertNode(newText);
});