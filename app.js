document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#form');
  const countryList = document.createElement("ul");
  const countryListDiv = document.querySelector("#country-list");
  countryListDiv.appendChild(countryList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputCountry = event.target.country.value;
    const inputContinent = event.target.continent.value;
    const inputVisited = event.target.visited.value;

    const countryListItem = document.createElement("li");
    countryListItem.textContent = `Country: ${inputCountry}, Continent: ${inputContinent}, Visted? ${inputVisited}`;

    countryList.appendChild(countryListItem);
    form.reset();


    const deleteButton = document.querySelector("#button");
    deleteButton.addEventListener("click", () => {
      console.dir(deleteButton);
      countryList.innerHTML = '';
    });


  })



})
