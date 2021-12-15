// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let nameForm = document.createElement('form');
nameForm.id = 'nameForm';
let nameInput = document.createElement('input');
nameInput.name = 'name';
nameInput.placeholder = 'your name';
let surnameInput = document.createElement('input');
surnameInput.name = 'surname';
surnameInput.placeholder = 'your surname';

let addressForm = document.createElement('form');
addressForm.id = 'addressForm';
let cityInput = document.createElement('input');
cityInput.name = 'city';
cityInput.placeholder = 'city';
let streetInput = document.createElement('input');
streetInput.name = 'street';
streetInput.placeholder = 'street';

let submit = document.createElement('button');
submit.innerText = 'submit';

document.body.append(nameForm, addressForm, submit);
nameForm.append(nameInput, surnameInput);
addressForm.append(cityInput, streetInput);

submit.onclick = function () {
    console.log(nameInput.value, surnameInput.value, cityInput.value, streetInput.value);
}

// відступ в документі

document.write('<br>');
document.write('<br>');
document.write('<br>');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//   (Додатковачастина для завдання)

let rowInput = document.createElement('input');
rowInput.type = 'number';
rowInput.placeholder = 'вкажіть кількість рядків';
let cellInput = document.createElement('input');
cellInput.type = 'number';
cellInput.placeholder = 'вкажіть кількість ячеєк';
let contentInput = document.createElement('input');
contentInput.placeholder = 'вкажіть вміст ячеєк';
let createBtn = document.createElement('button');
createBtn.innerText = 'сформувати табличку';
document.body.append(rowInput, cellInput, contentInput, createBtn);

createBtn.addEventListener('click', function () {
    let rows = +rowInput.value;
    let cells = +cellInput.value;
    let content = contentInput.value;
    let table = document.createElement('table');

    for (let r = 0; r < rows; r++) {
        let row = document.createElement('tr');
        for (let c = 0; c < cells; c++) {
            let cell = document.createElement('td');
            cell.innerText = content;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
})

// відступ в документі

document.write('<br>');
document.write('<br>');
document.write('<br>');

// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//   кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

let arr = ['бляха', 'муха', 'йолкі', 'палкі'];

let wordInput = document.createElement('input');
wordInput.type = 'text';
let checkBtn = document.createElement('button');
checkBtn.innerText = 'перевірити слово на цензуру';

document.body.append(wordInput, checkBtn);

checkBtn.onclick = function () {
    for (let item of arr) {
        if (wordInput.value.toLowerCase() === item) {
            alert('нецензурні слова заборонені!');
        }
    }
}

// відступ в документі

document.write('<br>');
document.write('<br>');
document.write('<br>');

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let textInput = document.createElement('input');
textInput.type = 'text';
let checkTextBtn = document.createElement('button');
checkTextBtn.innerText = 'перевірити текст на цензуру';

document.body.append(textInput, checkTextBtn);

checkTextBtn.onclick = function () {
    for (let item of arr) {
        for (let word of textInput.value.split(' ')) {
            if (word.toLowerCase() === item) {
                alert('нецензурні слова заборонені!');
            }
        }
    }
}