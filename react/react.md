## 1 software development
- MVC (Model-View-Controller)
- https://developer.mozilla.org/en-US/docs/Glossary/MVC
- Model: The model represents the application's data and business logic.
- View: The view renders the model into a user interface.
- Controller: The controller receives user input or commands from the view and then manipulates the model data.

## 2 MVVM (Model-View-ViewModel)
- Model=>View / View=>Model
- data driven UI update
- Model: Contains the application's data and business logic.
- View: Renders the model into a user interface.
- ViewModel: a view directly binds to properties on the view model to send and receive updates.
- The ViewModel provides data-binding properties and commands that are used by the view to interact with the model.
- The "ViewModel" is not a built-in concept in React, but it can be implemented using a combination of state management libraries like Redux.

## 3 two main representatives:
- Angular: 30-35% (developed by Google, typescript)
- React: 60% (developed by Facebook, javascript), example: Indeed, chatGPT, walmart, airbnb, facebook, twister
- Vue

## 4 React
- React is a JavaScript library to create UIs using reusable components.
- use virtual DOM - it will only update the changed part of the DOM not the whole DOM.
- To keep track of the change made to components. 
- It is a lightweight representation of the actual DOM that allows React to update only the parts of the UI that have changes
- Resulting in faster rendering  and better performance.
- React has both virtual DOM and real DOM.

## Core features
5.1 JSX (JavaScript XML)
- a combination of JavaScript and html syntax
- use babel to convert JSX to JavaScript
- webpack is used for bundling and optimizing your code for production.
- when a react application is ready to be deployed, it is bundled into a single file using webpack.

5.2 Components(class-based and functional)
- reusable and modular pieces of codes

## 6 introduction of hooks
-react version 16.8(2019-2-6)
- function component become popular

## 7 react app
- npx create-react-app
- to start: npm start / npm run start
- to end: ctrl + c
- to build: npm run build

//homework:
1. update portfolio with one App;
