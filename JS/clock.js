const clock = document.querySelector("#clock");

/*intervals(매번 일어나야하는 무언가) & timeout() */

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); /*5000ms(5초)마다 sayHi함수 실행 */
/*setTimeout(sayHi, 5000); -> 5000ms(5초)뒤에 함수 실행 */


