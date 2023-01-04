# Intro to Hooks

Hooks are a recent addition that superpower function components and allow them to access lifecycle methods and other functionalities.

### Before hooks

Before React.js hooks, programmers had to choose between classes or functions when designing components. Class components allow you to access lifecycle methods and other features, whereas function components are pure JavaScript functions. However, the introduction of hooks has made class components obsolete because we can now do everything with just function components.

> Note: Even though the use case for class components has diminished, they are still supported by the React.js development team and there is no hard rule saying that we can't use class components anymore. Many organizations still use class components in their codebases.

### Why should we use hooks?

- Hooks allow us to access powerful features in function components, like lifecycle methods, state, refs, context, and more.
- Hooks are backwards-compatible, so they won't break your old React code.
- Hooks eliminate the need to write class components.
- Hooks allow us to reuse and extract stateful logic from a component without changing component hierarchy.

---

## The state hook

Let's talk about the state hook. The state hook allows function components to store and update local state. This hook returns a pair: the current state value and its function to update it.

```jsx
const [stateVariable, updatingFunction] = useState(initialValue);
```

Let’s break down this syntax.

- We’re calling `useState()` and defining our state variable and its updating function.
- We’re also defining an initial value that our state variable will hold. This initial value is quite flexible and can be any data type; it doesn't necessarily have to be an object.
- The state hook uses array destructuring, which allows us to name our own state variables. This is why `stateVariable` and `updatingFunction` are styled as `[stateVariable, updatingFunction]`. Otherwise, we'd be dealing with `[0]` and `[1]` to refer to the state's current value and the function to update it, and that might get confusing.

---

## Dark Mode Example

Now, let’s take a look at an example of how we could use the state hook. Let’s say we want to build a toggle that allows us to switch between dark mode and light mode on a website. We could store this value in a state variable and create a DOM element that allows us to update its value.

1. First, we need to import the state hook in order to use it.

```jsx
import React, { useState } from "react";
```

2. Now, let's define our function component and call `useState()` inside of it. Define a state variable called `darkMode` and `setDarkMode` as its updating function. The initial state for `darkMode` is going to be `false`. This just means that dark mode is going to be turned off as the default setting.

> **Note:** When setting the initial value, consider what the expected data type will be for the state. For example, if you're expecting the state to hold a list of objects, you can set the initial value to be an empty array. Or if you're expecting an object, you can set it to `null`, etc.

```jsx
import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return <></>;
};

export default DarkMode;
```

> **Note:** This new state variable is local to our component – if we wanted to use it in other components, we could pass it down as a prop.

3. Now that we have our state variable set up, let’s create a DOM element that toggles the dark mode value. Create a `button` element in the return statement of the component. Use the `button`'s `onClick()` event handler to call the state variable’s updating function, `setDarkMode()`. The value passed to `setDarkMode()` is going to be the opposite of `darkMode`'s current. Therefore, clicking on the “Toggle Dark Mode” button will change `darkMode` from `false` to `true`, and vice versa.

```jsx
import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </>
  );
};

export default DarkMode;
```

> **Note:** You can add `console.log(darkMode)` to see `darkMode`’s value getting updated whenever you click the button.

You can also store more than one state variable in a component. You can call `useState()` multiple times in a component and define your new variable.

Here's an example:

```jsx
const [darkMode, setDarkMode] = useState(false);
const [storeSomething, setStoreSomething] = useState(null);
const [counter, setCounter] = useState(0);
```

---

## ⭐️ Self-directed activity ⭐️

Now it’s time to practice our newfound knowledge! Create your own React function component and design a couple state variables.

1. Clone down this repo by running `git clone`.
2. Install the necessary packages in this default React app by changing directories to `react-app`. Then run `npm install`.
3. Run `npm start` to start your React server.
4. In the `react-app/src` folder, create a new file for your component.
5. Define your function component and import the `useState` hook at the top of the file.
6. Create a few state variables.
7. Write some DOM elements that update the values for the state variables.

---

## Good Dogs Example

Let's look at an example where updating the state variable is slightly more complex.

We're going to build a feature where we have a list of good dogs. We can add dogs to this list by clicking on a button. The list shouldn’t have any duplicates.

1. Create a new function component and import the state hook at the top of the file. Define a new state variable called `goodDogs`. The initial state for `goodDogs` is going to be an empty array `[]`.

```jsx
import React, { useState } from "react";

const GoodDogs = () => {
  const [goodDogs, setGoodDogs] = useState([]);

  return <></>;
};

export default GoodDogs;
```

2. Create some DOM elements in the component's return statement. For now, we’re going to hardcode our list of dogs. However, a more realistic use case might have us fetching this data from an API.

```jsx
import React, { useState } from "react";

const GoodDogs = () => {
  const [goodDogs, setGoodDogs] = useState([]);

  return (
    <>
      <p>Felix</p>
      <button>Add</button>

      <p>Odie</p>
      <button>Add</button>

      <p>Bingo</p>
      <button>Add</button>
    </>
  );
};

export default GoodDogs;
```

3. Every time the “Add” button gets clicked for a dog, that corresponding dog should get added to the `goodDogs` array. In our last example, we simply called the state variable's updating function inside the `onClick()` event handler, but this time we're going to define a separate helper function. We’re going to call this function `handleClick()` and the argument that we’re passing in is going to be called `dog`.

```jsx
const handleClick = (dog) => {
  return;
};
```

4. Inside `handleClick()`, call `setGoodDogs()` and push `dog` into the `goodDogs` array.

> **Note:** Since we’re using the previous value of `goodDogs` in this function, we’re going to write `setGoodDogs()` as a callback.

```jsx
const handleClick = (dog) => {
  return setGoodDogs(() => [...goodDogs, dog]);
};
```

5. Now, since we don’t want any duplicate entries in the `goodDogs` array, let’s refactor our code and write some logic that compares the current `goodDogs` array to the `dog` variable. We’re going to check if `dog` already exists in `goodDogs`. If it doesn’t exist, then we’re going to add it to the `goodDogs` array. Otherwise, we’re not going to do anything.

```jsx
const handleClick = (dog) => {
  if (!goodDogs.includes(dog)) {
    return setGoodDogs(() => [...goodDogs, dog]);
  }
};
```

> **Note:** If you wanted to print a message that `dog` already exists in the array, you could add an `else` statement and write a `console.log()` statement, like “this dog already exists!”.

6. In the component's return statement, add `onClick()` event handlers to each `button`. Since the dog data is hardcoded, call `handleClick()` and pass in each dog’s name as a string.

```jsx
return (
  <>
    <p>Felix</p>
    <button onClick={() => handleClick("Felix")}>Add</button>

    <p>Odie</p>
    <button onClick={() => handleClick("Odie")}>Add</button>

    <p>Bingo</p>
    <button onClick={() => handleClick("Bingo")}>Add</button>
  </>
);
```

7. Now, when we click on the "Add" button under each dog, it should get added to the `goodDogs` list.

---

## ⭐️ Self-directed activity ⭐️

Let's keep going and expand this feature. Write some logic that removes a dog from the `goodDogs` list.

Here are 2 options for implementing this feature:

1. Create a "Remove" button that removes a dog from the list.
2. Clicking on the "Add" button again removes the dog.

---

## Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Tip: What Do Square Brackets Mean?](https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)
