// Declaring an array of responses
let helixResponse = new Array(5);

// Initializing responses
helixResponse[0] = "Yes.";
helixResponse[1] = "No.";
helixResponse[2] = "Maybe.";
helixResponse[3] = "Nah...";
helixResponse[4] = "Sorry ...ask again?";
helixResponse[5] = "YES.. FOR SURE..";

// Arrow function returning response! Yay

console.log(helixResponse[Math.floor(Math.random() * 6)]);
//target the user input
let input = document.querySelector("#userResponse");
// target the response output
let helix = document.querySelector("#responseOutput");
// add an event if the user releases the key
input.addEventListener("keyup", event => {
  event.preventDefault();
  // check if its the enter key
  if (event.keyCode === 13) {
    helix.textContent = helixResponse[Math.floor(Math.random() * 6)];
    // resets text box
    input.value = "";
  }
});
