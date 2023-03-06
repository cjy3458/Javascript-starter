
/*그냥 선언*/
const playerName = "Jay";
const playerPoints = 1212;
const playerHandsome = true;
const playerFat = "No!";

/*배열로 선언*/
const player = ["Jay", 1212, true, "No!"];

/* 리스트인 줄 알았는데 아니래 */
const playerList = {
    name: "Jay",
    points: 100,
    handsome: true,
    fat: "No!" 
};

console.log(player);
console.log(player.points);
player.points = 85;
console.log(player["points"]);
player.last = "Young";
console.log(player);

