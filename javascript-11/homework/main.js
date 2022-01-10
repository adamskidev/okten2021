// -створити форму з інпутами для name та age.

let userForm = document.createElement('form');
let nameInput = document.createElement('input');
nameInput.placeholder = 'Name';
let ageInput = document.createElement('input');
ageInput.placeholder = 'Age';
let userSubmitBtn = document.createElement('button');
userSubmitBtn.innerText = 'submit';
let div = document.createElement('div')
document.body.appendChild(userForm);
userForm.append(nameInput, ageInput, userSubmitBtn);

//     При відправці форми записати об'єкт в localstorage

userSubmitBtn.onclick = function () {
    let name = nameInput.value;
    let age = ageInput.value;
    let user = {name, age};
    localStorage.setItem('user', JSON.stringify(user));
}

// -створити форму з інпутами для model,type та volume автівки.

let carForm = document.createElement('form');
let modelInput = document.createElement('input');
modelInput.placeholder = 'Model';
let typeInput = document.createElement('input');
typeInput.placeholder = 'Type';
let volumeInput = document.createElement('input');
volumeInput.placeholder = 'Volume';
let carSubmitBtn = document.createElement('button');
carSubmitBtn.innerText = 'submit';
document.body.appendChild(carForm);
carForm.append(modelInput, typeInput, volumeInput, carSubmitBtn);

//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

carSubmitBtn.onclick = function () {
    let model = modelInput.value;
    let type = typeInput.value;
    let volume = volumeInput.value;
    let car = {model, type, volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    } else {
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
}