const getText = document.querySelector("#getText");
const output = document.querySelector("#output");
const getUsers = document.querySelector("#get-users");

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

getUsers.addEventListener("click", getUsersFun)
getText.addEventListener("click", getTextFun)