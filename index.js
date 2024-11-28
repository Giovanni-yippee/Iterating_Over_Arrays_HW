// FOR - циклі
// let numbers = [1, 2, 3, 4]; //Индекстерді қолдана отырып, массивтегі әр элементті қайталайды.

// for (let i = 0; i < numbers.length; i++) { //Цикл i = 0 мәнінен басталады.
//     console.log (numbers[i]); //Әр айналым сайын массивтегі сәйкес элементті шығарады.
// }

// FOR...OF - циклі
// let numbers = [1, 2, 3, 4]; //Массив элементтерін тікелей алып жұмыс істейді.

// for (let num of numbers) { //Индекстерді қолданбай-ақ жұмыс істейді.
//     console.log (num);
// }

// FOREACH () - әдісі
// let fruits = ["Apple", "Banana", "Cherry"]; //Әр элементке функция қолданады.

// fruits.forEach (function(fruit) { //Функция массивтің әр элементіне автоматты түрде қолданылады.
//     console.log (fruit);
// })

// MAP () - Жаңа массив құру
// let numbers = [1, 2, 3]; //Әр элементті өзгертеді және жаңа массив жасайды.
// let doubled = numbers.map (num => num * 2); //Әр сан екі еселеніп, жаңа массивке қосылады.

// console.log (doubled);

// FILTER () - Элементтерді сүзу
// let numbers = [1, 2, 3, 4, 5]; //Тек белгілі бір шартқа сәйкес келетін элементтерді таңдайды.
// let evens = numbers.filter (num => num % 2 === 0); //Тек жұп сандар таңдалады.

// console.log (evens);

// REDUCE () - Қорытынды нәтиже
// let numbers = [1, 2, 3, 4]; //Барлық элементтерді жинақтап, бір мәнге айналдырады.
// let sum = numbers.reduce ((total, num) => total + num, 0); //0-ден бастап әр санды қосады.

// console.log (sum);

// let sandar = [7, 10, 12, 15, 90, 100];
// let doubled = sandar.map(num => {
//     if (num % 2 == 0) {
//         return num;
//     }else {
//         return num + "-taq";
//     }
// })

// console.log (doubled);

// let aty = ["Almaty", "Astana", "Qaragandy"];
// let qalasy = aty.map (qala => qala + ".qalasy");

// console.log (qalasy)

// let sandar = [7, 11, 15, 8, 10, 4];
// let even = sandar.filter(num => num % 2 == 0);

// console.log (even);

// let sozder = ["Almaty", "Astana", "Qaragandy"];
// let Tlar = sozder.filter(soz => soz.includes("t"));

// console.log (Tlar);

// let sozder = ["Arys", "Semei", "Qaragandy"];
// let Alar = sozder.filter(soz => soz.toLowerCase().includes("a"));

// console.log (Alar);

// let numbers = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }

// console.log (sum);

// let numbers = [1, 2, 3, 4];
// let qosyndy = numbers.reduce((total, num) => total + num, 0);

// console.log (qosyndy);

// PRACTICE.1

// let numbers = [2, 4, 6, 8];
// let doubled = numbers.map (num => num * 3);

// console.log (doubled);

// PRACTICE.2

// let numbers = [3, 7, 1, 9, 4];
// let evens = numbers.filter (num => num > 5);

// console.log (evens);