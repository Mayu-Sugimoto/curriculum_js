let num1 = 10;
let num2 = 4;
let result;
//足し算
result = num1 + num2;
console.log(result);
//引き算
result = num1 - num2;
console.log(result);
//掛け算
result = num1 * num2;
console.log(result);
//割り算
result = num1 / num2;
console.log(result);
//剰余
result = num1 % num2;
console.log(result);

//文字列の結合の例
//HelloとWorldに空白をいれたいときは、Helloの直後か、Worldの直前にスペースを入れてください。
console.log(`Hello ` + `World`);
//変数の結合の例
let lastName = '田中';
let firstName = '一郎';
let fullName = lastName + firstName;

console.log(fullName);

let x =10;
x++;
console.log(x); //11
let y =10;
y--;
console.log(y); //9

let name = "hoge";

console.log(10 === 10); //true
console.log(10 === 5); //false
console.log(10 !== 5); //true
console.log(10 > 20); //false
console.log(10 <= 10); //true

console.log('10' === 10); //false
console.log('10' == 10); //true

//条件分岐

let score = 0;
if (score >= 70) {
  console.log('合格');
} else if(score === 0){
  console.log('0点はまずいです...');
} else {
  console.log('不合格');
}

//うまく「15」が出力されたら、条件がtrueだった証拠です。
let a = 15;
if (a >= 10 && a <= 20) {
  console.log(a);
}

let b = 10;
let c = 15;
//偶数の条件式
if (b % 2 === 0) {
  console.log(b);
}
//奇数の条件式
if (c % 2 !== 0) {
  console.log(c);
}
