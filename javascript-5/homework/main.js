// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectangleArea = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола

let circleArea = (r) => Math.PI * (r ** 2);

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderArea = (h, r) => 2 * Math.PI * h * r;

// - створити функцію яка приймає масив та виводить кожен його елемент

let logArr = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
}

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let writeText = (text) => document.write(`<p>${text}</p>`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let writeList1 = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let writeList2 = (text, quantity) => {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrList = (arr) => {
    document.write(`<ol>`);
    for (let element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ol>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = (arr) => {
    document.write(`<ol>`);
    for (let user of arr) {
        document.write(`<li>ID:${user.id} - ${user.name} (${user.age} y.o.)</li>`);
    }
    document.write(`</ol>`);
}