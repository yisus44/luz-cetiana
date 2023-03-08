const container = document.getElementById("root");
const light = document.querySelector(".light");

const getData = async () => {
  const url =
    "https://i9y6lgqmg7.execute-api.us-east-2.amazonaws.com/dev/mesures";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const renderData = (data) => {
  let totalHeight = 0; // initialize the total height to 0
  light.innerHTML = "";
  for (const element of data) {
    const student = document.createElement("p");
    const icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-lightbulb");
    icon.classList.add("lightbulb");

    const [firstMeasure] = element.mesures;
    const firstMeasureValue = firstMeasure ? firstMeasure.mesure : 0;

    if (firstMeasureValue < 51) {
      icon.classList.add("off");
    }
    student.classList.add("card");
    student.textContent = `${element.username} - ${
      firstMeasure ? firstMeasure.mesure : "Sin registrar"
    }`;

    light.appendChild(student);
    student.appendChild(icon);
    totalHeight += student.offsetHeight; // add the height of each card element to the total height
  }
  light.style.height = `calc(60% + ${totalHeight}px)`; // adjust the height of the light element based on the total height of the card elements
};
async function start() {
  try {
    setInterval(async () => {
      const data = await getData();
      renderData(data);
    }, 5000);
  } catch (error) {
    console.log(error);
  }
}

start();
