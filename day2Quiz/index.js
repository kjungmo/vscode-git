// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function mouseEnter() {
    title.innerHTML = "The Mouse is here!";
    title.style.color = colors[1];
  },
  mouseLeave: function mouseLeave() {
    title.innerHTML = "The Mouse is gone!";
    title.style.color = colors[2];
  },
  windowResize: function windowResize() {
    title.innerHTML = "RESIZED";
    title.style.color = colors[3];
  },
  clickRight: function clickRight() {
    title.innerHTML = "You clicked Right!";
    title.style.color = colors[4];
  }
};
document
  .querySelector("h2")
  .addEventListener("mouseenter", superEventHandler.mouseEnter);
document
  .querySelector("h2")
  .addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
document
  .querySelector("h2")
  .addEventListener("contextmenu", superEventHandler.clickRight);
