// get the form element
const form = document.getElementById("form");

// add an event listener to the form to listen for submit events
form.addEventListener("submit", event => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the input field
  const input = document.getElementById("input");

  // send an HTTP POST request to the server with the input value as the body
  fetch("/write-to-file", {
    method: "POST",
    body: input.value
  }).then(response => {
    // log the response from the server
    console.log(response);
  }).catch(error => {
    // log any errors
    console.error(error);
  });
});
