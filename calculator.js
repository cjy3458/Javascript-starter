const calculator = {
    add: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function(a, b){
        return a/b;
    },
    square: function(a, b){
        return a**b;
    }
} /*return하는 순간 함수는 종료!*/

const plusR = calculator.add(1, 2);
const minusR = calculator.minus(2, 1);
const divideR = calculator.divide(4, 2);
const squareR = calculator.square(9, 2);
const timesR = calculator.times(4, 8);
