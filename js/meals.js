import { getAllMeals } from "../utils/apiCalls.js";
import { appendMeals } from "../utils/commons.js";

const appendAllMeal = async () => {
  const meals = await getAllMeals();
  appendMeals(meals);
};

const app = () => {
  appendAllMeal();
};

app();
