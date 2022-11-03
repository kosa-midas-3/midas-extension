// const root = document.querySelector(".root");

// const date = new Date();
// const toYear = date.getFullYear();
// const toMonth = date.getMonth();
// // var toMonth = 11;
// let array = [];

// const getInfo = () => {
//   fetch(
//     `/attendance?name=${localStorage.getItem("username")}&month=${toYear}-${
//       toMonth + 1
//     }-01`,
//     {
//       method: "GET",
//     }
//   ).then((res) => {
//     array = res.json().data;

//     //이달 구하기
//     const firstDay = new Date(toYear, toMonth, 1).getDay(); //이 달 1일 요일 구하기
//     const lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
//     const lastDay = new Date(toYear, toMonth, lastDate).getDay(); // 이 달의 마지막 요일 구하기

//     console.log("1일 요일", firstDay);
//     console.log("이달 마지막 날짜", lastDate);
//     console.log("마지막 요일", lastDay);

//     //해당 월
//     const month = toYear + "년" + (toMonth + 1) + "월";
//     const monthElement = document.createElement("div");
//     monthElement.innerText = month;
//     monthElement.classList.add("month");

//     const ulElement = document.createElement("ul");
//     ulElement.appendChild(monthElement);
//     console.log("해당 월", month);

//     // 첫번째 줄 빈칸 5개

//     for (let bin = 0; bin < firstDay; bin++) {
//       const liElement = document.createElement("li");
//       ulElement.appendChild(liElement);
//     }

//     //날짜
//     for (let i = 1; i <= lastDate; i++) {
//       const liElement = document.createElement("li");
//       const green = document.createElement("div");
//       const num = document.createElement("div");
//       num.innerText = i;
//       green.classList.add("green");
//       if (array.days[i]) {
//         green.innerText = array.days[i];
//       }

//       liElement.appendChild(num);
//       liElement.appendChild(green);

//       liElement.classList.add("date");
//       ulElement.appendChild(liElement);
//     }

//     root.appendChild(ulElement);
//   });
// };

// getInfo();

const root = document.querySelector(".root");

const date = new Date();
const toYear = date.getFullYear();
const toMonth = date.getMonth();
// var toMonth = 11;
let array = [];

//이달 구하기
const firstDay = new Date(toYear, toMonth, 1).getDay(); //이 달 1일 요일 구하기
const lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
const lastDay = new Date(toYear, toMonth, lastDate).getDay(); // 이 달의 마지막 요일 구하기

console.log("1일 요일", firstDay);
console.log("이달 마지막 날짜", lastDate);
console.log("마지막 요일", lastDay);

//해당 월
const month = toYear + "년" + (toMonth + 1) + "월\n" + "06:23:13초 남음";
const monthElement = document.createElement("div");
monthElement.innerText = month;
monthElement.classList.add("month");

const ulElement = document.createElement("ul");
ulElement.appendChild(monthElement);
console.log("해당 월", month);

// 첫번째 줄 빈칸 5개

for (let bin = 0; bin < firstDay; bin++) {
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
}

//날짜
for (let i = 1; i <= lastDate; i++) {
  const liElement = document.createElement("li");
  const green = document.createElement("div");
  const num = document.createElement("div");
  num.innerText = i;
  green.classList.add("green");
  green.innerText = i;
  liElement.appendChild(num);
  liElement.appendChild(green);

  liElement.classList.add("date");
  ulElement.appendChild(liElement);
}

root.appendChild(ulElement);
