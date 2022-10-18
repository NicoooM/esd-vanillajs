const searchMeals = async (e) => {
  e.preventDefault();
  const searchInput = document.querySelector("#meal-search");
  const searchValue = searchInput.value;
  if (searchValue !== "") {
    window.location.href = `search.html?s=${searchValue}`;
  } else {
    alert("Veuillez entrer un nom de plat");
  }
};

const app = () => {
  document
    .querySelector("#search-form")
    .addEventListener("submit", searchMeals);

  document
    .querySelector("#meal-search-button")
    .addEventListener("click", searchMeals);
};

app();
