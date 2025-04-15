function init() {
    getTemplate();
    getFromLocalStorage();
    subtotal();
    templateBasket();
    displayBasket();
};


// template of Menu
function getTemplate() {
    let meal = document.getElementById('content');
    meal.innerHTML = "";
    for (let i = 0; i < myDishes.length; i++) {
      meal.innerHTML += title(i);
      for (let j = 0; j < myDishes[i].dishes.length; j++) {
        meal.innerHTML += dish(i, j);
      }
    }
  };
  

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

function basketMobile() {
    document.getElementById('main-wrapper').classList.toggle('d-none');
    document.getElementById('basket-wrapper').classList.toggle('basket-active');
    document.getElementById('basket-wrapper').classList.toggle('basket-wrapper');
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


