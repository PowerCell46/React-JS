# Component Lifecycle
- A component has "lifecycle methods" that can be
overridden to run code at times in the process

### A component has 3 lifecycle phases
- Mounting - where the component and all its children are
mounted (created and inserted to the DOM)

- Updating - component is re-rendered because changes are
made to its props or state

- Unmounting - - occurs when a component instance is
unmounted (removed from the DOM)


# Hooks

- UseState
- UseEffect

- UseRef
```javascript
    const inputRef = useRef(); // 1. create a reference

    function focusFunction() {
        inputRef.current.focus(); // 3. use the html element reference
    }

    <input ref={inputRef} value="Input Field"/> // 2. connect the html element to the reference
    <button onClick={focusFunction}>Focus On Input</button>
``` 

- UseParams
```javascript
    <Route path="/details/:userId" component={Catalog}/>
    ...

    const {userId} = useParams();
```

- UseNavigate
```javascript
    const navigate = useNavigate();
    ...

    navigate("/dashboard");
```

- UseContext
```javascript
    const ThemeContext = createContext();
    export const ThemeContextProvider = ({children}) => {
        const [themes, setThemes] = useState({});

        return (
            <ThemeContext.Provider value={themes, setThemes}>
                {children}
            </ThemeContext.Provider>
        );
    }
    ...

    const {themes, setThemes} = useContext(ThemeContext);
```

- UseReducer - alternative to useState => (state, action)
```javascript
    const REDUCER_ACTIONS = {
        increment: "increment",
        descrement: "decrement"
    };

    function reducer(state, action) {
        switch(action.type) {
            case REDUCER_ACTIONS.increment: 
                return {count: state.count + 1};
            case REDUCER_ACTIONS.decrement:
                return {count: state.count - 1};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0});

    <button onClick={() => dispatch({type: REDUCER_ACTIONS.decrement})}>Decrement</button>
    <p>{state}</p>
    <button onClick={() => dispatch({type: REDUCER_ACTIONS.increment})}>Increment</button>
```

- *(useMemo, UseCallback, useImperativeHandle, useLayoutEffect, useDebugValue)*

- Custom Hooks

-> UseToggle 
```javascript
    export default function useToggle(defaultValue) {
        const [value, setValue] = useState(defaultValue);

        function toggleValue(value) {
            setValue(currentValue => 
                typeof value === 'boolean' ?
                    value
                : 
                    !currentValue
                );
        }

        return [value, toggleValue];
    }
```

-> useArray
```javascript
    export default function useArray(defaultValue) {
        const [array, setArray] = useState(defaultValue);

        function push(element) {
            setArray(prevVal => [...prevVal, element]);
        }

        function filter(callback) {
            setArray(prevVal => prevVal.filter(callback));
        }

        function update(index, newElement) {
            setArray(prevVal => [
                ...prevVal.slice(0, index),
                newElement,
                ...prevVal.slice(index, prevVal.length - 1)
            ]);
        }

        function remove(index) {
            setArray(prevVal => [
                ...prevVal.clice(0, index),
                ...prevVal.slice(index + 1, prevVal.length - 1)
            ]);
        }

        function clear() {
            setArray([]);
        }

        return {array, set: setArray, push, filter, update, remove, clear};
    }
```

-> useDebounce
```javascript
    export default function useDebounce(callback, delay, dependencies) {
        const {reset, clear} = useTimeout(callback, delay);
        useEffect(rest, [...dependencies, reset]);
        useEffect(clear, []);
        ...

        const [count, setCount] = useState(0);
        useDebounce(() => alert(count), 1000, [count]);
    }
```