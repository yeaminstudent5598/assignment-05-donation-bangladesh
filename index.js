let balance = 13300;

document.getElementById("balance").innerText = balance;

document.getElementById("donationBtn").addEventListener("click", function () {
  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");
  this.classList.add("bg-primary");
  this.classList.remove("btn-outline");
  document.getElementById("historyBtn").classList.remove("bg-primary");
  document.getElementById("historyBtn").classList.add("btn-outline");
});

document.getElementById("historyBtn").addEventListener("click", function () {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.remove("hidden");
  this.classList.add("bg-primary")
  this.classList.remove("btn-outline");
  document.getElementById("donationBtn").classList.remove("bg-primary");
  document.getElementById("donationBtn").classList.add("btn-outline");
});

function donate(cardId) {
  const inputField = document.getElementById(`input${cardId}`);
  const donationAmount = parseInt(inputField.value);

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  if (donationAmount > balance) {
    alert("You don't have enough balance to make this donation.");
    return;
  }
  const donationTextAmount = document.getElementById(
    `donation${cardId}`
  ).innerText;
  const currentAmount = parseInt(donationTextAmount);

  // Update balance
  balance -= donationAmount;
  document.getElementById("balance").innerText = balance;



  

  // Update current donation amount
  const newAmount = currentAmount + donationAmount;

  document.getElementById(`donation${cardId}`).innerText = newAmount;

  // Log to history
  const now = new Date();
  const historyItem = document.createElement("li");
  // Get the parent element
  const parent = inputField.parentNode;

  // Get the sibling element
  const h2Element = parent.querySelector("h2");

  // Get the inner text of sibling2
  const h2Text = h2Element.innerText;

  // historyItem.innerText = `${donationAmount} BDT donated to card ${cardId} on ${now.toLocaleString()}`;
  historyItem.innerHTML = `
  <div class="list-none px-6 py-8 shadow-xl"><h3 class="text-xl">${donationAmount} Taka is Donated for ${h2Text}</h3>
  <p class="pt-3">Date: ${now.toLocaleString()}</p></div>
`;

  document.getElementById("historyList").appendChild(historyItem);

  // Show modal
  const modal = document.getElementById("donationModal");
  modal.classList.add("modal-open");

  // Close modal
  document.getElementById("modalClose").addEventListener("click", function () {
    modal.classList.remove("modal-open");
  });
  // Clear the input field after donation
  inputField.value = "";
}
