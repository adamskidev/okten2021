// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        let postDiv = document.getElementsByClassName('post-div')[0];
        let postId = document.createElement('p');
        postId.innerText += `User #${post.userId} | Post #${post.id}`;
        let title = document.createElement('h2');
        title.innerText += `${post.title}`;
        let body = document.createElement('p');
        body.innerText += `${post.body}`;
        postDiv.append(postId, title, body);
    })

// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let commentsDiv = document.getElementsByClassName('comments-div')[0];
        for (let comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.className = 'comment-div';
            let commentName = document.createElement('p');
            commentName.innerHTML += `Comment #${comment.id}<br>Name: ${comment.name}<br>Email: ${comment.email}`;
            let body = document.createElement('p');
            body.innerText += `${comment.body}`;
            commentsDiv.appendChild(commentDiv);
            commentDiv.append(commentName, body);
        }
    })