// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// - створити функцію яка повертає найбільше число з масиву

let maxArr = (arr) => {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// - створити функцію яка повертає найменьше число з масиву


let minArr = (arr) => {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let aveArr = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let numbers = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num
        }
    }
    console.log(max);
    return min;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomArr = () => {
    let arr = [];
    let length = Math.round(Math.random() * 100 + 1);
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomLimitArr = (limit) => {
    let arr = [];
    let length = Math.round(Math.random() * 100 + 1);
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (arr) => {
    let newArr = [];
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[index] = arr[i];
        index++;
    }
    return newArr;
}
