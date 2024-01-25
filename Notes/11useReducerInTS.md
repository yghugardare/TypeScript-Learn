# useReducer in React
- The purpose of the `useReducer` hook in React is to manage complex state in a more organized and scalable way. While the `useState` hook is suitable for managing simple state, `useReducer` is more suitable for managing state with complex logic and multiple related values.

- The `useReducer` hook follows the concept of the reducer pattern, commonly used in JavaScript and other programming languages. It takes in a reducer function and an initial state, and returns the current state and a dispatch function. The reducer function receives the current state and an action as arguments, and returns the new state based on the action.

## `useReducer(reducer, initialArg, init?)`

```tsx
const [state, dispatch] = useReducer(reducer, initalState);
```

### Parameters - 
- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
- `optional init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`

### `dispatch(actionObject)`
- The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function
```tsx
const [state, dispatch] = useReducer(reducer, { age: 42 });
function handleClick() {
  dispatch({ type: 'incremented_age' });
  // ...
```
- `action`: The action performed by the user. It can be a value of any type. By convention, an action is usually an object with a `type` property identifying it and, optionally, other properties with additional information, which is `payload`.

```tsx
import { ChangeEvent, useReducer } from "react";
type stateType = {
  count: number;
  text: string;
};
const initialState: stateType = {
  count: 1,
  text: "",
};
const enum ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  CHANGE_INP,
}
type ReducerAction =
  | { type: ACTION_TYPE.INCREMENT }
  | { type: ACTION_TYPE.DECREMENT }
  | { type: ACTION_TYPE.CHANGE_INP; payload: string };
function reducer(state: stateType, action: ReducerAction): stateType {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPE.CHANGE_INP:
      return { ...state, text: action.payload };
    default:
      throw new Error();
  }
}
function App() {
  // const [count, setCount] = useState<number>(1);
  // const [input, setinput] = useState<string>("")

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncr = () => dispatch({ type: ACTION_TYPE.INCREMENT });
  const handleDecr = () => dispatch({ type: ACTION_TYPE.DECREMENT });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: ACTION_TYPE.CHANGE_INP, payload: e.target.value });
  };
  return (
    <>
      <h1>
        {state.count} {state.text}
      </h1>
      <button onClick={handleIncr}>+</button>
      <button onClick={handleDecr}>-</button>
      <br />
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        className="inp"
        type="text"
      />
    </>
  );
}

export default App;

```