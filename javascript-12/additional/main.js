// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            let userDiv = document.createElement('div');
            let userName = document.createElement('h1');
            userName.innerText = `#${user.id} - ${user.name}`;
            let postsBtn = document.createElement('button');
            postsBtn.innerText = 'Show posts';
            document.body.appendChild(userDiv);
            userDiv.append(userName, postsBtn);
            postsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        for (let post of posts) {
                            let postDiv = document.createElement('div');
                            postDiv.className = 'post';
                            let title = document.createElement('h3');
                            title.innerText = `User #${post.userId} | Post #${post.id} | ${post.title}`;
                            let body = document.createElement('h4');
                            body.innerText = post.body;
                            let commentBtn = document.createElement('button');
                            commentBtn.innerText = 'Show comments';
                            userDiv.appendChild(postDiv);
                            postDiv.append(title, body, commentBtn);
                            this.style.display = 'none';
                            commentBtn.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (let comment of comments) {
                                            let commentDiv = document.createElement('div');
                                            commentDiv.className = 'comment';
                                            let name = document.createElement('h4');
                                            name.innerText = `Post #${comment.postId} | Comment #${comment.id} | ${comment.name}`;
                                            let email = document.createElement('h4');
                                            email.innerText = comment.email;
                                            let body = document.createElement('h5');
                                            body.innerText = comment.body;
                                            postDiv.appendChild(commentDiv);
                                            commentDiv.append(name, email, body);
                                            this.style.display = 'none';
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })