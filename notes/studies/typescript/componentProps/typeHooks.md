# TypeScript with React Hooks

## useState

When using the `useState` hook in TypeScript, the initial value provided allows TypeScript to infer the type automatically. No need to explicitly specify the type, but you can use `<>` if desired. However, when dealing with object types, you must use `<>` to specify the type. Often, the initial value for objects is `null`, especially when data needs to be fetched. In such cases, you can specify the type as an object or `null` using `|`, for example, `<User | null>`. Due to the possibility of the object being `null`, be cautious when accessing its attributes. Optional chaining, like `user?.name`, is commonly used in such scenarios.

## useRef

In React, you can obtain a reference to elements using the `useRef` hook. The initial value is `null`, and it becomes an HTML element once properly attached. You also need to specify the type for `useRef`. React provides helper types like `<Element>` for a general element type. You can be more specific with `<HTMLElement>` or even more precise with `<HTMLButtonElement>`. Unlike `useState`, you don't need to use   `| null` with `useRef` types.

```tsx
"use client";
import { useState, useEffect } from "react";

export default function TypeHooks() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState("Hello World!");
  const [isPrimary, setIsPrimary] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    setUser(await res.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-6 font-bold;">TypeHooks</h1>
      <div>Count: {count}</div>
      <div>Text: {text}</div>
      {user && (
        <div>
          <div>Name: {user?.name}</div>
          <div>Email: {user?.email}</div>
        </div>
      )}
    </div>
  );
}