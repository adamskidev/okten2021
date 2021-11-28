// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car1(model, brand, year, speed, engine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    this.info = function () {
        document.write('<ul>');
        document.write(`<li>Model - ${this.model}</li>`);
        document.write(`<li>Made by - ${this.brand}</li>`);
        document.write(`<li>Year - ${this.year}</li>`);
        document.write(`<li>Max speed - ${this.speed}</li>`);
        document.write(`<li>Engine size - ${this.engine}</li>`);
        document.write('</ul>');
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = speed + newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, brand, year, speed, engine) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    info() {
        document.write('<ul>');
        document.write(`<li>Model - ${this.model}</li>`);
        document.write(`<li>Made by - ${this.brand}</li>`);
        document.write(`<li>Year - ${this.year}</li>`);
        document.write(`<li>Max speed - ${this.speed}</li>`);
        document.write(`<li>Engine size - ${this.engine}</li>`);
        document.write('</ul>');
    }

    increaseMaxSpeed(newSpeed) {
        this.speed = this.speed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let princesses = [
    new Cinderella('Elena', 28, 35),
    new Cinderella('Yulia', 25, 35.5),
    new Cinderella('Nastia', 29, 36),
    new Cinderella('Olenka', 33, 36.5),
    new Cinderella('Liuba', 30, 37),
    new Cinderella('Tamara', 32, 37.5),
    new Cinderella('Mariana', 27, 38),
    new Cinderella('Olia', 28, 38.5),
    new Cinderella('Mariia', 22, 39),
    new Cinderella('Katia', 27, 39.5)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Stepan', 30, 37.5);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let princess of princesses) {
    if (princess.footSize === prince.shoeSize) {
        console.log(princess);
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPrincess = princesses.find(princess => princess.footSize === prince.shoeSize);