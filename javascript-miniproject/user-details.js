// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let userDiv = document.getElementsByClassName('user-div')[0];
        for (let key in user) {
            if (typeof user[key] !== 'object') {
                let span = document.createElement('span');
                span.innerHTML = `<b>${key}:</b> ${user[key]}<br>`;
                userDiv.appendChild(span);
            } else {
                let span = document.createElement('span');
                span.style.textDecoration = 'underline';
                span.innerHTML = `<b>${key}:</b><br>`;
                userDiv.appendChild(span);
                for (let val in user[key]) {
                    if (typeof user[key][val] !== 'object') {
                        let span = document.createElement('span');
                        span.style.marginLeft = '30px';
                        span.innerHTML = `<b>${val}:</b> ${user[key][val]}<br>`;
                        userDiv.appendChild(span);
                    } else {
                        let span = document.createElement('span');
                        span.style.marginLeft = '30px';
                        span.style.textDecoration = 'underline';
                        span.innerHTML = `<b>${val}:</b><br>`;
                        userDiv.appendChild(span);
                        for (let elem in user[key][val]) {
                            let span = document.createElement('span');
                            span.style.marginLeft = '60px';
                            span.innerHTML += `<b>${elem}:</b> ${user[key][val][elem]}<br>`;
                            userDiv.appendChild(span);
                        }
                    }
                }
            }
        }
    })

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

let postsContainer = document.getElementsByClassName('posts-container')[0];
let postsBtn = document.getElementById('posts-btn');
console.log(postsBtn)
postsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postsDiv = document.createElement('div');
            postsDiv.className = 'posts-div';
            postsContainer.appendChild(postsDiv);
            for (let post of posts) {
                let postDiv = document.createElement('div');
                postDiv.className = 'post-div';
                let title = document.createElement('a');
                title.innerText = post.title;

// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

                title.href = `post-details.html?id=${post.id}`;
                postDiv.appendChild(title);
                postsDiv.appendChild(postDiv);
            }
            this.disabled = true;
        })
}


