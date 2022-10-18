export const appendMeals = (meals) => {
  const mealContainer = document.querySelector("#meals-list");
  meals.forEach((meal) => {
    const mealItem = document.createElement("li");
    mealItem.className = "meals-list__item";

    mealItem.innerHTML = `
      <a href="meal.html?id=${meal.idMeal}">
        <div class="meals-list__item__image">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <h2>${meal.strMeal}</h2>
        <p>${meal.strCategory}</p>
      </a>
          `;

    mealContainer.appendChild(mealItem);
  });
};

export const appendMealPage = (meal) => {
  const mealContainer = document.querySelector("#root");

  const mealItem = document.createElement("div");
  mealItem.className = "meal-page";

  const ingredients = listAllIngredients(meal);

  mealItem.innerHTML = `
    <h1>${meal.strMeal}</h1>
    <div class="meal-page__image">
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    </div>
    <h2>Préparation</h2>
    <div class="meal-page__info">
      <p class="meal-page__info__text">${meal.strInstructions}</p>
      <div class="meal-page__info__ingredients">
        <h3>Ingrédients</h3>
        <ul>
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
      </div>
    </div>
    `;
  mealContainer.appendChild(mealItem);
};

export const appendCategories = (categories) => {
  const categoriesList = document.querySelector("#categories-list");

  categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.className = "categories-list__item";
    categoryItem.innerHTML = `
      <a href="category.html?id=${category.strCategory}">
          <h2>${category.strCategory}</h2>
          <div class="category-list__image">
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
          </div>
      </a>
          `;
    categoriesList.appendChild(categoryItem);
  });
};

export const appendMealsCategory = (meals) => {
  const mealContainer = document.querySelector("#meals-list");
  meals.forEach((meal) => {
    const mealItem = document.createElement("li");
    mealItem.className = "meals-list__item";

    mealItem.innerHTML = `
      <a href="meal.html?id=${meal.idMeal}">
        <div class="meals-list__item__image">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <h2>${meal.strMeal}</h2>
      </a>
          `;

    mealContainer.appendChild(mealItem);
  });
};

const listAllIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(meal[`strIngredient${i}`]);
    }
  }
  return ingredients;
};
