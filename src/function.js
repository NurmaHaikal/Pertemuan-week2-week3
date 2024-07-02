"use strict";
// function declaration
function sapa(nama) {
    console.log(" Halo,aku " + nama);
}
sapa("Haikal");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil penjumlahan: " + hasil);
// Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil perkalian: " + result);
var cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
// objek 
let person2;
person2 = {
    name: "Haikal",
    age: 20,
    address: "Tegal"
};
console.log(person2);
