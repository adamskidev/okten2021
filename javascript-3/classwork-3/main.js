// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

// 2. перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;
while (j < arr.length) {
    if (j % 2 !== 0) {
        console.log(arr[j]);
    }
    j++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let k = 0;
while (k < arr.length) {
    if (arr[k] % 2 === 0) {
        console.log(arr[k]);
    }
    k++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
    console.log(arr[i]);
}

// 8. вивести масив в зворотньому порядку.

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1

let l = arr.length - 1;
while (l >= 0) {
    console.log(arr[l]);
    l--
}

// 2 = 8

// 3

let m = arr.length - 1;
while (m >= 0) {
    if (m % 2 !== 0) {
        console.log(arr[m]);
    }
    m--
}

// 4

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5

let n = arr.length - 1;
while (n >= 0) {
    if (arr[n] % 2 === 0) {
        console.log(arr[n]);
    }
    n--
}

// 6

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
    console.log(arr[i]);
}