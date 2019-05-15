let rockets = document.querySelector("body > div");
let lastrocket = rockets.children[0];
let currentrocket;
let timer;
function moveTop(event) {
  // do something on middle mouse button click

  for (i = 0; i < rockets.children.length; i++) {
    if (rockets.children[i].style.order !== 5) {
      rockets.children[i].style.WebkitTransition = "2s";
      rockets.children[i].style.order = rockets.children[i].style.order + 1;
      console.log(rockets.children[i]);
    }
  }
  event.target.style.order = 1;
  lastrocket = event.target;
  event.stopImmediatePropagation();
}
function moveRight(event) {
  if ("buttons" in event) {
    if (event.which === 2) {
      currentrocket = event.target;
      timer = setInterval(move, 10);
    }
  }

  event.stopImmediatePropagation();
}
function stop() {
  clearInterval(timer);
}
function move() {
  currentrocket.style.position = "relative";
  currentrocket.style.WebkitTransition = null;
  currentrocketpos = currentrocket.getBoundingClientRect();
  currentrocket.style.top = currentrocketpos.y;
  currentrocket.style.left = currentrocketpos.x + 1 + "px";
}

rockets.addEventListener("click", moveTop);
rockets.addEventListener("mousedown", moveRight);
rockets.addEventListener("mouseout", stop);
