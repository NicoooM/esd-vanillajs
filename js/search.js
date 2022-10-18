import { getMealsBySearch } from "../utils/apiCalls.js";
import { appendMeals } from "../utils/commons.js";

const searchMeals = async () => {
  const paramSearch = location.search.split("=")[1];
  const meals = await getMealsBySearch(paramSearch);
  document.querySelector(
    "#search-title"
  ).textContent = `Résultats de la recherche pour ${paramSearch}`;
  const resultText = document.createElement("p");
  resultText.className = "result-text";
  const root = document.querySelector("#root");

  if (meals.length > 1) {
    root.insertBefore(resultText, root.children[2]);
    resultText.textContent = `Nous avons trouvé ${meals.length} résultats`;
    appendMeals(meals);
    return;
  }

  if (meals.length === 1) {
    location.href = `meal.html?id=${meals[0].idMeal}`;
    return;
  }

  document.querySelector("#meals-list").remove();
  resultText.textContent = "Aucun résultat trouvé";
};

const app = () => {
  searchMeals();
};

app();
