function init() {
    getTemplate();
    getFromLocalStorage();
    subtotal();
    templateBasket();
    basket();
};


function basket() {
    let basket = document.getElementById('basket');
    let bill = document.getElementById('bill');
    if (myBasket.price == "") {
        basket.classList.remove('d-none');
        bill.classList.add('d-none');
    }
    else {
        basket.classList.add('d-none');
        bill.classList.remove('d-none');
    }
};

let myBasket = {
    name: [],
    price: [],
    amount: []
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


// add Meal to the basket
function addMeal(i, j) {
    let dishesIndex = myDishes[i].dishes[j];
    let basketIndex = myBasket.name.indexOf(dishesIndex.name);

    if (basketIndex === -1) {
        myBasket.name.push(dishesIndex.name);
        myBasket.price.push(dishesIndex.price);
        myBasket.amount.push(1);
        document.getElementById('basket').classList.add('d-none');
        document.getElementById('bill').classList.remove("d-none");
    } else {
        myBasket.amount[basketIndex]++;
    }
    templateBasket();
    subtotal();
    saveToLocalStorage();
};


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


// save basket to local storage
function saveToLocalStorage() {
    localStorage.setItem("myObject", JSON.stringify(myBasket));
};


// load from local storage in to the basket
function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("myObject"));
    if (myArr != null) {
        myBasket = myArr; 
    }
};


