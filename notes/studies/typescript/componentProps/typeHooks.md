When using useState hook, typescript can see what is passing as the initial value and can infer what the type is gonna be so we don't have to type it ourself. We can also use <> to specify but it is unnecessary. Things is a bit different when having a object type. For object we do need to use <> to specify our own type. Often with object the initial value is going to be null and we need to fetch the data. To work with this we can specify it to be an object or null using `|`, for example <User | null>. Since the object is possibly null, we need to be careful when try to access its attribute.  We often use optional chaining `user?.name`



In react we can get a reference for elements by using useRef hook. For useRef the initial value is null and eventually it's going to be a HTML element once it's been properly attached. So we also need to specify what type it will be. React provide some helper type: &lt;Element&gt; for general element type, but we can be more specific by using &lt;HTMLElement&gt;, and even more specific as a &lt;HTMLButtonElement&gt;. For this one we don't need to do | null because useRef works a bit different with types.

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
      <div>Cuont: {count}</div>
      <div>Text: {text}</div>
      {user && (
        <div>
          <div>Name: {user?.name}</div>
          <div>Age: {user?.email}</div>
        </div>
      )}
    </div>
  );
}

```

