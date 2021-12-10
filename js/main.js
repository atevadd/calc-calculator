// number 0 - 9 button in the calculator
const numKeypads = Array.from(document.querySelectorAll(".btn"));

// The delete key
const delKey = document.querySelector(".del");

// The equal key
const eqKey = document.querySelector(".equal");

// The reset button
const resetKey = document.querySelector(".reset");

// The decimal key
const decimalKey = document.querySelector(".decimal");

// All the operator keypad
const plusKey = document.querySelector(".plus");
const subKey = document.querySelector(".minus");
const mulKey = document.querySelector(".mul");
const divKey = document.querySelector(".divide");


// The input area
const inputArea = document.querySelector("#calc-input");

// Adding a event listener to all the number keypads
// Each button when clicked outputs it 
numKeypads.forEach((button, index) => {
  button.addEventListener("click", function () {
    inputArea.value += index;
  });
});

// The del functionality - This deletes the last number in the input area
delKey.addEventListener("click", function () {
  inputArea.value = String(inputArea.value).slice(0, (inputArea.value.length) - 1)
});

// The reset functionality - this clear the input area of the calculator
resetKey.addEventListener("click", function () {
  inputArea.value = "";
});

// Carrying out the operation
eqKey.addEventListener("click", function(){
    inputArea.value = eval(inputArea.value)
})

// adding the various operator
plusKey.addEventListener("click", function(){
    inputArea.value += " + "
});

subKey.addEventListener("click", function(){
    inputArea.value += " - "
});

divKey.addEventListener("click", function(){
    inputArea.value += " / "
});

mulKey.addEventListener("click", function(){
    inputArea.value += " * "
});

// Adding decimal to the operands
decimalKey.addEventListener("click", function () {
  inputArea.value += ".";
});