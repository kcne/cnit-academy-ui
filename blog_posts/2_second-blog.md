---
title: "Understanding Async/Await in JavaScript"
published: true
blogDescription: "Learn how to simplify asynchronous code with async/await."
createdBy: "john_doe"
createdAt: "2025-04-02T11:00:00Z"
updatedAt: "2025-04-02T11:00:00Z"
---

# Introduction

Asynchronous code is essential in JavaScript, especially for tasks like API calls and timers. `async/await` is a syntax sugar built on top of Promises, making your code cleaner and easier to understand.

# What is Async/Await?

## The `async` Keyword

Declaring a function as `async` means it will return a Promise:

```js
async function greet() {
  return "Hello!";
}
```

```js
async function getData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}
```
