// 1. Створити пустий масив та :

let arr = [];

// a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}

// b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8) + 8));
}

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr.length; i += 3) {
    console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];

for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        newArr.push(arr[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let receipt = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;

for (let i = 0; i < receipt.length; i++) {
    sum += receipt[i];
}

let average = Math.round(sum / receipt.length);
console.log(average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArr = [];
let newRandomArr = [];

for (let i = 0; i < 20; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < randomArr.length; i++) {
    newRandomArr.push(randomArr[i] * 5);
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let someArr = [1, 'Mar', 1999, true, 'and', false, 'by', 'David Mamet', 144, 'pages'];
let anotherArr = [];

for (let num of someArr) {
    if (typeof num === 'number') {
        anotherArr.push(num);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            let object = {};
            object = usersWithId[i];
            object.address = citiesWithId[j];
            usersWithCities.push(object);
        }
    }
}

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numsArr = [];

for (let i = 0; i < 10; i++) {
    numsArr.push(Math.floor(Math.random() * 100));
}

for (let even of numsArr) {
    if (even % 2 === 0) {
        console.log(even);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let newNumsArr = [];

for (let item of numsArr) {
    newNumsArr.push(item);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let strArr = ['a', 'b', 'c'];
let string1 = '';

for (let i = 0; i < strArr.length; i++) {
    string1 += strArr[i];
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let string2 = '';

let i = 0;
while (i < strArr.length) {
    string2 += strArr[i];
    i++;
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let string3 = '';

for (let letter of strArr) {
    string3 += letter;
}