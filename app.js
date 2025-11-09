let title = document.querySelector("#title");
let btn = document.querySelector("#btn");

function getApi() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "API.txt");

  if (xhr.status == 200) {
    title.innerHTML = this.response;
  }else{
    console.log("failed");
  }
  xhr.send();
}

btn.addEventListener("click", getApi);
