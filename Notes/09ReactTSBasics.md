

```tsx
import { ReactNode } from "react";
type CounterPorps={
    setCount:React.Dispatch<React.SetStateAction<number>>,
    children : ReactNode,
}
function Counter({children,setCount}:CounterPorps) {
  
  return (
    <>
      <h2>{children}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}

export default Counter;

```

- while using generics use `<T,>` `","` or `<T extends {}>`
```tsx
import { ReactNode } from "react"

interface ListProps<T>{
    items:T[],
    render:(item:T) => ReactNode,

}
function List<T,>({items,render}:ListProps<T>) {
  return (
    <ul>
        {
            items.map((item,i)=>(
                <li key={i}>
                    {render(item)}
                </li>
            ))
        }
    </ul>
  )
}

export default List
```

```tsx
import { useState } from "react";
import Section from "./Components/Section";
import Heading from "./Components/Heading";
import Counter from "./Components/Counter";
import List from "./Components/List";
function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="Hello" />
      <Section subTittle="TS in React">we will use ts in react vite!</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["coffee", "burger", "choclate"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
    </>
  );
}

export default App;

```