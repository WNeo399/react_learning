"use client";

type SelectedItem = {
  id: number;
  isSelected: boolean;
};

import { useState, useEffect, useMemo } from "react";
const initialItems = new Array(29999999).fill(0).map((_, i) => {
  return {
    id: 1,
    isSelected: i == 29999998,
  };
});
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const temp = useMemo(() => {
    items.find((item) => {
      item.isSelected;
    });
  }, [items]);
  let selectedItem: SelectedItem = { id: 0, isSelected: false };
  if (temp != undefined) {
    selectedItem = temp;
  }
  return (
    <>
      <div className="text-xl">Count: {count}</div>
      <div className="text-xl">
        IsSelected: {selectedItem ? selectedItem.id : ""}
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}
