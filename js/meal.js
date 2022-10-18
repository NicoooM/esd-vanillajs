import { getMealById } from "../utils/apiCalls.js";
import { appendMealPage } from "../utils/commons.js";

const searchById = async () => {
  const paramId = location.search.split("=")[1];
  if (paramId) {
    const meal = await getMealById(paramId);
    appendMealPage(meal);
  }
};

const app = () => {
  searchById();
};

app();
