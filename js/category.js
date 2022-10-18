import { filterByCategory } from "../utils/apiCalls.js";
import { appendMealsCategory } from "../utils/commons.js";

const searchByCategory = async () => {
  const paramCategory = location.search.split("=")[1];
  if (paramCategory) {
    const meals = await filterByCategory(paramCategory);
    document.querySelector(
      "#result-category"
    ).textContent = `${meals.length} plats trouvés pour la catégorie ${paramCategory}`;
    appendMealsCategory(meals);
  }
};

const app = () => {
  searchByCategory();
};

app();
