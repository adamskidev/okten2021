// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

function Worker(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
    this.phone = phone;
    this.website = website;
    this.company = {name: companyName, catchPhrase: catchPhrase, bs: bs};
}

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//              {/*some props and values*/},
//              {/*...*/},
//              {/*...*/},
//     ]
// }

function Tag(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

function Attrs(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

let areaAttrs = [
    new Attrs('accesskey', 'Переход к области с помощью комбинации клавиш'),
    new Attrs('alt', 'Альтернативный текст для области изображения.'),
    new Attrs('coords', 'Координаты активной области.')
];
let areaTag = new Tag('area', 'Каждый элемент <area> определяет активные области изображения, которые являются ссылками.', areaAttrs);

let aAttrs = [
    new Attrs('download', 'Предлагает скачать указанный по ссылке файл.'),
    new Attrs('href', 'Задает адрес документа, на который следует перейти.')
];
let aTag = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', aAttrs);

let divAttrs = [
    new Attrs('align', 'Задает выравнивание содержимого тега <div>.'),
    new Attrs('title', 'Добавляет всплывающую подсказку к содержимому.')
];
let divTag = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', divAttrs);

let h1Attrs = [
    new Attrs('align', 'Определяет выравнивание заголовка.')
];
let h1Tag = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.', h1Attrs);

let spanAttrs = [
    new Attrs('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
    new Attrs('spellcheck', 'Указывает браузеру проверять или нет правописание и грамматику в тексте.')
];
let spanTag = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', spanAttrs);

let inputAttrs = [
    new Attrs('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'),
    new Attrs('checked', 'Предварительно активированный переключатель или флажок.'),
    new Attrs('disabled', 'Блокирует доступ и изменение элемента.')
];
let inputTag = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', inputAttrs);

let formAttrs = [
    new Attrs('autocomplete', 'Включает автозаполнение полей формы.'),
    new Attrs('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.')
];
let formTag = new Tag('form', 'Тег <form> устанавливает форму на веб-странице.', formAttrs);

let optionAttrs = [
    new Attrs('label', 'Указание метки пункта списка.'),
    new Attrs('selected', 'Заранее устанавливает определенный пункт списка выделенным.')
];
let optionTag = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', optionAttrs);

let selectAttrs = [
    new Attrs('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.'),
    new Attrs('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.'),
    new Attrs('size', 'Количество отображаемых строк списка.')
];
let selectTag = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', selectAttrs);