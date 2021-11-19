// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea (a,b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea (r) {
    return Math.PI * (r ** 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea (h, r) {
    return 2 * Math.PI * h * r;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function logArr (arr) {
    for (let item of arr) {
        console.log(item);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writeText (text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function writeList1 (item) {
    document.write(`<ul>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`</ul>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function writeList2 (item, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function writeArr (arr) {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function writeObj (arr) {
    for (let item of arr) {
        document.write(`<div>`);
        document.write(`${item.id}. ${item.name} - ${item.age}`);
        document.write(`</div>`);
    }
}