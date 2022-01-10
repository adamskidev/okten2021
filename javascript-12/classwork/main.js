// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let postDiv = document.createElement('div');
            postDiv.className = 'post';
            let userId = document.createElement('span');
            userId.innerHTML = `User ID: ${post.userId} `;
            let postId = document.createElement('span');
            postId.innerHTML = `Post ID: ${post.id} `;
            let title = document.createElement('h3');
            title.innerText = post.title;
            let body = document.createElement('h4');
            body.innerText = post.body;
            let commentBtn = document.createElement('button');
            commentBtn.innerText = 'Show comments';
            document.body.appendChild(postDiv);
            postDiv.append(userId, postId, title, body, commentBtn);
            commentBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => response.json())
                    .then(comments => {
                        for (let comment of comments) {
                            let commentDiv = document.createElement('div');
                            commentDiv.className = 'comment';
                            let commentId = document.createElement('span');
                            commentId.innerHTML = `Comment ID: ${comment.postId}/${comment.id}`;
                            let name = document.createElement('h4');
                            name.innerText = comment.name;
                            let email = document.createElement('h4');
                            email.innerText = comment.email;
                            let body = document.createElement('h5');
                            body.innerText = comment.body;
                            postDiv.appendChild(commentDiv);
                            commentDiv.append(commentId, name, email, body);
                            commentBtn.style.display = 'none';
                        }
                    })
            }
        }
    })