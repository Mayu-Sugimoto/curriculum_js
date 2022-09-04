//Taiyakiクラスを作成
class Taiyaki {
  constructor(inside){
    this.inside = inside;
  }

//味メソッド（関数）作成
  taste(){
    console.log(`中身は${this.inside}です`);
  }
}

let anko = new Taiyaki('あんこ');
anko.taste();

let cream = new Taiyaki('クリーム');
cream.taste();

let cheese = new Taiyaki('チーズ');
cheese.taste();



