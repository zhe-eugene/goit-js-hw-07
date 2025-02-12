function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
};

refs.button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.colorSpan.textContent = randomColor;
}
