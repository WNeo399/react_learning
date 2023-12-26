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
