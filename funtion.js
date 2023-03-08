function sayHello(personName, age) {
    console.log("Hi, my name is " + personName + "and I'm " + age);
}

sayHello("Jay", 25);


function plus(num1, num2){
    console.log(num1+num2);
}

plus(4, 9);


/*내가 만든 Function & Objects */
const player = {
    name: "Jay",
    sayHi: function(name) {
        console.log("Hi~! I'm " + name);
    }
}

console.log(player.name);
player.sayHi(player.name);


/*니콜라스 과제*/
const calculator = {
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    times: function (a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    square: function(a, b){
        console.log(a**b);
    }
}

calculator.add(1, 2);
calculator.minus(2, 1);
calculator.divide(4, 2);
calculator.square(9, 2);
calculator.times(4, 8);
