const menu = {
  "pizza": 300,
  "Burger": 150,
  "pasta": 120,
  "doughnut": 100,
  "sandwich": 200,
  "tea": 40,
  "coffee": 50
};

let billDetails = {};
let totalBill = 0;

// Display menu
const menuDiv = document.getElementById("menu");
const itemSelect = document.getElementById("item-select");

for (let item in menu) {
  menuDiv.innerHTML += `<p>${item} - ₹${menu[item]}</p>`;
  let option = document.createElement("option");
  option.value = item;
  option.text = `${item} - ₹${menu[item]}`;
  itemSelect.appendChild(option);
}

// Add to order
function addToOrder() {
  const item = itemSelect.value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!billDetails[item]) {
    billDetails[item] = 0;
  }

  billDetails[item] += quantity;

  updateOrderSummary();
}

function updateOrderSummary() {
  const tbody = document.querySelector("#order-summary tbody");
  tbody.innerHTML = "";
  totalBill = 0;

  for (let item in billDetails) {
    const quantity = billDetails[item];
    const cost = menu[item] * quantity;
    totalBill += cost;

    const row = `<tr>
                   <td>${item}</td>
                   <td>${quantity}</td>
                   <td>₹${cost}</td>
                 </tr>`;
    tbody.innerHTML += row;
  }

  const gstAmount = totalBill * 0.18;
  const totalWithGST = totalBill + gstAmount;

  document.getElementById("total").innerText = `Total: ₹${totalBill.toFixed(2)}`;
  document.getElementById("total-gst").innerText = `Total with GST (18%): ₹${totalWithGST.toFixed(2)}`;
}
