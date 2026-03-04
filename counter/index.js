
const count = document.querySelector("#countValue");
const doubleIncrement = document.querySelector(".doubleIncrementBtn")
const increment = document.querySelector(".incrementBtn");
const reset = document.querySelector(".resetBtn");
const decrement = document.querySelector(".decrementBtn");
const doubleDecrement = document.querySelector(".doubleDecrementBtn");

doubleIncrement.addEventListener("click", () => {
    count.textContent = Number(count.textContent) + 2;
    document.querySelector("#countValue").style.color = "green";
});

increment.addEventListener("click", () => {
    count.textContent++;
    document.querySelector("#countValue").style.color = "yellow";
});

reset.addEventListener("click", () => {
    count.textContent = 0;
    document.querySelector("#countValue").style.color = "blue";
});

decrement.addEventListener("click", () => {
    count.textContent--;
    document.querySelector("#countValue").style.color = "pink";
});

doubleDecrement.addEventListener("click", () => {
    count.textContent = Number(count.textContent) - 2;
    document.querySelector("#countValue").style.color = "red";
});
