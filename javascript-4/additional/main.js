// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function checkLength () {
    let result = '';
    if (arguments.length === 1) {
        console.log(arguments[0])
    } else {
        for (let item of arguments) {
            result += item;
        }
    }
    return result;
}

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumArr (arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i] + arr2[i]);
    }
    return newArr;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function getKey (arr) {
    let keyArr = [];
    for (let item of arr) {
        for (let key in item) {
            keyArr.push(key);
        }
    }
    return keyArr;
}

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getValue (arr) {
    let valueArr = [];
    for (let item of arr) {
        for (let value in item) {
            valueArr.push(item[value]);
        }
    }
    return valueArr;
}