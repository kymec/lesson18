"use strict"
//1)
console.log('Задание 1');
var a = '1';
if (a === '1'){
    console.log('Верно');
} else{
    console.log('Неверно');
}

//2)
console.log('Задание 2');
var item = true;
if (item != true){
    console.log('Верно');
} else{
    console.log('Неверно');
}
item = false;
(item != true) ? console.log('Верно') : console.log('Неверно');

//3)
console.log('Задание 3');
a = 2;
if (a > 0 && a < 4){
    console.log('Верно');
} else{
    console.log('Неверно');
}

//4)
console.log('Задание 4');
a = 1;
var b = 7;
if ((a > 3 && a < 12) || (b >= 7 && b < 15)){
    console.log('Верно');
} else{
    console.log('Неверно');
}

//5)
console.log('Задание 5');
var month = 4;
if ((month >= 1 && month <= 2) || month == 12){
    console.log('Зима');
} else if(month >= 3 && month <= 5){
    console.log('Весна');
} else if(month > 5 && month <= 8){
    console.log('Лето');
} else if (month > 8 && month <= 11){
    console.log('Осень');
} else{
    console.log('Неправильно задан месяц');
}

//6)
console.log('Задание 6');
for (var i = 0; i <= 100; i++){
    if(i % 2 != 1){
        console.log(i);
    }
}