let modal = document.querySelector(".modal");
let trigger = document.querySelector(".btn");
let closeButton = document.querySelector(".close-button");
let nav = document.querySelector(".nav");
let banner = document.querySelector("body > div > header > img");
let logo = document.querySelector("body > header > div > h1");
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    toggleFIModal();
  }
}
function navClick(event) {
  event.preventDefault();
  event.stopPropagation();
}
function toggleModal() {
  modal.classList.toggle("show-modal");
  email.value = "";
  name.value = "";
}
function toggleBanner() {
  if (event.target === wrapper) {
    wrapper.classList.toggle("show-modal");
    wrapper.className = "";
    banner.className = "";
    banner.style.width = "100%";
  }
}

console.log(nav.children);
for (i = 0; i < nav.children.length; i++) {
  nav.children[i].addEventListener("click", navClick);
}
/////////////////////////////////////////////
/////////////// Creation ////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
window.addEventListener("click", toggleBanner);

let wrapper = document.createElement("div");
banner.parentNode.insertBefore(wrapper, banner);
let sButton = document.createElement("button");
sButton.className = "button-modal";
sButton.innerHTML = "Submit";

let label = document.createElement("label");
label.textContent = "asdasd";

let email = document.createElement("input");
email.type = "text";
email.className = "text-input";
email.placeholder = "Enter email";

let name = document.createElement("input");
name.type = "text";
name.className = "text-input";
name.placeholder = "Enter name";

modal.children[0].appendChild(email);
modal.children[0].appendChild(name);
modal.children[0].appendChild(sButton);
/////////////////////////////////////////////
/////////////// Functions ///////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////\
email.addEventListener("keydown", event => {
  email.style.color = email.style.color === "white" ? "pink" : "white";
});
sButton.addEventListener("mouseover", event => {
  sButton.style.backgroundColor = "grey";
  sButton.style.color = "white";
});
sButton.addEventListener("mouseout", event => {
  sButton.style.backgroundColor = "white";
  sButton.style.color = "black";
});
sButton.addEventListener("click", toggleModal);
//////////////////////////////////////////////
banner.addEventListener("dblclick", event => {
  wrapper.className = "modal";
  wrapper.appendChild(banner);
  wrapper.classList.toggle("show-modal");
  banner.className = "modal-content";
  banner.style.width = "90%";
});
//////////////////////////////////////////////
email.addEventListener("focus", event => {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
});
email.addEventListener(
  "blur",
  event => {
    event.target.style.backgroundColor =
      event.target.value.length >= 5 ? "green" : "red";
  },
  true
);
name.addEventListener("change", event => {
  console.log(event.target);
  event.target.style.backgroundColor =
    event.target.value.length >= 5 ? "green" : "red";
});

banner.addEventListener("dragstart", event => {
  alert("LET ME GOOOO");
  event.stopPropagation();
});
banner.addEventListener("dragend", event => {
  alert("thank you");
  event.stopPropagation();
});
