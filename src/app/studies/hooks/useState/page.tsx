"use client";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-xl">Count: {count}</div>
      <button
        className="mr-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}
