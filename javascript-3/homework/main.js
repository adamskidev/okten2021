// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = ['one', 'two', 'three', 'four', 'five'];
    let arr3 = [1, 'two', true, 4, 'five'];

    console.log(arr1, arr2, arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    let arr4 = [];

    arr4[0] = 'Hello';
    arr4[1] = 'Okten';
    arr4[2] = 2021;

    console.log(arr4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    for (let i = 1; i <= 10; i++) {
        document.write(`<div>Text</div>`);
    }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    for (let i = 1; i <= 10; i++) {
        document.write(`<div>Text ${i}</div>`);
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    let i = 0;
    while (i < 20) {
        document.write(`<h1>Hello</h1>`);
        i++;
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    let j = 1;
    while (j <= 20) {
        document.write(`<h1>Hello ${j}</h1>`);
        j++;
    }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

    let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let element of arr5) {
        console.log(element);
    }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    let arr6 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    for (let element of arr6) {
        console.log(element);
    }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

    let arr7 = ['If', "there's", 'something', 'strange', 'in', 'your', 'neighborhood', 'who you', 'gonna call?', 'Ghostbusters!'];

    for (let lyrics of arr7) {
        console.log(lyrics);
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

    let arr8 = [11, 'eleven', true, 12, 'twelve', false, 13, 'thirteen', true, false];

    for (let bool of arr8) {
        if (typeof bool === 'boolean') {
            console.log(bool);
        }
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

    let arr9 = ['Mambo', 'No.', 5, true, 'Land', 'of', 1000, 'Dances', false];

    for (let num of arr9) {
        if (typeof num === 'number') {
            console.log(num);
        }
    }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

    let arr10 = [true, 'Set', 222, 'yourself', false, 777, true, 'free', false, 999];

    for (let str of arr10) {
        if (typeof str === 'string') {
            console.log(str);
        }
    }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let arr11 = [];

    arr11[0] = 'June';
    arr11[1] = 11;
    arr11[2] = 2009;
    arr11[3] = true;
    arr11[4] = 'Stories';
    arr11[5] = 'of';
    arr11[6] = false;
    arr11[7] = 'Confessions';
    arr11[8] = 528;
    arr11[9] = 'pages';

    for (let element of arr11) {
        console.log(element);
    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 1; i <= 10; i++) {
        console.log(i);
        document.write(i);
    }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 1; i <= 100; i++) {
        console.log(i);
        document.write(i);
    }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        document.write(i);
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
            document.write(i);
        }
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            document.write(i);
        }
    }