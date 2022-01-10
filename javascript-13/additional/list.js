// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let products = JSON.parse(localStorage.getItem('products'));
if (products) {
    for (let product of products) {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.style.borderBottom = 'solid silver';
        let name = document.createElement('h3');
        name.innerText = `Product name: ${product.name}`;
        let amount = document.createElement('h4');
        amount.innerText = `Amout: ${product.amount}`;
        let price = document.createElement('h4');
        price.innerText = `Price: ${product.price}`;
        let image = document.createElement('img');
        image.style.width = '300px';
        image.src = product.image;
        image.onerror = function () {
            image.src = 'https://demofree.sirv.com/nope-not-here.jpg';
        }
        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove product';
        removeBtn.onclick = function () {
            products.splice(products.indexOf(product), 1);
            localStorage.setItem('products', JSON.stringify(products));
            productDiv.remove();
        }
        document.body.append(productDiv);
        productDiv.append(name, amount, price, image, removeBtn);
    }
} else {
    document.write('- List is empty -<br>');
}

// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

let clearBtn = document.createElement('button');
clearBtn.innerText = 'Clear list';
clearBtn.addEventListener('click', function () {
    let list = document.getElementsByClassName('product');
    for (let item of [...list].reverse()) {
        item.remove();
    }
    localStorage.removeItem('products');
})
document.body.append(clearBtn);
