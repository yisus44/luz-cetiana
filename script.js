const light = document.querySelector(".light");
const number = document.createElement("p");
number.classList.add("number");
light.appendChild(number);

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 10);
  number.textContent = `Luz actual: ${randomNumber}`;
  if (randomNumber < 3) {
    light.classList.add("off");
  } else {
    light.classList.remove("off");
  }
}, 3000);
