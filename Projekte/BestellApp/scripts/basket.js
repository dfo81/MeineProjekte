function displayBasket() {
    let basket = document.getElementById('basket');
    let bill = document.getElementById('bill');
    if (myBasket.price == "") {
        basket.classList.remove('d-none');
    }
    else {
        bill.classList.remove('d-none');
    }
};

let myBasket = {
    name: [],
    price: [],
    amount: [],
    switch: []
};


// Template Basket
function templateBasket(i, j) {
    let meal = document.getElementById("content-overlay");
    meal.innerHTML = "";
    for (let index = 0; index < myBasket.name.length; index++) {
        meal.innerHTML += getBasketTemplate(i, j, index);
    }   
};


// return Template
getBasketTemplate = (i, j, index) => `
    <div id="${myBasket.name[index]}">
        <h6>${myBasket.name[index]}</h6>
        <div class="cell">
        <img onclick="minus(${index})" class="icon-small" src="./assets/icons/minus_small.svg" alt="minus">
            <label id="amount_${myBasket.name[index]}">${myBasket.amount[index]}</label>
            <img onclick="plus(${index})" class="icon-small" src="./assets/icons/plus_small.svg" alt="plus">
            <label id="price_${myBasket.price[index]}">${(myBasket.amount[index] * myBasket.price[index]).toFixed(2).replace(".",",")} €</label>
            <img onclick="deleteMeal(${index})" class="icon-small" src="./assets/icons/trash_orange.svg" alt="trash">
        </div>
    </div>
`;


// delete meal from basket and reset amount 
function deleteMeal(index) {
    myBasket.name.splice(index, 1)
    myBasket.price.splice(index, 1)
    myBasket.amount.splice(index, 1)
    if (myBasket.name == 0) {
        document.getElementById('bill').classList.add('d-none');
        document.getElementById('basket').classList.remove('d-none');
    }
    templateBasket();
    subtotal();
    saveToLocalStorage();
};


// minus amount of meals
function minus(index) {
    if (myBasket.amount[index] == 1) {
        deleteMeal(index);
    }
    else {
        myBasket.amount[index]--;
    }
    templateBasket();
    subtotal();
    saveToLocalStorage();
};


// plus amount of meals
function plus(index) {
    myBasket.amount[index]++;
    templateBasket();
    subtotal();
    saveToLocalStorage();
};


// calculate subtotal
function subtotal(index) {
    let element = document.getElementById('subtotal');
    let sum = 0;
    for (let i = 0; i < myBasket.price.length; i++) {
        sum += myBasket.price[i] * myBasket.amount[i];
    }
    element.innerHTML = sum.toFixed(2).replace(".",",") + " €";
    bill(sum);
};


// total with or without delivery
function bill(sub) {
    let total = document.getElementById('total');
    let toggleSwitch = document.getElementById('switch');
    let delivery = document.getElementById('delivery');
    let deliveryRef = 0;
    if (toggleSwitch.checked) {
        deliveryRef = 2.99;
        delivery.innerHTML = deliveryRef + " €";
    }
    else {
        delivery.innerHTML = "-";
    }
    total.innerHTML = (sub + deliveryRef).toFixed(2) + " €";
};


function order() {
    myBasket.amount.length = 0;
    myBasket.name.length = 0;
    myBasket.price.length = 0;
    saveToLocalStorage();
    document.getElementById('bill').classList.add('d-none');
    let order = document.getElementById('content-overlay');
    order.innerHTML = '<div class="order"><h3>Vielen Dank! <br> Ihre Bestellung wird vorbereitet!</h3></div>'
};
