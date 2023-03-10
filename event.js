const title = document.getElementById("title");
/*const title = document.getElementsByTagName("h1"); == 모든 tag name(h1, div, button) 접근 */
console.dir(title);

title.innerText = "Lion king";

const hellos = document.getElementsByClassName("hello");

const title2 = document.querySelector("div.hello:first-child h1"); /*hello 클래스 안에 첫 h1 접근*/

const title3 = document.querySelectorAll(".hello h1")/*모든 h1*/


/*스타일 바꾸는 이벤트 */
title2.style.color = "rosybrown";


/*클릭 시에 생기는 이벤트  */

function handClick() {
    alert("title clicked");
    title.style.color = "blue";
}

title2.onclick = handClick; /*더 간결*/
title2.addEventListener("click", handClick);


/*마우스를 올려놓으면 생기는 이벤트 */

function handleMouse() {
    alert("entered");
}

title2.addEventListener("mouseenter", handleMouse);


/*window 이벤트*/
function handleSize() {
    document.body.style.backgroundColor = "tomato";
}


window.addEventListener("resize", handleSize);