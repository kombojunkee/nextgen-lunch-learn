This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

If you're using VS Code, you can download the Code Runner extension to see the results of the lessons in real time.

If you'd like to challenge yourself, create a new component in NextJS/React and call the functions directly.

## ES6 Challenges

## Challenge 1: Secret Santa Gift Assigner (Intermediate)

You're tasked with creating a Secret Santa gift assignment program using JavaScript and ES6 features.

Prerequisites:
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Literals](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Destructuring](https://www.youtube.com/watch?v=cdjpLpYSyfY&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=4)


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

## Challenge 2: Quiz Game (Beginner)

Create a simple quiz game where players are presented with multiple-choice questions and must select the correct answer. The game should keep track of the player's score and provide feedback at the end.

Prerequisites:
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Destructuring](https://www.youtube.com/watch?v=cdjpLpYSyfY&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=4)

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


## Challenge 3: Restaurant Bill Calculator (Beginner)

Build a simple restaurant bill calculator using JavaScript and ES6 features. The calculator should accept multiple items with prices, apply any discounts, and calculate the total bill.

Prerequisites:
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Rest Operator](https://www.youtube.com/watch?v=3UM0alVYv1E&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=6)
- [Spread Operator](https://www.youtube.com/watch?v=qNVGlS0cG6A&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=7)

Requirements:
- Use default parameters to set a default discount value for items if none is provided.
- Utilize the rest parameter to accept a variable number of item prices.
- Implement the spread operator to calculate the total bill including discounts.
- Use template literals to display the bill breakdown.

## Challenge 4: Weather Forecast App (Beginner)

Build a weather forecast application using JavaScript and ES6 Promises. The application should fetch weather data from a weather API and display it to the user.

Prerequisites:
- [Promise](https://www.youtube.com/watch?v=D7CG_UWvMzE&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=10)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)

Requirements:
- Use the fetch API to make asynchronous requests to a weather API (e.g., OpenWeatherMap API).
- Implement error handling using Promises to gracefully handle network errors or invalid responses from the API.
- Display the weather forecast information retrieved from the API to the user.

Here's a basic plan to get you started:
- Set up the weather API endpoint and obtain an API key if required.
- Create a function that fetches weather data from the API and returns a Promise.
- Handle the Promise resolution to display weather information to the user.
- Implement error handling using Promises to manage network errors or invalid responses from the API.

## Challenge 5: Math Utility Module (Beginner)

Create a module named mathUtils that exports functions for performing basic math operations like addition, subtraction, multiplication, and division.

Prerequisites:
- [Modules](https://www.youtube.com/watch?v=LUyrU0z0S04&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=9)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)

Requirements:
- Implement each math operation as a separate function in the module.
- Utilize ES6 modules to organize and export/import code.

## Challenge 6: Copy Machine (Beginner)

Create a function called copyMachine that makes copies of items. The function should accept any number of arguments and return an array containing copies of each item.

Prerequisites:
- [Rest Operator](https://www.youtube.com/watch?v=3UM0alVYv1E&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=6)
- [Spread Operator](https://www.youtube.com/watch?v=qNVGlS0cG6A&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=7)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)

Requirements:
- Utilize the spread operator to create copies of items.
- Implement a function to make copies of provided items.x
- Return an array containing copies of each item.

# Typescript Challenges

## Challenge 1: To-Do List Application (Intermediate)

Create a to-do list application using TypeScript where users can add tasks, mark tasks as completed, and remove tasks from the list.

Prerequisites:
- [Typescript Types System](https://www.youtube.com/watch?v=8OsSLCGcv28&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=12)
- [Classes](https://www.youtube.com/watch?v=H61Jr7OzEpw&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=8)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)

Requirements:
- Define interfaces to represent the structure of a task including properties like name, description, and status.
- Implement a class named TodoList to manage the to-do list. The class should have methods to add tasks, mark tasks as completed, remove tasks, and display all tasks.
- Use TypeScript to define types for task properties and function parameters, ensuring type safety.
- Utilize modern ES6 features like arrow functions, template literals, and array methods throughout your code.

Here's a plan to get you started:
- Define an interface named Task to represent the structure of a task with properties like name, description, and status.
- Implement a class named TodoList with methods to add tasks, mark tasks as completed, remove tasks, and display all tasks.
- Use TypeScript types for function parameters and return types for type safety.
- Test the functionality of the to-do list application by adding tasks, marking tasks as completed, and displaying the list of tasks.

## Challenge 2: Online Bookstore (Advanced)

Develop an online bookstore application using TypeScript where users can browse books, add them to their cart, and proceed to checkout.

Prerequisites:
- [Typescript Types System](https://www.youtube.com/watch?v=8OsSLCGcv28&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=12)
- [Classes](https://www.youtube.com/watch?v=H61Jr7OzEpw&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=8)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)

Requirements:
- Define interfaces to represent the structure of a book including properties like title, author, price, and quantity.
- Implement a class named Bookstore to manage the bookstore inventory. The class should have methods to add books, remove books, search for books by title or author, and display all books.
- Create a shopping cart functionality where users can add books, remove books, and calculate the total price.
- Utilize TypeScript to define types for book properties and function parameters, ensuring type safety.

Here's a plan to get you started:
- Define an interface named Book to represent the structure of a book with properties like title, author, price, and quantity.
- Implement a class named Bookstore with methods to add books, remove books, search for books, and display the inventory.
- Create a class named ShoppingCart to manage the user's shopping cart. Implement methods to add books, remove books, calculate the total price, and proceed to checkout.
- Utilize TypeScript types for function parameters and return types for type safety.

## Challenge 3: Recipe Manager (Intermediate)

Develop a recipe manager application using TypeScript where users can search for recipes, view recipe details, and save their favorite recipes for later.

Prerequisites:
- [Typescript Types System](https://www.youtube.com/watch?v=8OsSLCGcv28&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=12)
- [Classes](https://www.youtube.com/watch?v=H61Jr7OzEpw&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=8)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)

Requirements:
- Define interfaces to represent the structure of a recipe including properties like name, ingredients, instructions, and category.
- Implement a class named RecipeManager to manage the recipes. The class should have methods to add recipes, remove recipes, search for recipes by name or category, and display all recipes.
- Create a user interface where users can interact with the application, search for recipes, view recipe details, and save their favorite recipes.
- Utilize TypeScript to define types for recipe properties and function parameters, ensuring type safety.

Here's a plan to get you started:
- Define an interface named Recipe to represent the structure of a recipe with properties like name, ingredients, instructions, and category.
- Implement a class named RecipeManager with methods to add recipes, remove recipes, search for recipes, and display the recipe collection.
- Create a user interface using HTML and CSS for users to interact with the application.
- Use TypeScript types for function parameters and return types for type safety.

## Challenge 4: Music Playlist Manager (Advanced)

Create a music playlist manager application using TypeScript where users can organize their favorite songs into playlists and play them.

Prerequisites:
- [Generics](https://www.youtube.com/watch?v=AkcL6bgnS7c&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=13)
- [Typescript Types System](https://www.youtube.com/watch?v=8OsSLCGcv28&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=12)
- [Classes](https://www.youtube.com/watch?v=H61Jr7OzEpw&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=8)
- [Arrow Functions](https://www.youtube.com/watch?v=zag6ItKyPVs&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Let & Const](https://www.youtube.com/watch?v=tJO4XhZPTHc&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=2)
- [Template Listers](https://www.youtube.com/watch?v=kkP5yji8Vz0&list=PLpPleNDMJ989dQlcRIo4iht812THaed89&index=3)

Requirements:
- Define interfaces to represent the structure of a song including properties like title, artist, duration, and genre.
- Implement a class named PlaylistManager to manage the playlists. The class should have methods to create playlists, add songs to playlists, remove songs from playlists, and play songs.
- Create a user interface where users can interact with the application, create playlists, add songs, remove songs, and play music.
- Utilize TypeScript to define types for song properties and function parameters, ensuring type safety.

Here's a plan to get you started:
- Define an interface named Song to represent the structure of a song with properties like title, artist, duration, and genre.
- Implement a class named PlaylistManager with methods to create playlists, add songs, remove songs, and play music.
- Design a user interface using HTML and CSS for users to interact with the application.
- Use TypeScript types for function parameters and return types for type safety.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
