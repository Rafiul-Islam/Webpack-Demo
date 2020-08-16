import "../styles/index.scss";
import axios from "axios";

let loadDataButton = document.querySelector("#loadDataButton");
let loadDataArea = document.querySelector("#userList");
let URL = "https://jsonplaceholder.typicode.com/users";

loadDataButton.addEventListener("click", () => {
  // XMLHttpRequestFunction();
  //fetchFunction();
  axiosFunction();
});

function XMLHttpRequestFunction() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhttp.response);
      console.table(data);

      loadDataArea.innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}

function fetchFunction() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showDataInDomWithFetchApi(data))
    .catch((error) => {
      console.error(error);
    });
}

function showDataInDomWithFetchApi(users) {
  users.forEach((user, index) => {
    loadDataArea.innerHTML =
      loadDataArea.innerHTML + (index + 1) + ". " + user.name + `<br>`;
  });
}

function axiosFunction() {
  axios
    .get(URL)
    .then((response) => {
      response.data.forEach((user, index) => {
        loadDataArea.innerHTML =
          loadDataArea.innerHTML + (index + 1) + ". " + user.name + `<br>`;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
