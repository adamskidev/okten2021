// - Дано список імен.

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalizeName = n => {
    let name = '';
    let index = 0;
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of n) {
        if (!letters.includes(char.toLowerCase())) {
            index = n.indexOf(char);
        } else {
            name += char;
        }
    }
    return name.substring(0, index) + ' ' + name.slice(index);
}

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let numArr = () => {
    let arr = [];
    let length = Math.round(Math.random() * 10 + 10);
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortArr = numArr().sort((num1, num2) => num1 - num2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterArr = numArr().filter(num => num % 2 === 0);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numToString = numArr().map(num => num.toString());

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((num1, num2) => num1 - num2);
    } else if (direction === 'descending') {
        return arr.sort((num1, num2) => num2 - num1);
    } else {
        return 'please enter "ascending" or "descending"';
    }
}

// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let sortCoursesDuration = coursesAndDurationArray.sort((month1, month2) => month2.monthDuration - month1.monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCoursesDuration = coursesAndDurationArray.filter(courses => courses.monthDuration > 5);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }
    return arr;
}