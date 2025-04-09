function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");

const colorFunc = () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    document.querySelector('.color').textContent = randomColor;
}

buttonEl.addEventListener("click",colorFunc);