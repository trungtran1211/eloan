const loanAmountInput = document.getElementById("loan-amount");
const reason = document.getElementById("reason");
const submitButton = document.getElementById("submit-button");
const formLoans = document.getElementById("loan-form");

formLoans.addEventListener("submit", (e) => {
  e.preventDefault();

  window.location.href = `/apply/process/legal-name?loan_amount=${loanAmountInput.value}&loan_reason=${reason.value}`;
});

// scroll to top button
const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
