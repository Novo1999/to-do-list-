const inputField = document.querySelector(".todo");
const Btns = document.querySelectorAll(".btn");

Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (let i = 1; i <= 6; i++) {
      if (e.target.classList.contains(`save-button-${i}`)) {
        console.log(2);
      }
    }
  });
});
