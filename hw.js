// 1- Тапсырма:

let numbers = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10];
let doubled = numbers.map (num => num * num * num);
let taq = [];

for (let num of doubled) {
    if (num % 2 !== 0) { 
        taq.push (num);
    }
}

alert("Massiv: " + numbers);
alert("Kubtalgan massiv: " + doubled);
console.log ("Kubtalgan taq sandar: ", taq);

// 2 - Тапсырма:

let studentSany = parseInt(+prompt("Studentterdin sanyn engiziniz: "), 10);
let studentBagalary = [];

for (let i = 0; i < studentSany; i++) {
    let bagalary = parseFloat(+prompt(`Student №${i + 1} bagasyn engiziniz: `));
    studentBagalary.push(bagalary);
}

let bagaQosyndysy = studentBagalary.reduce((total, bagalary) => total + bagalary, 0);
let ortaqBaga = bagaQosyndysy / studentSany;

console.log("Ortaq baga: " + ortaqBaga);

let zhogaryBagalar = studentBagalary.filter(bagalary => bagalary > 85);

console.log("85-ten zhogary bagalar: " + zhogaryBagalar);