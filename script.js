const prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach((price) => {
  total += Number(price.textContent);
});

const tr = document.createElement("tr");

const td = document.createElement("td");

td.setAttribute("colspan", "2");

td.textContent = `Total Price: ${total}`;

tr.appendChild(td);

document.querySelector("table").appendChild(tr);