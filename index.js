// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "red") {
   console.log("engines have stopped");
} else if (engineIndicatorLight === "red blinking") {
   console.log("engines are preparing to stop");
} else {
   console.log("engines are off");
}