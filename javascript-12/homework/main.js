// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let postDiv = document.createElement('div');
            postDiv.className = 'post';
            let postId = document.createElement('h2');
            postId.innerHTML = `Post ID: ${post.userId}/${post.id}`;
            let title = document.createElement('h1');
            title.innerText = post.title;
            let body = document.createElement('h3');
            body.innerText = post.body;
            document.body.appendChild(postDiv);
            postDiv.append(postId, title, body);
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(respone => respone.json())
    .then(comments => {
        for (let comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            let commentId = document.createElement('h2');
            commentId.innerHTML = `Comment ID: ${comment.postId} / ${comment.id}`;
            let name = document.createElement('h1');
            name.innerText = comment.name;
            let email = document.createElement('h4');
            email.innerText = comment.email;
            let body = document.createElement('h3');
            body.innerText = comment.body;
            document.body.appendChild(commentDiv);
            commentDiv.append(commentId, name, email, body);
        }
    })
