function handleClick(event) {
  debugger;
  const promise = fetch("https://opentdb.com/api.php?amount=1&type=multiple");
  // https://opentdb.com/api.php?amount=1&type=multiple
  // https://opentdb.com/api.php?amount=1
  promise.then(parseResponse);
}
function parseResponse(resolveValue) {
  debugger;
  // THE RESOLVE VALUE WILL BE A FETCH OBJECT
  // THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
  const promise = resolveValue.text();
  promise.then(viewResponse);
  // promise.then(parseResponse);
}

function viewResponse(resolveValue) {
  debugger;
  // THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
  // THE PARSE METHOD GENERATES AN OOBJECT FROM THE STRING
  const response = JSON.parse(resolveValue);
  const results = response.results;
  const item = results[0];
  const question = item.question;
  const answer = item.correct_answer;
  const incorrects = item.incorrect_answers;

  const trivia = `<div>${question}</div>
        <ol type="a">
          <li>${incorrects[0]}</li>
          <li>${incorrects[1]}</li>
          <li>${incorrects[2]}</li>
          <li>${answer}</li>
        </ol>`;
  output(trivia);
}

// 11/16
function handleQuoteOfTheDay() {
  debugger;
  const proxy = "https://thingproxy.freeboard.io/fetch/";
  const baseUrl = "https://favqs.com/api";
  const endpoint = "/qotd";
  const url = proxy + baseUrl + endpoint;
  const promise = fetch(url);
  promise.then(extractResponse);
}

function extractResponse(resolveValue) {
  debugger;
  const promise = resolveValue.text();
  promise.then(parseQotdResponse);
}

function parseQotdResponse(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
}

function handleQuotes() {
  debugger;
  const proxy = "https://thingproxy.freeboard.io/fetch/";
  const baseUrl = "https://favqs.com/api";
  const endpoint = "/quotes";
  const url = proxy + baseUrl + endpoint;

  const key = "975a89d852151632954ca7a7e4a24d40";
  const options = {
    headers: {
      Authorization: `Token token="${key}"`,
    },
  };

  const promise = fetch(url, options);
  promise.then(extractResponse);
}
