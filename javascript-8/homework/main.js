// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
let contentText = content.textContent;

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
let rulesText = rules.textContent;

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = '«Бойцовский клуб» (англ. Fight Club) — американский кинофильм 1999 года режиссёра Дэвида Финчера по мотивам одноимённого романа Чака Паланика.';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Главные роли исполняют Эдвард Нортон, Брэд Питт и Хелена Бонэм Картер.';

// -- змініть кожному елементу колір фону на червоний

let elements = document.body.getElementsByTagName('*');

for (let item of elements) {
    item.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (let item of elements) {
    item.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesClassList = rules.classList;

console.log(rulesClassList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');

for (let item of fcRules) {
    item.style.color = 'red';
}