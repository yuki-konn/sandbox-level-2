class MyCar {
  color = "red";
  year = 2024;
}

function newObject() {
  debugger;
  const myCar = new MyCar();
  const myCar2 = new MyCar();
  const myCar3 = new MyCar();

  myCar2.color = "white";
  myCar3.year = 2025;

  display(JSON.stringify(myCar));
  display(JSON.stringify(myCar2));
  display(JSON.stringify(myCar3));
}

function classVsObject() {
  class MyCar {
    color = "red";
    year = 2024;
  }

  const myCar = {
    color: "red",
    year: 2024,
  };

  debugger;

  display(MyCar);
  display(myCar);
}

function display(message) {
  document.write(message);
}
// Activator function
function greeting() {
  debugger;
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
