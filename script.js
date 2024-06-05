"use strict";

const summary = document.querySelector(".summary");
const url = "data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    addData(data);
  });

function addData(data) {
  let html = "";

  // Define a mapping for the categories to their corresponding classes
  const categoryClassMap = {
    reaction: "reaction",
    memory: "memory",
    verbal: "verbal",
    visual: "visual",
  };

  data.forEach((item) => {
    // Ensure the category is in the categoryClassMap
    if (categoryClassMap.hasOwnProperty(item.category.toLowerCase())) {
      const itemClass = categoryClassMap[item.category.toLowerCase()];

      html += `<div class="summary-scores ${itemClass}">
      <div class="summary-icon-p">
        <img class="icon" src="${item.icon}" alt="" />
        <p class="category ${itemClass}-p">${item.category}</p>
      </div>
      <p class="score">
        ${item.score}
        <span class="total">/ 100</span>
      </p>
    </div>`;
    } else {
      console.warn(`Unknown category: ${item.category}`);
    }
  });

  summary.innerHTML = html;
}
