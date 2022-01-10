// є масив -

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

for (let user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<br>Name: ${user.name} | Age: ${user.age} | Status: ${user.status} `;
    let addBtn = document.createElement('button');
    addBtn.innerText = 'Add to favorites';
    userDiv.appendChild(addBtn);
    document.body.appendChild(userDiv);
    addBtn.onclick = function () {
        let favUsers = JSON.parse(localStorage.getItem('favorites')) || [];
        favUsers.push(user);
        localStorage.setItem('favorites', JSON.stringify(favUsers));
    }
}

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let favoritesPage = document.createElement('a');
favoritesPage.innerText = 'Go to favorites';
favoritesPage.href = 'favorites.html';
document.write('<br>');
document.body.appendChild(favoritesPage);