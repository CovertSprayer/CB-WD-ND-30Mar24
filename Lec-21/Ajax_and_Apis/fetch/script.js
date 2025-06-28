const baseURL = "https://dummyjson.com";
const button = document.querySelector("button");
const usersList = document.querySelector(".users-list");

// function getUsers() {
//   fetch(`${baseURL}/users`)
//     .then((res) => res.json())
//     .then((data) => renderUsersList(data.users))
//     .catch((err) => console.log(err));
// }

async function getUsers() {
  try {
    const res = await fetch(`${baseURL}/users`);
    const data = await res.json();
    renderUsersList(data.users);
  } catch (error) {
    console.log(error);
  }
}

/*

  fetch(`${baseURL}/users`, {
    method: "POST",
    data: {
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28,
    },
    headers: {
      "req-from": "web",
      Authorization: ""
    },
  }).then(res => res.json())
    .then(data => renderUsersList(data.users))
    .catch(err => console.log(err))
*/

function renderUsersList(users) {
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.firstName} ${user.lastName}`;
    usersList.append(li);
  });
}

button.addEventListener("click", () => {
  getUsers();
});
