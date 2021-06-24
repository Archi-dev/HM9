// 1.

let x = 10;
let y = 7;

(x > y) ? alert("x больше, чем y") : alert("y больше, чем x");


// 2.
let num = Number(prompt('Введите число'));

// if (num % 2 == 0) {
//     alert('Число ' + num +  ' четное')
// } else if (num % 2 !== 0) {
//     alert('Число ' + num +  ' нечетное')
// }
(num % 2 == 0) ? alert('Число ' + num + ' четное'):alert('Число ' + num +  ' нечетное');

// 3.


let number1 = prompt('Введите число');
console.log(number1);
let numberLength = number1.length;
if (number1 < 0) {
    numberLength -= 1;
    console.log(numberLength);
}
 console.log(numberLength);
// if (number1 > 0 && numberLength == 1) {
//     alert(`Число  ${number1}  однозначное положительное`);
// } else if (number1 < 0 && numberLength ===1){
//     alert(`Число  ${number1}  однозначное отрицательное`);
// } else if (number1 > 0 && numberLength ===2){
//     alert(`Число  ${number1}  двухзначное положительное`);
// } else if (number1 < 0 && numberLength ===2){
//     alert(`Число  ${number1}  двухзначное отрицательное`);
// } else if (number1 > 0 && numberLength ===3){
//     alert(`Число  ${number1}  трехзначное положительное`);
// } else if (number1 < 0 && numberLength ===3){
//     alert(`Число  ${number1}  трехзначное отрицательное`);
// } else {
//     alert(`Число  ${number1} более трёхзначное`)
// }
switch (true) {
    case number1 > 0 && numberLength == 1:
        alert(`Число  ${number1}  однозначное положительное`);
        break;
     case number1 < 0 && numberLength ===1:
        alert(`Число  ${number1}  однозначное отрицательное`);
        break;
     case number1 > 0 && numberLength ===2:
        alert(`Число  ${number1}  двухзначное положительное`);
        break;
     case number1 < 0 && numberLength ===2:
        alert(`Число  ${number1}  двухзначное отрицательное`);
        break;
     case number1 > 0 && numberLength ===3:
        alert(`Число  ${number1}  трехзначное положительное`);
        break;
     case number1 < 0 && numberLength ===3:
        alert(`Число  ${number1}  трехзначное отрицательное`);
        break;
    default:
        alert(`Число  ${number1} более трёхзначное`)
}


// 4.



let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

// if ( num2 > num1 && num2 > num3) {
//     alert(`num2 ${num2} больше всех`);
// } else if (num1 > num2 && num1 > num3) {
//     alert(`num1 ${num1} больше всех`);
// } else {
//     alert(`num3 ${num3} больше всех`);
// }

switch (true) {
    case num2 > num1 && num2 > num3:
        alert(`num2 ${num2} больше всех`);
        break;
    case num1 > num2 && num1 > num3:
        alert(`num1 ${num1} больше всех`);
        break;
    default:
        alert(`num3 ${num3} больше всех`);
}

// 5.



let triangleSide1 = Number(prompt('ВВедите первую сторону'));
let triangleSide2 = Number(prompt('ВВедите вторую сторону'));
let triangleSide3 = Number(prompt('ВВедите третию сторону'));

if ((triangleSide2 + triangleSide3) > triangleSide1) {
    alert('Триугольник существует')
   console.log(1);
} else if((triangleSide3 + triangleSide1) > triangleSide2){
    alert('Триугольник существует')
    console.log(2);
} else if((triangleSide1 + triangleSide2) > triangleSide3){
    alert('Триугольник существует')
    console.log(3);
} else {
    alert('Триугольник не существует');
}