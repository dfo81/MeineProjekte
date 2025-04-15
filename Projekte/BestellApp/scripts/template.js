

// Parent of dishes with title
title = i => `
  <img id="${myDishes[i].title}" class="section-image" src="assets/img/${myDishes[i].image}" alt="${myDishes[i].title}" />
  <h4>${myDishes[i].title}</h4>
`;


// dishes only
dish = (i, j, index) => `
  <div class="meals">
    <div class="meal-left">
      <h5>${myDishes[i].dishes[j].name}</h5>
      <span>${myDishes[i].dishes[j].ingredients}</span>
      <b>${myDishes[i].dishes[j].price.toFixed(2)} €</b>
    </div>
    <div class="meal-right">
      <img onclick="addMeal(${i},${j},${index})" id="addButton" class="plus" src="./assets/icons/plus.svg" alt="add meal" />
    </div>
  </div>
  `;


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