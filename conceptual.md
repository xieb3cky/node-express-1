### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  1) Ajax 2) setTimeOut() 3)Async & Await

- What is a Promise?
  -one time gurantee of future value recieved when making HTTP requests. 
  -it has three states, pending, resolved or rejected. 

- What are the differences between an async function and a regular function?

  - regular funtion will take time to get response, while code runs. If following code requires response, it may not recieve it. 
  - async function always return promises
  - using async & await keyword to create an asynchronous function, you can wait for response before moving onto to next code depending on promise to be resolved or rejected.

- What is the difference between Node.js and Express.js?
  - Node.js
    - JS enviornment that runs server-side
    - used to build server-side JS 
  -Express.js
    -server framework
    -allows user to build we apps and APIs
    -manage and organize requests, routes, and views

- What is the error-first callback pattern?
  - node.js callbacks usually conform to an "error-first" pattern
    - callback function's first paramater should be listed as error, node supply an error object (if something bad happened), otherwise null as arguments.
    - then following other parameters if there's any. 

- What is middleware?
  -a code that runs in the middle of the request/respnose cycle
  -functions that can get access to the req and res objects and also call the next function
  -examples of middleware : express.json(), 404 & global error handler 
  -used to separate our code in more logical grouping and provide more robuts error handling 
    -logging useful information every request
    -adding 'current_user' for every request
    -authenication & authorization 

- What does the `next` function do?
  -third parameter in a callback function within router function
  -next function is a return value and must be called to move onto error handling portion. 
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
-Each request does not depend on each other, no need to wait for previous one to resolve. Use promise.all(), for all promises to be resolved. 