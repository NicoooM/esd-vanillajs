import { getAllCategories } from "../utils/apiCalls.js";
import { appendCategories } from "../utils/commons.js";

const app = async () => {
  const categories = await getAllCategories();
  appendCategories(categories);
};

app();
