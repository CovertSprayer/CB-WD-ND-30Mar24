const baseURL = "https://dummyjson.com";
const button = document.querySelector("button");
const usersList = document.querySelector(".users-list");


async function getUsers() {
  const res = await axios.get(`${baseURL}/users`);
  // console.log(res.data.users);
  console.log(res);
  renderUsersList(res.data.users);
}

/*
  data = {
    username: '1oiweurw',
    password: 'sldkflkdsjf'
  }

  const options = {
    headers: {
      Authorizations: "Bearer dsflksdlfkjlsdlsdlksdlkfjlskdjfljwolsdjf"
    }
  }
  axios.post(url, data, options);
  axios.get(url, options);

*/


function renderUsersList(users) {
  usersList.innerText = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.firstName} ${user.lastName}`;
    usersList.append(li);
  });
}

button.addEventListener("click", () => {
  getUsers();
});