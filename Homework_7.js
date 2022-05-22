var names = ['Вася', 'Петя', 'Миша']; // Задача 1

var info = names.map(function (name) {
    return ' name: ' + name + '';
});

console.log(info);


var time = ['00', '13', '24']; //Задача 2
var anonse = 'Текущее время: ';

var watches = time.reduce((result, current) => {
    return result + ' : ' + current;
});

alert(anonse + watches);


function letters(string, vowels = 'аеёиоуыэюя') { // Задание 3
    return string
        .toLowerCase()
        .split('')
        .reduce((accumulator, current) => vowels.includes(current) ? accumulator += current : accumulator, '');
}

var vowels = letters('давным-давно в далекой-далекой галактике');
vowels
vowels.length


let names = 'Привет, студент! Студент... Как дела, студент?'; //Задание 4

let arr = names.split(/[!;.?]+/);

for (let name of arr) {
    alert(`${name}: Letters quantity is: ${name.match(/[a-zA-Zа-яА-Я]/g).length}`);
}



