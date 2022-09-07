//問1
let numbers = [2,5,12,13,15,18,22];

for (let i = 0; i<numbers.length; i++){
  if(numbers[i] % 2 === 0){
    isEven(numbers[i]);
  }
}
    function isEven(num) {
      console.log(num + 'は偶数です');
}


//問2
class Car {
  constructor(Gas,Num){
    this.Gas = Gas;
    this.Num = Num;
  }
  getNumGas(){
    console.log(`ガソリンは${this.Gas}です。ナンバーは${this.Num}です`);
  }
}
let myCar = new Car('○○','△△');
myCar.getNumGas();
