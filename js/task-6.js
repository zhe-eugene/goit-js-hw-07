function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const refs = {
  inputNumber: document.querySelector("#controls input[type='number']"),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxContainer: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  refs.boxContainer.innerHTML = '';

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = `<div style= "width: ${30 + i * 10}px;
     height:${30 + i * 10}px;
     background-color: ${getRandomHexColor()}; "></div>`;
    boxes.push(box);
  }
  return boxes.join('');
}

function destroyBoxes() {
  refs.boxContainer.innerHTML = '';
}

refs.createBtn.addEventListener('click', () => {
  const amount = parseInt(refs.inputNumber.value.trim(), 10);

  const isInRange = amount > 0 && amount <= 100;

  if (isInRange) {
    refs.boxContainer.innerHTML = createBoxes(amount);
    inputNumber.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

refs.destroyBtn.addEventListener('click', destroyBoxes);
