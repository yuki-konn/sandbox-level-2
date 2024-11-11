// GLOBAL SCOPE: Variables declared in the global scope
// are accessible all throughout the page of code.
const myGlobalScope = "Global Scope";
document.write(myGlobalScope);

// FUNCTION SCOPE (AKA LOCAL SCOPE): Variables declared in the function (local) scope
// are accessible only to the function.
function functionScopeExample() {
  const x = 5;
  let y = prompt("Enter a number");
  let total = x + y;
  document.write(total);
}

// BLOCK SCOPE: Variables declared in the block scope
// are accessible only within that block of code.
// The block scope is within each curly brace.
while (false) {
  const x = 3;
}

do {
  const x = 7;
  document.write(x);
} while (false);
