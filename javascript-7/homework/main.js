// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User (1, 'Raymond', 'Reddington', 'ray@email.com', '380671111111'),
    new User (2, 'Elizabeth', 'Keen', 'liz@email.com', '380672222222'),
    new User (3, 'Donald', 'Ressler', 'don@email.com', '380673333333'),
    new User (4, 'Christopher', 'Hargrave', 'chris@email.com', '380674444444'),
    new User (5, 'Meera', 'Malik', 'meera@email.com', '380675555555'),
    new User (6, 'Harold', 'Cooper', 'harold@email.com', '380676666666'),
    new User (7, 'Aram', 'Mojtabai', 'aram@email.com', '380677777777'),
    new User (8, 'Samar', 'Navabi', 'samar@email.com', '380678888888'),
    new User (9, 'Dembe', 'Zuma', 'dembe@email.com', '380679999999'),
    new User (10, 'Alina', 'Park', 'ailna@email.com', '380670000000')
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterEvenId = users.filter(user => user.id % 2 === 0);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = users.sort((user1, user2) => user1.id - user2.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client (1, 'Rachel', 'Green', 'r.green@email.com', '380501111111', ['Milk', 'Potatoes', 'Grapes', 'Pasta']),
    new Client (2, 'Monica', 'Geller', 'm.geller@email.com', '380502222222', ['Butter', 'Brocolli', 'Melon']),
    new Client (3, 'Phoebe', 'Buffay', 'p.buffay@email.com', '380503333333', ['Eggs', 'Carrots', 'Berries']),
    new Client (4, 'Chandler', 'Bing', 'c.bung@email.com', '380504444444', ['Cheese', 'Cucumber', 'Rice', 'Sausages']),
    new Client (5, 'Ross', 'Geller', 'r.geller@email.com', '380505555555', ['Yoghurt', 'Avocado', 'Tomatoes']),
    new Client (6, 'Joey', 'Tribbiani', 'j.tribbiani@email.com', '380506666666', ['Ice-cream', 'Spinach']),
    new Client (7, 'Barry', 'Farber', 'b.farber@email.com', '380507777777', ['Chicken', 'Beans']),
    new Client (8, 'Carol', 'Willick', 'c.willick@email.com', '380508888888', ['Beef', 'Garlic', 'Onions', 'Apples', 'Bread']),
    new Client (9, 'Susan', 'Bunch', 's.bunch@email.com', '380509999999', ['Fish', 'Bananas', 'Tacos']),
    new Client (10, 'Estelle', 'Leonard', 'e.leonard@email.com', '380500000000', ['Pork', 'Oranges'])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = clients.sort((client1, client2) => client1.order.length - client2.order.length);