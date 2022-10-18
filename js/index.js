import { appendMeals } from "../utils/commons.js";
import { getRandomMeal } from "../utils/apiCalls.js";

const getRandomMeals = async (number) => {
  const meals = [];
  for (let i = 0; i < number; i++) {
    meals.push(await getRandomMeal());
  }
  return meals;
};

const appendRandomMeals = async () => {
  const meals = await getRandomMeals(3);
  appendMeals(meals);
};

const app = () => {
  appendRandomMeals();
};

app();
