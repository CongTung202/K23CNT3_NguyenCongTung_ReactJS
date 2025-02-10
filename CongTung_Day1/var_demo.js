/*
var x = 7;
function bokactvar() {
  console.log("gia tri x trong ham:", x);
}
console.log("gia tri x ngoai ham:", x);
bokactvar();
// trong ham khong goi duoc ra ngoai
function bokactvary() {
  var y = 12;
  console.log("gia tri y trong ham:", y);
}

console.log("gia tri y ngoai ham:", y);
//khai bao x
function ctifvarx() {
  var x = 5;
  if (x === 5) {
    var x = 10;
    console.log("gia tri x trong ham if:", x);
  }
  console.log("gia tri x ngoai ham if:", x);
}
ctifvarx();
function ctifvary() {
  var y = 8;
  if (y === 8) {
    let y = 4;
    console.log("gia tri y trong ham if:", y);
  }
  console.log("gia tri y ngoai ham if:", y);
}
ctifvary();
let z = 99;
console.log("gia tri z chua khai bao voi bien la:", z);
// khai bao mac dinh
function sum(num1 = 9, num2 = 1) {
  return num1 + num2;
}
console.log("tong 2 so la:", sum(4, 2));
console.log("tong 2 so mac dinh la:", sum());
function getname(name) {
  name = name || "Boka Chan";
  return name;
}
let realname = "Tung";
console.log("Watashi wa " + getname(realname) + "-desu");
console.log("Watashi wa " + getname() + "-desu");

//in so luong va phan con lai
function printboka(n1, n2, ...others) {
  console.log("name1: " + n1);
  console.log("name2: " + n2);
  console.log("others: " + others);
}
printboka("Boka", "Chan", "Ga", "Oshiette", "Kureta");
*/
// array gop
const bokarray = [1, 1, 2];
const arrayoshi = [bokarray, 3, 5, 8, 13];
const arrayoshii = [...bokarray, 3, 5, 8, 13];
console.log(arrayoshi);
console.log(arrayoshii);
// arraya cuop boc cua thang khac
const arraya = [1, 9, 8, 4];
const [a, b] = arraya;
console.log("a: ", a);
console.log("b: ", b);
console.log("arr: =", arraya);
// people
const objectPeople = {
  name: "BokaChan",
  age: 18,
  address: "Tokyo",
};
const { name, age } = objectPeople;
console.log("Name: ", name);
console.log("Age: ", age);
console.log(objectPeople);
