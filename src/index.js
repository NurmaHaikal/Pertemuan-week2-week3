"use strict";
let a = "haikal";
console.log(a);
//eksplisit
let x = 90;
var y = "plugin";
console.log(x, y);
//implisit
let k = 20;
let o = "web";
console.log(k, o);
//tipe data any
let kelas;
kelas = true;
console.log(kelas);
//union
let mouse;
mouse = 20;
console.log(mouse);
let userID;
userID = 69;
console.log(userID);
//void 
function oke(name) {
    console.log(`Hello, ${name}!`);
}
oke("Yasir");
//square barcket
let list;
list = [1, 2, 3, 4];
//generic array 
let list1;
list1 = [1, 2, 3, 4];
console.log(list, list1);
//tuple
let person;
person = ["zulfan", 20, 20];
console.log(person);
//object
let person1;
person1 = {
    name: "yasir",
    age: 28,
    addres: "tegal"
};
console.log(person1);
//for loop
for (let i = 0; i < 5; i++) {
    console.log(`loop ke ${i + 1}`);
}
//while loop
let counter = 0;
while (counter <= 5) {
    counter++;
    console.log(counter);
}
//if else 
let nilai = 40;
if (nilai > 75) {
    console.log("lulus");
}
else {
    console.log("tidak lulus");
}
//switch case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "senin";
        break;
    case 2:
        dayName = "selasa";
        break;
    case 3:
        dayName = "rabu";
        break;
    case 4:
        dayName = "kamis";
        break;
    case 5:
        dayName = "jumat";
        break;
    default:
        dayName = "hari lainya";
}
console.log(`hari ini adalah ${dayName}`);