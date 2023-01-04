# Intro to Hooks

Hooks are a recent addition to React that allow function components to access lifecycle methods. They are Javascript functions with special rules.

### Before hooks

- Before React.js hooks, programmers had to design their components as either class components or function components. Function components are pure JavaScript functions, whereas class components allow you to access lifecycle methods and require you to define a `render()` method.
- The introduction of hooks makes class components obsolete (but they are still supported by the React team!).

### Why should we use hooks?

- Adds lifecycle methods, state, and other React features to function components
- Hooks are backwards-compatible
- Eliminates the need to write class components

---

## The state hook

The first hook that we’re going to look at is the state hook. The state hook allows function components to store and update local state. `useState()` returns a pair: the current state value and its function to update it.

Let’s take a look at the state hook’s syntax.

```jsx
const [stateVariable, updatingFunction] = useState(initialValue);
```

As you can see, we’re calling `useState()` and defining our state variable and its updating function. We’re also defining an initial state value with `initialValue`. The initial value can be…

Breaking down the State hook syntax

- The State hook uses array destructuring, which allows us to name our own state variables
- The State hook is a function that returns a pair, which is an array with 2 items
- Otherwise, we'd be dealing with `[0]` and `[1]` to refer to the state's current value and the function to update it, and that might get confusing
- Source: [https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean](https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)

Now, let’s take a look at an example of how we could use the state hook. Let’s say we want to build a toggle that allows us to switch between dark mode and light mode on a website. We could store this value in a state variable and create an HTML element that allows us to update its value.

1. First, we need to import the state hook in order to use it.

```jsx
import React, { useState } from "react";
```

2. Now, we’re going to call `useState()` inside of a function component and set our state variable to `darkMode` and its updating function to `setDarkMode`. The initial state for `darkMode` is going to be `false`. This just means that the default setting is going to have dark mode turned off.

> **Note:** When writing an initial value, think about expected data type for the state value

- If it's going to be an array of objects, initially set it to be an empty array
- If it's an object, set it to `null`
- If it's going to be a string, set it to an empty string

```jsx
const [darkMode, setDarkMode] = useState(false);
```

> **Note:** This new state variable is local to our component – if we wanted to use it in other components, we could pass it down as a prop.

3. Let’s create an HTML element that toggles the dark mode value. We’re going to create a `button` element in the return function of our component. Then we’re going to use the `button`'s `onClick()` event handler and call the state variable’s updating function, `setDarkMode()`. The argument that we’re passing to `setDarkMode()` is going to be the opposite value of `darkMode`. Therefore, clicking on the “Toggle Dark Mode” button will change `darkMode` from `false` to `true` and vice versa.

```jsx
return {
	<>
		<button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
	</>
}
```

> **Note:** You can add `console.log(darkMode)` to see `darkMode`’s value getting updated.

You can also store more than one state variable in a component. For example, if you wanted to track… you could call `useState()` and define your new variable.

```jsx
const [darkMode, setDarkMode] = useState(false);
const [trackSomething, setTrackSomething] = useState(null);
```

**[Show entire file]**

**[Talk about what we just did and why we did it.]**

---

## Self-directed activity

Now it’s time to practice! Use this [default React sandbox](https://codesandbox.io/s/trusting-flower-b897nv) to …

1. In the `src` folder, create a new file called …
2. Define your function component and import the `useState` hook at the top of the file.
3. Create a new state variable.
4. Create an HTML element that updates the state variable’s value.

---

Now let’s take a look at a slightly more complex example. What if we wanted the state variable to hold something … other than a boolean value?

Our state variable is going to store a list of good dogs. This list shouldn’t have any duplicate entries. Our component is going to return a list of dogs and each dog is going to have a button that allows us to add that dog to the list.

1. Let’s import `useState()` and define a new state variable called `goodDogs`. The initial state for `goodDogs` is going to be an empty array `[]`.

```jsx
const [goodDogs, setGoodDogs] = useState([]);
```

2. Define the HTML elements in the return statement.

> **Note:** for now, we’re just going to hardcode our list of dogs. A more realistic use case might show us fetching the list of good dogs from an API and populating the HTML elements from that data.

```jsx
return {
	<>
		<p>Felix</p>
		<button>Add</button>

		<p>Odie</p>
		<button>Add</button>

		<p>Bingo</p>
		<button>Add</button>
	</>
}
```

3. Every time the “Add” button gets clicked, the corresponding dog is going to get pushed to the `goodDogs` array. Instead of just calling `goodDogs`'s updating function, `setGoodDogs()` in the `onClick()` event handler, let’s define a helper function. We’re going to call this `handleClick()` and the argument that we’re passing in is going to be called `dog`.

```jsx
const handleClick = (dog) => {
  return;
};
```

4. Inside `handleClick()`, we’re going to call `setGoodDogs()` and push `dog` into the `goodDogs` array.

> **Note:** Since we’re using the previous value of `goodDogs` in this function, we’re going to call `setGoodDogs()` as a callback. We’re also using the spread operator `(…)` to …

```jsx
const handleClick = (dog) => {
  return setGoodDogs(() => [...goodDogs, dog]);
};
```

5. Now, since we don’t want any duplicate entries in the `goodDogs` array, let’s write some logic that compares the current `goodDogs` array against the `dog` variable that we’re passing in. We’re going to check if `dog` already exists in `goodDogs`. If it doesn’t, then we’re going to add it to the `goodDogs` array. If it does exist, then we’re not going to do anything.

```jsx
const handleClick = (dog) => {
  if (!goodDogs.includes(dog)) {
    return setGoodDogs(() => [...goodDogs, dog]);
  }
};
```

> **Note:** If you wanted confirmation that `dog` already exists in the array, you could add an `else` statement print a message to the console, like “already exists!”.

6. Back in our return statement, let’s add an `onClick()` event handler to each of our `button` elements. Since our dog data is hardcoded, we’re going to call `handleClick()` and just pass in each dog’s name as a string.

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

Now, when we click on each dog’s name, …

---

## Self-directed activity

Now it’s time to practice! Use this [default React sandbox](https://codesandbox.io/s/trusting-flower-b897nv) to …

1. In the `src` folder, create a new file called …
2. Define your function component and import the `useState` hook at the top of the file.
3. Create a new state variable.
4. Create an HTML element that updates the state variable’s value.
