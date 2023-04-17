const Btns = document.querySelectorAll('.btn');
const checkBtns = document.querySelectorAll('#checkBtn');
const inputAction = i => {
  let inputField = document.querySelector(`.list-${i}`);
  return inputField;
};

Btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const takeInput = () => {
      for (let i = 1; i <= 6; i++) {
        if (
          e.target.classList.contains(`save-button-${i}`) &&
          !inputAction(i).value == '' &&
          !inputAction(i).classList.contains('line-through')
        ) {
          inputAction(i).style.border = 'none';
        }
      }
    };
    for (let i = 1; i <= 6; i++) {
      if (e.target.classList.contains(`save-button-${i}`)) {
        takeInput();
      } else if (e.target.classList.contains(`delete-button-${i}`)) {
        inputAction(i).value = '';
        inputAction(i).style.border = '1px solid white';
      }
    }
  });
});
checkBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    for (let i = 1; i <= 6; i++) {
      if (e.target.classList.contains(`check-${i}`)) {
        inputAction(i).classList.toggle('line-through');
      }
    }
  });
});
