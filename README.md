# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file. Each of those files contain JavaScript problems you need to solve. If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

- The biggest difference between `.forEach` and `.map` is that `.map` returns an array with each element being the result of a callback function while `.forEach` returns `undefined`.

2. What is the difference between a function and a method?

- A method is a function attached to an object

3. What is closure?

- A closure is the combination of a function and the lexical environment within which that function was declared. Metaphorically speaking, a state in the USA forms a closure. The state inherits all the variables and methods contained within the USA, but has its own variables and methods that it can apply to the inherited properties from the USA. The state forms a closure containing its land and laws within the scope of the USA's land and laws.

4. Describe the four rules of the 'this' keyword.

- Global/Window

  - When `this` is referenced in a function body, it refers to the global scope (the window in browsers and the console in node). In `strict` mode, global `this` returns `undefined`.

- Implicit
  - Implicit binding only refers to objects with methods. In order to understand what `this` refers to when using implicit binding, look to the left of the `.` when an object method is invoked. For example, in this code --> `myGreatObject.myCoolMethod()` `myGreatObject` is our reference to `this` in the context of the method `myCoolMethod`.
- Explicit
  - Explicit binding is when our code, well, explicitly passes in a reference to the object we want to use as our reference to `this`. We use three Object methods to achieve this goal: `.call()`, `.apply()`, and `.bind()`.
  - `.call()` and `.apply()` both immediately invoke, and pass in our `this` reference, whatever method upon which we've called them. The only difference is that `.call()` takes a single argument in its callback, and `.apply()` takes an array of arguments inits callback.
  - When we `.bind()` `this`, we create a variable and assign it a function with a reference to `this` stored inside it (`this` is whatever object we pass into `.bind()`). `.bind()` does not immediately invoke our function, it assigns it to a variable so that we can use it later.
  - `myCoolFunction.call(myNewObject)`
  - `myCoolFunction.apply([obj1, obj2, obj3])`
  - `const myBoundFn = myCoolFunction.bind(myNewObject)`
- new
  - The `new` keyword allows us to use constructor functions to create object instances. You can think of `new` as the basis for creating an object blueprint. In es5, `new` is used in combination with `prototypes`, explicit binding, and `Object.create()` to achieve psuedo-classical inheritance in JavaScript. In es6+, `new` is used with the `class` syntax to apply syntactic sugar on top of prototypal classical inheritance in JavaScript.

5. Why do we need super() in an extended class?

- When we `extend` a class, we build a bridge from the class we're creating to the parent (extended) class. The `super()` function, then, is a train picking up the properties of the parent class and shuttling them to our new class.

## Project Set up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays

Test your knowledge of objects and arrays.

- [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started. Read the instructions carefully!

## Task 2: Functions

This challenge takes a look at callbacks and closures as well as scope.

- [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.

- [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.

- [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
