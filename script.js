let popupbox = document.querySelector(".popup-box");
let popupoverlay = document.querySelector(".popup-overlay");
let addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";

  popupbox.style.display = "block";
  popupoverlay.style.display = "block";
});

let cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});

let container = document.querySelector(".container");
let booktitleinput = document.getElementById("book-title-input");
let bookauthorinput = document.getElementById("book-author-input");
let bookdescriptioninput = document.getElementById("book-description-input");
let addbook = document.getElementById("addbook");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p> ${bookdescriptioninput.value}</p>
    <button onclick="dell(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function dell(event) {
  event.target.parentElement.remove();
}

