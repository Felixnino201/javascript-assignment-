let name = prompt("Please enter your name");
let weight = Number(prompt("Please enter weight in kg"));

function weightCal(name, weight) {
  let weightInPounds = weight * 2.2;
  let yourName = "Your name is " + name + ", and your weight in pounds is " + weightInPounds + " lbs";
  return yourName;
}

let weightCalculator = weightCal(name, weight);
alert(weightCalculator);