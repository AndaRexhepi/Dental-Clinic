const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "#676869";
    body.style.transition = "2s";
    footer.style.color = "#676869";
    footer.style.background = "#f2f1f0";
    footer.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
    footer.style.color = "white";
    footer.style.background = "black";
    footer.style.transition = "2s";
  }
});
