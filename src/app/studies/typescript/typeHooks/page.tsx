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
