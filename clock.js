/* part1 */

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
// 같은뜻
// const clockContainer = document.querySelector('.js-clock'),
//  clockTitle= clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  // clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

  //Q: 숫자 10보다 작을때 1,2,3,4....말고, 01,02,03.... 이렇게 만들기
  // ternary operator (간단한 if)
  // 10보다 작으면 `0${}`:
  //        크면    `${}`
  // ${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:        ${
    minutes < 10 ? `0${minutes}` : minutes
  }:        ${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 함수안에 시간을 가져오고,
// 1초마다 갱신
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
