const image = document.querySelector(".lnXdpd");
let time = "08:00:00";

const content = document.querySelector(".LS8OJ");

const endTime = document.createElement("p");
endTime.innerHTML = "퇴근까지";
endTime.classList.add("end");

// 남은 시간 가르쳐주기
const clock = document.createElement("div");
clock.innerText = time;
clock.classList.add("clockTitle");

// 코어 타임 리스트
const coreTimeList = document.createElement("ul");
coreTimeList.classList.add("list");

const coreTimeTitle = document.createElement("li");
coreTimeTitle.classList.add("listTitle");
coreTimeTitle.innerText = "오늘의 코어 타임";

coreTimeList.appendChild(coreTimeTitle);

for (let i = 0; i < 10; i++) {
  const coreTimeItem = document.createElement("li");
  coreTimeItem.innerText = "11월 3일 오전 9시 직원 전체 회의";
  coreTimeItem.classList.add("listItem");
  coreTimeList.appendChild(coreTimeItem);
}

const bottom = document.querySelector(".qarstb");
bottom.appendChild(coreTimeList);

// url 추가
const url = document.createElement("a");

// 기존에 있던 센터 input 삭제
const center = document.querySelectorAll(".lJ9FBc");

const centers = center[1].querySelector("center");
centers.remove();
// center.forEach((v, idx) => {
//   if (idx === 2 || idx == 3) v.remove();
// });

const img = document.querySelector(".szppmdbYutt__middle-slot-promo");
img.remove();

// url 설정
url.href = "http://localhost:3000/";
url.innerText = "자세히 보기";
url.classList.add("url");

// url 자식 추가
center[1].appendChild(url);

// coreTimeList.appendChild(coreTimeItem);
// coreTimeList.appendChild(coreTimeItem);
// coreTimeList.appendChild(coreTimeItem);

// 퇴근까지 몇시간 남았는지 알려주는 태그 추가
content.appendChild(endTime);
content.appendChild(clock);

image.remove();

// 남은시간 계산 함수
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
