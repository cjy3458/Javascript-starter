const clock = document.querySelector("#clock");

/*intervals(매번 일어나야하는 무언가) & timeout() */

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000); /*5000ms(5초)마다 sayHi함수 실행 */
/*setTimeout(sayHi, 5000); -> 5000ms(5초)뒤에 함수 실행 */


