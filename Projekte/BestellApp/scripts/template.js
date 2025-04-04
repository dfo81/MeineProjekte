
function init() {
    let dishes = document.getElementById('content');
    dishes.innerHTML = "";
   
    for (let i = 0; i < myDishes.length; i++) {
        dishes.innerHTML += template(i);
    }   
};

template = i => 

`<img class="section-image" src="./assets/img/${myDishes[i].image}" alt="${myDishes[i].title}">
    <h4>${myDishes[i].title}</h4>
    <div class="meals">
        <div class="meal-left">
            <h5>${myDishes[i].dishes[0].name}</h5>
            <span>${myDishes[i].dishes[0].ingredients}</span>
            <b>${myDishes[i].dishes[0].price}</b>
        </div>
        <div class="meal-right">
            <img class="plus" src="./assets/icons/plus.svg" alt="">
        </div>
    </div>
    `
;