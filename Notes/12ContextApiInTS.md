- For notes - <a href="https://github.com/yghugardare/React-learn/blob/main/ContextApi/ContextApi.md" target="_blank">Here</a>

## theme.ts
```ts
import { createContext, useContext } from "react"

interface ThemeContextType{
    themeMode:boolean,
    lightTheme:()=>void,
    darkTheme:()=>void
}

export const ThemeContext = createContext<ThemeContextType>({
    themeMode:false,
    lightTheme: ()=>{},
    darkTheme:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext)
}
```

## themeBtn.tsx
```tsx
import { ChangeEvent } from "react"
import useTheme from "../context/theme"


function ThemeBtn() {
    const {themeMode,lightTheme,darkTheme} = useTheme()
    function themeSwitch(e:ChangeEvent<HTMLInputElement>){
        let themeStatus:boolean = e.currentTarget.checked;
        if(themeStatus === true){
            darkTheme()
        }else{
            lightTheme()
        }
    }
  return (
    <div>
        <input 
        onChange={(e:ChangeEvent<HTMLInputElement>)=>themeSwitch(e)}
        type="checkbox" id="checkbox" checked={themeMode}
        />
        <label 
        htmlFor="checkbox" className="checkBoxLbl">
            <div className="emoji">🌜</div>
            <div className="emoji">🌞</div>
            <div className="ball"></div>

        </label>
    </div>
  )
}

export default ThemeBtn
```

### App.tsx

```
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { ThemeContextProvider } from "./context/theme";
import ThemeBtn from "./Components/ThemeBtn";
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
type ReducerAction = {
  type : ACTION_TYPE,
  payload?:string
}
function reducer(state: stateType, action: ReducerAction): stateType {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPE.CHANGE_INP:
      return { ...state, text: action.payload ?? ""};
    default:
      throw new Error();
  }
}
function App() {
  // const [count, setCount] = useState<number>(1);
  // const [input, setinput] = useState<string>("")
  const[themeMode,setThemeMode] = useState<boolean>(false)
  function lightTheme(){
    setThemeMode(false)
  }
  function darkTheme(){
    setThemeMode(true)
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncr = () => dispatch({ type: ACTION_TYPE.INCREMENT });
  const handleDecr = () => dispatch({ type: ACTION_TYPE.DECREMENT });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: ACTION_TYPE.CHANGE_INP, payload: e.target.value });
  };
  useEffect(()=>{
    const body:HTMLBodyElement|null = document.querySelector('body');
    if(body){
      if(themeMode === true){
        body.classList.add("dark")
      }else{
        body.classList.remove("dark")
      }
    }
  },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <ThemeBtn/>
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
      <h2></h2>
      {/* <Heading title="Hello" />
      <Section subTittle="TS in React">we will use ts in react vite!</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["coffee", "burger", "choclate"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List> */}
    </ThemeContextProvider>
  );
}

export default App;

```

## theeButton style
```css
#checkbox{
  opacity: 0;
  /* z-index: 1;
  color:blue; */
  position: absolute;
}
.checkBoxLbl{
  position: relative;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 50px;
  height: 26px;
  padding: 5px;
  transform: scale(1.5);
  cursor: pointer;

}
.emoji{
  font-size: small;
}
.ball{
  position: absolute;
  background-color: white;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  top:2px;
  left: 2px;
  transition:transform 0.25s linear;
}
#checkbox:checked + .checkBoxLbl .ball {
  transform: translateX(24px);
}
```