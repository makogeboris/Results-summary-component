"use strict";

const summary = document.querySelector(".summary");
const url = "data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    addData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function addData(data) {
  let html = "";

  data.forEach((item) => {
    const categoryClass = item.category.toLowerCase();

    html += `<div class="summary-scores ${categoryClass}">
      <div class="summary-icon-p">
        <img class="icon" src="${item.icon}" alt="" />
        <p class="category ${categoryClass}-p">${item.category}</p>
      </div>
      <p class="score">
        ${item.score}
        <span class="total">/ 100</span>
      </p>
    </div>`;
  });

  summary.innerHTML = html;
}
