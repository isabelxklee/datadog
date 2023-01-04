# Intro to Hooks

Hooks are a recent addition to React that allow function components to access lifecycle methods. They are Javascript functions with special rules.

### Before hooks

Before React.js hooks, programmers had to choose between classes or functions when designing components. Class components allow you to access lifecycle methods and other features, whereas function components are pure JavaScript functions. However, the introduction of hooks has made class components obsolete because we can now do everything with just function components.

> Note: Even though the use case for class components has diminished, they are still supported by the React.js development team and there is no hard rule saying that we can't use class components anymore. Many organizations still use class components in their codebases.

### Why should we use hooks?

- Hooks allow us to access powerful features in function components, like lifecycle methods, state, refs, context, and more.
- Hooks are backwards-compatible, so they won't break your old React code.
- Hooks eliminate the need to write class components.

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

## A simple example

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

You can also store more than one state variable in a component. You can call `useState()` multiple times in a co mponentand define your new variable.

Example:

```jsx
const [darkMode, setDarkMode] = useState(false);
const [storeSomething, setStoreSomething] = useState(null);
```

**[Talk about what we just did and why we did it.]**

---

## Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Tip: What Do Square Brackets Mean?](https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)

---

## Self-directed activity

Now it’s time to practice our newfound knowledge! Create your own React function component and design a couple state variables.

1. Clone down this repo by running `git clone`.
2. Install the necessary packages in this default React app by changing directories to `react-app`. Then run `npm install`.
3. Run `npm start` to start your React server.
4. In the `react-app/src` folder, create a new file for your component.
5. Define your function component and import the `useState` hook at the top of the file.
6. Create a few state variables.
7. Write some DOM elements that update the values for the state variables.

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
