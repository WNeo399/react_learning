# UseContext

This example contains two parts: a main page and a search component which takes in a function `onChange` as its porp. Search component used `React.memo()` to prevent if from frequent rerendering. 



## React.memo()

**Import {memo} from 'react'** 

`React.memo()` is a higher-order component (HOC), it takes in a react component A as parameter and return it to a parent component B. `React.memo()` will prevent B from renderer while the props in B is not change.  impotent: In react functions even if they have the same code, they are different on every render by default. Therefore, when a component is take in a function as a prop, it will always rerender. `React.useCallback()` is specifically used for this purpose.   



## React.useCallback()

`React.useCallback()` warps a function and return a new function that is memorized. As the second parameter, similar to `React.useEffect()`, we can provide the dependency array to control when this function should be different.

Using `React.useCallback()` will memorize the function which also means it is going to freeze everything in the function at a certain point in time. It is very important to not to fall into this when using it because we are going to get some unexpected behaviors. With dependency array we can control it and only update the function when we want 





# UseContext 

This example contains two parts: a main page and a search component, which takes in a function `onChange` as its prop. The search component uses `React.memo()` to prevent frequent re-rendering. 

## React.memo() 

**Import {memo} from 'react'** 

``React.memo()` is a higher-order component (HOC). It takes a React component A as a parameter and returns it to a parent component B. `React.memo()` prevents B from re-rendering while the props in B do not change. It's important to note that in React, functions are considered different on every render by default, even if they have the same code. Therefore, when a component takes in a function as a prop, it will always re-render. `React.useCallback()` is specifically used for this purpose.

## React.useCallback()

```tsx
// Example usage of React.useCallback()
const memoizedCallback = useCallback(() => {
  // Your callback logic here
}, [/* dependencies */]);
```

``React.useCallback()` wraps a function and returns a new function that is memorized. Similar to `React.useEffect()`, we can provide a dependency array as the second parameter to control when this function should be different.

Using `React.useCallback()` memorizes the function, which means it freezes everything in the function at a certain point in time. It's crucial not to fall into unexpected behaviors when using it. With the dependency array, we can control and only update the function when needed.



```tsx
// Parent Component
"use client";
import { useState, useCallback } from "react";
import Search from "./Search";

const allUsers = ["john", "alex", "geogre", "simon", "james"];

export default function UseCallback() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((filterInput: string) => {
    console.log(users[0]);
    const filterResult = allUsers.filter((user) => {
      return user.includes(filterInput);
    });
    setUsers(filterResult);
  }, []);

  const shuffle = <T,>(arr: T[]): string[] => {
    let arrCopy = JSON.parse(JSON.stringify(arr));
    let res = arrCopy.sort(() => Math.random() - 0.5);
    return res;
  };

  return (
    <>
      <div className="flex items-center mb-2 gap-2">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch}></Search>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

```



```tsx
//Memorized Component
import { memo } from "react";

type searchProps = {
  onChange: (filterInput: string) => void;
};

function Search({ onChange }: searchProps) {
  console.log("xxx");
  return (
    <input
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder="Search User..."
    />
  );
}

export default memo(Search);

```

