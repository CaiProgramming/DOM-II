var modal = document.querySelector(".modal");
var trigger = document.querySelector(".btn");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    toggleFIModal();
  }
}
/////////////////////////////////////////////
/////////////// Creation ////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

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
/////////////////////////////////////////////
sButton.addEventListener("mouseover", event => {
  sButton.style.backgroundColor = "grey";
  sButton.style.color = "white";
});
sButton.addEventListener("mouseout", event => {
  sButton.style.backgroundColor = "white";
  sButton.style.color = "black";
});
sButton.addEventListener("click", toggleModal);
