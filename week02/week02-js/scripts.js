// 1. IF / ELSE IF / ELSE
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 2. SWITCH Statement
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Wednesday":
    console.log("Midweek day.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just a regular day.");
}

// 3. FOR Loop
for (let i = 1; i <= 5; i++) {
  console.log(`For Loop Count: ${i}`);
}

// 4. WHILE Loop
let count = 0;
while (count < 3) {
  console.log(`While Loop Count: ${count}`);
  count++;
}

// 5. FOREACH Loop
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log(`Fruit: ${fruit}`);
});