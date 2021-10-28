const getText = document.querySelector("#getText");
const output = document.querySelector("#output");
const getUsers = document.querySelector("#get-users");
const getPosts = document.querySelector("#get-posts");
const formIp = document.querySelector("#addPost");
const titleIp = document.querySelector("#title");
const bodyIp = document.querySelector("#body");

function getTextFun() {
    fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
            output.innerHTML = data;
        })
        .catch((err) => console.log(err))
}

function getUsersFun() {
    fetch("users.json")
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            let resultOutput = `<h2>Users</h2>`;
            data.forEach(function (user) {
                resultOutput += `
                    <ul>
                    <li>ID: ${user.id}</li>
                    <li>NAME: ${user.name}</li>
                    <li>EMAIL: ${user.email}</li>
                    </ul>
                `;
            });
            output.innerHTML = resultOutput;

        })
}

function getPostsFun() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            let resultOutput = `<h2>Posts</h2>`;
            data.forEach(function (post) {
                resultOutput += `

                <div>
                    <h3>${post.id}</h3>             
                    <h3>${post.title}</h3>                   
                    <p>${post.body}</p>
                </div>
            `;
            });
            output.innerHTML = resultOutput;
        })
}

function addPost(e) {
    e.preventDefault();
    let title = titleIp.value;
    let body = bodyIp.value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json "
        },
        body: JSON.stringify(
            {
                title: title,
                body: body
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
    })
}







formIp.addEventListener("submit", addPost)
getPosts.addEventListener("click", getPostsFun)
getUsers.addEventListener("click", getUsersFun)
getText.addEventListener("click", getTextFun)