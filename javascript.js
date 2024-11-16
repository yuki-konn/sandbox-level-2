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
  debugger;
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

// Promise
function myFunction(resolve) {
  debugger;
  setTimeout(serverResponse, 5000);
  display("Inside myFunction");

  function serverResponse() {
    debugger;
    display("Form was successfully processed.");
    resolve("The promise is fulfilled.");
  }
}

function makePromise() {
  debugger;
  const promise = new Promise(myFunction);
  promise.then(getMessage);
  display("Made a promise.");
}

function getMessage(resolveValue) {
  debugger;
  display(resolveValue);
}

function activatorTest(myParameter) {
  debugger;
  display(myParameter);
}

function outerFunction() {
  debugger;
  const message = "Message from the outer function.";
  innerFunction();

  function innerFunction() {
    display(message);
  }
}

// 11/9
function handleSubmit(event) {
  debugger;
  event.preventDefault();
  const inputs = event.target;
  const emailInput = inputs[0];
  const email = emailInput.value;
  display("Submitting form for " + email + "... ");
  const promise = makeRequest("https://myserver.com"); // PROMISE BEST PRACTICE
  promise.then(parseResponse);
}

function getServerResponse(resolve) {
  debugger;
  setTimeout(activateResolve, 5000);
  function activateResolve() {
    // STIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
    const response = {
      message: "Successfully processed.",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}

function parseResponse(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const message = response.message;
  display(message);
}

// 11/12
// PROMISE BEST PRACTICE
function makeRequest(url) {
  const promise = new Promise(getServerResponse);
  return promise;
}
