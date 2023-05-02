const btn = document.querySelector(".btn");
const cancel = document.querySelector(".fa-solid");
const modal = document.querySelector(".modalBg");

btn.addEventListener("click", function () {
  modal.classList.remove("hide");
  btn.innerText = "Button clicked! 🎉";
});

cancel.addEventListener("click", function () {
  modal.classList.add("hide");
  btn.innerText = "Click here for Modal 😉";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    e.target.classList.add("hide");
    btn.innerText = "Click here for Modal 😉";
  }
});
