import { API_URL } from "./config.js";

export const getMealById = async (id) => {
  const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = await response.json();
  return meal.meals[0];
};

export const getAllMeals = async () => {
  const response = await fetch(`${API_URL}/search.php?s=`);
  const meals = await response.json();
  return meals.meals;
};

export const getMealsBySearch = async (search) => {
  if (search) {
    const response = await fetch(`${API_URL}/search.php?s=${search}`);
    const meals = await response.json();
    return meals.meals;
  }
};

export const getRandomMeal = async () => {
  const response = await fetch(`${API_URL}/random.php`);
  const meal = await response.json();
  return meal.meals[0];
};

export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/categories.php`);
  const categories = await response.json();
  return categories.categories;
};

export const filterByCategory = async (category) => {
  const response = await fetch(`${API_URL}/filter.php?c=${category}`);
  const meals = await response.json();
  return meals.meals;
};
