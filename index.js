const image = document.querySelector(".lnXdpd");
let time = "08:00:00";

const content = document.querySelector(".LS8OJ");

const clock = document.createElement("div");
clock.innerText = time;
clock.classList.add("clockTitle");

content.appendChild(clock);

image.remove();

const zero = (value) => {
  return value.toString().length < 2 ? "0" + value : value;
};

const minus1Second = () => {
  const k = time.split(":");
  if (Number(k[2]) > 0) {
    time = k[0] + ":" + k[1] + ":" + zero(Number(k[2]) - 1);
  } else if (Number(k[2]) === 0 && Number(k[1]) > 0) {
    time = k[0] + ":" + zero(Number(k[1]) - 1) + ":59";
  } else if (Number(k[1]) === 0 && Number(k[0]) > 0) {
    time = zero(Number(k[0]) - 1) + ":59:59";
  }

  clock.innerText = time;
};

function run() {
  setInterval(() => {
    minus1Second();
  }, 1000);
}

run();
