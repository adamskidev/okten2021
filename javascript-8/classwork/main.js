// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').id = 'sep-2021';

// b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul')[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');

for (let item of linkList) {
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let textLE2 = document.getElementsByClassName('listElement2')[0].textContent;

// e) отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');

for (let item of li) {
    item.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let a = document.getElementsByTagName('a');

for (let item of a) {
    item.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let item of a) {
    if (item.textContent === 'link3') {
        item.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let item of a) {
    item.classList.add(`element_${item.textContent}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let backgroundColor = prompt('enter color for background');

for (let item of subHeader) {
    item.style.backgroundColor = backgroundColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let textColor = prompt('enter color for text');

for (let item of subHeader) {
    if (item.textContent === 'content 2 segment') {
        item.style.color = textColor;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1')[0];
let text1 = prompt('enter some text');

content1.innerHTML = `<p>${text1}</p>`;

// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');

for (let item of p) {
    item.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');

for (let item of text2) {
    item.innerText = 'sep-2021';
}