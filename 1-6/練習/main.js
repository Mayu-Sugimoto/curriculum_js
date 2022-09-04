let score1 = 50;
let score2 = 60;
let score3 = 70;
let score4 = 80;
let score5 = 90;

let scores = [50,60,70,80,90];
for (let i =0; i < scores.length; i++){
  console.log("得点は" + scores[i] + "点です");
}

let human = {
  name: 'yamada',
  height: 170,
  weight: 60,
  gender: "男",
  age: 30,
}

console.log(human.name);
console.log(human['name']);
