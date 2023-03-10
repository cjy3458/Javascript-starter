const title = document.getElementById("title");
/*const title = document.getElementsByTagName("h1"); == 모든 tag name(h1, div, button) 접근 */
console.dir(title);

title.innerText = "Lion king";

const hellos = document.getElementsByClassName("hello");

const title2 = document.querySelector("div.hello:first-child h1"); /*hello 클래스 안에 첫 h1 접근*/

const title3 = document.querySelectorAll(".hello h1")/*모든 h1*/


/*그냥 요소 접근할 때는 querySelector가 제일 좋다고 생각해 */


/*스타일 바꾸는 이벤트 */


function handClick() {
    const nowColor = title2.style.color;
    let newColor;
    if (nowColor === "blue") {
        newColor = "rosybrown";
    } else{
        newColor = "blue";
    }
    title2.style.color = newColor;
}

title2.onclick = handClick;