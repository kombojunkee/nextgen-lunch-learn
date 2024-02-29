# ES6 Coding Challenges

## Challenge 1: Secret Santa Gift Assigner

You're tasked with creating a Secret Santa gift assignment program using JavaScript and ES6 features.

Requirements:
- Use let and const declarations to define variables where appropriate, ensuring block-scoped variables.
- Implement arrow functions for concise function syntax and lexical scoping.
- Utilize template literals for generating personalized messages.
- Utilize enhanced object literals for defining participant details.
- Use destructuring assignment to extract values from arrays or objects.
- Ensure that each participant is assigned a Secret Santa partner without self-matching or duplicate assignments.

Here's a high-level plan to get you started:
- Define an array of participants, each represented as an object with properties like name, email, and preferences.
- Shuffle the array of participants to randomize the assignment process.
- Implement a function that assigns each participant a Secret Santa partner, ensuring that no participant is assigned to themselves and that no duplicate assignments occur.
- Generate personalized messages using template literals to inform participants about their assigned Secret Santa partner and any additional details.


## Challenge 2: Quiz Game

Create a simple quiz game where players are presented with multiple-choice questions and must select the correct answer. The game should keep track of the player's score and provide feedback at the end.

Requirements:
- Use let and const declarations to define variables where appropriate, ensuring block-scoped variables.
- Implement arrow functions for concise function syntax and lexical scoping.
- Utilize template literals for displaying questions and feedback.
- Utilize enhanced object literals for defining questions and choices.
- Use destructuring assignment to extract values from arrays or objects.

Here's a plan to get you started:
- Define an array of objects, where each object represents a question. Each question object should include the question itself, an array of choices, and the index of the correct answer.
- Implement a function to present the questions to the player, accept their input, and validate their answers.
- Keep track of the player's score and provide feedback at the end of the quiz.


## Challenge 3: Restaurant Bill Calculator

Build a simple restaurant bill calculator using JavaScript and ES6 features. The calculator should accept multiple items with prices, apply any discounts, and calculate the total bill.

Requirements:
- Use default parameters to set a default discount value for items if none is provided.
- Utilize the rest parameter to accept a variable number of item prices.
- Implement the spread operator to calculate the total bill including discounts.
- Use template literals to display the bill breakdown.

## Challenge 4: Weather Forecast App

Build a weather forecast application using JavaScript and ES6 Promises. The application should fetch weather data from a weather API and display it to the user.

Requirements:
- Use the fetch API to make asynchronous requests to a weather API (e.g., OpenWeatherMap API).
- Implement error handling using Promises to gracefully handle network errors or invalid responses from the API.
- Display the weather forecast information retrieved from the API to the user.

Here's a basic plan to get you started:
- Set up the weather API endpoint and obtain an API key if required.
- Create a function that fetches weather data from the API and returns a Promise.
- Handle the Promise resolution to display weather information to the user.
- Implement error handling using Promises to manage network errors or invalid responses from the API.

## Challenge 5: Math Utility Module

Create a module named mathUtils that exports functions for performing basic math operations like addition, subtraction, multiplication, and division.

Requirements:
- Implement each math operation as a separate function in the module.
- Utilize ES6 modules to organize and export/import code.
