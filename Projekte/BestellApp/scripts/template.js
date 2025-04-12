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
