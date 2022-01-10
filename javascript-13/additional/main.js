// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)

let productForm = document.createElement('form');
let productName = document.createElement('input');
productName.placeholder = 'Product name';
let productAmount = document.createElement('input');
productAmount.placeholder = 'Amount';
productAmount.type = 'number';
let productPrice = document.createElement('input');
productPrice.placeholder = 'Price';
productPrice.type = 'number';
let productImage = document.createElement('input');
productImage.placeholder = 'Image URL';
let addBtn = document.createElement('button');
addBtn.innerText = 'Add';
document.body.append(productForm);
productForm.append(productName, productAmount, productPrice, productImage, addBtn);

// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)

addBtn.addEventListener('click', e => {
    e.preventDefault();
    let name = productName.value;
    let amount = productAmount.value;
    let price = productPrice.value;
    let image = productImage.value;
    let product = {name, amount, price, image};
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
})

// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.

let listLink = document.createElement('a');
listLink.href = 'list.html';
listLink.innerText = 'Go to list';
document.body.append(listLink);