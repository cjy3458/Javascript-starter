const loginForm = document.querySelector("#login-form");
const logInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
const link = document.querySelector("a");
const greet = document.querySelector("#greeting");
const hidden_class = "hidden";

function loginSubmit(event){ /*submit이 됐을때 실행할 함수 */
    event.preventDefault(); /*먼저 기본 이벤트 제거 */
    loginForm.classList.add(hidden_class); /*form에 hidden이라는 클래스 추가 */
    const userId = logInput.value;
    localStorage.setItem("Id", userId); /*로컬스토리지에 입력한 값을 id라는 키로 저장 */
    greeting(userId);
}

loginForm.onsubmit = loginSubmit;


/*데이터를 저장하는 가장 쉬운 방법 == Local Storage */

localStorage.setItem("Id", "Jay"); /*저장할 데이터의 key와 value 설정 */
localStorage.getItem("Id"); /*저장된 데이터의 key를 이용해 value 접근 */
localStorage.removeItem("Id"); /*저장된 데이터의 key를 이용해 삭제 */


const localId = localStorage.getItem("Id");

function greeting(name){
    greet.innerText = `Hello ${name}`; /*입력한 텍스트 변수에 저장 */
    greet.classList.remove(hidden_class); /*원래있던 hidden 클래스 remove를 이용해 제거 */
}

if(localId === null){ /*로컬스토리지에 입력한 id가 null이라면(없다면) */
    loginForm.classList.remove(hidden_class); /*hidden이라는 클래스를 제거해서 form을 보여준다*/
    loginForm.onsubmit = loginSubmit;
} else {
    greeting(localId);
}

console.log(localId);