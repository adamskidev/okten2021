// - Дано натуральное число n. Выведите все числа от 1 до n.

let numbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let count = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let moveItem = (arr, i) => {
    let temp = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = temp;
    return arr;
}

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//                                                              Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// Варіант 1

let moveZero1 = (arr) => {
    let newArr = [];
    for (let num of arr) {
        if (num !== 0) {
            newArr[newArr.length] = num;
        }
    }
    for (let num of arr) {
        if (num === 0) {
            newArr[newArr.length] = num;
        }
    }
    return newArr;
}


// Варіант 2

let moveZero2 = (arr) => {
    let numbers = [];
    let zeros = [];
    for (let num of arr) {
        if (num !== 0) {
            numbers.push(num);
        } else {
            zeros.push(num);
        }
    }
    return [...numbers, ...zeros];
}