// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

let email1 = 'someemail@gmail.com';
let email2 = 'someeMAIL@gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let validateEmail = (email) => {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let atPosition = email.indexOf('@');
    let nickname = email.substring(0, atPosition).replaceAll('.', '').toLowerCase();

    let checkNickname = nickname.split('').every(char => chars.includes(char)) && nickname.length > 0;
    let checkAt = email.includes('@');
    let checkDomain = email.slice(atPosition).indexOf('.') > 2;

    return checkNickname && checkAt && checkDomain;
}

// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortCourses = coursesArray.sort((course1, course2) => course2.modules.length - course1.modules.length);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringSearch) => {
    let result = 0;
    for (let char of str) {
        if (char === stringSearch) {
            result++;
        }
    }
    return result;
}

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (str, n) => str.split(' ').slice(0, n).join(' ');