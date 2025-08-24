
## Types of Functions

JavaScript functions can be classified into several types based on their declaration and usage.

- **Function Declaration**: A standard way to define a function.
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
- **Function Expression**: A function can also be defined using an expression and can be anonymous.
    ```javascript
    const multiply = function(a, b) {
        return a * b;
    };
    ```
- **Arrow Function**: A shorter syntax for writing functions, introduced in ES6.
    ```javascript
    const subtract = (a, b) => a - b;
    ```
- **Anonymous Function**: Functions without a name, often used in function expressions.
    ```javascript
    setTimeout(function() {
        console.log("This is an anonymous function");
    }, 1000);
    ```
- **Immediately Invoked Function Expression (IIFE)**: A function that runs as soon as it is defined.
    ```javascript
    (function() {
        console.log("IIFE");
    })();
    ```
- **Constructor Function**: Used to create objects.
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person1 = new Person("Alice", 30);
    ```

## Callback and Callback Hell

A callback is a function passed into another function as an argument to be executed later.

Callback Hell, also known as the pyramid of doom, is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.

## Asynchronous JavaScript

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Data received"), 3000);
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.

```javascript
async function fetchData() {
    let data = await fetch('https://api.leaftaps.com/data');
    console.log(data);
}
`