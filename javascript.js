function display(message) {
  document.write(message);
}
// Activator function
function greeting() {
  display("Hello World!");
}

function myFunction(callbackFunction) {
  callbackFunction();
}

function activator() {
  myFunction(greeting);
}

// SetTimeout
function delayedGreeting() {
  setTimeout(greeting, 5000);
}

function asynchronous() {
  debugger;
  setTimeout(greeting, 5000);
  display("Waiting for the greeting... ");
}

// Server simulation
function submitForm(event) {
  debugger;
  const inputs = event.target;
  const emailInput = inputs[0];
  const email = emailInput.value;
  display("Submitting form for " + email + "... ");
  setTimeout(serverResponse, 5000);
}

function serverResponse() {
  display("Form was successfully processed.");
}

function displayObject() {
  const myCar = {
    color: "red",
    year: 2024,
  };

  const result = JSON.stringify(myCar);
  display(result);
}
