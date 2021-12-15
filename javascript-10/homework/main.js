// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let btn = document.createElement('button');
btn.innerText = 'click me to hide text';
let text = document.createElement('h1');
text.id = 'text';
text.innerText = 'Lorem ipsum dolor sit amet.';
document.body.append(btn, text);

btn.onclick = function () {
    text.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btnHide = document.createElement('button');
btnHide.innerText = 'click me to hide me';
document.body.append(btnHide);

btnHide.onclick = function () {
    this.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
input.type = 'number';
input.placeholder = 'enter your age';
let submit = document.createElement('button');
submit.innerText = 'submit';
let answer = document.createElement('h2');
document.body.append(input, submit, answer);

input.oninput = function () {
    let age = +this.value;
    submit.onclick = function () {
        if (age < 18) {
            answer.innerText = 'you are less than 18 years old';
        } else if (age === 18) {
            answer.innerText = 'you are 18 years old';
        } else {
            answer.innerText = 'you are over 18 years old';
        }
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.createElement('button');
menu.innerText = 'MENU';
let list = ['HOME', 'ABOUT', 'CATALOG', 'CONTACTS'];
let ul = document.createElement('ul')
for (let item of list) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.append(menu, ul);

menu.onclick = function () {
    ul.style.visibility === 'hidden' ? ul.style.visibility = 'visible' : ul.style.visibility = 'hidden';
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentList = [{
    title: 'Lorem',
    body: 'Lorem ipsum dolor sit amet.'
}, {
    title: 'Nihil',
    body: 'Assumenda nihil quas totam ullam!'
}, {
    title: 'Error',
    body: 'Ea error iusto quisquam sit.'
}, {
    title: 'Fuga',
    body: 'Et fuga illo quae vel.'
}, {
    title: 'Enim',
    body: 'Enim iure nam porro quibusdam.'
}]

for (let item of commentList) {
    let commentBox = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = item.title;
    let comment = document.createElement('p');
    comment.innerText = item.body;
    let btn = document.createElement('button');
    btn.innerText = 'hide comment';
    document.body.append(commentBox);
    commentBox.append(title, comment, btn);

    btn.addEventListener('click', function () {
        if (comment.style.display === 'none') {
            comment.style.display = 'block';
            btn.innerText = 'hide comment';
        } else {
            comment.style.display = 'none';
            btn.innerText = 'show comment';
        }
    })
}