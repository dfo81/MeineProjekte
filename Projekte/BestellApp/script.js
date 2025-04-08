
myBasket = [];

// add Meal to Basket
function addMeal(i, j) {
    if (myDishes[i].dishes[j].amount == 0) {
        myDishes[i].dishes[j].amount++;
        addMealBasket(i, j);
    }
    else {
        plus(i, j);
    }
};

// Template Basket
function addMealBasket(i, j) {
    let meal = document.getElementById('content-overlay');
    meal.innerHTML += getBasketTemplate(i, j);
};

// return Template
getBasketTemplate = (i, j) => `
    <div id="${myDishes[i].dishes[j].name}">
        <h6>${myDishes[i].dishes[j].name}</h6>
        <div class="cell">
        <img onclick="minus(${i}, ${j})" class="icon-small" src="./assets/icons/minus_small.svg" alt="minus">
            <label id="amount_${myDishes[i].dishes[j].name}">${myDishes[i].dishes[j].amount}x</label>
            <img onclick="plus(${i}, ${j})" class="icon-small" src="./assets/icons/plus_small.svg" alt="plus">
            <label id="price_${myDishes[i].dishes[j].name}">${myDishes[i].dishes[j].price.toFixed(2)}€</label>
            <img onclick="deleteMeal(${i}, ${j})" class="icon-small" src="./assets/icons/trash_orange.svg" alt="trash">
        </div>
    </div>
`;


// delete 
function deleteMeal(i, j) {
    let element = document.getElementById(`${myDishes[i].dishes[j].name}`);
    element.remove();
    myDishes[i].dishes[j].amount = 0;
};


// minus amount of meals
function minus(i, j) {
    if (myDishes[i].dishes[j].amount == 1){
        deleteMeal(i, j);
    }
    else {
        myDishes[i].dishes[j].amount--;
        reloadAmount(i,j);
    }
};


// plus amount of meals
function plus(i, j) {
    myDishes[i].dishes[j].amount++;
        reloadAmount(i,j);
};

//reload amount
function reloadAmount(i,j) {
    let amountLabel = document.getElementById("amount_"+myDishes[i].dishes[j].name);
    let priceLabel = document.getElementById("price_"+myDishes[i].dishes[j].name);
    amountLabel.innerHTML = myDishes[i].dishes[j].amount + "x";
    priceLabel.innerHTML = (myDishes[i].dishes[j].price * myDishes[i].dishes[j].amount).toFixed(2) + "€";
};

/*
function subtotal() {
    let subtotal = document.getElementById('subtotal');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
;}
*/