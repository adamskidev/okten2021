// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.

    .then(users => {
        for (let user of users) {
            let userDiv = document.createElement('div');
            userDiv.className = 'user-div';
            let userName = document.createElement('h2')
            userName.innerText = `#${user.id} - ${user.name}`;
            document.body.appendChild(userDiv);

// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'User details';
            userDiv.append(userName, detailsBtn);
            detailsBtn.onclick = function () {
                location.href = `user-details.html?id=${user.id}`;
            }
        }
    })