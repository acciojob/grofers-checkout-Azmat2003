const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let p = document.querySelectorAll(".price");

	let sum = 0;
	p.forEach((x) => {
		sum += Number(p.textContent);
	})
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

