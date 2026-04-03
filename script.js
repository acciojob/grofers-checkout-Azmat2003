const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Loop through prices and calculate sum
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Create new row
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  // Set colspan to span across both columns
  td.setAttribute("colspan", "2");

  td.textContent = "Total Price: " + total;

  tr.appendChild(td);

  // Append row to table
  const table = document.querySelector("table");
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

