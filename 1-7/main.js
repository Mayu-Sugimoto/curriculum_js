
class Human {
  //コンストラクタ（yamadaと25という値を受け取るための処理をこれから書いていきます）
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

let yamada = new Human('yamada', 25);
console.log(yamada.name);
