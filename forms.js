function processForm(event) {
  debugger;
  event.preventDefault(); // Prevents the page from refereshing after submitting a form.
  const form = event.target;
  const input = form[0];
  const value = input.value;
  output(`Your password is ${value}.<br>`);
}
