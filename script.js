const searchInput = document.getElementById("input");
const searchInputValue = searchInput.value;

const btn = document.querySelector("button");

const admit = document.querySelector(".admit");
const refuse = document.querySelector(".refuse");
admit.textContent = "Admit: ";
refuse.textContent = "Refuse: ";

const people = ["amanda", "brown", "gibson", "phil", "lola"];

btn.addEventListener("click", () => {
  console.log("Success");
});
