/* 비효율적 선언
let mon = "mon";
let tue = "tue";
let wed = "wed";
let thu = "thu";
let fri = "fri";
let sat = "sat";
let sun = "sun";
*/

/* 배열 */
const daysOfWeek = [mon, tue, wed, thu, fri, sat];

// 배열 안에 요소 추출
console.log(daysOfWeek[4]);

// 배열에 요소 추가
daysOfWeek.push("sun");

console.log(daysOfWeek)