// function declaration
function sapa(nama:string){
    console.log(" Halo,aku " + nama);
}
sapa("Haikal")

function calculate (a:number, b:number, c: number):number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil penjumlahan: " + hasil);


// Arrow Function
let multiplication = (x:number, y:number) => {
    return x * y 
}
let result = multiplication(5,8)
console.log("Hasil perkalian: "+ result);

var cube = function(num : number) {
    return num ** 3
}
console.log(cube(3));


// objek 

let person2: {
    name: string,
    age: number,
    address: string 
}
person2 = {
    name: "Haikal",
    age: 20,
    address: "Tegal"
}
console.log(person2);