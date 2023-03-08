const age = prompt("How old are you?"); /*alert로 입력받는 prompt*/

parseInt(age)  /*string을 int로 바꿔주는 함수 parseInt*/

console.log(typeof age);

isNaN(typeof age); /*NaN인지 아닌지 확인하는 과정*/


/*boolean으로 if문 안에 조건을 작성*/
if(isNaN(age)) {
    alert("Write the Number!");
} else {
    alert(age)
}