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